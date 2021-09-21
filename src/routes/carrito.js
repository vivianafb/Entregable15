import  {Router} from 'express';
import { carritoController } from '../controllers/carritoController';
import { checkAdmin,checkUsuario } from '../middleware/admin';
const router = Router();

router.get('/listar',checkAdmin,checkUsuario, carritoController.getCarrito);
router.get('/listar/:id',checkAdmin,checkUsuario, carritoController.getCarrito);
router.post('/agregar',checkAdmin,checkUsuario,carritoController.validacion, carritoController.addCarrito);
router.delete('/borrar/:id',checkAdmin,checkUsuario, carritoController.deleteCarrito);

export default router;