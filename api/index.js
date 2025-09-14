import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookiePerser from "cookie-parser";
import userroute from "./router/auth.route.js";
import productDetails from "./router/product.route.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cookiePerser());

mongoose
  .connect(process.env.MONGODB)
  .then(() => console.log(" DB is Connected successfully"))
  .catch((err) => console.error("Connection error:", err));

app.use("/api/auth", userroute);
app.use("/api/admin", productDetails);

app.use((err, req, res, next) => {
  const statuscode = err.statuscode || 500;
  const message = err.message || "Enternal server error";

  return res.status(statuscode).json({
    success: false,
    statuscode,
    message,
  });
});

app.listen(3000, () => {
  console.log("🚀 Server is running on port 3000");
});
