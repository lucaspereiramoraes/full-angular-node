# 📋 Full Angular + Node - Gerenciador de Tarefas

Projeto Fullstack completo com Angular no frontend e Node.js + Express no backend, deployado com arquitetura profissional separada.

🔗 **Live Demo:**
- **Frontend (Vercel):** https://full-angular-node.vercel.app/tarefas
- **Backend (Render):** https://meu-backend-f2z1.onrender.com/tarefas

---

### 🚀 Tecnologias

**Frontend:**
- Angular 18
- TypeScript
- Angular Router & HttpClient
- CSS3

**Backend:**
- Node.js
- Express
- CORS habilitado para produção

**Deploy & DevOps:**
- Vercel (Frontend)
- Render (Backend)
- Git & GitHub com estrutura Monorepo

### 📁 Estrutura do Projeto (Monorepo)

full-angular-node/
├── backend/ # API REST em Node.js
│ ├── server.js # Servidor Express
│ └── banco.json # Banco de dados simples em arquivo
│
└── frontend/ # App Angular
├── src/
│ └── app/
│ └── features/tarefas/
└── vercel.json # Configuração de rewrites para SPA

### ✨ Funcionalidades

- [x] Listar tarefas
- [x] Adicionar nova tarefa
- [x] Concluir / Desconcluir tarefa
- [x] Excluir tarefa
- [x] Persistência de dados no backend

### 🔧 Como rodar localmente

1. Clone o repositório:

git clone https://github.com/lucaspereiramoraes/full-angular-node.git
cd full-angular-node

2. Rode o Backend:

cd backend
npm install
node server.js
# API rodando em http://localhost:3000

3. Rode o Frontend (em outro terminal):

cd frontend
npm install
ng serve
# App rodando em http://localhost:4200

🌐 Deploy
O projeto utiliza deploy separado para melhor performance e custo:

Backend no Render: Ideal para APIs que precisam ficar ativas. Configurado com npm start.
Frontend na Vercel: Ideal para SPAs. Configurado com Output Directory: dist/meu-app/browser e rewrites para index.html.
👨‍💻 Autor
Feito por Lucas Pereira Moraes

GitHub: @lucaspereiramoraes