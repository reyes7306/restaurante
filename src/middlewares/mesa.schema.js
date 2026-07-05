import { z } from 'zod';

export const mesaSchema = z.object({
    numero: z.number({ required_error: 'El número es obligatorio' }),
    capacidad: z.number({ required_error: 'La capacidad es obligatoria' }),
    disponible: z.boolean({ required_error: 'La disponibilidad es obligatoria' }).optional()
});

// Esquema de actualización parcial
export const mesaUpdateSchema = mesaSchema.partial();

// Esquema de eliminación (soft delete)
export const mesaDeleteSchema = z.object({
    disponible: z.boolean({ required_error: 'La disponibilidad es obligatoria' })
});
