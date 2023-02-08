import { Router } from 'express'
import { CustomerService } from '../services/CustomerService';

export const customerRouter = Router();

customerRouter.get('', (req, res) => {
    CustomerService.getCustomers().then(customers => res.send(customers))
})

customerRouter.get('/:id', (req, res) => {
    CustomerService.getCustomer(parseInt(req.params.id)).then(customer => res.send(customer))
})

