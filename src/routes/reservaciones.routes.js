import { Router } from 'express';
import { crearReservacion, misReservaciones, cancelarReservacion, estadoReservacion, reservaciones } from '../controllers/reservacion.controller.js';
import { reservacionSchema, reservacionUpdDelSchema } from '../middlewares/reservacion.schema.js';
import { validarEsquema } from '../middlewares/errors.middleware.js';
import { verificarToken, verificarAdmin, verificarCliente } from '../middlewares/auth.middleware.js';

const router = Router();

router.post('/:id', verificarToken, verificarCliente, validarEsquema(reservacionSchema), crearReservacion);

router.get('/mis', verificarToken, verificarCliente, misReservaciones);

router.get('/:estado', verificarToken, verificarAdmin, reservaciones);

router.put('/:id/:estado', verificarToken, verificarAdmin, estadoReservacion);

router.delete('/:id', verificarToken, verificarCliente, cancelarReservacion);

export default router;