const http = require('http');
const fs = require('fs');
const path = require('path');
const { numeroAleatorio } = require('./utils.js'); 

const requestListener = function (req, res) {
    if (req.url === "/") { 
        res.writeHead(200);
        res.end("BEM VINDO!");
    } 
    
    else if (req.url === "/sobre") { 
        res.writeHead(200);
        res.end("Pedro Lucas Ternopilski Lubina, 21 Anos, Estudante de Engenharia de Software");
    } 
    
    else if (req.url === "/contato") { 
        res.writeHead(200);
        res.end("Celular: 4002-8922");
    } 
    
    else if (req.url.startsWith('/saudacao/')) { 
        const nome = req.url.split('/')[2]; 
        const saudacao = `Ola, ${nome.charAt(0).toUpperCase() + nome.slice(1)}!`;
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.end(saudacao);
    } 
    
    else if (req.url === "/numero") { 
        const randomNum = numeroAleatorio(); 
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.end(`Numero aleatorio: ${randomNum}`);
    }
    
    else { 
        res.writeHead(404);
        res.end("Página não encontrada");
    }
};

const server = http.createServer(requestListener);
server.listen(8080, 'localhost', () => {
    console.log("Servidor está rodando em http://localhost:8080");
});
