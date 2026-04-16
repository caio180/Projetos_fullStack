import express from 'express';
const app = express();
const porta = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Servidor funcionando');
});

app.post('/cadastro', (req, res) => {
    const { nome, email, senha } = req.body;

    console.log(nome, email, senha);

    res.json({
        mensagem: 'Cadastro realizado com sucesso'
    });
});

app.listen(porta, () => 
    console.log("Servidor rodando na porta http://localhost:3000")
);
