const express = require('express');
const mysql = require('mysql2'); // versão mais simples sem promises

const app = express();
const port = 3000;

// Configuração do banco - substitua com seus dados
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // seu usuário
  password: '', // sua senha
  database: 'tech_info' // seu banco
});

// Tenta conectar ao banco
db.connect((err) => {
  if (err) {
    console.error('❌ ERRO ao conectar ao MySQL:', err.message);
    return;
  }
  console.log('✅ Conectado ao MySQL!');
});

// Rota simples para testar
app.get('/', (req, res) => {
  db.query('SELECT 1', (err) => {
    if (err) {
      return res.send('Banco NÃO está conectado! ❌');
    }
    res.send('Banco conectado com sucesso! ✅');
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});