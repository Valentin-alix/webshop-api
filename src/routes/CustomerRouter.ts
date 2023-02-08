import { Router } from 'express'

export const router = Router();

router.get('/customers/', (req, res) => {
    res.send("test")
})
