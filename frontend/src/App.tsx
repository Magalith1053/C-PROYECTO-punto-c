import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Usuarios from './components/Usuarios';
import Tareas from './components/Tareas';
import Proyectos from './components/Proyectos';
import Clientes from './components/Clientes';
import Materiales from './components/Materiales';
import Contacto from './components/Contacto';
import './styles/main.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/usuarios" component={Usuarios} />
          <Route path="/tareas" component={Tareas} />
          <Route path="/proyectos" component={Proyectos} />
          <Route path="/clientes" component={Clientes} />
          <Route path="/materiales" component={Materiales} />
          <Route path="/contacto" component={Contacto} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;