export interface Product {
  id: number
  createdAt: Date
  name: string
  detail: [{ price: number, description: string, color: string }]
  stock: number
}

export const Product = (props: Product) => { }
