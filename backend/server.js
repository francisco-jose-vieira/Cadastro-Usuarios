import express from "express";
import cors from "cors"
const app = express();

app.use(express.json());
app.use(cors())

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

/* 
    - Criar um usuário
    - Listar todos os usuários
    - Editar um usuário
    - Deletar um usuário
*/

//---Criar um usuário---------------------------------------------

app.post("/usuarios", async (req, res) => {
    await prisma.user.create({
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age,
        },
    });

    res.status(201).json(req.body);
});

//---Listar todos os usuários ou usuario especifico com os Query Params (GET)-----

app.get("/usuarios", async (req, res) => {
    let users = [];

    if (req.query) {
        users = await prisma.user.findMany({
            where: {
                name: req.query.name,
                age: req.query.age,
                email: req.query.email,
            },
        });
    } else {
        users = await prisma.user.findMany();
    }

    res.status(200).json(users);
});

//---Editar um usuário----------------------------------

app.put("/usuarios/:id", async (req, res) => {
    await prisma.user.update({
        where: {
            id: req.params.id,
        },
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age,
        },
    });

    res.status(201).json(req.body);
});

//---Deletar um usuário-----------------------------------------------------------

app.delete("/usuarios/:id", async (req, res) => {
    await prisma.user.delete({
        where: {
            id: req.params.id,
        },
    });

    res.status(200).json({ message: "Usuario deletado com sucesso!" });
});

app.listen(3000);
