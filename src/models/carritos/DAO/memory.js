export class CarritoMemDAO{
    carrito = [];
  
    constructor() {
      const mockData = [
        {
            id:1, 
            timestamp:Date.now(),
            producto:{
                id:1, 
                nombre:"lapiz", 
                precio:100, 
                descripcion:'color rojo',
                codigo:123456,
                foto:'https://img.freepik.com/vector-gratis/diseno-lapiz-escribiendo_1095-187.jpg?size=338&ext=jpg',
                stock:27,
                timestamp:Date.now()
            }
        },
        {
            id:2, 
            timestamp:Date.now(),
            producto:{
                id:2, 
                nombre:"goma", 
                precio:200, 
                descripcion:'goma de borrar',
                codigo:789123,
                foto:'https://www.libreriaservicom.cl/wp-content/uploads/2019/03/goma-de-borrar-factis-s20.jpg',
                stock:30,
                timestamp:Date.now()
            }
        }
      ];
  
      mockData.forEach((aMock) => this.carrito.push(aMock));
    }
  
    findIndex(id) {
      return this.carrito.findIndex((aCarrito) => aCarrito.id == id);
    }
  
    find(id) {
      return this.carrito.find((aCarrito) => aCarrito.id == id);
    }
  
    async get(id) {
      if (id) {
        return this.carrito.filter((aCarrito) => aCarrito.id == id);
      }

      return this.carrito;
    }
  
    async add(data) {
  
      const newItem = {
        id: (this.carrito.length + 1),
        timestamp: data.timestamp,
        producto: {
            id:(this.carrito.length + 1),
            nombre: data.producto.nombre,
            precio: data.producto.precio,
            descripcion: data.producto.descripcion,
            codigo: data.producto.codigo,
            foto: data.producto.foto,
            stock: data.producto.stock
      }
      };
  
      this.carrito.push(newItem);
  console.log(newItem)
      return newItem;
    }
  
    async update(id, newCarritoData) {
      const index = this.findIndex(id);
      const oldCarrito = this.carrito[index];
  
      const updatedCarrito= { ...oldCarrito, ...newCarritoData };
      this.carrito.splice(index, 1, updatedCarrito);
      return updatedCarrito;
    }
  
    async delete(id) {
      const index = this.findIndex(id);
      this.carrito.splice(index, 1);
    }
  
    async query(options){
    //   type Conditions = (aProduct: ProductI) => boolean;
      const query = [];
  
      if (options.nombre)
        query.push((aProduct) => aProduct.nombre == options.nombre);
  
      if (options.precio)
        query.push((aProduct) => aProduct.precio == options.precio);
  
      return this.productos.filter((aProduct) => query.every((x) => x(aProduct)));
    }
}