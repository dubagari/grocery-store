import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
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
    res.status(500).json(error.message);
  }
};
