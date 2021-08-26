import  {Router} from 'express';
import { productoController } from '../controllers/productoController';
import { checkAdmin, checkUsuario } from '../middleware/admin';
const router = Router();

router.get('/listar',checkAdmin,checkUsuario, productoController.getProducto);
router.get('/listar/:id',checkAdmin,checkUsuario, productoController.getProducto);
router.post('/agregar',checkAdmin,productoController.validacion, productoController.addProducto);
router.put('/actualizar/:id', checkAdmin,productoController.updateProducto);
router.delete('/borrar/:id',checkAdmin,productoController.deleteProducto);

export default router;