import express from "express";
import { signup } from "../controller/user.control.js";

const router = express.Router();

router.post("/signup", signup);

export default router;
