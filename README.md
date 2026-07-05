# API REST con autenticación JWT, encriptación bcrypt, roles y permisos.

# 📝 Descripción
Un restaurante necesita un sistema digital para que sus clientes hagan reservaciones de mesas en línea, y para que el personal administrador gestione el estado de cada reserva.

La API resuelve los siguientes casos de uso:

1. Los clientes se registran, inician sesión y hacen reservaciones eligiendo mesa, fecha, hora y número de comensales.
2. El sistema valida que la mesa no esté ocupada en el mismo bloque de fecha y hora antes de confirmar.
3. Los administradores pueden ver todas las reservaciones, cambiar su estado y gestionar el catálogo de mesas.

> ### ⚙️ Requerimientos
> 
> **Base de datos postgres:**
> Crear la base de datos **bdrestaurante** en postgres, y luego, ejecutar el archivo adjunto **.sql** que se encuentra en la carpeta **database** del repositorio.


# 🔑 Autenticación — /api/auth

| Método | Endpoint | Descripción | Acceso |
| :--- | :--- | :--- | :--- |
| POST | `/api/auth/register` | Registro de nuevo usuario (cliente) | Público |
| POST | `/api/auth/login` | Login — devuelve JWT firmado | Público |
| GET | `/api/auth/perfil` | Datos del usuario autenticado | Cliente |

<br>

# 🍽️ Mesas — /api/mesas

| Método | Endpoint | Descripción | Acceso |
| :--- | :--- | :--- | :--- |
| GET | `/api/mesas` | Listar mesas (filtro disponibilidad) | Público |
| GET | `/api/mesas/:id` | Detalle de una mesa | Público |
| POST | `/api/mesas` | Crear nueva mesa | Admin |
| PATCH | `/api/mesas/:id` | Actualizar datos de mesa | Admin |
| DELETE | `/api/mesas/:id` | Desactivar mesa (soft delete) | Admin |

<br>

# 📅 Reservaciones — /api/reservaciones

| Método | Endpoint | Descripción | Acceso |
| :--- | :--- | :--- | :--- |
| POST | `/api/reservaciones/:id` | Crear reservación (valida disponibilidad) | Cliente |
| GET | `/api/reservaciones/mis` | Mis reservaciones (usuario actual) | Cliente |
| GET | `/api/reservaciones/:estado` | Todas las reservaciones con filtros | Admin |
| PUT | `/api/reservaciones/:id/:estado` | Cambiar estado de reservación | Admin |
| DELETE | `/api/reservaciones/:id` | Cancelar propia reservación | Cliente |
