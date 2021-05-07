# Trilha Discover
## O Guia Estelar de JavaScript

### JavaScript Core

 - Linguagem de programação que roda no navegador do usuário (front-end)
   - Se você clicar em algum botão da página e aparece uma janela, isso é o JavaScript
   - Alteração do site ou aplicativo, conforme a interação do usuário
 - Roda também no computador (back-end)

### O que podemos fazer?
 - Podemos criar aplicações web, mobile (React Native), desktop (Electron)
 - Empresas famosas que usam
    - Facebook (Instagram, Whatsapp)
    - Google (Youtube, Gmail, Drive)
    - Uber
    - Netflix
    - TikTok
    - ...
- 99.99% dos sites na web usam JavaScript
- Linguagem obrigatória para quem programa o Front-end Web

## Evolução
 - A comunidade cresce cada vez mais e a linguagem está sempre evoluindo
## O que vamos ver no curso?
 - Tipos de dados
 - variáveis
 - Funções
 - Condicionais
 - Estruturas de repetição
 - ...

# A importância da Sintaxe
 - Toda linguagem tem
 - Uma boa comunicação necessita de uma boa sintaxe
 - 82% dos erros para iniciantes programação

```js
console.log("Bem vindos ao Starter")
```
# Tipos de dados
## Gramática
 - Elementos da linguagem e suas combinações
 - A arte de falar e escrever corretamente
## Vocabulário
 - Conjunto de termos e expressões
 - Agrupamento de palavras

 - Precisamos saber como escrever
 - Precisamos saber os significados
 - Precisamos continuar aprendendo, para crescer nosso vocabulário
## Como vai ser a dinâmica do aprendizado?
 - Conceitos e escrita
 > Vamos aprender os tipos de dados mais utilizados na linguagem
  * Você sabia que é possível aprender 80% de uma linguagem nova, com cerca de 20% do vocabulário? (Até menos)
# Tipos de dados - Conclusão
Conforme o ECMAScript standard temos 9 tipos de dados:
* Data types
  * Primitive / Primitive value
  * Structural
  * Structural Primitive
## Primitivos
 * String
 * Number
 * Boolean
 * undefined
 * Symbol
 * BigInt
## Estruturais
 * Object
   * Array
   * Map
   * Set
   * Date
   * Standard built-in objects
 * Function
## Primitivo Estrutural / Structural Root Primitive
 * null

# Functions
## Para que serve?
* Dar significado a um bloco de código
* Executar um bloco de código quando quiser
* Agrupamento de código
* Criar um aplicativo de frases motivacionais

## Argumentos e parâmetros
```js
// function expression
// function anonymous

// parâmetros (parameters)
const sum =  function(number1, number2) { // Função anônima, pois esta função não foi dado um nome
  console.log(number1 + number2)
}
sum(2, 3) // arguments - argumentos
```
## Retornando valores dentro da função
```js
const sum =  function(number1, number2) { // Função anônima, pois esta função não foi dado um nome
  total = (number1 + number2)
  return total
}
let number1 = 34
let number2 = 25
console.log(`o número 1 é ${number1}`)
console.log(`o número 2 é ${number2}`)
console.log(`a soma é ${sum(number1, number2)}`)
console.log(total)
```
```js
// Função é um liquidificador
function fazerSuco(fruta1, fruta2) {
  return 'suco de: ' + fruta1 + fruta2
}
const copo = fazerSuco('banana', 'maçã')
console.log(copo)

// exemplo
function nome(parametro1, parametro2, ...) {
  // bloco de código
}
```
## Function scope
```js
// function scope
let subject
function createThink() {
  subject = 'study'
  return subject
}
console.log(subject)
console.log(createThink(subject))
console.log(subject)
```

## function hoisting
```js
// Function Hoisting

sayMyName()
// function sayMyName() {
//   console.log('Daniel')
// }

const sayMyName = function() { // undefined
  console.log('Daniel')
}
```
## Arrow function
```js
// arrow function
const sayMyName = (name) => {
  console.log(`Olá ${name}!`)
}
sayMyName('Daniel')
```
## Call Back Function
```js
// callback function
// chamar de volta
function sayMyName(name) {
  console.log('antes de executar a função callback')
  name()
  console.log('depois de executar a função callback')

}
sayMyName(
  () => {
    console.log('estou em uma callback')
  }
)
```