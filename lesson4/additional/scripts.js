// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
let min3 = function (a,b,c) {
    let min = arguments[0];
    for(const number of arguments){
        if(min>number){
            min = number
        }
    }
    return min
}
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
let max3 = function (a,b,c) {
    let max = arguments[0];
    for(const number of arguments){
        if(max<number){
            max = number
        }
    }
    return max
}
// - створити функцію яка повертає найбільше число з масиву
let biggestOfArray = function (array) {
    let biggest = array[0];
    for(const number of array){
        if(number > biggest){
            biggest = number
        }
    }
    return biggest
}
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let middleSum = function (array) {
    let sum = 0;
    for (const number of array){
        sum +=number
    }
    return sum/array.length
}
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
let biggestLowest = function (...args){
    let lowest = arguments[0];
    let biggest = arguments[0];
    for(const number of arguments){
        if(lowest > number){
            lowest = number
        }
    }
    for (const number of arguments){
        if(biggest<number){
            biggest = number
        }
    }
    console.log(biggest);
    return lowest
}
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

let randomNumbers = function () {
    let newArray = [];
    for(let i=0;i<20;i++){
        newArray[i] = Math.round(Math.random()*100)
    }
    return newArray
}
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
let randomNumbersWithLimit = function (limit) {
    let newArray = [];
    for(let i=0;i<20;i++){
        newArray[i] = Math.round(Math.random()*limit)
    }
    return newArray
}
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

let reverseArray = function (array) {
    let newArray = [];
    for(let i=array.length-1,j = newArray.length;i>=0;i--,j++){
        newArray[j] = array[i]
    }
    return newArray
}
// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.

let strangeFunc = function (...args) {
    if(arguments.length === 1){
        return arguments[0]
    } else if(arguments.length === 2){
        return arguments[0]+arguments[1]
    } else {
        console.log(`Опаньки,така кількість цією функцією не передабчена ;(`)
    }
}
// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
let arraySum = function (a,b) {
    for(let i=0;i<a.length;i++){
        a[i] = a[i]+b[i]
    }
    return a
}
// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]



//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

