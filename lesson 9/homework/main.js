// Все робити за допомоги js.
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
let block = document.createElement('div');
block.classList.add('wrap','alpha','collapse','beta');
block.style.backgroundColor = 'blue';
block.style.color = 'white';
block.style.fontSize = '14px'
document.body.append(block)
console.log(block);
let clone = block.cloneNode(true);
document.body.append(clone)
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
let array = ['Main','Products','About us','Contacts'];
let menu = document.getElementsByClassName('menu')[0];
for (const item of array) {
    let newItem = document.createElement('li')
    newItem.innerText = `${item}`
    menu.append(newItem)
}
// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
for (const course of coursesAndDurationArray) {
    let wrap = document.createElement('div');
    let h2 = document.createElement('h2');
    let p = document.createElement('p');
    h2.innerText = course.title
    p.innerText = `Тривалість - ${course.monthDuration} місяців.`
    wrap.append(h2,p)
    document.body.append(wrap)
}
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
for (const course of coursesAndDurationArray) {
    let wrap = document.createElement('div');
    wrap.classList.add('item');
    let heading = document.createElement('h1');
    heading.classList.add('heading');
    heading.innerText = course.title;
    let content = document.createElement('p');
    content.classList.add('description');
    content.innerText = `Тривалість - ${course.monthDuration} місяців.`;
    wrap.append(heading,content);
    document.body.append(wrap)
}