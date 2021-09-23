import fs from 'fs';

export class CarritoFSDAO{
   carrito= [];
   nombreArchivo;

  constructor(fileName) {
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
      }
    ];
    this.nombreArchivo = fileName;
    this.carrito = mockData;
    if(!mockData)
    this.guardar();
  }

  async leer(archivo) {
    this.carrito = JSON.parse(await fs.promises.readFile(archivo, 'utf-8'));
  }

  async guardar() {
    await fs.promises.writeFile(
      this.nombreArchivo,
      JSON.stringify(this.carrito, null, '\t')
    );
  }

  async findIndex(id){
    await this.leer(this.nombreArchivo);
    return this.carrito.findIndex((aCarrito) => aCarrito.id == id);
  }

  async find(id) {
    await this.leer(this.nombreArchivo);

    return this.carrito.find((aCarrito) => aCarrito.id === id);
  }

  async get(id){
    await this.leer(this.nombreArchivo);

    if (id) {

      return this.carrito.filter((aCarrito) => aCarrito.id == id);
    }
    return this.carrito;
  }

  async add(data) {

    await this.leer(this.nombreArchivo);
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
    await this.guardar();
    console.log(newItem)
    return newItem;
  }

  async update(id, newCarritoData) {
    await this.leer(this.nombreArchivo);

    const index = await this.findIndex(id);
    const oldCarrito = this.carrito[index];

    const updatedCarrito = { ...oldCarrito, ...newCarritoData };
    this.carrito.splice(index, 1, updatedCarrito);

    await this.guardar();

    return updatedCarrito;
  }

  async delete(id) {
    await this.leer(this.nombreArchivo);

    const index = await this.findIndex(id);
    this.carrito.splice(index, 1);
    await this.guardar();
  }

  async query(options) {
    await this.leer(this.nombreArchivo);
    // type Conditions = (aProduct) => boolean;
    const query= [];

    if (options.nombre)
      query.push((aCarrito) => aCarrito.nombre == options.nombre);

    if (options.precio)
      query.push((aProduct) => aCarrito.precio == options.precio);

    return this.carrito.filter((aCarrito) => query.every((x) => x(aCarrito)));
  }
}