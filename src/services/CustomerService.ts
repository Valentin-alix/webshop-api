import { Customer } from "../models/Customer"

export class CustomerService {
    static async getCustomer(customerId: number): Promise<Customer> {
        return fetch(`https://615f5fb4f7254d0017068109.mockapi.io/api/v1/customers/${customerId}`).then(response => response.json())
    }

    static async getCustomers(): Promise<Customer[]> {
        return fetch("https://615f5fb4f7254d0017068109.mockapi.io/api/v1/customers").then(response => response.json())
    }
}