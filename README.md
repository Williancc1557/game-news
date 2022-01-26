<div align="center">
<img src="https://github.com/Williancc1557/game-news/blob/master/img/apigamenews.png" width="100%" alt="hi">
</div>

# Para que serve?
Deseja coletar algumas das **novidades** relacionadas a game? Como **jogos, empresas de games, até mesmo polêmicas na internet**. Então utilize essa **API facil de utilizar**.

# Primeiro passos

**Como faço para utlizar essa API?** Utilize alguma lib que sirva para realizar requests em API como um Axios da vida.

Qual a **url** da **API**? https://game-news-api.herokuapp.com

Qual site de **news** utilizado para **realizar a busca**? https://www.theenemy.com.br/

A **rota principal** da API é `/` ou seja, sem nenhum parâmetro a mais!

## Exemplo de retorno 

```json
{
  "title": "Here is News Title",
  "paragraphs": [
  "first paragraph",
  "second paragrapg",
  ". . ."
  ]
}
```

Tá, mas, eu quero **mais de uma notícia**, que que eu posso fazer?

Utilize a rota `all`, ou seja, https://game-news-api.herokuapp.com/all

Ela retorna até **10 novas notícias**, você pode **selecionar a quantidade** enviando um header com as seguintes credenciais:

```json
{
  "requestsNumber": <number>,
}
```

## Exemplo de retorno

```json
{
[{
  "title": "Here is News Title",
  "paragraphs": [
  "first paragraph",
  "second paragrapg",
  . . .]
},
{
  "title": "Here is News Title",
  "paragraphs": [
  "first paragraph",
  "second paragrapg",
  . . .]
},
{
  "title": "Here is News Title",
  "paragraphs": [
  "first paragraph",
  "second paragrapg",
  . . .]
}, 
. . .
]}
```
