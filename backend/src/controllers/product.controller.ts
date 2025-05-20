import { Request, Response, RequestHandler } from "express";
import { AppDataSource } from "../config/database";
import { Product } from "../entities/Product";


const productRepository = AppDataSource.getRepository(Product);

// Crear un producto
export const createProduct = async (req: Request, res: Response) => {
  try {
    const product = productRepository.create(req.body);
    const result = await productRepository.save(product);
    res.status(201).json(result); // Enviar respuesta directamente
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ message: "Error creating product" });
  }
};

// Obtener todos los productos
export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await productRepository.find();
    res.json(products); // Enviar respuesta directamente
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Error fetching products" });
  }
};

// Obtener un producto por ID
export const getProductById: RequestHandler = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10); // Convertir a número
    if (isNaN(id)) {
      res.status(400).json({ message: "Invalid product ID" });
      return; // Asegúrate de terminar la ejecución
    }

    const product = await productRepository.findOneBy({ id });
    if (!product) {
      res.status(404).json({ message: "Product not found" });
      return; // Asegúrate de terminar la ejecución
    }

    res.json(product); // Enviar respuesta
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ message: "Error fetching product" });
  }
};

// Actualizar un producto
export const updateProduct: RequestHandler = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10); // Convertir a número
    if (isNaN(id)) {
      res.status(400).json({ message: "Invalid product ID" });
      return; // Asegúrate de terminar la ejecución
    }

    const product = await productRepository.findOneBy({ id });
    if (!product) {
      res.status(404).json({ message: "Product not found" });
      return; // Asegúrate de terminar la ejecución
    }

    productRepository.merge(product, req.body);
    const result = await productRepository.save(product);
    res.json(result); // Enviar respuesta
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ message: "Error updating product" });
  }
};

// Eliminar un producto
export const deleteProduct: RequestHandler = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10); // Convertir a número
    if (isNaN(id)) {
      res.status(400).json({ message: "Invalid product ID" });
      return; // Asegúrate de terminar la ejecución
    }

    const result = await productRepository.delete({ id });
    if (result.affected === 0) {
      res.status(404).json({ message: "Product not found" });
      return; // Asegúrate de terminar la ejecución
    }

    res.status(204).send(); // Enviar respuesta
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ message: "Error deleting product" });
  }
};