const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 8000;

app.use(express.static(path.join(__dirname)));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


app.get('/api/data', (req, res) => {
    fs.readFile(path.join(__dirname, 'data.json'), 'utf-8', (err, data) => {
        if (err) {
            res.status(500).json({ error: 'Erro ao ler o arquivo JSON' });
        } else {
            res.json(JSON.parse(data));
        }
    });
});


app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});