export interface Customer {
    id: number
    email: string
    orders: [{ createdAt: string, id: number, customerId: number, title?: string }]
    createdAt: Date
    name: string
    username: string
    firstName: string
    lastName: string
    address: { postalCode: number, city: string }
    profile: { firstName: string, lastName: string }
    company?: { companyName: string }
}