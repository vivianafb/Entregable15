import {NextFunction, Request,Response} from 'express';
import {productoPersistencia} from '../persistencia/productos'
let productos =[
    {id:1, 
        nombre:"lapiz", 
        precio:100, 
        descripcion:"color rojo",
        codigo:123456,
        foto:"https://img.freepik.com/vector-gratis/diseno-lapiz-escribiendo_1095-187.jpg?size=338&ext=jpg",
        stock:27,
        timestamp:Date.now()},
    {id:2, 
        nombre:"goma", 
        precio:200, 
        descripcion:"goma de borrar",
        codigo:789123,
        foto:"https://www.libreriaservicom.cl/wp-content/uploads/2019/03/goma-de-borrar-factis-s20.jpg",
        stock:30,
        timestamp:Date.now()}
  ]

class Producto{

    validacion(req:Request, res: Response, next: NextFunction){
        const {nombre,precio,descripcion,codigo,foto,stock} = req.body;
        if(!nombre || !precio || !descripcion || !codigo || !foto || !stock ||
             typeof nombre !== 'string' || 
             typeof descripcion !== 'string' ||
             typeof foto !== 'string' ||
             isNaN(precio) ||  isNaN(codigo) ||  isNaN(stock))
            return res.status(400).json({
                msg: "Campos del body invalidos"
            })
        next();

    }
    getProducto(req: Request, res:Response){
        const id = req.params.id;
        if(id){
            const producto = productoPersistencia.get(Number(id));
            console.log(producto);
            if(!producto)
                return res.status(404).json({
                    msg: "Producto no encontrado"
                })
                return res.json({
                    data:producto
                })
        }
        res.json({
            data: productoPersistencia.get()
        })
    }
    addProducto(req: Request, res:Response){      
        const newItem = productoPersistencia.add(req.body)
        res.json({
            msg: "Productos agregado con exito",
            data: newItem
        })
    }
    updateProducto(req: Request, res:Response){
        res.json({
            msg: "Actualizando los productos"
        })
    }

    deleteProducto(req: Request, res:Response){
        const id = Number(req.params.id);

        const producto = productoPersistencia.get(id);
        if(!producto){
            return res.status(400).json({
                msg: "Producto no encontrado"
            })
        }

        productos = productoPersistencia.delete(id) ;

        res.json({
            msg: "Producto eliminado",
            data: productos
        })
    }
}
export const productoController = new Producto();