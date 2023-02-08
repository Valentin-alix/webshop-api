import { Router } from "express";
import { CustomerService } from "../services/CustomerService";

export const productRouter = Router();

productRouter.get('', (req, res) => {
    res.send(CustomerService.getCustomers())
})

productRouter.get('/:id', (req, res) => {
    res.send("product id")
})