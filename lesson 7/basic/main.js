// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User (id,name,surname,email,phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone
}

let users = [];
 users[0] = new User(1,'Igor','Vasilenko','Vasilenko@gmail.com',+333023123123);
 users[1] = new User(2,'Alina','Igorova','Igorova@gmail.com',+3343434343);
 users[2] = new User(324124,'Anton','Nikolov','Nikolov@gmail.com',+889899999);
 users[3] = new User(4,'Sveta','Komarova','Komarova@gail.com',+343343434343);
 users[4] = new User(5,'Ivan','Gorik','whitepower@gmail.com',1312312312312313);
 users[5] = new User(12414,'Antoha', 'Fraj','fRAJ@GMAIL.COM',141324253664);
 users[6] = new User(12,'jana','Semka','Semka@gmail.com',121241411414141);
 users[7] = new User(44,'Kostia','Kostochkin','Kostochkin@gmail.com',14141414114141414);
 users[8] = new User(-2,'Viktor','Rybaka','Rybaka@gmail.com',14124141414141);
 users[9] = new User(10,'Anatolii','kirienko','kirienko@gmail.com',141414141414141)
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

users.filter(users => users.id%2 === 0)

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

users.sort((a,b) => a.id - b.id)
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
// створити пустий масив, наповнити його 10 об'єктами Client

let clients = [];

 clients[0] = new Client(123,'anton','antonovich','anton@gmail.com',231114141414, ['zibulka','pepsi','benz']);
 clients[1] = new Client(1,'iGOR','Igorovich','Igor@gmail.com',41414141414,['pizza','sushi']);
 clients[2] = new Client(12,'Vasya','Vasyevich','vasiliu@gmail.com',124121414141,['kola','suhariki','chipsi']);
 clients[3] = new Client(100,'Alina','alinovna','Alinka44@gmail.com',1312312313131,['flowers','rafaelki','condoms']);
 clients[4] = new Client(44,'Tolik','Ebolik','Ebolik@gmai;.com',123123131131,['pc','conditioner','monitor','vr']);
 clients[5] = new Client(-1,'Angelina','jolie','Jolie@gmail.com',13123131313,['freedom','peace']);
 clients[6] = new Client(8,'John','gORIK','Hohn@gmai.com',131231212312313,['snius','beer','dominos pizza']);
 clients[7] = new Client(22,'Svitlana','Svitlanovna','svet@gmail.com',1231231231313131,['cheesecake']);
 clients[8] = new Client(13,'Slava','Slavovich','slavka@gmail.com',131313113131,['champions league trophy']);
 clients[9] = new Client(12,'Vika','Vikovna','vika@gmail.com',1123131312131313,['happiness'])
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log(clients.sort((a, b) => a.order.length - b.order.length));

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model,maker,year,maxSpeed,engine){
    this.model = model;
    this.maker = maker;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engine = engine
    this.drive = function (){
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину!`)
    }
    this.info = function (){
        for(const quality in this){
            console.log(`${quality} - ${this[quality]}`);
        }
    }
    this.increaseMaxSpeed = function (newSpeed){
        this.maxSpeed = this.maxSpeed+newSpeed
    }
    this.changeYear = function (newValue){
        this.year = newValue
    }
    this.addDriver = function (driver){
        this.driver = driver
    }
}
let bmw = new Car('BMW','Germany',2021,200,1.6)
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car1{
    constructor(model, maker, year, maxSpeed, engine) {
        this.model = model;
        this.maker = maker;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engine = engine;
    }
    drive () {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину!`)
    }
    info () {
        for(const quality in this){
            console.log(`${quality} - ${this[quality]}`)
        }
    }
    increaseMaxSpeed (newSpeed) {
        this.maxSpeed = this.maxSpeed += newSpeed
    }
    changeYear (newYear) {
        this.year = newYear
    }
    addDriver (driver){
        this.driver = driver
    }
}
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Princess {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
let princesses = [];
princesses[0] = new Princess('Olga',18,36);
princesses[1] = new Princess('Olena',19,37);
princesses[2] = new Princess('Sveta',20,38);
princesses[3] = new Princess('Alina',21,39);
princesses[4] = new Princess('Ioanna',22,40);
princesses[5] = new Princess('Jana',23,41);
princesses[6] = new Princess('Anna',24,42);
princesses[7] = new Princess('Ljuda',25,43);
princesses[8] = new Princess('Elizabeth',26,44);
princesses[9] = new Princess('Emma',27,45)
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
let prince = {
    age:22,
    name:'Stepan',
    boot:38
}
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
for(const girl of princesses){
    if(girl.footSize === prince.boot){
        console.log(girl.name)
    }
}
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
console.log(princesses.find(value => value.footSize === prince.boot));