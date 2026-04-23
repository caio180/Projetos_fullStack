import express from 'express';
import sqlite3 from 'sqlite3';
const app = express();
const porta = process.env.PORT;
app.use(express.json());
const db = new sqlite3.Database('/database/banco.db');


let usuario = {}

app.get('/', (req, res) => {
    res.send('Servidor funcionando');
});

app.post('/cadastro', (req, res) => {
    const {nome, email, senha} = req.body;

    usuario = {nome, email, senha};

    res.json({
        mensagem: 'Cadastro realizado com sucesso'
    });
});

app.get('/cadastro', (req, res) => {
    res.json(usuario)

});

app.listen(porta, () => 
    console.log("Servidor rodando na porta http://localhost:3000") 
);
