import { Router } from 'express'

export const router = Router();

router.get('/customers/', (req, res) => {
    res.send("customers")
})

router.get('/customers/:id', (req, res) => {
    res.send("customer id")
})

router.get('products/', (req, res) => {
    res.send("products")
})

router.get('products/:id', (req, res) => {
    res.send("product id")
})