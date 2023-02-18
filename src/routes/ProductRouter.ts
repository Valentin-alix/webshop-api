import { Router } from 'express'
import { CustomerService } from '../services/CustomerService'
import { ProductService } from '../services/ProductService'

export const productRouter = Router()

productRouter.get('', (req, res) => {
  ProductService.getProducts().then(products => res.send(products))
})

productRouter.get('/:id', (req, res) => {
  ProductService.getProduct(parseInt(req.params.id)).then(product => res.send(product))
})
