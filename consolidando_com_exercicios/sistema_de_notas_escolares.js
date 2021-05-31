function getScore(score) {
  let scoreA = score >= 90 && score <= 100
  let scoreB = score >= 80 && score <= 89
  let scoreC = score >= 70 && score <= 79
  let scoreD = score >= 60 && score <= 69
  let scoreF = score < 60 && score >= 0

  let scoreFinal
  if (scoreA) {
    scoreFinal = "A"
  } else if (scoreB) {
    scoreFinal = "B"
  } else if (scoreC) {
    scoreFinal = "C"
  } else if (scoreD) {
    scoreFinal = "D"
  } else if (scoreF) {
    scoreFinal = "F"
  } else {
    scoreFinal = "Nota inválida"
  }

  return(scoreFinal)
}
console.log(getScore(90))
console.log(getScore(85))
console.log(getScore(75))
console.log(getScore(65))
console.log(getScore(55))
console.log(getScore(-1))
console.log(getScore(1030))

// let nota = 2
// switch(true){
//   case nota >= 90 && nota <= 100:
//   console.log("Parabéns, sua nota é A")
//   break;
//   case nota >= 80 && nota <= 89:
//   console.log("Muito bom! Sua nota é B")
//   break;
//   case nota >= 70 && nota <= 79:
//   console.log("Você pode melhorar! Sua nota é C")
//   break;
//   case nota >= 60 && nota <= 69:
//   console.log("Você pode melhorar! Sua nota é D")
//   break;
//   case nota < 60 && nota >= 0:
//   console.log("Que péssimo, sua nota é F")
//   break;
//   default: 
//   console.log("Essa nota é inválida")
// }

// let nota = 100
// if(nota > 90) {
//   console.log("Parabéns, sua nota é A")
// }else if(nota >= 80 && nota <= 89) {
//   console.log("Parabéns, sua nota é B")
// }else if(nota >= 70 && nota <= 79){
//   console.log("Parabéns, sua nota é C")
// }else if(nota >= 60 && nota <= 69){
//   console.log("Parabéns, sua nota é D")
// }else{
//   console.log("Infelizmente, sua nota é F")
// }