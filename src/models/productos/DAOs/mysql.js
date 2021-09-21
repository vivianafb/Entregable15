import knex from 'knex';
import dbConfig from './../../../../knexfile';

export class ProductosSQLDAO   {
  constructor() {
    const environment = process.env.NODE_ENV || 'development';
    console.log(`SETTING ${environment} DB`);
    const options = dbConfig[environment];
    this.connection = knex(options);
    this.tableName = 'productos';

  }

  init() { 
    this.connection.schema.hasTable('productos').then((exists) => {
      if (exists) return;
      console.log('Creamos la tabla productos!');

      return this.connection.schema.createTable(
        'productos',
        (productosTable) => {
          productosTable.increments();
          productosTable.string('nombre').notNullable();        
          productosTable.decimal('precio', 4, 2);
          productosTable.string('descripcion').notNullable();
          productosTable.integer('codigo').notNullable();
          productosTable.string('foto').notNullable();        
          productosTable.integer('stock').notNullable();
          productosTable.timestamp('createdAt').defaultTo(knex.fn.now());
        }
      );
    });
  }
  async get(tableName, id) {
    if (id) return this.connection(tableName).where('id', id);

    return this.connection(tableName);
  }

  async add(tableName, data) {
    return this.connection(tableName).insert(data);
  }

  async update(tableName, id, data) {
    return this.connection(tableName).where('id', id).update(data);
  }

  async delete(tableName, id) {
    return this.connection(tableName).where('id', id).del();
  }
}
