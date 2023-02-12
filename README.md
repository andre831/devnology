# E-commer - Denvnology - Front-End

## O que você encontrará aqui:

Este repositório contém todo o material necessario para você renderizar o front-end do E-commerce.

## Quais ferramentas foram utilizadas para fazer este e-commerce?

O projeto foi feito coom base em Vue-Class-Component e Typescript. Além disso, você encontrará requisições asspincronas feitas com Axios, interfaces com Typescript, controle de estado com Vuex e todo roteamento e controle de rotas feito com Vue Router.

## Estrutura de pastas e arquitetura:

Com a utiliziação de Vue-Class-Component, conseguimos utilizar o príncipio da inversão de dependências (feito com Vue-Invesify-Props, abstração da biblíoteca Inversify), trazendo o conceitos de IoC. Baseado nisso, teremos serviços controladores que ficam disponíveis para a aplicaçãp inteira, possibilitando requiioções controladas ao banco de dados, chamadas seguras a API's e métodos feitos por nós mesmos.

- `Public`

  Responsável por manter o index.html, esqueleto da aplicação.

- `Src`

  Local onde ficam armazenados todo o core da aplicação.

  - `Assets`

    Responsável por armazenar todas as mídias que a aplicação possa vir a ter.

  - `Components`

    Responsável por manter todos os components da aplicação, se necessário, aqui dentro criamos apenas mais um nível de pasta para armazenar componentes diretamente relacionados, ou uma pasta de layout guardando componentes que serão renderizados em todas as páginas.

  - `Router`

    Pasta responsável pelo roteamento do site.

  - `Services`

    Se responsabiliza por guardar todos os serviços que serão distribuidos por toda a aplicação.

    Dentro da desta pasta é sempre será criado umaa pasta com uma interface que servirá como contrato para a classe que implementa-la, desta forma trazendo mais segurança as chamadas dos métodos.

  - `Store`

    Pasta responsável por armazenar os módulos controladores de estado da aplicação. Além disso, encontra-se um index que possibilita que seja feita a chamada dos getters e outros metodos disponibilizados pela store.

  - `Styles`

    Onde são armazenados todos os estilos padrões da aplicação, como: paleta de cores, botões, resets e configurações para a quebra de tela.

  - `Types`

    Resposável por armazenar todas as interfaces da aplicação. Nestes arquivos são encontrados tipagens para todas as propriedas dentro de seus objetos.

  - `Views`

    Pasta onde é armazenado todas as páginas do sistema.

- `App.container.ts`

  Reponsável por gerenciar e disponibilizar os serviços e contratos.

- `App.vue`

  Componente principal da aplicação.

- `Main.ts`

  Arquivo fonte do projet.

## Como rodar

É necessário estar na pasta do projeto. Então:

- Use `docker build -t devnology-frontend .`

  Com este comando será possível buildar a imagem com os recursos necessários para usarmos uma versão de desenvolvimento.

- Após isso, use `docker run  -p 8080:80 --rm --name devnology-frontend devnology-frontend`

  Caso a porta `8080` esteja ocupada, altere e seja feliz. ✨

- Acesse: http://localhost:8080
