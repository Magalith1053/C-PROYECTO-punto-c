# Punto C Estudio - Backend

Este es el backend del proyecto "Punto C Estudio", diseñado para gestionar un estudio técnico. Este sistema está construido utilizando TypeScript y se conecta a una base de datos MySQL.

## Estructura del Proyecto

El backend está organizado en las siguientes carpetas y archivos:

- **src/**: Contiene el código fuente de la aplicación.
  - **controllers/**: Controladores que manejan la lógica de negocio y las operaciones CRUD.
    - `usuariosController.ts`: Controlador para la gestión de usuarios.
    - `tareasController.ts`: Controlador para la gestión de tareas.
    - `proyectosController.ts`: Controlador para la gestión de proyectos.
    - `clientesController.ts`: Controlador para la gestión de clientes.
    - `materialesController.ts`: Controlador para la gestión de materiales.
    - `contactoController.ts`: Controlador para la gestión de contactos.
  - **models/**: Modelos que representan la estructura de las tablas en la base de datos.
    - `usuario.ts`: Modelo para la tabla de usuarios.
    - `tarea.ts`: Modelo para la tabla de tareas.
    - `proyecto.ts`: Modelo para la tabla de proyectos.
    - `cliente.ts`: Modelo para la tabla de clientes.
    - `material.ts`: Modelo para la tabla de materiales.
    - `contacto.ts`: Modelo para la tabla de contacto.
  - **routes/**: Definición de las rutas de la API.
    - `usuarios.ts`: Rutas para operaciones de usuarios.
    - `tareas.ts`: Rutas para operaciones de tareas.
    - `proyectos.ts`: Rutas para operaciones de proyectos.
    - `clientes.ts`: Rutas para operaciones de clientes.
    - `materiales.ts`: Rutas para operaciones de materiales.
    - `contacto.ts`: Rutas para operaciones de contacto.
  - **db/**: Configuración de la conexión a la base de datos.
    - `connection.ts`: Establece la conexión a la base de datos MySQL.
  - `app.ts`: Punto de entrada de la aplicación, donde se configuran middleware y se inicializan las rutas.

## Instalación

1. Clona el repositorio:
   ```
   git clone <URL_DEL_REPOSITORIO>
   ```
2. Navega a la carpeta del backend:
   ```
   cd punto-c-estudio/backend
   ```
3. Instala las dependencias:
   ```
   npm install
   ```

## Uso

Para iniciar el servidor, ejecuta el siguiente comando:
```
npm start
```

El servidor se ejecutará en `http://localhost:3000` por defecto.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o envía un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT.