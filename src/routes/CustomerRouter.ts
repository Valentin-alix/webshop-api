import { Router } from 'express'
import { CustomerService } from '../services/CustomerService';

export const customerRouter = Router();

customerRouter.get('', (req, res) => {
    CustomerService.getCustomers().then(customers => res.send(customers))
})

customerRouter.get('/:id', (req, res) => {
    console.log(req.params.id);

    res.send("customer id")
})

