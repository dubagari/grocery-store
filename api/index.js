import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userroute from "./router/auth.route.js";

dotenv.config();

const app = express();
app.use(express.json());

mongoose
  .connect(process.env.MONGODB)
  .then(() => console.log(" DB is Connected successfully"))
  .catch((err) => console.error("Connection error:", err));

app.use("/api/auth", userroute);

app.listen(3000, () => {
  console.log("🚀 Server is running on port 3000");
});
