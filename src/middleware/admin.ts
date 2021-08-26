import { Request,Response,NextFunction } from "express";
const admin = true;
const user = false;

export const checkAdmin = (req:Request,res: Response,next:NextFunction) => {
    if(admin)
    next();
    else{
        res.status(401).json({
            error: -1,
            descripcion: `Ruta: ${req.url}`,
            metodo: `${req.method} no autorizada`
        })
    }
}
export const checkUsuario = (req:Request,res: Response,next:NextFunction) => {
    if(user)
    next();
    else{
        res.status(401).json({
            error: -1,
            descripcion: `Ruta: ${req.url}`,
            metodo: `${req.method} no autorizada`
        })
    }
}