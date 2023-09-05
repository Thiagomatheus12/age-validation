// fazer um validador de idade que não aceite se o usuário tiver menos de 18 anos e mais de 60 anos usando a data de nascimento

let today = new Date()

function formatDate(date) {
  if (typeof date === 'number') date = date.toString();
  date = date.replaceAll('/', '')
  date = date.replaceAll('-', '')
  return date
}

function checkAge(date) {
  formattedDate = formatDate(date)
  birthdayDay = +formattedDate.slice(0, 2)
  birthdayMonth = +formattedDate.slice(2, 4)
  birthdayYear = +formattedDate.slice(4)


  presentDay = today.getDate();
  presentMonth = (today.getMonth() + 1);
  presentYear = today.getFullYear();

  const age = presentYear - birthdayYear;
  if (age < 61 && age > 18 || (age === 18 && (presentMonth > birthdayMonth || (presentMonth === birthdayMonth && presentDay >= birthdayDay)))) {
    return true;
  } else {
    return false;
  } 
}




console.log(checkAge('17-08-1963') === true)
console.log(checkAge('17/08/1962') === false)
console.log(checkAge('17/08/1996') === true)
console.log(checkAge('01/09/2005') === true)
console.log(checkAge('01/10/2005') === false)
console.log(checkAge(17081996) === true)