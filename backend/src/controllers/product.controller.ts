import { Request, Response } from "express";
import { AppDataSource } from "../config/database";
import { Product } from "../entities/Product";

const productRepository = AppDataSource.getRepository(Product);

export const createProduct = async (req: Request, res: Response) => {
  try {
    const product = productRepository.create(req.body);
    const result = await productRepository.save(product);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: "Error creating product", error });
  }
};

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await productRepository.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products", error });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const product = await productRepository.findOneBy({ id: parseInt(req.params.id) });
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    productRepository.merge(product, req.body);
    const result = await productRepository.save(product);
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: "Error updating product", error });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const result = await productRepository.delete(req.params.id);
    if (result.affected === 0) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: "Error deleting product", error });
  }
};