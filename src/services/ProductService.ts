import { Product } from '../models/Product'

export class ProductService {
  static async getProduct(productId: number): Promise<Product> {
    return await fetch(`https://615f5fb4f7254d0017068109.mockapi.io/api/v1/products/${productId}`)
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        else {
          throw response.status
        }
      }
      )
      .catch(error => {
        return error
      })
  }

  // Récupération de tous les produits
  static async getProducts(): Promise<Product[]> {
    return await fetch('https://615f5fb4f7254d0017068109.mockapi.io/api/v1/products/').then(async response => await response.json())
  }
}
