# Portfólio de Keven Souza

Site pessoal de apresentação profissional, usado em candidaturas, LinkedIn,
GitHub e currículo.

Publicado em **https://kevensouza.vercel.app**

## Stack

HTML, CSS e JavaScript puro. Sem framework, sem dependência e sem passo de
build: o que está na pasta é exatamente o que vai para o ar.

| Arquivo | Papel |
|---|---|
| `index.html` | todo o conteúdo, em HTML semântico |
| `css/styles.css` | toda a aparência, em blocos comentados |
| `js/main.js` | ano do rodapé, menu do celular, seção ativa, foto e revelação no scroll |

Tipografia Inter e JetBrains Mono, servidas pelo Google Fonts, com fallback do
sistema.

## Estrutura

```
keven-portfolio/
├── index.html
├── css/styles.css
├── js/main.js
├── assets/
│   ├── Keven-Souza-CV.pdf              currículo para download
│   ├── images/keven-souza.jpg          foto do hero
│   ├── icons/favicon.svg               ícone da aba
│   └── projects/*.webp                 imagens dos cases
└── README.md
```

## Seções

Hero, Evolução (quatro fases), Projetos, Método, Stack, Experiência e Contato.

A seção **Projetos** é editorial, não usa cards. Cada case é um
`<article class="project-feature">` com duas colunas: texto e imagem. O segundo
recebe também a classe `project-feature--reversed`, que inverte a ordem no
desktop e espelha a proporção das colunas para que as duas imagens fiquem com a
mesma largura. No celular tudo vira coluna única, sempre na ordem texto, CTA,
imagem.

Os dois cases apontam para repositórios públicos de showcase:

- https://github.com/kevensouza-dev/ecommerce-motopecas-showcase
- https://github.com/kevensouza-dev/painel-juridico-showcase

Cada case tem dois caminhos para o mesmo destino: o link "Ver case técnico" e a
própria imagem.

## Manutenção

**Textos.** Cada seção do `index.html` começa com um comentário em caixa alta
(`01 · MINHA EVOLUÇÃO`, `02 · PROJETOS`, e assim por diante). É HTML comum.

**Foto.** Substitua `assets/images/keven-souza.jpg` por outro recorte quadrado.
Se o arquivo faltar, entra um monograma discreto no lugar, nunca uma imagem
quebrada.

**Currículo.** Substitua `assets/Keven-Souza-CV.pdf` mantendo o nome. Se trocar
o nome, atualize os dois links do `index.html`: o botão do hero e a lista de
contato.

**Imagens dos cases.** Use WebP, proporção 8:5, largura em torno de 1500 px.
Atualize `src`, `width`, `height` e o `alt` da imagem correspondente. Para
converter um PNG:

```bash
npx sharp-cli -i entrada.png -o saida.webp -f webp -q 84
```

**Novo case.** Copie um bloco `<article class="project-feature">` inteiro,
troque o conteúdo e alterne a classe `project-feature--reversed` para manter a
alternância entre texto e imagem.

## Rodar localmente

Abrir o `index.html` com dois cliques já mostra o site. Para conferir caminhos
relativos e cache como em produção, sirva a pasta:

```bash
python3 -m http.server 4173
```

Depois abra `http://127.0.0.1:4173`.

## Publicação

O repositório está conectado à Vercel. Todo push na branch `main` publica
sozinho, sem build e sem configuração. Não existe variável de ambiente nem
processo de deploy manual.

## Acessibilidade

O que já está aplicado e não deve se perder nas próximas edições: HTML
semântico com landmarks, hierarquia de títulos sem pulos, link "Ir para o
conteúdo", foco visível, alvos de toque de no mínimo 44 px, contraste acima de
4,5:1, `prefers-reduced-motion` respeitado e `alt` descritivo em toda imagem de
conteúdo. Sem JavaScript, o site continua inteiro: o conteúdo é HTML, não é
gerado por script.
