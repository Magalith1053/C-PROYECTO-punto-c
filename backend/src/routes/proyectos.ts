import { Router } from 'express';
import ProyectosController from '../controllers/proyectosController';

const router = Router();
const proyectosController = new ProyectosController();

router.post('/', proyectosController.crearProyecto.bind(proyectosController));
router.get('/', proyectosController.obtenerProyectos.bind(proyectosController));
router.put('/:id', proyectosController.actualizarProyecto.bind(proyectosController));
router.delete('/:id', proyectosController.eliminarProyecto.bind(proyectosController));

export default router;