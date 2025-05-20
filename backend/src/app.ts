import express from "express";
import cors from "cors";
import productController from "./controllers/AgrupacionesRoutes/product.routes";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/products", productController);

export default app;