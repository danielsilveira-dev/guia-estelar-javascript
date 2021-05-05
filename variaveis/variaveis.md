# Variáveis
  * Nomes simbólicos para receber algum valor
  * Atalhos de código
  * Identificadores
  * 3 palavras reservadas para criar uma variável
    * var
    * let
    * const
O JS é uma linguagem fracamente tipada e dinâmica
 - Variáveis não precisam ter um tipo previamente definido
 - Podemos mudar o conteúdo de uma variável
# Scope
 * Escopo determina a visibilidade de alguma variável no JS
## var
```js
// var é global e poderá funcionar fora de um escopo de bloco
console.log('> existe x antes do bloco? ', x) // undefined
{
  var x = 0
}
console.log('> existe x depois do bloco? ', x)
```
## let e const
## Block Statement
```js
// vamos iniciar um bloco
{
  //aqui dentro é um bloco e posso colocar qualquer código
} // aqui fechamos o bloco
```
O bloco, também criará um novo escopo. Chamamos de `block-scoped`

## Declaration assignment var