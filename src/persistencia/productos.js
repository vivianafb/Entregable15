
// let productos =[
//     {id:1, 
//         nombre:"lapiz", 
//         precio:100, 
//         descripcion:'color rojo',
//         codigo:123456,
//         foto:'https://img.freepik.com/vector-gratis/diseno-lapiz-escribiendo_1095-187.jpg?size=338&ext=jpg',
//         stock:27,
//         timestamp:Date.now()},
//     {id:2, 
//         nombre:"goma", 
//         precio:200, 
//         descripcion:'goma de borrar',
//         codigo:789123,
//         foto:'https://www.libreriaservicom.cl/wp-content/uploads/2019/03/goma-de-borrar-factis-s20.jpg',
//         stock:30,
//         timestamp:Date.now()}
//   ]
// // interface addProduct {
// //     nombre:string,
// //     precio:number,
// //     descripcion:string,
// //     codigo:number,
// //     foto:string,
// //     stock:number,
// //     timestamp:number
// // }

// // interface Product {
// //     id: number,
// //     nombre:string,
// //     precio:number,
// //     descripcion:string,
// //     codigo:number,
// //     foto:string,
// //     stock:number,
// //     timestamp:number

// // }
// class Producto{
//     get(id){
//         if(id){
//             return productos.filter(aProduct => aProduct.id == Number(id))
//         }
//         return productos;
//     }

//     add(data){
//         const newItem = {
//             id: productos.length +1,
//             nombre: data.nombre,
//             precio: data.precio,
//             descripcion: data.descripcion,
//             codigo: data.codigo,
//             foto: data.foto,
//             stock: data.stock,
//             timestamp:data.timestamp
//         }
//         productos.push(newItem);
//         return newItem;
//     }

//     update(id,data){
//         if(id){
//         productos = productos.filter(aProduct => aProduct.id !== Number(id))

//         const newUpdate = {
//             id: id,
//             nombre: data.nombre,
//             precio: data.precio,
//             descripcion: data.descripcion,
//             codigo: data.codigo,
//             foto: data.foto,
//             stock: data.stock,
//             timestamp:data.timestamp
//         }
//         productos.push(newUpdate);
//         return newUpdate;
//         }
//     }

//     delete(id){
//         productos = productos.filter(aProduct => aProduct.id !== Number(id))
//         return productos;

//     }
// }

// export const productoPersistencia = new Producto();