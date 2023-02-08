import express from 'express'
import { customerRouter } from './routes/CustomerRouter'
import { productRouter } from './routes/ProductRouter'

const app = express()
const port = 3000

app.use('/customers/', customerRouter)
app.use('/products/', productRouter)

app.listen(port, () => {
  console.log(`Webship api listening at http://localhost:${port}`)
})
