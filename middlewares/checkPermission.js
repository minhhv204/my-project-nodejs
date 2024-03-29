import jwt from "jsonwebtoken";
const checkPermisson = (req,res,next) =>{
    try {
       const token =  req.headers.authorization?.split(' ')[1];
       console.log(token);
       if (!token) {
        return res.status(401).json({
            message: "Not authenization"
        })
       }
       const data = jwt.verify(token,process.env.SECRECT_KEY);
       if (!data) {
        return res.status(401).json({
            message: "Not authenization"
        })
       }
       next();
    } catch (error) {
        res.status(400).json(console.log("lõi"),{
           
            message: error.message
        })
    }
}
export {checkPermisson}