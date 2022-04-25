// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for(let i=0; i<10; i++){
    document.write(`<div><p>Lorem ipsum dolor sit amet.</p></div>`)
}
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for(let i=1; i<=10; i++){
    document.write(`<div><p> ${i} Lorem ipsum dolor sit amet.</p></div>`)
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let indexForWhile1 = 0;

while (indexForWhile1 < 20){
    document.write(`<h1>Custom title</h1>`)
    indexForWhile1++
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

let indexForWhile2 = 1;

while (indexForWhile2 <= 20){
    document.write(`<h1> ${indexForWhile2} Lorem ipsum dolor.</h1>`)
    indexForWhile2 ++
}

// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//
//     let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
document.write(`<ul>`);
for(const item of listOfItems){
    document.write(`<li> ${item}</li>`)
}
document.write(`</ul>`)


//     Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону  Зробити адекватну стилізацію
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
//
let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];
//
// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
for(let product of products){
    document.write(`<div class="product-card">`);
    document.write(`<h3 class="product-title">${product.title}. Price - ${product.price} grn.</h3>`);
    document.write(`<img src="${product.image}" alt="Image of product" class="product-image">`);
    document.write(`</div>`)
}