# Landingpage-Boilerplate

> Base sólida, leve e escalável para construir **landing pages** e **sites simples** com **React + Vite + TailwindCSS**, seguindo o conceito de **Atomic Design**.

---

## Visão Geral

O **landingpage-boilerplate** foi criado para acelerar o desenvolvimento de landing pages modernas, mantendo uma estrutura organizada e escalável.  
A ideia é permitir **forks rápidos** e reutilizáveis — e futuramente evoluir isso para uma **lib npm** modular.

---

## Tecnologias

-  **React + TypeScript** — componentezinhos tipados e felizes
-  **Vite** — build ultrarrápido e DX de primeira
-  **TailwindCSS** — estilização utilitária e produtiva
-  **ESLint** — padrão e qualidade de código
-  **Atomic Design** — organização em _atoms_, _molecules_, _organisms_, _templates_ e _pages_

---

## Estrutura de Pastas

```md
 .
├──  eslint.config.js
├──  index.html
├──  package.json
├──  public
│ └──  assets
├── 󰣞 src
│ ├──  main.tsx
│ ├──  App.tsx
│ ├──  App.css
│ ├──  index.css
│ ├──  lib
│ │ ├──  constants
│ │ ├──  hooks
│ │ └──  utils
│ └──  view
│ ├──  components
│ ├──  layouts
│ ├──  pages
│ └──  sections
├──  tsconfig.app.json
├──  tsconfig.node.json
├──  vite.config.ts
└──  package-lock.json
```

Description:

- eslint.config.js - `Configuração de lint`
- index.html - `Documento principal`
- package.json - `Dependências e scripts`
- public - `Recursos públicos`
  - assets - `Imagens, ícones, fontes, etc.`
- src - `Código-fonte principal`
  - main.tsx - `Ponto de entrada React`
  - App.tsx - `Componente raiz`
  - App.css - `Estilos globais do App`
  - index.css - `Estilos base`
  - lib - `Módulos auxiliares`
    - constants - `Constantes globais`
    - hooks - `Hooks personalizados`
    - utils - `Funções utilitárias`
  - view - `Estrutura Atomic Design`
  - components - `Átomos e moléculas`
  - layouts - `Templates e estruturas de página`
  - pages - `Páginas completas`
  - sections - `Sessões reutilizáveis`
- tsconfig.app.json
- tsconfig.node.json
- vite.config.ts
- package-lock.json

---

## Scripts Principais

| Comando           | Descrição                                  |
| ----------------- | ------------------------------------------ |
| `npm install`     | Instala todas as dependências              |
| `npm run dev`     | Inicia o servidor de desenvolvimento       |
| `npm run build`   | Gera o build de produção                   |
| `npm run preview` | Faz o preview do build localmente          |
| `npm run lint`    | Roda o linter e verifica padrões de código |

---

## Como Usar

1. **Clone o repositório**

```bash
git clone https://github.com/seuusuario/landingpage-boilerplate.git
```

2. **Instale as dependências**

```bash
npm install
```

3. **Rode o Código (develop)**

```bash
npm run dev
```

4. **Crie um fork**
   Use este boilerplate como ponto de partida para suas próximas landing pages.

---

## Filosofia do Projeto

A estrutura segue o Atomic Design, promovendo reutilização, padronização e manutenção simples.

Cada nível tem sua função:

- Components: blocos básicos de interface (átomos e moléculas)
- Layouts: padrões de estrutura da página
- Sections: áreas reutilizáveis dentro de uma página
- Pages: composições finais de seções + layout

---

## Roadmap

- Criar CLI para geração de novas seções e páginas
- Publicar como pacote npm
- Adicionar suporte a dark mode
- Incluir templates pré-prontos (hero, pricing, faq, etc.)

---

## Licença

Distribuído sob a licença MIT — use, modifique e compartilhe livremente.
Mas lembre-se: com grandes boilerplates vêm grandes responsabilidades.

---

## Autor

Felipe C. Valverde
(git: felipeC20312)
Desenvolvedor Web Pleno
