import User from "../models/UserModel.js";
import bcrypt from "bcrypt";
import { registerValidate,loginValidator } from "../validations/auth.js";
import jwt from 'jsonwebtoken';

class AuthController {

  async register(req, res) {
    try {
      //B1: validate: email, password, username
      const { email, username, image, password } = req.body;
     
      const { error } = registerValidate.validate(req.body);
      if (error) {
        const errors = error.details.map((err) => err.message);
        console.log(errors);
        return res.status(400).json({
          message: errors,
          
        });
      }
      // b2: validate email exitsing
      const emailExist = await User.findOne({ email });
      if (emailExist) {
        return res.status(400).json({ message: "Email da duoc dang ky" });
      }
      // b3 ma hoa password
      const hashPassword = await bcrypt.hash(password, 10);
      // update db
      const user = await User.create({
        email,
        username,
        image,
        password: hashPassword,
      });
      
      // b4 remove password in res
      res.status(200).json({
        message: "Create Done",
        data: { ...user.toObject(), password: undefined },
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }

  // POST: auth/login
  // POST: auth/login: email, password
  async login(req, res) {
    const { email, password } = req.body;
    //B1: validate: email, password
    const { error } = loginValidator.validate(req.body);
    if (error) {
      const errors = error.details.map((err) => err.message);
      return res.status(400).json({
        message: errors,
      });
    }
    // check email xem co trong db
    const checkUser = await User.findOne({ email });
    if (!checkUser) {
      return res.status(404).json({
        message: "Tai khoan ko hop he",
      });
    }
    // so sanh password: bcryptjs
    const checkPassword = await bcrypt.compare(password, checkUser.password);
    if (!checkPassword) {
      return res.status(404).json({
        message: "Tai khoan ko hop he",
      });
    }
    // ma hoa token
    const token = jwt.sign({ id: checkUser._id }, "ma-khoa-bi-mat", {
      expiresIn: "1h",
    }); 
    // res
    res.status(200).json({
      message: "Dang nhap thanh cong",
      user: { ...checkUser.toObject(), password: undefined },
      token,
    });
}
async getAll(req,res){
  try {
      const users = await User.find();
      res.status(200).json({
        message: "get Done",
        data: users,
      });
     } catch (error) {
      res.status(400).json({message: error})
     }
}
}

export default AuthController;