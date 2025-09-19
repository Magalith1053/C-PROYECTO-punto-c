import { Router } from 'express';
import UsuariosController from '../controllers/usuariosController';

const router = Router();
const usuariosController = new UsuariosController();

router.post('/', usuariosController.crearUsuario);
router.get('/', usuariosController.obtenerUsuarios);
router.put('/:id', usuariosController.actualizarUsuario);
router.delete('/:id', usuariosController.eliminarUsuario);

export default router;