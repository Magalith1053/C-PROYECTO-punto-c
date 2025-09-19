import { Router } from 'express';
import ClientesController from '../controllers/clientesController';

const router = Router();
const clientesController = new ClientesController();

router.post('/', clientesController.crearCliente.bind(clientesController));
router.get('/', clientesController.obtenerClientes.bind(clientesController));
router.put('/:id', clientesController.actualizarCliente.bind(clientesController));
router.delete('/:id', clientesController.eliminarCliente.bind(clientesController));

export default router;