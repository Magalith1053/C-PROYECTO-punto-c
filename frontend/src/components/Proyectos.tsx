import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Proyectos = () => {
    const [proyectos, setProyectos] = useState([]);
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');

    useEffect(() => {
        obtenerProyectos();
    }, []);

    const obtenerProyectos = async () => {
        try {
            const response = await axios.get('/api/proyectos');
            setProyectos(response.data);
        } catch (error) {
            console.error('Error al obtener proyectos:', error);
        }
    };

    const crearProyecto = async () => {
        try {
            const response = await axios.post('/api/proyectos', { nombre, descripcion });
            setProyectos([...proyectos, response.data]);
            setNombre('');
            setDescripcion('');
        } catch (error) {
            console.error('Error al crear proyecto:', error);
        }
    };

    return (
        <div className="proyectos-container">
            <h1>Gestión de Proyectos</h1>
            <div className="nuevo-proyecto">
                <input
                    type="text"
                    placeholder="Nombre del Proyecto"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
                <textarea
                    placeholder="Descripción del Proyecto"
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                />
                <button onClick={crearProyecto}>Crear Proyecto</button>
            </div>
            <h2>Lista de Proyectos</h2>
            <ul>
                {proyectos.map((proyecto) => (
                    <li key={proyecto.id}>
                        <h3>{proyecto.nombre}</h3>
                        <p>{proyecto.descripcion}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Proyectos;