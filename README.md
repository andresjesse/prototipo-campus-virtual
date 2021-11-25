# Campus Virtual - SEI-SICITE 2021

O SEI-SICITE 2021 acabou, mas as conquistas e o aprendizado merecem seguir adiante. O Campus Virtual está agora disponível como Software Livre, podendo ser utilizado e modificado livremente pela comunidade. Em nome de toda a Comissão de TI, registro aqui sinceros agradecimentos a todos que contribuíram para o sucesso deste evento.

A seguir são apresentados os detalhes técnicos para a instalação, modificação, e extensão das funcionalidades do Campus Virtual. Sinta-se livre para adaptá-lo às suas necessidades.

## Licença de Uso

O Campus Virtual é distribuído com a licença MIT (X11):

```
Copyright 2021 Andres Jessé Porfirio

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to
do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```

## Ambiente de Desenvolvimento

O Campus Virtual (CV) é uma aplicação puramente front-end, desenvolvida com ReactJS, uma vez empacotada não requer dependências back-end. Praticamente todo o conteúdo é estático, sendo necessária a alteração do código-fonte para a sua modificação. Existem recursos externos sendo carregados por meio de requisições HTTP, majoritariamente arquivos CSV gerados e hospedados no Google Drive. Ao criar a sua própria versão do CV, você pode utilizar estratégias diferentes para gerenciar o conteúdo dinâmico, tal como um servidor back-end. A estilização é toda feita em CSS sem o uso de frameworks.

O CV foi desenvolvido e testado no seguinte ambiente:

- Sistema operacional Linux Ubuntu 20.04 LTS
- NodeJS 14.18.x
- Gerenciador de pacotes Yarn 1.22.x
- Editor VSCode

O deploy da aplicação pode ser feito em qualquer tipo de servidor, inclusive serviços de hospedagem de páginas estáticas.

## Instalação e Execução

1. Instale o NodeJS, preferencialmente via NVM: [https://github.com/nvm-sh/nvm#installing-and-updating](https://github.com/nvm-sh/nvm#installing-and-updating)

2. Instale o gerenciador de pacotes Yarn: [https://yarnpkg.com/getting-started/install](https://yarnpkg.com/getting-started/install)

3. Instale as dependências do projeto. No ambiente de desenvolvimento (pasta do projeto), execute:

```
$ yarn
$ yarn start
```

4. Observação sobre vídeos (.mp4): O CV oficial conta com vários arquivos de vídeo em formato MP4, originamente armazenados na pasta `public/videos/` eles são usados dentro de janelas modais acionadas por cliques nos prédios virtuais e links de menu. Por questão de espaço, esses arquivos não foram incluídos junto com o código-fonte. Como consequência, ao executar o CV localmente os vídeos não são carregados.

5. Empacotamento do projeto (production build):

```
$ yarn build
```

6. Nota: os arquivos de vídeo (.mp4) são excluídos dessa build e substitídos por links simbólicos em nosso servidor. Caso encontre problemas em executar a build localmente, altere o comando `"build": "react-scripts build && rm -rf build/videos",` para `"build": "react-scripts build",` no bloco `scripts` do arquivo `package.json`.

7. O resultado do empacotamento é armazenado na pasta `build` e está pronto para deploy.

## Entendendo o Projeto

O ponto de entrada da aplicação é o arquivo `src/App.js`. O gerenciamento de rotas é feito pela biblioteca `react-router-dom`. Em resumo, a estrutura do projeto é a seguinte:

```
src/
    components/   -- componentes react, alguns compostos
    pages/        -- páginas do router, Home abriga o mapa animado
    services/     -- recursos externos, dados usados nas páginas
```

## Criando novas Páginas

Para criar novas páginas (ou excluir as existentes):

1. Altere as rotas no arquivo `src/App.js`

2. Crie uma subpasta em `src/pages/` e adicione um novo componente (páginas são componentes funcionais do ReactJS)

3. Em geral, as páginas possuem uma estrutura base:

```
<... containers>
  <TopMenu/>

  <AlgumComponenteComConteúdo/>

  <Footer/>
</>
```

## Páginas Especiais

Algumas páginas foram criadas com comportamentos genéricos, que permitem a parametrização do seu conteúdo, são elas:

```
src/pages/pdfviewer
  -- carrega um PDF a partir de uma URL e exibe-o embutido no CV
  -- o arquivo pode ser configurado pela rota, ex: localhost:3000/pdf?f=SEU_ARQUIVO.pdf

src/pages/faq
  -- FAQ e tutoriais nada mais são do que arquivos de texto do Google Docs (publicados para Web)
  -- estas páginas possuem um componente <DriveIframe url={LINK} /> que cria um iframe para um link qualquer
```

## Alterando o Menu Principal

Muitos dos conteúdos do CV foram criados como janelas modais que se encontram na pasta `src/components/modal-contents`. Para adicionar um novo conteúdo, altere o arquivo `index.js` dessa pasta, adicionando uma chave e um componente. Os conteúdos podem ser exibidos apenas na página Home, que abriga o contexto ModalContext (da Context API). Os conteúdos podem ser exibidos com `modal.show(modalContents["CHAVE"])`.

O menu principal da aplicação é a janela modal do arquivo `src/components/modal-contents/main-menu.js`.

## Modificando o Mapa Virtual

O mapa virtual é o componente responsável pela renderização do fundo (background) e das animações do CV. Existem alguns componentes associados, todos estão nas pastas `src/components/map-*/`. O componente base é o `Map`, dentro dele existem animações (única imagem, múltiplos keyframes) `MapOverlayAnim`, overlays de eventos para prédios `MapOverlay`, e pins de informação `MapPin`. O posicionamento e tamanho de todos esses elementos é feito via CSS, com valores fixos em px. O background também possui tamanho fixo (1920x1080).

Tanto o background quanto as animações foram criadas com o software [Blender](https://www.blender.org/). As animações foram renderizadas como keyframes individuais e posteriormente convertidas com o seguinte comando: `$ convert -append \*.png out.png`. Dentro do projeto do Blender, existem scripts para renderizar as animações como keyframes.

Os arquivos originais (.blend, .svg, etc.) usados na construção dos assets do CV encontram-se disponíveis na pasta `dev-assets/`.

## Processos da Semana do Evento

- Atualização da agenda: substituir services/schedule.js (array vazio renderiza uma mensagem genérica)

- Atualização dos apoiadores: substituir map-overlay-anim, atualizar frames={} em map/index.js, atualizar modal-contents/sponsor.js

- Atualização de prog: substituir services/prog-highlights (abstract pode ser null, isPresentation=true para sessões, deixar fotos na mesma pasta)

- Dicas sobre componentes genéricos:

  - pdfviewer:

    - Usar qualquer rota nos moldes de: `/pdf?f=pdf-file.pdf`
    - pdf-file deve estar em `/public/pdfs/`

  - drive-iframe:
    - Criar uma nova página, adicionar `<DriveIframe url={externalURLs["drive-url"]} />`
    - Abrir um doc no Google Drive, publicar para web como "embedded"
    - Copiar URL do iframe, adicioná-la em `externalURLs`
