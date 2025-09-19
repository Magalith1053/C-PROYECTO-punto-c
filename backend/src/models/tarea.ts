export interface Tarea {
    id: number;
    nombre: string;
    descripcion: string;
    fechaCreacion: Date;
    fechaVencimiento: Date;
    estado: 'pendiente' | 'completada';
    idProyecto: number; // Relación con el proyecto
    idUsuario: number; // Relación con el usuario asignado
}