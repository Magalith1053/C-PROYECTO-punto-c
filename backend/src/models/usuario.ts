export interface Usuario {
    id: number;
    nombre: string;
    email: string;
    contraseña: string;
    rol: string; // Ejemplo: 'admin', 'usuario'
    fechaCreacion: Date;
    fechaActualizacion: Date;
}