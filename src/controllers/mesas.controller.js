import { z } from 'zod';
import { prisma } from '../../prisma/client.js';

export const listarMesas = async (req, res) => {
    const mesas = await prisma.mesa.findMany({
        where: { disponible: true}
    });
    res.status(200).json({ data: mesas });
}

export const detalleMesa = async (req, res) => {
    const { id } = req.params;

    const mesa = await prisma.mesa.findUnique({
        where: { id: Number(id) },
    });

    if(!mesa) return res.status(404).json({ mensaje: 'Mesa no encontrada' });

    res.status(200).json({ data: mesa });
}

export const crearMesa = async (req, res) => {
    const data = req.body;

    const mesa = await prisma.mesa.create({ data: data });

    res.status(201).json({ 
        mensaje: "Mesa registrada correctamente", 
        data: mesa
    });
}

export const actualizarMesa = async (req, res) => {
    const idParam = z.coerce.number({ mensaje: "El ID en la URL debe ser un número válido" }).safeParse(req.params.id);

    if (!idParam.success) {
        return res.status(400).json({
            error: "Parámetro inválido",
            mensaje: idParam.error.issues[0].message
        });
    }

    const id = idParam.data;
    const dataUpdate = req.body;

    try {
        const mesa = await prisma.mesa.update({
            where: { id: id },
            data: dataUpdate
        });

        res.status(200).json({
            mensaje: "Mesa actualizada con éxito",
            mesa: mesa
        });
        
    } catch (error) {
        return res.status(404).json({ mensaje: 'Mesa no encontrada' });
    }
}

export const eliminarMesa = async (req, res) => {
    const idParam = z.coerce.number({ mensaje: "El ID en la URL debe ser un número válido" }).safeParse(req.params.id);

    if (!idParam.success) {
        return res.status(400).json({
            error: "Parámetro inválido",
            mensaje: idParam.error.issues[0].message
        });
    }

    const id = idParam.data;

    try {
        const mesa = await prisma.mesa.update({
            where: { id: id },
            data: req.body
        });

        return res.status(201).json({ 
            mensaje: "Mesa eliminada con éxito" 
        });
    } catch (error) {
        return res.status(404).json({ mensaje: 'Mesa no encontrada' });
    }
}