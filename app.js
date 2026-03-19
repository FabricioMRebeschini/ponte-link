const express = require('express');
const helmet = require('helmet');
const path = require('node:path');
const app = express();

console.log('App iniciando...');

// Middleware de segunraça;
app.use(helmet());

//servindo arquivos estáticos
app.use(express.static(__dirname));

//página inicial
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

//rota de redirecionamento para shoppe
app.get('/shoppe', (req, res) => {
    res.redirect('https://shopee.com.br/');
});

//rota de redirecionamento para mercado livre
app.get('/mercadolivre', (req, res) => {
    res.redirect('https://www.mercadolivre.com.br/');
});


// parta do servidor

app.listen(3000, ()=>{
    console.log('Servidor rodando em http://localhost:3000');
});




