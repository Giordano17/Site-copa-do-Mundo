# Site Copa do Mundo 2026

## Descrição

Este projeto é um site estático sobre a Copa do Mundo 2026, desenvolvido com HTML5, CSS3 puro e JavaScript.

O site apresenta uma página inicial com contagem regressiva para a competição, páginas de equipes, estádios, preços de ingressos e grupos. Também possui páginas individuais para os grupos A até L, com seleções participantes, bandeiras, resumo e lista de jogos.

O visual segue um padrão moderno e responsivo, com cards, sombras suaves, bordas arredondadas, imagens locais, efeitos de hover e comentários explicativos nos arquivos CSS.

## Funcionalidades

- Página inicial com contagem regressiva, banner, texto informativo e cards de navegação.
- Menu fixo entre Início, Equipes, Estádios e Grupos.
- Contador regressivo para a abertura da Copa do Mundo 2026.
- Página de equipes organizada por regiões, continentes e sedes.
- Cards de seleções com imagens locais e links externos para páginas da FIFA.
- Página de estádios com os 16 estádios da Copa do Mundo 2026.
- Separação dos estádios por país: Canadá, México e Estados Unidos.
- Imagens locais dos estádios.
- Card de acesso para a página de preços.
- Página de preços com tabela HTML simples para os ingressos por estádio.
- Página de grupos com cards clicáveis dos grupos A até L.
- Páginas individuais para cada grupo.
- Bandeiras dos países em formato de imagem.
- Lista de jogos dos grupos com equipes, datas e horários.
- Rodapé padronizado com contato, marcas e redes sociais.
- Layout responsivo para desktop e mobile.

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript
- Imagens locais

## Estrutura do Projeto

```text
Site-copa-do-Mundo/
├── abertura/
│   ├── indexabertura.html
│   ├── styleabertura.css
│   ├── script.js
│   └── img/
│
├── equipes/
│   ├── indexequipes.html
│   ├── styleequipes.css
│   ├── scriptequipes.js
│   └── img/
│
├── estadios/
│   ├── indexestadios.html
│   ├── styleestadios.css
│   ├── scriptestadios.js
│   ├── img/
│   │   ├── logo-abertura.png
│   │   └── estadios/
│   └── preços/
│       ├── indexprecos.html
│       ├── styleprecos.css
│       └── scriptprecos.js
│
├── grupos/
│   ├── indexgrupos.html
│   ├── stylegrupos.css
│   ├── scriptgrupos.js
│   ├── img/
│   ├── grupo-a/
│   ├── grupo-b/
│   ├── grupo-c/
│   ├── grupo-d/
│   ├── grupo-e/
│   ├── grupo-f/
│   ├── grupo-g/
│   ├── grupo-h/
│   ├── grupo-i/
│   ├── grupo-j/
│   ├── grupo-k/
│   └── grupo-l/
│
└── README.md
```

## Páginas do Site

### Início

A página inicial apresenta a identidade visual do projeto, a contagem regressiva para a Copa do Mundo 2026, uma seção informativa sobre o torneio, banner de destaque e cards de navegação para as demais páginas.

Arquivo principal:

```text
abertura/indexabertura.html
```

### Equipes

A página de equipes exibe seleções relacionadas à Copa do Mundo 2026, organizadas por sede, continente ou região.

Cada equipe aparece em formato de card, com imagem local e link externo para a página correspondente no site da FIFA.

Arquivo principal:

```text
equipes/indexequipes.html
```

### Estádios

A página de estádios apresenta os 16 estádios da Copa do Mundo 2026 em cards informativos, separados por país:

- Canadá
- México
- Estados Unidos

Cada card mostra a cidade, o nome usado pela FIFA, o nome conhecido do estádio e uma imagem local do estádio.

Arquivo principal:

```text
estadios/indexestadios.html
```

### Preços dos Ingressos

A página de preços fica dentro da pasta `estadios/preços` e é acessada por um card em formato de botão na página de estádios.

Ela contém uma tabela HTML simples com os 16 estádios, cidade, país, nome do estádio, nome usado na Copa e preço inicial divulgado para os ingressos.

Arquivo principal:

```text
estadios/preços/indexprecos.html
```

### Grupos

A página de grupos apresenta os grupos da Copa do Mundo 2026 em cards clicáveis. Cada card redireciona para uma página individual do grupo correspondente.

Arquivo principal:

```text
grupos/indexgrupos.html
```

As páginas individuais dos grupos exibem:

- Nome do grupo.
- Seleções participantes.
- Bandeiras dos países.
- Resumo do grupo.
- Jogos com data e horário.
- Rodapé padronizado.

## Organização Visual

O site segue um padrão visual único em todas as páginas, utilizando:

- Fundo claro com tons de azul, cinza e branco.
- Cards com bordas arredondadas.
- Sombras suaves.
- Efeitos de hover.
- Títulos destacados.
- Imagens locais.
- Layout em grid e flexbox.
- Design responsivo.
- Comentários explicativos nos arquivos CSS.

## JavaScript

O JavaScript é utilizado para controlar elementos interativos do site, principalmente:

- Contador regressivo.
- Atualização dinâmica de dias, horas, minutos e segundos.
- Animações visuais de entrada em algumas páginas.

## CSS

Os arquivos CSS do projeto estão organizados por página. Cada aba possui seu próprio arquivo de estilo, mantendo o padrão visual do site.

Todos os CSS possuem comentários curtos explicando a função dos blocos, como cabeçalho, navegação, contador, cards, tabelas, rodapé e responsividade.

## Status do Projeto

O site possui as páginas principais estruturadas, navegação entre seções, página de equipes, página de estádios, página de preços, página de grupos e páginas individuais dos grupos da Copa do Mundo 2026.

## Autor

Projeto desenvolvido para estudo e prática de criação de sites com HTML, CSS e JavaScript.
