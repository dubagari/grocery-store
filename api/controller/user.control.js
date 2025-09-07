import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  const { firstname, surname, email, password } = req.body;
  const hashpassword = bcrypt.hashSync(password, 10);
  const newuser = new User({
    firstname,
    surname,
    email,
    password: hashpassword,
  });

  try {
    await newuser.save();
    res.status(201).json("new user is created successfully");
  } catch (error) {
    next(errorHandler(400, "something not okay"));
  }
};
