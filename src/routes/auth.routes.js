import { Router } from 'express';
import { registro, login, perfil } from '../controllers/auth.controller.js';
import { usuarioSchema, usuarioLoginSchema } from '../middlewares/usuario.schema.js';
import { validarEsquema } from '../middlewares/errors.middleware.js';
import { verificarToken, verificarAdmin } from '../middlewares/auth.middleware.js';

const router = Router();

router.post('/register', validarEsquema(usuarioSchema), registro) // /api/v1/auth/register
router.post('/login', validarEsquema(usuarioLoginSchema), login) // /api/v1/auth/login

// RUTA PROTEGIDA
router.get('/perfil', verificarToken, perfil)

export default router;