export class TareasController {
    private tareas: any[] = []; // Aquí se almacenarán las tareas en memoria, se puede reemplazar con una base de datos

    public crearTarea(tarea: any) {
        this.tareas.push(tarea);
        return tarea;
    }

    public obtenerTareas() {
        return this.tareas;
    }

    public actualizarTarea(id: number, tareaActualizada: any) {
        const index = this.tareas.findIndex(tarea => tarea.id === id);
        if (index !== -1) {
            this.tareas[index] = { ...this.tareas[index], ...tareaActualizada };
            return this.tareas[index];
        }
        throw new Error('Tarea no encontrada');
    }

    public eliminarTarea(id: number) {
        const index = this.tareas.findIndex(tarea => tarea.id === id);
        if (index !== -1) {
            const tareaEliminada = this.tareas.splice(index, 1);
            return tareaEliminada[0];
        }
        throw new Error('Tarea no encontrada');
    }
}