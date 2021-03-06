import { NoticiasFactoryDAO } from '../models/productos/products.factory';
import { TipoPersistencia } from '../models/productos/products.factory';

const tipo = TipoPersistencia.Firebase;

class prodAPI {
    productos;

  constructor() {
    this.productos = NoticiasFactoryDAO.get(tipo);
  }

  async getProducts(id) {
    if (id) return this.productos.get(id);

    return this.productos.get();
  }

  async addProduct(productData) {
    const newProduct = await this.productos.add(productData);
    return newProduct;
  }

  async updateProduct(id, productData) {
    const updatedProduct = await this.productos.update(id, productData);
    return updatedProduct;
  }

  async deleteProduct(id) {
    await this.productos.delete(id);
  }

  async query(options) {
    return await this.productos.query(options);
  }
}

export const productsAPI = new prodAPI();