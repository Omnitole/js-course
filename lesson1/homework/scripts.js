/*
- Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
    Вивести кожну змінну за допомогою: console.log , alert, document.write
- Створити об'єкт book з наступними полями :
назва, (тип string)
кількість сторінок (числовий тип),
жанр (string)

- Створити об'єкт book з наступними полями :
назва, (тип string)
кількість сторінок (числовий тип),
жанр (string)
автори (тип - масив, кожен елемент масиву - це стрінга)

- Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

- За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

- За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
    let a = 100; let b = '100'; let c = true;

*/

let greeting = 'hello';
console.log(greeting);
let best = 'owu';
console.log(best);
let site = 'com';
console.log(site);
let Ukraine = 'ua';
console.log(Ukraine);
let test = 1
console.log(test);
let test2 = 10;
console.log(test2);
let test3 = -999;
document.write(test3);
let number = 123
console.log(number);
let p = 3.14;
console.log(p);
let alertNumber = 2.7;
alert(alertNumber);
let simpleMath = 16;
console.log(simpleMath);
let truth = true;
console.log(truth);
let lie = false;
console.log(lie);

let book = {
    name: 'Clean code',
    length: 340,
    genre: 'Educational',
    author: 'Robert Martin'
}

let firstName = 'Anatolii';
let middleName = 'Anatolievich';
let lastName = 'Kyryienko';

let person = firstName + ' ' + middleName + ' ' + lastName;

console.log(person);

let yourName = prompt('What is your name?');
let yourSecondName = prompt('What is your second name?');
let yourAge = +prompt('How old are you?');

console.log('Your name is '+ yourName + ', your second name is ' + yourSecondName + ' and you are ' + yourAge + ' years old.');

let a = 100;
let b = '100';
let c = true;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

/*- Створити масив об'єктів з назвою books з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт*/

let books = [
    {
        bookName: '1984',
        bookLength: 356,
        bookAuthor: 'Orwell',
        bookGenre: 'utopia'
    },
    {
        bookName: 'Kill them first',
        bookLength: 345,
        bookAuthor: 'Bergmann',
        bookGenre: 'detective'
    },
    {
        bookName: '5 seconds rule',
        bookLength: 234,
        bookAuthor: 'Robbins',
        bookGenre: 'Motivational'
    }
]
console.log(books[0]);
console.log(books[1]);
console.log(books[2])

