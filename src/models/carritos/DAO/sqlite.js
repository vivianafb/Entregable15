import knex from 'knex';
import dbConfig from './../../../../knexfile';

export class CarritoSQLITEDAO{
    constructor() {
        const environment = process.env.NODE_ENV || 'production';
        console.log(`SETTING ${environment} DB`);
        const options = dbConfig[environment];
        this.connection = knex(options);
      }
    
      init() { 
          this.connection.schema.hasTable('carrito').then((exists) => {
              if (exists) return;
              console.log('Creamos la tabla carrito!');
    
          return this.connection.schema.createTable(
              'carrito',
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
  
      async get( id) {
          if (id) return this.connection('carrito').where('id', id);
      
          return this.connection('carrito');
        }
      
        async add(data) {
          return this.connection('carrito').insert(data);
        }
      
        async update(id, data) {
          return this.connection('carrito').where('id', id).update(data);
        }
      
        async delete( id) {
          return this.connection('carrito').where('id', id).del();
        }
}