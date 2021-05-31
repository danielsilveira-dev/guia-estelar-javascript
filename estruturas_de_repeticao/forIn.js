let person = {
  name: 'Daniel',
  age: 36,
  weigth: 88.6
}

for(let property in person) {
  console.log(property)
  console.log(person[property])
}