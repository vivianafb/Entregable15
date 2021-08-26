import { Request,Response,NextFunction } from "express";
const admin = true;
const user = true;

export const checkAdmin = (req:Request,res: Response,next:NextFunction) => {
    if(admin)
    next();
    else{
        res.status(401).json({
            msg: 'No estas autorizado, admin'
        })
    }
}
export const checkUsuario = (req:Request,res: Response,next:NextFunction) => {
    if(user)
    next();
    else{
        res.status(401).json({
            msg: 'No estas autorizado,user'
        })
    }
}