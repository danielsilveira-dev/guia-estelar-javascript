// // vamos iniciar um bloco
// {
//   let x = 0
//   console.log(x)
// } // aqui fechamos o bloco

// var é global e, também local
// hoisting
// var x
// console.log('> existe x antes do bloco? ', x)
// {
//   var x = 0
//   // x = 0
// }
// console.log('> existe x depois do bloco? ', x)

// const e let são locais e só funcionam no escopo onde foi criada
console.log('> existe y antes do bloco? ', y)
  {
    let y = 0
  }
console.log('> existe y depois do bloco? ', y)