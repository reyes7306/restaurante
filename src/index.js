import express from 'express';
import { PORT } from './config.js';
import authRoutes from './routes/auth.routes.js';
import mesasRoutes from "./routes/mesas.routes.js";
import reservacionesRoutes from "./routes/reservaciones.routes.js";
import { jsonRoto, notFound, errorHandler } from "./middlewares/errors.middleware.js";


const app = express();

app.use(express.json());
app.get('/', (req, res) => {
    res.json({
        mensaje: 'Bienvenidos a la API de Restaurante',
        descripcion: 'API que gestiona mesas y reservaciones en base al rol del usuario',
        version: '1.0.0'
    })
});
app.use('/api/auth', authRoutes);
app.use('/api/mesas', mesasRoutes);
app.use('/api/reservaciones', reservacionesRoutes);
app.use(jsonRoto);
app.use(notFound);
app.use(errorHandler);

app.listen(PORT);


console.log('Server on port', PORT);