import { z } from 'zod';

export const reservacionSchema = z.object({
    fecha: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Formato YYYY-MM-DD"),
    hora: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)(:[0-5]\d)?$/, "Formato HH:mm o HH:mm:ss"),
    personas: z.number({ required_error: 'La cantidad de personas es obligatoria' })
}).transform((val) => {
  const fechaDate = new Date(val.fecha); // Prisma @db.Date
  const horaNormalizada = val.hora.length === 5 ? `${val.hora}:00` : val.hora;
  const horaDate = new Date(`1970-01-01T${horaNormalizada}Z`); // Prisma @db.Time

  if (isNaN(fechaDate.getTime()) || isNaN(horaDate.getTime())) {
    throw new Error("Fecha u hora inválidas");
  }

  return { fecha: fechaDate, hora: horaDate, personas: val.personas };
});

// Esquema de actualización parcial
export const reservacionUpdDelSchema = z.object({
    estado: z.enum(["pendiente","confirmada","cancelada"], { required_error: 'El estado es obligatoria' })
});