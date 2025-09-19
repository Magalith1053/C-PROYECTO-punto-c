import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Tareas = () => {
    const [tareas, setTareas] = useState([]);
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');

    useEffect(() => {
        obtenerTareas();
    }, []);

    const obtenerTareas = async () => {
        try {
            const response = await axios.get('/api/tareas');
            setTareas(response.data);
        } catch (error) {
            console.error('Error al obtener las tareas', error);
        }
    };

    const crearTarea = async () => {
        try {
            const nuevaTarea = { titulo, descripcion };
            await axios.post('/api/tareas', nuevaTarea);
            setTitulo('');
            setDescripcion('');
            obtenerTareas();
        } catch (error) {
            console.error('Error al crear la tarea', error);
        }
    };

    const eliminarTarea = async (id) => {
        try {
            await axios.delete(`/api/tareas/${id}`);
            obtenerTareas();
        } catch (error) {
            console.error('Error al eliminar la tarea', error);
        }
    };

    return (
        <div className="tareas-container">
            <h1>Gestión de Tareas</h1>
            <div className="nueva-tarea">
                <input
                    type="text"
                    placeholder="Título"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                />
                <textarea
                    placeholder="Descripción"
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                />
                <button onClick={crearTarea}>Agregar Tarea</button>
            </div>
            <ul>
                {tareas.map((tarea) => (
                    <li key={tarea.id}>
                        <h2>{tarea.titulo}</h2>
                        <p>{tarea.descripcion}</p>
                        <button onClick={() => eliminarTarea(tarea.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Tareas;