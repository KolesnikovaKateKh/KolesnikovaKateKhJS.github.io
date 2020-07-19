
// Задача № 1

let number = prompt ('Укажите число');

console.log(number*number)

// Задача № 2

let nameFirst = prompt ('Введите ваше имя')
let numberFirst = prompt ('Укажите сумму депозита')
let monthFirst = prompt ('Укажите срок (количество месяцев)')

console.log(`Уважаемый(ая) ${nameFirst}, вы внесли ${numberFirst} грн, под 20% годовых, на срок ${monthFirst} месяцев. 
За этот период вы заработаете ${((numberFirst*0.2/12)*monthFirst).toFixed(2)} грн `)

// Задача № 3

let a = +prompt ('Укажите число');
b = +prompt ('Укажите число');

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)

// Задание 2

// Задача № 1

let age = prompt (`Укажите ваш возраст`, '');

if (age > 45) {
    alert ('Вы нам не подходите!');
} 
else if (age < 18) {
    alert ('Вы нам не подходите!');
}
else {
    alert ('Вы нам подходите!');
}

// Задача № 2

let c = prompt ('Укажите число c');
    d = prompt ('Укажите число d');

if (c < 3 || c > 12) {
    alert ('Не верно!');
}
else if (d <= 5 || d > 13) {
    alert ('Не верно!');
}
else {
    alert ('Верно!');
}

// Задача № 3

let name = prompt ('Введите ваше имя')
let num = prompt ('Укажите сумму депозита')
let month = prompt ('Укажите срок (количество месяцев)')

if (month < 6) {
e = 0.15
}
else if (month > 9) {
    e = 0.17
    }
else if (month >= 6 || month < 9) {
    e = 0.16
    }
alert(`Уважаемый(ая) ${name}, вы внесли ${num} грн, под ${e*100}% годовых, на срок ${month} месяцев. 
За этот период вы заработаете ${((num*e/12)*month).toFixed(2)} грн `)
