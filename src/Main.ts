import express from 'express'
import { router } from './routes/CustomerRouter'

const app = express()
const port = 3000

app.use(router)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Webship api listening at http://localhost:${port}`)
})
