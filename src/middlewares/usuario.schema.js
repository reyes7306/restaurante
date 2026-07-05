import { z } from 'zod';

export const usuarioSchema = z.object({
    nombre: z.string({ required_error: 'El nombre es obligatorio' }).trim().min(1, { message: "El nombre no puede estar vacío o contener solo espacios" }),
    correo: z.string().email('El formato del correo es inválido').trim().min(1, { message: "El correo electrónico no puede estar vacío o contener solo espacios" }),
    password: z
        .string()
        .min(8, { message: "La contraseña debe tener al menos 8 caracteres." })
        .regex(/[A-Z]/, { message: "La contraseña debe contener al menos una letra mayúscula." })
        .regex(/[a-z]/, { message: "La contraseña debe contener al menos una letra minúscula." })
        .regex(/[0-9]/, { message: "La contraseña debe contener al menos un número." })
        .regex(/[^A-Za-z0-9]/, { message: "La contraseña debe contener al menos un carácter especial." })
});

// Esquema de actualización parcial
export const usuarioLoginSchema = z.object({
    correo: z.string().email('El formato del correo es inválido').trim().min(1, { message: "El correo electrónico no puede estar vacío o contener solo espacios" }),
    password: z
        .string()
        .min(8, { message: "La contraseña debe tener al menos 8 caracteres." })
        .regex(/[A-Z]/, { message: "La contraseña debe contener al menos una letra mayúscula." })
        .regex(/[a-z]/, { message: "La contraseña debe contener al menos una letra minúscula." })
        .regex(/[0-9]/, { message: "La contraseña debe contener al menos un número." })
        .regex(/[^A-Za-z0-9]/, { message: "La contraseña debe contener al menos un carácter especial." })
});