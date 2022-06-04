// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header
let title = document.getElementById('main_header')
title.classList.add('march-2022')
// b) робить шириниу елементу ul 400px
let list = document.getElementsByTagName('ul')[0];
list.style.width = '400px'
// c) робить шириниу всіх елементів з класом linkList шириною 50%
let linkList = document.getElementsByClassName('linkList')
for (const link of linkList) {
    link.style.width = '50%'
}
// d) отримує текст який зберігається в елементі з класом listElement2
console.log(document.getElementsByClassName('listElement2')[0].innerText);
// e) отримує всі елементи li та змінює ім колір фону на сірий
let lishki = document.getElementsByTagName('li');
for (const item of lishki) {
    item.style.backgroundColor = 'grey'
}
// f) отримує всі елементи 'a' та додає їм клас anchor
let links = document.getElementsByTagName('a')
for (const link of links) {
    link.classList.add('anchor')
}
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
for (const link of links) {
    if(link.innerText === 'link3'){
        link.style.fontSize = '40px'
    }
}
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
for (const link of links) {
    link.classList.add(`element_${link.innerText}`)
}
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let subHeader = document.getElementsByClassName('sub-header');
let colorChoiceForSubHeader = prompt('Choose your color!')
for (const subHeaderElement of subHeader) {
    subHeaderElement.style.backgroundColor = colorChoiceForSubHeader
}
// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
for (const item of subHeader) {
    if(item.innerText === 'content 2 segment'){
        item.style.color = prompt('Color for 2 segment')
    }
}
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
document.getElementsByClassName('content_1')[0].innerText = prompt('Write your text mate')
// l) отримати елементи p та змінити їм padding на 20px
let pishki = document.getElementsByTagName('p');
for (const pishka of pishki) {
    pishka.style.padding = '20px'
}
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
document.getElementsByClassName('text2')[0].innerText = 'march-2022'