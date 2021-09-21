import { NoticiasFactoryDAO } from '../models/productos/products.factory';
import { TipoPersistencia } from '../models/productos/products.factory';

const tipo = TipoPersistencia.MYSQL;
const tableName = 'productos';

class prodAPI {
    productos;

  constructor() {
    this.productos = NoticiasFactoryDAO.get(tipo);
  }

  async getProducts(id) {
    if (id) return this.productos.get(tableName,id);

    return this.productos.get(tableName);
  }

  async addProduct(productData) {
    const newProduct = await this.productos.add(tableName,productData);
    return newProduct;
  }

  async updateProduct(id, productData) {
    const updatedProduct = await this.productos.update(tableName,id, productData);
    return updatedProduct;
  }

  async deleteProduct(id) {
    await this.productos.delete(tableName,id);
  }

  async query(options) {
    return await this.productos.query(options);
  }
}

export const productsAPI = new prodAPI();