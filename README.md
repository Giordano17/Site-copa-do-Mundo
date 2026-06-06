# Página de Grupos - Copa do Mundo 2026

## Descrição

Esta página apresenta os grupos da Copa do Mundo 2026 de forma organizada, visual e responsiva.
O objetivo da página é permitir que o usuário acesse rapidamente cada grupo da competição e visualize suas seleções participantes, bandeiras e partidas.

A página mantém o mesmo padrão visual do site principal, utilizando cards, sombras suaves, bordas arredondadas, tipografia destacada e layout adaptável para desktop e mobile.

## Funcionalidades

- Exibição dos grupos da Copa do Mundo 2026.
- Cards clicáveis para acessar cada grupo individualmente.
- Páginas separadas para os grupos de A até L.
- Destaque visual especial para o Grupo C.
- Bandeiras dos países carregadas como imagens locais.
- Lista de seleções participantes em cada grupo.
- Exibição dos jogos com data e horário.
- Contador regressivo no cabeçalho.
- Layout responsivo para diferentes tamanhos de tela.

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript

## Estrutura da Página

A página principal dos grupos está localizada em:

```text
grupos/indexgrupos.html
```

Ela possui cards que redirecionam para as páginas individuais dos grupos:

```text
grupo-a/index-a.html
grupo-b/index-b.html
grupo-c/index-c.html
grupo-d/index-d.html
grupo-e/index-e.html
grupo-f/index-f.html
grupo-g/index-g.html
grupo-h/index-h.html
grupo-i/index-i.html
grupo-j/index-j.html
grupo-k/index-k.html
grupo-l/index-l.html
```

Cada grupo possui sua própria pasta com:

```text
index
style
script
pasta img com as bandeiras dos países
```

## Organização Visual

O site utiliza um padrão visual moderno, com:

- Fundo claro em tons de azul, cinza e branco.
- Cards com bordas arredondadas.
- Sombras suaves para profundidade.
- Efeito de hover nos elementos clicáveis.
- Títulos com destaque visual.
- Bandeiras exibidas por meio da tag `<img>`.
- Separação entre a área de integrantes do grupo e a área de jogos.

## JavaScript

O JavaScript é utilizado principalmente para:

- Contador regressivo da Copa do Mundo.
- Animações de entrada dos elementos na tela.
- Pequenas interações visuais da página.

## Responsividade

A página foi construída para se adaptar a diferentes dispositivos.
No desktop, os cards são exibidos em formato de grid.
No mobile, os elementos se reorganizam para melhor leitura e navegação.

## Observações

- O projeto não utiliza bibliotecas externas.
- As imagens das bandeiras são salvas localmente dentro da pasta `img` de cada grupo.
- As classes foram organizadas com nomes em português para facilitar a leitura e manutenção do código.
- A estrutura mantém os elementos comuns do site, como cabeçalho, navegação, contador e rodapé.

## Status do Projeto

Página de grupos criada e estruturada com páginas individuais para todos os grupos da Copa do Mundo 2026.
