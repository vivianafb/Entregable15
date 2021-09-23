exports.up = function (knex) {
    return knex.schema
      .createTable('productos', (productosTable) => {
        productosTable.increments();
        productosTable.string('nombre').notNullable();
        productosTable.decimal('precio', 4, 2);
        productosTable.string('descripcion').notNullable();
        productosTable.decimal('codigo', 4, 2);
        productosTable.integer('foto').notNullable();
        productosTable.integer('stock').notNullable();
        productosTable.timestamp('createdAt').defaultTo(knex.fn.now());
        
      })
      .createTable('carrito', (carritoTable) => {  
        carritoTable.increments();
        carritoTable.timestamp('createdAt').defaultTo(knex.fn.now());
        carritoTable
        .integer('producto_id')
        .unsigned()
        .references('id')
        .inTable('productos')
      })
};   
      
  
  exports.down = function (knex) {
    return knex.schema.dropTable('carrito').dropTable('productos');
  };
  