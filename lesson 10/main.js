// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
let hideButton = document.getElementsByClassName('hide-braga')[0];
hideButton.onclick = function (e) {
    e.preventDefault()
    let text = document.getElementById('text');
    text.classList.toggle('hidden')
}
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та
//     перевірити вік чи меньше він ніж 18, та повідомити про це користувача
let ageInput = document.getElementById('ageInput');
ageInput.value = 'Enter your age';
ageInput.onclick = function (e) {
    e.preventDefault();
    ageInput.value = ''
}
let ageButton = document.getElementsByClassName('ageButton')[0];
ageButton.addEventListener('click',function (e){
    e.preventDefault()
    if(ageInput.value < 18){
        alert('YOU ARE NOT ALLOWED TO BE HERE')
    } else {
        alert('welcome to the club, buddy')
    }
})
// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
let f1 = document.forms.firstForm
let input1 = f1.info1
let input2 = f1.info2
let f2 = document.forms.f2
let input3 = f2.info3
let input4 = f2.info4
let infoButton = document.getElementById('infoButton');
infoButton.addEventListener('click',function (e) {
    e.preventDefault()
    console.log(input1.value + ' ' + input2.value + ' ' + input3.value + ' ' + input4.value)
})
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
let inputWidth = document.getElementById('width');
inputWidth.value = 'Enter amount of blocks';
inputWidth.onclick = function (ev) {
    ev.preventDefault()
    inputWidth.value = ''
}
let inputHeight = document.getElementById('height');
inputHeight.value = 'Enter amount of raws';
inputHeight.onclick = function (ev) {
    ev.preventDefault()
    inputHeight.value = ''
}
let inputContent = document.getElementById('content');
inputContent.value = 'Enter your content';
inputContent.onclick = function (ev) {
    ev.preventDefault()
    inputContent.value = ''
}
let createButton = document.getElementById('creation');

createButton.addEventListener('click',function (e) {
    e.preventDefault();
    for(let i=0;i<inputHeight.value;i++){
    let raw = document.createElement('div');
    raw.classList.add('wrap');
    document.body.append(raw)
    for(let i=0;i<inputWidth.value;i++) {
        let block = document.createElement('div');
        block.style.width = '100px';
        block.style.height = '100px';
        block.style.border = '2px solid black'
        let text = document.createElement('p');
        text.innerText = inputContent.value
        block.append(text)
        text.classList.add('block')
        raw.append(block)
    }
}})
