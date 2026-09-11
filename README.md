# Portfólio de Keven Souza

Site pessoal de apresentação profissional, para uso em candidaturas, LinkedIn,
GitHub e currículo.

Feito em HTML, CSS e JavaScript puro, sem framework e sem build. O objetivo é
que o `index.html` continue legível e editável à mão, do mesmo jeito que o
currículo em HTML.

---

## Stack

| Camada | O que é |
|---|---|
| Estrutura | HTML semântico em um único arquivo, `index.html` |
| Estilo | CSS em `css/styles.css`, organizado em 15 blocos comentados |
| Comportamento | `js/main.js`: ano do rodapé, menu do celular, seção ativa e a foto |
| Tipografia | Inter e JetBrains Mono, via Google Fonts, com fallback do sistema |

Sem dependência, sem `node_modules`, sem passo de build. O que está na pasta é o
que vai para o ar.

---

## Estrutura

```
keven-portfolio/
├── index.html          ← todo o conteúdo do site
├── css/
│   └── styles.css      ← toda a aparência
├── js/
│   └── main.js         ← comportamento mínimo
├── assets/
│   ├── Keven-Souza-CV.pdf     ← currículo para download
│   ├── images/
│   │   └── keven-souza.jpg    ← foto profissional
│   ├── icons/
│   │   └── favicon.svg        ← ícone da aba
│   └── projects/              ← imagens de projeto, quando houver
└── README.md
```

---

## Como rodar localmente

Abrir o `index.html` com dois cliques já funciona para conferir texto e layout.

Para ver o site exatamente como ele vai se comportar publicado (caminhos
relativos, fontes, cache), suba um servidor local na pasta do projeto:

```bash
python3 -m http.server 4173
```

Depois abra `http://127.0.0.1:4173` no navegador. Para parar, `Ctrl + C`.

---

## Como editar

### Trocar a foto

A foto atual é `assets/images/keven-souza.jpg`, recorte quadrado de 700×700,
sem filtro. Para trocar, basta substituir esse arquivo por outro recorte
quadrado.

Se o arquivo faltar, aparece no lugar um monograma "KS" discreto com a legenda
"foto pendente", nunca um ícone de imagem quebrada. O site detecta sozinho
quando o arquivo volta a existir.

Para usar outro nome ou outro formato, mude o `src` do `<img>` dentro de
`<figure class="portrait">`, no `index.html`.

### Trocar o currículo

Substitua o arquivo `assets/Keven-Souza-CV.pdf` pela versão nova, mantendo o
mesmo nome.

Se preferir outro nome, ele aparece em dois lugares do `index.html`: o botão do
Hero e a lista de contato. Troque nos dois.

### Trocar o link do GitHub

O perfil `github.com/kevensouza-dev` aparece em dois lugares do `index.html`: o
botão do Hero e a lista da seção de contato. Para trocar, basta editar o `href`
nos dois.

### Trocar e-mail, LinkedIn e outros links

Estão todos na seção `06 · CONTATO` do `index.html`, mais o botão do LinkedIn no
Hero. São `href` comuns: basta trocar o endereço.

### Editar textos

Cada seção do `index.html` começa com um comentário em caixa alta
(`01 · MINHA EVOLUÇÃO`, `02 · PROJETOS`, e assim por diante). O texto é HTML
normal: `<p>` para parágrafo, `<li>` para item de lista.

---

## Como adicionar um projeto novo

Na seção `02 · PROJETOS`, copie um bloco `<article class="project">` inteiro e
troque o conteúdo:

```html
<article class="project">
  <header class="project-head">
    <h3>Nome do projeto</h3>
    <p class="mono project-stack">Tecnologia · Tecnologia · Tecnologia</p>
  </header>
  <div class="project-body">
    <p class="project-lead">Uma frase sobre o que o projeto é.</p>
    <ul class="marks">
      <li>Ponto técnico interessante.</li>
    </ul>
    <p class="project-status">
      <span class="dot" aria-hidden="true"></span>
      Projeto privado · Case técnico em preparação
    </p>
  </div>
</article>
```

O CSS já cobre o bloco novo: filete de separação, marcadores e responsividade
saem prontos.

Para adicionar uma **fase** na timeline, o mesmo vale para
`<li class="phase">`, na seção `01 · MINHA EVOLUÇÃO`.

---

## Como ativar os cases técnicos

Cada projeto tem um link "Ver case técnico" já escrito e comentado no
`index.html`. Procure por:

- `CASE TÉCNICO: painel-juridico-showcase`
- `CASE TÉCNICO: shopping-motopecas-showcase`

Quando a página do case existir:

1. Troque `URL-DO-CASE` pelo endereço real.
2. Remova os marcadores `<!--` e `-->`.

A regra adotada aqui: enquanto a URL não existe, o botão não aparece. Nada de
link quebrado nem de botão desabilitado ocupando espaço.

---

## Acessibilidade e desempenho

O que já está aplicado, para não se perder nas próximas edições:

- HTML semântico com landmarks (`header`, `main`, `section`, `footer`) e
  hierarquia de títulos sem pulos.
- Link "Ir para o conteúdo" antes do cabeçalho.
- Foco visível em todos os elementos interativos, navegação por teclado.
- Alvos de toque com no mínimo 44 px de altura no celular.
- `prefers-reduced-motion` respeitado: quem desativou animação não recebe
  nenhuma.
- Sem JavaScript, o site continua inteiro. O conteúdo é HTML, não é gerado por
  script.
- Quatro requisições no total: HTML, CSS, JS e as fontes.

Ao editar, mantenha: `alt` em toda imagem de conteúdo, contraste do texto e
títulos em ordem (`h2` → `h3` → `h4`, sem pular nível).

---

## Publicação

O site é estático: qualquer hospedagem de arquivo serve (Vercel, Netlify,
GitHub Pages). Não há build, variável de ambiente ou servidor.

Antes de publicar, dois ajustes de metadado no `<head>` do `index.html`:

1. Descomentar `og:url` e colocar o endereço final.
2. Se houver imagem de compartilhamento, salvar em
   `assets/images/og-keven-souza.png` e descomentar as três linhas de
   `og:image`.
