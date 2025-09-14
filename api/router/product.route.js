import express from "express";
import { Productt } from "../controller/product.control.js";

const route = express.Router();

route.post("/product", Productt);

export default route;
