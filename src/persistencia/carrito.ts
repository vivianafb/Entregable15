
let carrito =[
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
    },
]
interface addCarrito {
    timestamp:any,
    producto: any
}

interface Carrito {
    id: number,
    timestamp:any,
    producto:any
}
class Carrito{
    get(id: number | null = null){
        if(id){
            return carrito.filter(aCarrito => aCarrito.id == Number(id))
        }
        return carrito;
    }

    add(data: addCarrito){
        const newItem = {
            id: carrito.length +1,
            timestamp: data.timestamp,
            producto: data.producto
        }
        carrito.push(newItem);
        return newItem;
    }

    // update(id,data){

    // }

    delete(id:number){
        carrito = carrito.filter(aCarrito => aCarrito.id !== Number(id))
        return carrito;

    }
}

export const carritoPersistencia = new Carrito();