import { ProductoDB } from "../../../services/db"

export class ProductosFBDAO {


   async get(tableName,id) {
    if(!id){
        let resultado = await ProductoDB.get();

        let docs = resultado.docs;

        const output = docs.map(aDoc => ({
            id: aDoc.id,
            data: aDoc.data()
        })) 
        return output;
    }else{
        let result = await ProductoDB.doc(id).get();
       
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
            const ProductoDocument = ProductoDB.doc();
            await ProductoDocument.create(data); 
            console.log("Producto agregado!");        
        }
        catch(err){
            console.log("ERROR");
            console.log(err);
        }
    }

    async update(tableName,id,data) {
        const miDoc = ProductoDB.doc(id);    
        console.log(miDoc);
    
        //Chequear si existe sino no seguir.
        await ProductoDB.doc(id).update(data);
        console.log('Producto actualizado');
    }

    async delete(tableName,id) {
        await ProductoDB.doc(id).delete()
        console.log('Producto eliminado');
    }

}
