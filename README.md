# API REST con autenticación JWT, encriptación bcrypt, roles y permisos.

# 📝 Descripción
Un restaurante necesita un sistema digital para que sus clientes hagan reservaciones de mesas en línea, y para que el personal administrador gestione el estado de cada reserva.

La API resuelve los siguientes casos de uso:

1. Los clientes se registran, inician sesión y hacen reservaciones eligiendo mesa, fecha, hora y número de comensales.
2. El sistema valida que la mesa no esté ocupada en el mismo bloque de fecha y hora antes de confirmar.
3. Los administradores pueden ver todas las reservaciones, cambiar su estado y gestionar el catálogo de mesas.
4. El sistema valida los objetos JSON utilizados, si hay errores en el formato se mostrarán mensajes de error (Se crearon Middleware para el manejo de validaciones)

> ### ⚙️ Requerimientos
> 
> **Base de datos postgres:**<br>
> Crear la base de datos **bdrestaurante** en postgres, y luego, ejecutar el archivo adjunto **.sql** que se encuentra en la carpeta **database** del repositorio.<br>
> **Postman, Insomnia u otra aplicación para depurar la API**<br>

> ### 🤬 Advertencia
> Por seguridad ante problemas de hackeo en **npm** se trabajo mejor con **pnpm** tomelo en cuenta para hacer pruebas de la API.

<br>

# 🔑 Autenticación — /api/auth

| Método | Endpoint | Descripción | Acceso |
| :--- | :--- | :--- | :--- |
| POST | `http://localhost:3000/api/auth/register` | Registro de nuevo usuario (cliente) | Público |
| POST | `http://localhost:3000/api/auth/login` | Login — devuelve JWT firmado | Público |
| GET | `http://localhost:3000/api/auth/perfil` | Datos del usuario autenticado | Cliente |

<br>

# JSON que debe utilizar en Autenticación
**Para el registro de nuevo usuario**

    {
      "nombre": "Usuario prueba",
      "correo": "usuario@ejemplo.com",
      "password": "User@1234"
    }

**Para el Login**

    {
      "correo": "usuario@ejemplo.com",
      "password": "User@1234"
    }

# 🍽️ Mesas — /api/mesas

| Método | Endpoint | Descripción | Acceso |
| :--- | :--- | :--- | :--- |
| GET | `/api/mesas` | Listar mesas (filtro disponibilidad) | Público |
| GET | `/api/mesas/:id` | Detalle de una mesa | Público |
| POST | `/api/mesas` | Crear nueva mesa | Admin |
| PATCH | `/api/mesas/:id` | Actualizar datos de mesa | Admin |
| DELETE | `/api/mesas/:id` | Desactivar mesa (soft delete) | Admin |

<br>

# JSON que debe utilizar en Mesas
**Para crear nueva mesa**

    {
      "numero": 4,
      "capacidad": 6,
      "disponible": true
    }

El valor disponible es opcional (Por defecto se le asigna true)

**Para actualizar datos de una mesa**

    {
      "numero": 4,
      "capacidad": 10
    }

Como se utiliza el método PATCH, la aplicación se ha creado de tal forma que cualquiera de los 2 valores en el JSON son opcionales.

# 📅 Reservaciones — /api/reservaciones

| Método | Endpoint | Descripción | Acceso |
| :--- | :--- | :--- | :--- |
| POST | `/api/reservaciones/:id` | Crear reservación (valida disponibilidad) | Cliente |
| GET | `/api/reservaciones/mis` | Mis reservaciones (usuario actual) | Cliente |
| GET | `/api/reservaciones/:estado` | Todas las reservaciones con filtros | Admin |
| PUT | `/api/reservaciones/:id/:estado` | Cambiar estado de reservación | Admin |
| DELETE | `/api/reservaciones/:id` | Cancelar propia reservación | Cliente |

<br>

# JSON que debe utilizar en Reservaciones
**Para crear nueva mesa**

    {
      "fecha": "2026-07-05",
      "horas": "18:06",
      "personas": 3
    }

El formato de la fecha debe ser en "YYYY-MM-DD" y el formato de la hora es militar "HH:mm". Si se escribe mál el formato se mostrará un mensaje de error.
