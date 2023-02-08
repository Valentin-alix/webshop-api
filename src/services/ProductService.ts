export class ProductService {

    // Récupération d'un produit par son id
    static async getProductById(id: number) {
        return fetch('https://615f5fb4f7254d0017068109.mockapi.io/api/v1/products/' + id)
            .then((response) => response.json())
            .then((data) => {
                return data
            })
    }

    // Récupération de tous les produits
    static async getProducts() {
        return fetch('https://615f5fb4f7254d0017068109.mockapi.io/api/v1/products')
            .then((response) => response.json())
            .then((data) => {
                return data
            })
    }
}