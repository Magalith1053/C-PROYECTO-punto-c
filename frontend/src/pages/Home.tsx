import React from 'react';
import { Link } from 'react-router-dom';
import './styles/main.css';

const Home: React.FC = () => {
    return (
        <div className="home-container">
            <header className="header">
                <h1>Punto C Estudio</h1>
                <nav>
                    <ul>
                        <li><Link to="/usuarios">Usuarios</Link></li>
                        <li><Link to="/tareas">Tareas</Link></li>
                        <li><Link to="/proyectos">Proyectos</Link></li>
                        <li><Link to="/clientes">Clientes</Link></li>
                        <li><Link to="/materiales">Materiales</Link></li>
                        <li><Link to="/contacto">Contacto</Link></li>
                    </ul>
                </nav>
            </header>
            <main className="main-content">
                <h2>Bienvenido a Punto C Estudio</h2>
                <p>Gestione sus proyectos, tareas y clientes de manera eficiente.</p>
            </main>
            <footer className="footer">
                <p>&copy; 2023 Punto C Estudio. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
};

export default Home;