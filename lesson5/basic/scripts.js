// се стірлочними!!!!!!!!!
//     - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

let arraySum = (array) => {
    let sum = 0;
    for(const number of array){
        sum += number
    }
    return sum
}
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
let minMax = (array) => {
    let minNumber = array[0];
    let maxNumber = array[0];
    for(const number of array){
        if(minNumber > number){
            minNumber = number
        }
    }
    for(const number of array){
        if(maxNumber < number){
            maxNumber = number
        }
    }
    console.log(maxNumber);
    return minNumber
}
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
let randomNumbers = () => {
    let emptyArray = [];
    for(let i = 0;i<20; i++){
        emptyArray[i] = Math.round(Math.random()*100)
    }
    return emptyArray
}
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
let randomNumbersWithLimit = (limit) => {
    let emptyArray = [];
    for(let i = 0;i<50; i++){
        emptyArray[i] = Math.round(Math.random()*limit)
    }
    return emptyArray
}
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
let reverseArray = (array) => {
    let newArray = [];
    for(let i = array.length-1,j = 0; i >= 0;i--,j++){
        newArray[j] = array[i]
    }
    return newArray
}
//     Переробити на стрілочні функції з попереднього дз
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let square1 = (a,b) => {return a*b};
// - створити функцію яка обчислює та повертає площу кола з радіусом r
let square2 = (r) => {return 3.14 * Math.pow(r, 2)};
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let square3 = (h,r) => { return 2 * 3.14 * r * (r + h)};
// - створити функцію яка приймає масив та виводить кожен його елемент
let logFoo = (array) => {
    for (const item of array){
        console.log(item)
    }
}
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let createP = (text) => {document.write(`<p>${text}</p>`)}
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let createUl = (text) => {
    document.write(`<ul>`);
    for(let i=0;i<3;i++){
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let createUlWithAmount = (text,amount) => {
    document.write(`<ul>`);
    for(let i=0;i<amount;i++){
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let primitiveArray = (array) => {
    document.write(`<ol>`);
    for (const item of array){
        console.log(item)
    }
    document.write(`</ol>`)
}
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let showNames = (array) => {
    for (const item of array) {
        document.write(`<div class="name">`);
        document.write(`<h2>${item.name}</h2>`);
        document.write(`<p>ID: ${item.id}, age - ${item.age}</p>`);
        document.write(`</div>`)
    }
}
// - створити функцію яка повертає найменьше число з масиву
let lowestNumber = (array) => {
    let minNumber = array[0];
    for(const number of array){
        if(minNumber > number){
            minNumber = number
        }
    }
    return minNumber
}
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let summary = (array) => {
    let sum = 0;
    for(const number of array){
        sum += number
    }
    return sum
}
// -створити функцію, яка приймає масив з 2х об'єктів, та міняє їх місцями.

let swapTwoObjects = (array) => {
    let emptyArray = [];
    emptyArray[0] = array[1];
    emptyArray[1] = array[0];
    return emptyArray
}