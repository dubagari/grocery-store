import jwt from "jsonwebtoken";
import { errorHandler } from "./error";

export const verify = (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) return next(errorHandler(401, "unauthorize"));

  jwt.verify(process.env.secret_jwt, (err, user) => {
    if (err) next(errorHandler(401, "Forbiding"));
    req.user = user;
    next();
  });
};
