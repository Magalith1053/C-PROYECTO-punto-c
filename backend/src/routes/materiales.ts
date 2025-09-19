import { Router } from 'express';
import MaterialesController from '../controllers/materialesController';

const router = Router();
const materialesController = new MaterialesController();

router.post('/', materialesController.crearMaterial);
router.get('/', materialesController.obtenerMateriales);
router.put('/:id', materialesController.actualizarMaterial);
router.delete('/:id', materialesController.eliminarMaterial);

export default router;