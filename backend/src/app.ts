import express from 'express';
import bodyParser from 'body-parser';
import usuariosRoutes from './routes/usuarios';
import tareasRoutes from './routes/tareas';
import proyectosRoutes from './routes/proyectos';
import clientesRoutes from './routes/clientes';
import materialesRoutes from './routes/materiales';
import contactoRoutes from './routes/contacto';
import { createConnection } from './db/connection';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Database connection
createConnection();

// Routes
app.use('/api/usuarios', usuariosRoutes);
app.use('/api/tareas', tareasRoutes);
app.use('/api/proyectos', proyectosRoutes);
app.use('/api/clientes', clientesRoutes);
app.use('/api/materiales', materialesRoutes);
app.use('/api/contacto', contactoRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});