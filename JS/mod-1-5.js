const countryName = 'КиТай';

const CANCELED_BY_USER = 'Отменено пользователем!';
const NO_DELIVERY = 'В выбранную страну доставка недоступна.';
const CHINA = 'Китай';
const AUSTRALIA = 'Австралия';
const INDIA = 'Индия';
const JAMAICA = 'Ямайка';
let message;
let price = 0;
let country;
if (countryName === null) {
  message = CANCELED_BY_USER;
} else {
  country = countryName[0].toUpperCase() + countryName.slice(1).toLowerCase(); // Write code on this line
  switch (country) {
    // Write code under this line
    case 'Китай':
      price = 100;
      break;

    case 'Австралия':
      price = 170;
      break;

    case 'Индия':
      price = 80;
      break;

    case 'Ямайка':
      price = 120;
      break;
  }
}
if (countryName === 'КиТай') {
  // Write code on this line
  message = `Доставка в ${country} будет стоить ${price} кредитов`;
}
if (countryName === 'ЯмайкА') {
  // Write code on this line
  message = `Доставка в ${country} будет стоить ${price} кредитов`;
}
if (countryName === 'индиЯ') {
  // Write code on this line
  message = `Доставка в ${country} будет стоить ${price} кредитов`;
}
if (countryName === 'австралия') {
  // Write code on this line
  message = `Доставка в ${country} будет стоить ${price} кредитов`;
}
if (countryName === 'ЧИЛИ') {
  // Write code on this line
  message = 'В выбранную страну доставка недоступна.';
}

console.log(message);

//если countryName равно "КитаЙ"
// то значение message будет равно
// 'Доставка в Китай будет стоить 100 кредитов'

//если countryName равно null
// то значение message будет равно
// 'Отменено пользователем!'

//если countryName равно "Чили"
// то значение message будет равно
// 'В выбранную страну доставка недоступна.'
