# Proyecto Punto C Estudio

Este proyecto es un sistema web de gestión para un estudio técnico llamado "Punto C Estudio". Está diseñado para facilitar la administración de usuarios, tareas, proyectos, clientes, materiales y contacto, utilizando tecnologías modernas como React para el frontend y MySQL para la base de datos.

## Estructura del Proyecto

El proyecto está dividido en dos partes principales: **backend** y **frontend**.

### Backend

El backend está construido con TypeScript y se encarga de manejar la lógica de negocio y la interacción con la base de datos. La estructura del backend es la siguiente:

- **src**
  - **controllers**: Contiene los controladores que manejan las operaciones CRUD para cada entidad.
    - `usuariosController.ts`
    - `tareasController.ts`
    - `proyectosController.ts`
    - `clientesController.ts`
    - `materialesController.ts`
    - `contactoController.ts`
  - **models**: Define los modelos que representan la estructura de las tablas en la base de datos.
    - `usuario.ts`
    - `tarea.ts`
    - `proyecto.ts`
    - `cliente.ts`
    - `material.ts`
    - `contacto.ts`
  - **routes**: Define las rutas para las operaciones de cada entidad.
    - `usuarios.ts`
    - `tareas.ts`
    - `proyectos.ts`
    - `clientes.ts`
    - `materiales.ts`
    - `contacto.ts`
  - **db**: Contiene la configuración de la conexión a la base de datos.
    - `connection.ts`
  - `app.ts`: Punto de entrada de la aplicación backend.

### Frontend

El frontend está desarrollado con React y proporciona una interfaz de usuario interactiva y profesional. La estructura del frontend es la siguiente:

- **src**
  - **components**: Contiene los componentes que representan las diferentes secciones de la aplicación.
    - `Usuarios.tsx`
    - `Tareas.tsx`
    - `Proyectos.tsx`
    - `Clientes.tsx`
    - `Materiales.tsx`
    - `Contacto.tsx`
  - **pages**: Contiene las páginas de la aplicación.
    - `Home.tsx`: Página principal con un diseño profesional.
  - **styles**: Contiene los estilos CSS para el frontend.
    - `main.css`
  - `App.tsx`: Componente principal que integra los diferentes componentes.
  - `index.tsx`: Punto de entrada de la aplicación frontend.

## Instalación

Para instalar y ejecutar el proyecto, sigue estos pasos:

1. Clona el repositorio:
   ```
   git clone <URL_DEL_REPOSITORIO>
   ```

2. Navega al directorio del backend y frontend y ejecuta los siguientes comandos para instalar las dependencias:
   ```
   cd backend
   npm install
   cd ../frontend
   npm install
   ```

3. Configura la conexión a la base de datos en `backend/src/db/connection.ts`.

4. Inicia el servidor backend:
   ```
   cd backend
   npm start
   ```

5. Inicia la aplicación frontend:
   ```
   cd frontend
   npm start
   ```

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT.