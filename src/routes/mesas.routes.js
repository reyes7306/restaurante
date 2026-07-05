import { Router } from 'express';
import { listarMesas, detalleMesa, crearMesa, actualizarMesa, eliminarMesa } from '../controllers/mesas.controller.js';
import { mesaSchema, mesaUpdateSchema, mesaDeleteSchema } from '../middlewares/mesa.schema.js';
import { validarEsquema } from '../middlewares/errors.middleware.js';
import { verificarToken, verificarAdmin } from '../middlewares/auth.middleware.js';

const router = Router();

router.get('/', listarMesas);

router.get('/:id', detalleMesa);

router.post('/', verificarToken, verificarAdmin, validarEsquema(mesaSchema), crearMesa);

router.patch('/:id', verificarToken, verificarAdmin, validarEsquema(mesaUpdateSchema), actualizarMesa);

router.delete('/:id', verificarToken, verificarAdmin, validarEsquema(mesaDeleteSchema), eliminarMesa);

export default router;