import { Router } from 'express';
import ContactoController from '../controllers/contactoController';

const router = Router();
const contactoController = new ContactoController();

router.post('/', contactoController.crearContacto);
router.get('/', contactoController.obtenerContactos);
router.put('/:id', contactoController.actualizarContacto);
router.delete('/:id', contactoController.eliminarContacto);

export default router;