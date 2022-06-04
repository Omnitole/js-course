// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
let cutString = (str,n) => {
    let Array = [];
    while (str.length){
        Array.push(str.substring(0,n));
        str = str.slice(n)
    }
    return Array
}
console.log(cutString('наслаждение', 3));
// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
// document.writeln(delete_characters(str, 7)); // Каждый
let delete_characters = (str,number) => {
    return str.substring(0,number)
}
let str = 'Каждый охотник желает знать';
console.log(delete_characters(str,10))
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
    let str1 = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
let insert_dash = (str) => {
    return str.replaceAll(' ', '-').toUpperCase()
}
console.log(insert_dash(str1));
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
let firstBig = (str) => {
    first = str.charAt(0).toUpperCase();
    let end = str.slice(1);
    return first.concat(end);
}
console.log(firstBig('aboba'));
// - Дано список імен.
    let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
let normalize = (name) => {
    return name.replaceAll('..',' ').replaceAll('---',' ').replaceAll('__',' ')

}
console.log(normalize(n1));
console.log(normalize(n2));
console.log(normalize(n3))
//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
let randomNumbers = () => {
    let array = [];
    for(let i =0;i<50;i++){
        array.push(Math.round(Math.random()*100))
    }
    return array
}
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
console.log(randomNumbers().sort((a, b) => a - b));
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)
console.log(randomNumbers().filter(value => value % 2 === 0).filter(value => value !== 0));
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
let string = 'aboba abobovich abobov'
let capitalize = (str) => {
    let array = str.split(' ');
    let newArray = []
    for(const word of array){
        let first = word.charAt(0).toUpperCase();
        let end = word.slice(1);
        let finalWord = first.concat(end);
        newArray.push(finalWord)
    }
    return newArray.toString().replaceAll(',',' ')

}
console.log(capitalize(string));
// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на
// 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com

let validator = (email) => {
    let dogNumber = email.indexOf('@');
    let point = email.indexOf('.');
    if(dogNumber < 1) {
        console.log('Your e-mail is invalid')
    } else if(point - dogNumber < 3){
        console.log('Your e-mail is invalid')
    } else {
        console.log('Your e-mail is verified')}

}
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.
//
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
//
//
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules

console.log(coursesArray.sort((a, b) => b.modules.length - a.modules.length));

// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5

let counts = (str,stringSearch) => {
    return str.toLowerCase().split(stringSearch).length-1
}
console.log(counts("Астрономия это наука о небесных объектах", "а"));
// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
let cutString2 = (str,n) => {
    let array = str.split(' ');
    array.length = n;
    return array.toString().replaceAll(',',' ')
}
console.log(cutString2("Сила тяжести приложена к центру масс тела", 3));

// -стоврити масив книжок (назва, кількість сторінок, автори , жанри).
let books = [
    {
        name: 'got',
        authors: ['john', 'viktor'],
        genre: [1, 2],
        size: 1000
    },
    {
        name: 'gp',
        authors: ['viktor'],
        genre: [1, 2, 3],
        size: 100000
    },
    {
        name: 'lotr',
        authors: [1, 2, 3],
        size: 400,
        genre: [1, 2, 3, 4]
    }
];

// - знайти книжку/ки які писали 2 автори
console.log(books.filter(value => value.authors.length === 2));
// - знайти книжку/ки які писав 1 автор
console.log(books.filter(book => book.authors.length === 1));
// - вісортувати книжки по кількості сторінок по зростанню
console.log(books.sort((a, b) => a.size - b.size));
