import {Request,Response,NextFunction} from 'express';
import { carritoPersistencia } from '../persistencia/carrito';
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

class Carrito{

    validacion(req, res, next){
        const {timestamp,producto} = req.body;
        if(!timestamp || !producto )
            return res.status(400).json({
                msg: "Campos del body invalidos"
            })
        next();

    }
    getCarrito(req, res){
        const id = req.params.id;
        if(id){
            const producto = carritoPersistencia.get(Number(id));
            console.log(carrito);
            if(!carrito)
                return res.status(404).json({
                    msg: "Carrito no encontrado"
                })
                return res.json({
                    data:producto
                })
        }
        res.json({
            data: carritoPersistencia.get()
        })
    }
    addCarrito(req, res){      
        const newItem = carritoPersistencia.add(req.body)
        res.json({
            msg: "Carrito agregado con exito",
            data: newItem
        })
    }
    
     deleteCarrito(req, res){
        const id = Number(req.params.id);
        
        const producto = carritoPersistencia.get(id)
        if(!producto){
            return res.status(400).json({
                msg: "Carrito no encontrado"
            })
        }

        carrito = carritoPersistencia.delete(id) ;

        res.json({
            msg: "Carrito eliminado",
            data: carrito
        })
    }
}
export const carritoController = new Carrito();