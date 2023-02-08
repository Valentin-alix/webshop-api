import { Product } from "../models/Product"

export class ProductService {

    static async getProduct(productId: number): Promise<Product> {
        return fetch(`https://615f5fb4f7254d0017068109.mockapi.io/api/v1/products/${productId}`).then(response => response.json())
    }

    // Récupération de tous les produits
    static async getProducts(): Promise<Product[]> {
        return fetch("https://615f5fb4f7254d0017068109.mockapi.io/api/v1/products/").then(response => response.json())
    }
}