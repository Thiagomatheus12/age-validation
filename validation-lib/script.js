// fazer um validador de idade que não aceite se o usuário tiver menos de 18 anos e mais de 60 anos usando a data de nascimento
const today = dayjs()

function checkAge(data) {
  const age = today.diff(data, 'year')
  if (today.isBefore(data, 'month') || (today.isSame(data, 'month') && today.isBefore(data, 'DD'))){ 
    age -= 1;
  }
  return age
}

function ageIsValid(age) {
  age = checkAge(age);
  if (age >= 18 && age <= 60) {
    return true
  } else {
    return false
  }
}

console.log(ageIsValid('2005/08/17') === true) // 18 anos
console.log(ageIsValid('2005-10-01') === false) //17 anos
console.log(ageIsValid('1962/11/17') === true) // 60 anos
console.log(ageIsValid('1962-08-17') === false) // 61 anos
console.log(checkAge('2005-08-17')) // 18 anos
console.log(checkAge(dayjs('1962/08/17'))) // 61 anos