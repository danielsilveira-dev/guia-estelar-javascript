// if...else
// let temperature = 38
// if(temperature >= 37.5){
//   console.log('Febre alta')
// }else if(temperature < 37.5 && temperature >= 37){
//   console.log('Febre moderada')
// }else{
//   console.log('Saudável')
// }
//Dicas
// Quando if tem somente uma linha de código, posso usar sem a parte do bloco "{}"
// if(temperature >= 37.5)
//   console.log('Febre alta')
// else if(temperature < 37.5 && temperature >= 37)
//   console.log('Febre moderada')
// else
//   console.log('Saudável')
// Dica 2 - Transformar as condicionais, em variáveis que tenha 
// mais relevância, que indica o que está fazendo
let temperature = 36.5
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37

if(highTemperature){
  console.log('Febre alta')
}else if(mediumTemperature){
  console.log('Febre moderada')
}else{
  console.log('Saudável')
}
// Dica 3 - A condicional if() e else if() aceita valores thrufy e falsy
if(highTemperature){
  console.log('Febre alta')
}else if(mediumTemperature){
  console.log('Febre moderada')
}else{
  console.log('Saudável')
}