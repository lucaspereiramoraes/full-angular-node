const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORTA = process.env.PORT || 3000;
const ARQUIVO_BANCO = path.join(__dirname, 'banco.json');

app.use(cors());
app.use(express.json());

function carregarDoArquivo() {
  try {
    if (fs.existsSync(ARQUIVO_BANCO)) {
      return JSON.parse(fs.readFileSync(ARQUIVO_BANCO, 'utf8'));
    }
  } catch (e) {}
  return [
    { id: 1, texto: 'Aprender Angular', concluida: false },
    { id: 2, texto: 'Criar servidor Node', concluida: true }
  ];
}

function salvarNoArquivo() {
  fs.writeFileSync(ARQUIVO_BANCO, JSON.stringify(tarefas, null, 2));
}

let tarefas = carregarDoArquivo();

// GET
app.get('/tarefas', (req, res) => {
  res.json(tarefas);
});

// POST
app.post('/tarefas', (req, res) => {
  const { texto } = req.body;
  if (texto) {
    const nova = {
      id: Date.now(), // ID único baseado na hora
      texto,
      concluida: false
    };
    tarefas.push(nova);
    salvarNoArquivo();
    res.json(nova);
  } else {
    res.status(400).json({ erro: 'Texto vazio' });
  }
});

// PUT - marcar como concluída/desmarcar (NOVO!)
app.put('/tarefas/:id', (req, res) => {
  const id = Number(req.params.id);
  const tarefa = tarefas.find(t => t.id === id);
  if (tarefa) {
    tarefa.concluida =!tarefa.concluida; // inverte
    salvarNoArquivo();
    res.json(tarefa);
  } else {
    res.status(404).json({ erro: 'Não achou' });
  }
});

// DELETE
app.delete('/tarefas/:id', (req, res) => {
  const id = Number(req.params.id);
  tarefas = tarefas.filter(t => t.id!== id);
  salvarNoArquivo();
  res.json({ mensagem: 'Removida' });
});

// ROTA EXTRA: Página inicial só pra não dar erro
app.get('/', (req, res) => {
  res.send(`
    <h1>Backend online! 🚀</h1>
    <p>Use <a href="/tarefas">/tarefas</a> para ver as tarefas</p>
    <p>Servidor criado na aula de Angular + Node</p>
  `);
});

app.listen(PORTA, () => {
  console.log(`✅ Servidor v2 rodando - ${tarefas.length} tarefas`);
});