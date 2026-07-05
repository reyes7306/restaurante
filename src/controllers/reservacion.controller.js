import { z } from 'zod';
import { prisma } from '../../prisma/client.js';

export const misReservaciones = async (req, res) => {
    try {
        const reservaciones = await prisma.reservacion.findMany({
            where: { usuarioId: Number(req.usuario.id) }
        });
        return res.status(200).json({ data: reservaciones });
    } catch (error) {
        return res.status(404).json({ mensaje: "No tiene reservaciones" })        
    }
}

export const crearReservacion = async (req, res) => {
    const idMesa = Number(req.params.id)
    const mesa = await prisma.mesa.findUnique({
        where: { id: idMesa },
    });

    if(!mesa)
        return res.status(404).json({ error: "Mesa no encontrada" })
    else if(!mesa.disponible)
        return res.status(410).json({ error: "Mesa no esta disponible" })

    const { fecha, hora, personas } = req.body;

    const reservacion = await prisma.reservacion.create({
        data: {
            fecha,
            hora,
            personas,
            mesaId: idMesa,
            usuarioId: req.usuario.id
        }
    });

    const estadoMesa = await prisma.mesa.update({
        where: { id: idMesa },
        data: { disponible: false }
    });

    res.status(201).json({ 
        mensaje: "Reservación registrada correctamente", 
        data: reservacion
    });
}

export const reservaciones = async (req, res) => {
    const estadoParam = z.coerce.string().pipe(z.enum(["pendiente", "cancelada", "confirmada"])).safeParse(req.params.estado);

    if (!estadoParam.success) {
        return res.status(400).json({
            error: "Parámetro inválido",
            mensaje: estadoParam.error.issues[0].message
        });
    }

    const estado = estadoParam.data;

    try {
        const reservaciones = await prisma.reservacion.findMany({
            where: { estado: estado }
        });

        if(!reservaciones) return res.status(404).json({ mensaje: "Reservaciones no encontradas" });
        if(reservaciones.length === 0) return res.status(200).json({ mensaje: `No hay reservaciones en estado: ${estado}` });

        return res.status(200).json({ data: reservaciones})
    } catch (error) {
        return res.status(404).json({ mensaje: error.message });
    }
}

export const estadoReservacion = async (req, res) => {
    const idParam = z.coerce.number({ mensaje: "El ID en la URL debe ser un número válido" }).safeParse(req.params.id);
    const estadoParam = z.coerce.string().pipe(z.enum(["pendiente", "cancelada", "confirmada"])).safeParse(req.params.estado);

    if (!idParam.success) {
        return res.status(400).json({
            error: "Parámetro inválido",
            mensaje: idParam.error.issues[0].message
        });
    }

    if (!estadoParam.success) {
        return res.status(400).json({
            error: "Parámetro inválido",
            mensaje: estadoParam.error.issues[0].message
        });
    }

    const id = idParam.data;
    const estado = estadoParam.data;

    try {
        const miReservacion = await prisma.reservacion.findFirst({
            where: {
                AND: [
                    { id: id },
                    { NOT: { estado: estado } }
                ]
            }
        });

        if(miReservacion) {
            const reservacion = await prisma.reservacion.update({
                where: { id: id },
                data: { estado: estado}
            });

            if(estado != "confirmada") {
                const mesa = await prisma.mesa.update({
                    where: { id: reservacion.mesaId },
                    data: { disponible: true }
                })
            }

            return res.status(201).json({ 
                mensaje: `Reservación ${estado} con éxito` 
            });
        } else {
            return res.status(403).json({ mensaje: `El estado ya fue cambiado a ${estado}` });
        }
    } catch (error) {
        return res.status(404).json({ mensaje: error.message });
    }
}

export const cancelarReservacion = async (req, res) => {
    const idParam = z.coerce.number({ mensaje: "El ID en la URL debe ser un número válido" }).safeParse(req.params.id);

    if (!idParam.success) {
        return res.status(400).json({
            error: "Parámetro inválido",
            mensaje: idParam.error.issues[0].message
        });
    }

    const id = idParam.data;

    try {
        const miReservacion = await prisma.reservacion.findFirst({
            where: {
                AND: [
                    { id: id },
                    { usuarioId: Number(req.usuario.id) },
                    { NOT: { estado: "cancelada" } }
                ]
            }
        });

        if(miReservacion) {
            const reservacion = await prisma.reservacion.update({
                where: { id: id },
                data: { estado: "cancelada"}
            });

            const mesa = await prisma.mesa.update({
                where: { id: reservacion.mesaId },
                data: { disponible: true }
            })

            return res.status(201).json({ 
                mensaje: "Reservación cancelada con éxito" 
            });
        } else {

        }
        return res.status(403).json({ mensaje: 'Reservación ya fue cancelada o no encontrada' });
    } catch (error) {
        return res.status(404).json({ mensaje: 'Reservación no encontrada' });
    }
}