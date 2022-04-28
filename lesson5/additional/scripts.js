// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
let minOfThree = (a,b,c) => {
    if(a < b&& a< c){
        return a
    } else if (b<a && b<c){
        return  b
    } else if (c< a && c<b){
        return c
    } else {
        console.log(`Some of them might be equal`)
    }
}
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
let maxOfThree = (a,b,c) => {
    if(a > b&& a> c){
        return a
    } else if (b>a && b>c){
        return  b
    } else if (c> a && c>b){
        return c
    } else {
        console.log(`Some of them might be equal`)
    }
}
// - створити функцію яка повертає найбільше число з масиву
let biggestOfArray = (array) => {
    let biggest = array[0];
    for(const item of array){
        if(biggest < item){
            biggest = item
        }
    }
    return biggest
}
// - створити функцію яка повертає найменьше число з масиву
let smallestOfArray = (array) => {
    let smallest = array[0];
    for(const item of array){
        if(smallest > item){
            smallest = item
        }
    }
    return smallest
}
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let sumOfArray = (array) => {
    let sum = 0;
    for (const number of array){
        sum += number
    }
    return sum
}
// - Дано натуральное число n. Выведите все числа от 1 до n.
let logToLimit = (a) => {
    for(let i=1;i<=a;i++){
        console.log(i)
    }
}
// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
let logToLimit2 = (a,b) => {
    if(a > b){
        for(let i = b;i<=a;i++){
            console.log(i)
        }
    } else if (b>a){
        for(let i=b;i>=a;i--){
            console.log(i)
        }
    }
}
// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//  ([9,8,0,4], 0) ==> [ 8, 9, 0, 4 ]
let swap = (array,i) => {
    let selected = array[i+1];
    array[i+1] = array[i];
    array[i] = selected
    return array
}
// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

let zeroToEnd = (array) => {
    let newArray = [];
    for (const number of array){
        if(number !== 0){
            newArray.push(number)
        }
    }
    for(const zero of array){
        if (zero === 0){
            newArray.push(zero)
        }
    }
    return newArray
}
