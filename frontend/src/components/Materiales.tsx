import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Materiales = () => {
    const [materiales, setMateriales] = useState([]);
    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState(0);

    useEffect(() => {
        obtenerMateriales();
    }, []);

    const obtenerMateriales = async () => {
        try {
            const response = await axios.get('/api/materiales');
            setMateriales(response.data);
        } catch (error) {
            console.error('Error al obtener materiales:', error);
        }
    };

    const crearMaterial = async () => {
        try {
            await axios.post('/api/materiales', { nombre, cantidad });
            setNombre('');
            setCantidad(0);
            obtenerMateriales();
        } catch (error) {
            console.error('Error al crear material:', error);
        }
    };

    const eliminarMaterial = async (id) => {
        try {
            await axios.delete(`/api/materiales/${id}`);
            obtenerMateriales();
        } catch (error) {
            console.error('Error al eliminar material:', error);
        }
    };

    return (
        <div className="materiales-container">
            <h1>Gestión de Materiales</h1>
            <div className="nuevo-material">
                <input
                    type="text"
                    placeholder="Nombre del material"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Cantidad"
                    value={cantidad}
                    onChange={(e) => setCantidad(e.target.value)}
                />
                <button onClick={crearMaterial}>Agregar Material</button>
            </div>
            <ul>
                {materiales.map((material) => (
                    <li key={material.id}>
                        {material.nombre} - Cantidad: {material.cantidad}
                        <button onClick={() => eliminarMaterial(material.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Materiales;