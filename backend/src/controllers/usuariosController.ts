class UsuariosController {
    constructor(private db: any) {}

    async crearUsuario(req: any, res: any) {
        const { nombre, email, password } = req.body;
        try {
            const nuevoUsuario = await this.db.query('INSERT INTO usuarios (nombre, email, password) VALUES (?, ?, ?)', [nombre, email, password]);
            res.status(201).json({ id: nuevoUsuario.insertId, nombre, email });
        } catch (error) {
            res.status(500).json({ error: 'Error al crear el usuario' });
        }
    }

    async obtenerUsuarios(req: any, res: any) {
        try {
            const usuarios = await this.db.query('SELECT * FROM usuarios');
            res.status(200).json(usuarios);
        } catch (error) {
            res.status(500).json({ error: 'Error al obtener los usuarios' });
        }
    }

    async actualizarUsuario(req: any, res: any) {
        const { id } = req.params;
        const { nombre, email, password } = req.body;
        try {
            await this.db.query('UPDATE usuarios SET nombre = ?, email = ?, password = ? WHERE id = ?', [nombre, email, password, id]);
            res.status(200).json({ id, nombre, email });
        } catch (error) {
            res.status(500).json({ error: 'Error al actualizar el usuario' });
        }
    }

    async eliminarUsuario(req: any, res: any) {
        const { id } = req.params;
        try {
            await this.db.query('DELETE FROM usuarios WHERE id = ?', [id]);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: 'Error al eliminar el usuario' });
        }
    }
}

export default UsuariosController;