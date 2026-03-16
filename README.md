# VibeNet 🌐

**VibeNet** é uma rede social simulada no estilo anos 2000 , construída com HTML, CSS e JavaScript puro. O projeto consome a [JSONPlaceholder API](https://jsonplaceholder.typicode.com/) para exibir usuários, posts, amigos, timeline e fotos de perfil de forma dinâmica,todos os dados são simulados ja que é uma api fake.

> 🚀 Deploy: [https://vibe-mzkqnolcp-victor-manuels-projects-1f1d4044.vercel.app](https://vibe-mzkqnolcp-victor-manuels-projects-1f1d4044.vercel.app) *(via Vercel)*

---

## 👥 Autores

| Nome |
|------|
| Victor |
| Olívia |
| Handrey |
| Jairo |
| Mariana |
| Caio |

---

## ✨ Funcionalidades

- Interface estilo **janela de desktop** — arrastável, com botões de minimizar, maximizar e fechar
- **Timeline** com posts dos usuários
- **Painel de amigos** lateral
- Consumo dinâmico de dados via **Fetch API**

---

## 🚀 Tecnologias

- **HTML5**
- **CSS3**
- **JavaScript ES6+** — Módulos, Async/Await, Fetch API
- **JSONPlaceholder** — API REST fake para simulação de dados
- **Vercel** — Deploy e hospedagem

---

## 📁 Estrutura do Projeto

```
VibeNet/
├── public/                      # Arquivos públicos estáticos
├── src/
│   ├── controller/              # Lógica de controle e interação com o DOM
│   │   ├── api.js               # Funções de consumo da API
│   │   ├── dragmousedown.js     # Lógica de arrastar a janela
│   │   ├── painel-friends.js    # Painel de amigos
│   │   ├── painel-profile.js    # Painel de perfil
│   │   └── timeline.js          # Feed de posts
│   ├── model/                   # Modelos de dados
│   │   ├── fotoperfil.js        # Modelo de foto de perfil
│   │   └── user.js              # Modelo de usuário
│   ├── services/                # Comunicação com a API
│   │   └── userServices.js      # Serviços de usuário
│   └── view/
│       └── css/
│           └── styles.css       # Estilos gerais
├── templates/
│   └── static/
│       ├── css/
│       │   ├── criar_perfil.css
│       │   └── login.css
│       └── html/
│           ├── criar_perfil.html
│           ├── login.html
│           └── perfil.html
├── index.html                   # Página principal (Dashboard)
├── vercel.json                  # Configuração de deploy
├── package.json
└── .gitignore
```

---

## ⚙️ Como rodar localmente

1. Clone o repositório:

```bash
git clone https://github.com/vitao-al/VibeNet.git
cd VibeNet
```

2. Abra com um servidor local. Recomendamos a extensão **Live Server** do VS Code.

> ⚠️ O projeto usa **módulos ES6** (`type="module"`), portanto **não funciona** abrindo o `index.html` diretamente pelo navegador sem um servidor HTTP.

---

## 🔌 API utilizada

O projeto consome a [JSONPlaceholder](https://jsonplaceholder.typicode.com/), uma API REST gratuita para testes e prototipagem.

| Recurso | Endpoint |
|---------|----------|
| Usuários | `GET /users` |
| Usuário por ID | `GET /users/:id` |
| Posts do usuário | `GET /users/:id/posts` |
| Tarefas do usuário | `GET /users/:id/todos` |
| Comentários do post | `GET /posts/:id/comments` |
| Álbuns do usuário | `GET /users/:id/albums` |
| Fotos do álbum | `GET /albums/:id/photos` |

---

## 📄 Licença

Este projeto está sob a licença **ISC**. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.

