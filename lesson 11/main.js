// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage

let ageInput = userForm.age
let nameInput = userForm.name
let button = userForm.submit
button.onclick = function (e) {
    e.preventDefault()
    let user = {name:nameInput.value, age:ageInput.value}
    localStorage.setItem('user',JSON.stringify(user))
}
// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.
let autoModel = Auto.model
let autoType = Auto.type
let autoVolume = Auto.volume
let autoButton = Auto.autoSubmitButton

autoButton.onclick = function (e) {
    e.preventDefault()
    let auto = {model:autoModel.value,type:autoType.value,volume:autoVolume.value}
    let autos = JSON.parse(localStorage.getItem('mashini'));
    if(autos){
        autos.push(auto)
        localStorage.setItem('mashini',JSON.stringify(autos))
    } else {
        let cars = [];
        cars.push(auto);
        localStorage.setItem('mashini',JSON.stringify(cars))
    }
}