import { Customer } from '../models/Customer'

export class CustomerService {
  static async getCustomer (customerId: number): Promise<Customer> {
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

  static async getCustomers (): Promise<Customer[]> {
    return await fetch('https://615f5fb4f7254d0017068109.mockapi.io/api/v1/customers').then(async response => await response.json())
  }
}
