export class ProyectosController {
    private db: any; // Aquí se debe definir el tipo de la conexión a la base de datos

    constructor(db: any) {
        this.db = db;
    }

    public async crearProyecto(proyecto: any): Promise<any> {
        const query = 'INSERT INTO proyectos SET ?';
        return new Promise((resolve, reject) => {
            this.db.query(query, proyecto, (error: any, results: any) => {
                if (error) {
                    return reject(error);
                }
                resolve(results);
            });
        });
    }

    public async obtenerProyectos(): Promise<any> {
        const query = 'SELECT * FROM proyectos';
        return new Promise((resolve, reject) => {
            this.db.query(query, (error: any, results: any) => {
                if (error) {
                    return reject(error);
                }
                resolve(results);
            });
        });
    }

    public async actualizarProyecto(id: number, proyecto: any): Promise<any> {
        const query = 'UPDATE proyectos SET ? WHERE id = ?';
        return new Promise((resolve, reject) => {
            this.db.query(query, [proyecto, id], (error: any, results: any) => {
                if (error) {
                    return reject(error);
                }
                resolve(results);
            });
        });
    }

    public async eliminarProyecto(id: number): Promise<any> {
        const query = 'DELETE FROM proyectos WHERE id = ?';
        return new Promise((resolve, reject) => {
            this.db.query(query, id, (error: any, results: any) => {
                if (error) {
                    return reject(error);
                }
                resolve(results);
            });
        });
    }
}