// throw
function sayMyName(name = '') {
  if(name === '') {
    throw 'Nome é obrigatório' //new Error("Nome é necessário")
  }
  console.log('depois do erro')
}
// try...catch
try {
  sayMyName('Daniel')
}catch(e) {
  console.log(e)
}
console.log('Após o try/catch')