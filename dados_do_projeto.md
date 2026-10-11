# Dados do Projeto — Marjorie Silveira Psicóloga

**Caminho:** `/home/vinicius/projetos/site_maju/marjoriesilveirapsi`
**Tamanho:** ~4,4 MB (no disco)
**Total de arquivos:** 17 (excluindo `.git`)
**Tecnologias:** HTML5, CSS3 (variáveis CSS, media queries), JavaScript (menu sólido)
**Idioma:** Português (pt-BR)

---

## 1. Estrutura de Diretórios

```
marjoriesilveirapsi/
├── agendamento.html
├── contato.html
├── imagens/
│   ├── icons/
│   │   └── WhatsApp.svg
│   ├── imgpsicologamarjorie/
│   │   ├── psi1.jpg
│   │   ├── psi2.jpg
│   │   ├── psi3.jpg
│   │   └── psi4.jpg
│   │   └── optimized/
│   │       ├── psi1.jpg
│   │       ├── psi2.jpg
│   │       ├── psi3.jpg
│   │       └── psi4.jpg
│   └── logos/
│       ├── Group-2.png
│       └── Marjorie (8).png
├── index.html
├── servicos.html
├── sobre.html
├── style.css
└── .git/
```

---

## 2. Arquivos Principais

### Páginas HTML (5)

| Arquivo | Título da Página | Conteúdo | Imagem Usada |
|---|---|---|---|
| `index.html` | Bem-vindo | Seção hero com 2 blocos, CTA WhatsApp | psi1, psi2, psi4 |
| `sobre.html` | Sobre Marjorie | Depoimento e abordagem da psicóloga | psi1 |
| `servicos.html` | Serviços Oferecidos | Lista de serviços | psi4 |
| `agendamento.html` | Agende Sua Sessão | Presencial/online, CTA WhatsApp | psi2 |
| `contato.html` | Entre em Contato | WhatsApp, e-mail, Instagram | psi3 |

### Estilo

- **`style.css` (252 linhas):** tema verde-escuro `#3b4e3b`, botão WhatsApp verde clara `#25d366`.
- Responsividade ativada em `max-width: 768px`.

### Imagens

- 4 fotos da psicóloga (`psi1`–`psi4.jpg`), com **duas versões** (otimizada e não otimizada).
- Logo: `Group-2.png`, `Marjorie (8).png`.
- Ícone WhatsApp: `WhatsApp.svg` (SVG).

---

## 3. Git

- **Repositório remoto:** `https://github.com/viniciooswilson/marjoriesilveirapsi.git`
- **Branches locais:** `main`, `develop`, `develop_com_hermes`, `prototipo_site_bordo`
- **Histórico:** 19 commits
- **Último commit:** `0a8ea54` — Merge pull request #1 (melhorias com Hermes)
- **Status:** limpo (sem alterações não rastreadas)

---

## 4. Problemas Detectados

1. **Fechamento de `container`:** `agendamento.html`, `servicos.html` e `contato.html` não fecham corretamente a tag `<div class="container">`.
2. **Preenchimento de `<br>`**: `sobre.html` e `agendamento.html` usam `<br><br><br>` para espaçamento em vez de margin/padding.
3. **Duplicação de imagens:** 8 JPEGs, mas 4 são redundantes (mesmas fotos em pasta `optimized` e sem `optimized`).
4. **Títulos genéricos:** páginas secundárias usam `Título da Página | Marjorie Silveira Psicóloga`.
5. **`<footer>` fora de `<body>`**: `index.html` coloca o rodapé depois de `</html>` (HTML5 corrige, mas é um padrão incorreto).
