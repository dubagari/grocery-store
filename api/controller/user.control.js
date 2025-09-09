import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

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
    res.status(201).json({ message: "user created successfully" });
  } catch (error) {
    next(errorHandler(400, "something not okay"));
  }
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const validuser = await User.findOne({ email });
    if (!validuser) return next(errorHandler(401, "user not found"));
    const validpassword = bcrypt.compareSync(password, validuser.password);
    if (!validpassword) return next(errorHandler(402, "wrong credential"));

    const token = jwt.sign({ id: validuser._id }, process.env.secret_jwt);
    const { password: hashed, ...rest } = validuser._doc;

    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};
