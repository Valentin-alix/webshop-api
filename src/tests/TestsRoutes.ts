import request from "supertest"
import { app } from "../Main"

describe('CustomerRouteTest', () => {
  test('test get customers', async () => {
    const customersResponse = await request(app).get('/customers/2/')
    expect(customersResponse.body.name).toBe("Mr. Glenn Harvey")
  })
})

describe('ProductRouteTest', () => {
  test('test get products', async () => {
    const productResponse = await request(app).get('/products/5')
    expect(productResponse.body.name).toBe('Maurice Macejkovic')
  })
})
