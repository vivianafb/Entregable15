import { CarritoDB } from "../../../services/db"

export class CarritoFBDAO{
    async get(tableName,id) {
        if(!id){
            let resultado = await CarritoDB.get();
    
            let docs = resultado.docs;
    
            const output = docs.map(aDoc => ({
                id: aDoc.id,
                data: aDoc.data()
            })) 
            return output;
        }else{
            let result = await CarritoDB.doc(id).get();
           
            //si no existe devolver error o algo asi
            if(id){
                return ({
                    data: result.data(),
                });
            }
            else{
                return console.log("error")
            }
        }
    }
    
        async add(tablename,data) {
            try{
                const CarritoDocument = CarritoDB.doc();
                await CarritoDocument.create(data); 
                console.log("Producto agregado!");        
            }
            catch(err){
                console.log("ERROR");
                console.log(err);
            }
        }
    
        async update(tableName,id,data) {
            const miDoc = CarritoDB.doc(id);    
            console.log(miDoc);
        
            //Chequear si existe sino no seguir.
            await CarritoDB.doc(id).update(data);
            console.log('Producto actualizado');
        }
    
        async delete(tableName,id) {
            await CarritoDB.doc(id).delete()
            console.log('Producto eliminado');
        }
}