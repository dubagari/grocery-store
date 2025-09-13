import express from "express";
import { login, Logout, signup } from "../controller/user.control.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/logout", Logout);

export default router;
