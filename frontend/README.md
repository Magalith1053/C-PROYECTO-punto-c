# Proyecto Punto C Estudio

Este es un sistema web de gestión para el estudio técnico "Punto C Estudio". El proyecto está dividido en dos partes principales: el backend y el frontend.

## Estructura del Proyecto

El proyecto tiene la siguiente estructura de carpetas:

```
punto-c-estudio
├── backend
│   ├── src
│   │   ├── controllers
│   │   ├── models
│   │   ├── routes
│   │   ├── db
│   │   └── app.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
└── frontend
    ├── src
    │   ├── components
    │   ├── pages
    │   ├── styles
    │   ├── App.tsx
    │   └── index.tsx
    ├── package.json
    ├── tsconfig.json
    └── README.md
```

## Backend

El backend está construido con TypeScript y utiliza MySQL como base de datos. Las principales funcionalidades incluyen:

- **Controladores**: Manejan las operaciones CRUD para las tablas de usuarios, tareas, proyectos, clientes, materiales y contacto.
- **Modelos**: Definen la estructura de las tablas en la base de datos.
- **Rutas**: Configuran las rutas para acceder a las funcionalidades del backend.
- **Conexión a la base de datos**: Establece la conexión con MySQL.

## Frontend

El frontend está desarrollado en React y proporciona una interfaz de usuario profesional y responsiva. Las características incluyen:

- **Componentes**: Cada componente maneja una sección específica del sistema (usuarios, tareas, proyectos, etc.).
- **Páginas**: La página principal presenta un diseño atractivo y enlaces a las diferentes secciones.
- **Estilos**: Se utilizan estilos CSS para asegurar un diseño profesional.

## Instalación

Para instalar las dependencias del proyecto, navega a las carpetas `backend` y `frontend` y ejecuta:

```
npm install
```

## Ejecución

Para ejecutar el backend, utiliza el siguiente comando en la carpeta `backend`:

```
npm start
```

Para ejecutar el frontend, utiliza el siguiente comando en la carpeta `frontend`:

```
npm start
```

## Contribuciones

Las contribuciones son bienvenidas. Si deseas colaborar, por favor abre un issue o envía un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT.