import express from "express";
import {
  addProduct,
  getAllProduct,
  deleteProduct,
  getSingleProduct,
  mySellingProduct,
} from "../controllers/productControllers.js";
import { isLoggedIn, isSeller } from "../middlewares/userAuth.js";

const router = express.Router();

router.route("/add").post(isLoggedIn, isSeller, addProduct);
router.route("/remove").post(isLoggedIn, isSeller, deleteProduct);
router.route("/my-products").get(isLoggedIn, isSeller, mySellingProduct);

// always last
router.route("/:id").get(isLoggedIn, getSingleProduct);
router.route("/").get(isLoggedIn, getAllProduct);

export default router;
