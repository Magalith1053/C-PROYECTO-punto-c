import { createPool } from 'mysql2/promise';

const pool = createPool({
    host: 'localhost',
    user: 'tu_usuario',
    password: 'tu_contraseña',
    database: 'punto_c_estudio',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

export default pool;