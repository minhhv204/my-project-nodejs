import mongoose from "mongoose";
const Schema = mongoose.Schema;
// username, email: unique, password, role, avatar
const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    role: {
      type: String,
      default: "member",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const User = mongoose.model("user", UserSchema);

export default User;