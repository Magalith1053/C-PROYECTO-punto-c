import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Clientes = () => {
    const [clientes, setClientes] = useState([]);
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');

    useEffect(() => {
        obtenerClientes();
    }, []);

    const obtenerClientes = async () => {
        try {
            const response = await axios.get('/api/clientes');
            setClientes(response.data);
        } catch (error) {
            console.error('Error al obtener los clientes:', error);
        }
    };

    const crearCliente = async () => {
        try {
            const nuevoCliente = { nombre, email, telefono };
            await axios.post('/api/clientes', nuevoCliente);
            setNombre('');
            setEmail('');
            setTelefono('');
            obtenerClientes();
        } catch (error) {
            console.error('Error al crear el cliente:', error);
        }
    };

    return (
        <div className="clientes-container">
            <h1>Gestión de Clientes</h1>
            <form onSubmit={(e) => { e.preventDefault(); crearCliente(); }}>
                <input
                    type="text"
                    placeholder="Nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="tel"
                    placeholder="Teléfono"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    required
                />
                <button type="submit">Agregar Cliente</button>
            </form>
            <h2>Lista de Clientes</h2>
            <ul>
                {clientes.map(cliente => (
                    <li key={cliente.id}>
                        {cliente.nombre} - {cliente.email} - {cliente.telefono}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Clientes;