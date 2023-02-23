import { Customer } from '../models/Customer'
import fetch from "node-fetch"

export class CustomerService {
  static async getCustomer(customerId: number): Promise<Customer[] | unknown> {
    return await fetch(`https://615f5fb4f7254d0017068109.mockapi.io/api/v1/customers/${customerId}`)
      .then(async response => {
        if (response.ok) {
          return await response.json()
        } else {
          throw response.status
        }
      }
      )
      .catch(error => {
        return error
      })
  }

  static async getCustomers(): Promise<Customer[] | unknown> {
    return await fetch('https://615f5fb4f7254d0017068109.mockapi.io/api/v1/customers').then(async response => await response.json())
  }
}
