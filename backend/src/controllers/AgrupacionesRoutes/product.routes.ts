import { Router } from "express";
import { createProduct, getProducts, getProductById, updateProduct, deleteProduct } from "../product.controller";

const router = Router();

// Rutas
router.get("/", getProducts);
router.post("/", createProduct);
router.get("/:id", getProductById);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;