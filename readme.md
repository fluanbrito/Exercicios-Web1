## 🧾 Descrição

Exercícios praticados na aulas de Desenvolvimento WEB I - 08/03/2023

- AT1:  Crie uma página HTML, CSS e JavaScript, que tenha um formulário para geração automática de senhas, usando 8 caracteres alfa numéricos armazenados em um array. Use a função 'Math.random() * 9' para gerar índices aleatórios para o array. ['a','e','i','o','u','1','2','3','4','5']

- AT2: Crie uma página HTML, CSS, JavaScript que tenha uma div e um range que serve para controlar o tamanho da fonte da div.

- AT3: Crie uma página HTML com um botão 'Adicionar' que ao ser clicado adiciona divs editáveis e de cor de fundo aleatória.

<h1>

## ⚙️ Estrutura

## AT1

### Script.js
- A função gerarSenha() cria uma senha aleatória de 8 caracteres a partir de uma lista de caracteres que inclui vogais e números. A senha é exibida em um campo de entrada HTML com o id "senha" e adicionada a uma tabela HTML com o id "senhas-geradas".

### GerarSenha.html
- O elemento title define o título da página, que é "Gerador de Senhas".
- A tag link define o arquivo de estilo "style.css" usado para estilizar a página.
- O elemento body contém todo o conteúdo visível na página web.
- O elemento div com a classe "container" contém todo o conteúdo da página.
- O elemento h1 define o título principal da página, que é "Gerador de Senhas".
- O elemento form contém o campo de entrada e o botão para gerar senhas.
- O elemento label define um rótulo para o campo de entrada.
- O elemento input define o campo de entrada que exibe a senha gerada.
- O botão Gerar Senha é usado para gerar senhas aleatórias.
- O elemento table contém as senhas geradas anteriormente, exibidas em uma tabela.
- A tag thead define a cabeçalho da tabela, que inclui uma única coluna "Senha".
- O elemento tbody contém as senhas geradas, que são adicionadas a cada vez que o botão é clicado.
- O elemento script é usado para incluir o arquivo JavaScript "script.js" que contém a função gerarSenha() usada para gerar senhas aleatórias.

### Style.css

- O corpo da página terá uma fonte sans-serif e uma cor de fundo cinza claro (#f2f2f2).
- O elemento com a classe "container" terá uma largura máxima de 400 pixels, ficará centralizado horizontalmente com a margem automática, terá um preenchimento de 20 pixels, um fundo branco (#fff) e uma sombra de caixa leve.
- O elemento "h1" terá um texto centralizado e sem margem superior.
- O formulário terá um layout de coluna com os itens centralizados verticalmente.
- Os rótulos terão uma margem inferior de 10 pixels.
- Os campos de entrada de texto terão um preenchimento interno de 10 pixels, uma margem inferior de 10 pixels, bordas arredondadas, nenhuma borda visível e uma sombra de caixa leve. 
- O texto dentro dos campos de entrada terá um alinhamento centralizado, tamanho da fonte de 1,5 rem e peso da fonte em negrito.
- O botão terá um preenchimento interno de 10 pixels verticalmente e 20 pixels horizontalmente, um fundo azul (#0077cc), bordas arredondadas, nenhuma borda visível, texto branco e negrito. 
- O cursor mudará para a forma de uma mão ao passar o mouse sobre o botão. 
- Quando o mouse estiver sobre o botão, a cor de fundo ficará mais escura (#005ea6).
<h1>

## AT2

### Index.html

- O estilo da classe "minha-div" define que a fonte será "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS" ou uma fonte sans-serif genérica, com tamanho de fonte inicial de 16 pixels. 
- A div terá uma largura de 500 pixels, uma altura de 200 pixels, um fundo cinza claro (#f2f2f2), um preenchimento interno de 20 pixels, uma margem superior e inferior de 20 pixels e um texto centralizado.
- O estilo do elemento com o id "range-fonte" define que ele terá uma largura de 80%, ficará centralizado horizontalmente e será exibido como um bloco. Este elemento é um controle deslizante de faixa (range).
- O JavaScript adiciona um ouvinte de evento de mudança no elemento com o id "range-fonte". Quando o usuário move o controle deslizante, o tamanho da fonte da div com a classe "minha-div" é atualizado para o valor do controle deslizante em pixels.
- O resultado final é uma div com um texto centralizado e um controle deslizante abaixo dela que permite ao usuário aumentar ou diminuir o tamanho da fonte do texto dentro da div.

<h1>

## AT3

### Index.html

- O corpo da página contém um botão com o ID "add-div-btn" e um contêiner de divs com o ID "div-container". 
- Quando o botão "Adicionar Div" é clicado, o código JavaScript cria uma nova div com a classe "new-div", tornando-a editável. 
- Em seguida, uma cor aleatória é gerada e atribuída como a cor de fundo da nova div, que é adicionada ao final do contêiner de divs.

- O CSS estiliza a página, incluindo a fonte, tamanho da fonte, margens, cor de fundo e estilo do botão e das divs. 
- A classe "new-div" é usada para estilizar as novas divs que são adicionadas dinamicamente. Elas têm um tamanho fixo, margem, borda arredondada, preenchimento, cor de texto branca e são centralizadas no contêiner usando o display:flex e o justify-content: center e align-items: center.

<h1>

## ✅ Resultado (Preview)
<br>

## AT1
![AT1](https://i.imgur.com/jalxw7u.png)

<br>

## AT2
![AT2](https://i.imgur.com/eOJSOka.png)

<br>

## AT3
![AT3](https://i.imgur.com/k6ieFVq.png)

<br>

## 💻 Autor

- [@Luan Ferreira](https://github.com/fluanbrito)

<h1>

## 🚀 Sobre mim
Sou um grande entusiasta e apaixonado por tecnologia, empreendedorismo e inovação. Hoje, estou a cursar o curso de Sistema de Informação pelo Instituto Federal, faço uso profissionalmente de ferramentas e me aprofundo em temas como Marketing, Machine Learning AWS, Metodologias ágeis, Gestão de Projetos, Programação Web, Administração de Sistemas, Redes de computadores, entre outros.
