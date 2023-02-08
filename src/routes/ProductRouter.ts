import { Router } from "express";
import { CustomerService } from "../services/CustomerService";
import { ProductService } from "../services/ProductService";

export const productRouter = Router();

productRouter.get('', (req, res) => {
    res.send(ProductService.getProducts())
})

productRouter.get('/:id', (req, res) => {
    res.send(ProductService.getProductById(parseInt(req.params.id)))
})