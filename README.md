# Marjorie Silveira Psicóloga

Site estático institucional da psicóloga Marjorie Silveira, com apresentação, serviços,
depoimento, agendamento e canais de contato. Todas as páginas são HTML puro + CSS,
sem backend — o agendamento ocorre via WhatsApp.

## Estrutura

```
site_maju/marjoriesilveirapsi/
├── index.html            Página inicial
├── sobre.html            Apresentação da profissional
├── servicos.html         Serviços oferecidos
├── contato.html          Canais de contato
├── agendamento.html      Início do agendamento por WhatsApp
├── style.css             Estilos principais
├── script.js             Menu lateral (responsivo)
├── favicon.png / favicon.ico  Ícones do site
├── imagens/
│   ├── logos/            Logo (Group-2.png, Marjorie (8).png)
│   └── imgpsicologamarjorie/  Fotos de sessão (psi1–psi4.jpg)
└── .gitignore            Arquivos a serem ignorados pelo Git
```

## Executar localmente

### Opção 1 — Navegador (sem instalar nada)

Basta abrir o arquivo `index.html` no navegador. Caso prefira um servidor web:

```bash
# Python 3 (módulo padrão)
python3 -m http.server 8000
# Acesse http://localhost:8000
```

### Opção 2 — Docker

```bash
docker build -t marjoriesilveirapsi .
docker run -p 8080:80 marjoriesilveirapsi
# Acesse http://localhost:8080
```

## Deploy

O site é totalmente estático e pode ser hospedado em qualquer plataforma de
serviço estático. Exemplos:

- **GitHub Pages** — envie o diretório raiz para a branch `main` e ative no GitHub.
- **Netlify / Vercel / Cloudflare Pages** — conecte o repositório e instale.
- **Apache / Nginx** — copie os arquivos para o diretório raiz do webroot.

## Contato

- WhatsApp: https://wa.me/5511962665355
- E-mail: marjoriessilveira@gmail.com
- Instagram: https://www.instagram.com/psimarjorie
