import { Router } from 'express';
import TareasController from '../controllers/tareasController';

const router = Router();
const tareasController = new TareasController();

router.post('/', tareasController.crearTarea.bind(tareasController));
router.get('/', tareasController.obtenerTareas.bind(tareasController));
router.put('/:id', tareasController.actualizarTarea.bind(tareasController));
router.delete('/:id', tareasController.eliminarTarea.bind(tareasController));

export default router;