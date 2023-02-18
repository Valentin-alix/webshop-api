import { Product } from '../models/Product'
import fetch from "node-fetch"

export class ProductService {
  static async getProduct(productId: number): Promise<Product | unknown> {
    return await fetch(`https://615f5fb4f7254d0017068109.mockapi.io/api/v1/products/${productId}`)
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

  // Récupération de tous les produits
  static async getProducts(): Promise<Product[] | unknown> {
    return await fetch('https://615f5fb4f7254d0017068109.mockapi.io/api/v1/products/').then(async response => await response.json())
  }
}
