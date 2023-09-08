// fazer um validador de idade que não aceite se o usuário tiver menos de 18 anos e mais de 60 anos usando a data de nascimento
const today = new Date()

function formatDate(date) {
  if (typeof date === 'number') date = date.toString();
  date = date.replaceAll('/', '')
  date = date.replaceAll('-', '')
  return date
}

function checkAge(date) {
  let formattedDate = formatDate(date)
  let birthdayDay = +formattedDate.slice(0, 2)
  let birthdayMonth = +formattedDate.slice(2, 4)
  let birthdayYear = +formattedDate.slice(4)


  let presentDay = today.getDate();
  let presentMonth = (today.getMonth() + 1);
  let presentYear = today.getFullYear();

  let age = presentYear - birthdayYear;

  if (presentMonth < birthdayMonth || (presentMonth === birthdayMonth && presentDay < birthdayDay)) {
    age -= 1;
  }

  return age;
}

function ageIsValid(age) {
  age = checkAge(age);
  if (age >= 18 && age <= 60) {
    return true
  } else {
    return false
  }
}


console.log(ageIsValid('17/11/1962') === true) // 60 anos
console.log(ageIsValid('17/08/1962') === false) // 61 anos
console.log(ageIsValid('17-10-1963') === true) // 59 anos
console.log(ageIsValid('17/08/1996') === true) // 27 anos
console.log(ageIsValid('01/05/2005') === true) // 18 anos
console.log(ageIsValid('01/10/2005') === false) //17 anos
