// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
// - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"
let content = document.getElementById('content');
console.log(content.innerText);
// -- отримує текст з блоку з id "rules"
let rules = document.getElementById('rules');
console.log(rules.innerText);
// -- замініть текст параграфа з id 'content' на будь-який інший
content.innerText = 'BRAND NEW CONTENT'
// -- замініть текст параграфа з id 'rules' на будь-який інший
rules.innerText = 'Always wash your dishes after grechka!!!'
// -- змініть кожному елементу колір фону на червоний
let AllElements = document.body.children;
for (const element of AllElements) {
    element.style.backgroundColor = 'red'
}
// -- змініть кожному елементу колір тексту на синій
for (const element of AllElements) {
    element.style.color = 'blue'
}
// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
let rulesClasses = rules.classList
console.log(rulesClasses);
// -- поміняти колір тексту у всіх елементів fc_rules на червоний
let rule = document.getElementsByClassName('fc_rules');
for (const item of rule) {
    item.style.color = 'red'
}

