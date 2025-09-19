import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Usuarios = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [id, setId] = useState(null);

    useEffect(() => {
        obtenerUsuarios();
    }, []);

    const obtenerUsuarios = async () => {
        try {
            const response = await axios.get('/api/usuarios');
            setUsuarios(response.data);
        } catch (error) {
            console.error('Error al obtener usuarios:', error);
        }
    };

    const crearUsuario = async () => {
        try {
            await axios.post('/api/usuarios', { nombre, email });
            setNombre('');
            setEmail('');
            obtenerUsuarios();
        } catch (error) {
            console.error('Error al crear usuario:', error);
        }
    };

    const actualizarUsuario = async () => {
        try {
            await axios.put(`/api/usuarios/${id}`, { nombre, email });
            setNombre('');
            setEmail('');
            setId(null);
            obtenerUsuarios();
        } catch (error) {
            console.error('Error al actualizar usuario:', error);
        }
    };

    const eliminarUsuario = async (usuarioId) => {
        try {
            await axios.delete(`/api/usuarios/${usuarioId}`);
            obtenerUsuarios();
        } catch (error) {
            console.error('Error al eliminar usuario:', error);
        }
    };

    const manejarEdicion = (usuario) => {
        setNombre(usuario.nombre);
        setEmail(usuario.email);
        setId(usuario.id);
    };

    return (
        <div className="usuarios-container">
            <h2>Gestión de Usuarios</h2>
            <form onSubmit={(e) => {
                e.preventDefault();
                id ? actualizarUsuario() : crearUsuario();
            }}>
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
                <button type="submit">{id ? 'Actualizar' : 'Crear'}</button>
            </form>
            <ul>
                {usuarios.map((usuario) => (
                    <li key={usuario.id}>
                        {usuario.nombre} - {usuario.email}
                        <button onClick={() => manejarEdicion(usuario)}>Editar</button>
                        <button onClick={() => eliminarUsuario(usuario.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Usuarios;