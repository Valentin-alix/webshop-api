import request from "supertest"
import { server } from "../Main"


describe('CustomerRouteTest', () => {
  test('test get customers', async () => {
    const customersResponse = await request(server).get('/customers/')
    expect(customersResponse.statusCode).toBe(200)
  })
})

describe('ProductRouteTest', () => {
  test('test get products', async () => {
    const productResponse = await request(server).get('/products/')
    expect(productResponse.statusCode).toBe(200)
  })
})

afterAll(() => {
  server.close()
})