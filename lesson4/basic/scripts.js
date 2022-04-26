// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let square1 = function (a, b) {
    return a * b
}
// - створити функцію яка обчислює та повертає площу кола з радіусом r
let square2 = function (r) {
    return 3.14 * Math.pow(r, 2)
}
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let square3 = function (h, r) {
    return 2 * 3.14 * r * (r + h)
}
// - створити функцію яка приймає масив та виводить кожен його елемент
let arrayLog = function (arr) {
    for (const item of arr) {
        console.log(item)
    }
}
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let createP = function (text) {
    document.write(`<p>${text}</p>`)
}
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let createLi = function (text) {
    document.write(`<ul>`);
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`)
}
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let createLi2 = function (text, amount) {
    document.write(`<ul>`);
    for (let i = 0; i < amount; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`)
}
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let arrayList = function (array) {
    document.write(`<ol>`);
    for (const item of array) {
        document.write(`<li>${item}</li>`)
    }
    document.write(`</ol>`)
}
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let showNames = function (array){
    for (const item of array) {
        document.write(`<div class="name">`);
        document.write(`<h2>${item.name}</h2>`);
        document.write(`<p>ID: ${item.id}, age - ${item.age}</p>`);
        document.write(`</div>`)
    }
}
// - створити функцію яка повертає найменьше число з масиву
let lowestNumber = function (array) {
    let minNumber = array[0];
    for(const number of array){
        if(minNumber > number){
            minNumber = number
        }
    }
    return minNumber
}
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let summary = function (array) {
    let sum = 0;
    for(const number of array){
        sum += number
    }
    return sum
}