
// const form = document.querySelector('.form');

// const nameInput = document.querySelector('#name');
// const price = document.querySelector('#price');
// const itemId = document.querySelector('#itemId');
// const itemList = document.querySelector('.itemList');


// form.addEventListener('submit', (e) => {

//     e.preventDefault();

//     if (!nameInput.value && !price.value) {
//         alert('Malumot kiriting')
//     }

//     if (itemId.value) {
//         item = JSON.parse(localStorage.getItem(itemId.value));
//         item.name = nameInput.value
//         item.price = price.value
//     } else {
//         item = {
//             name: nameInput.value,
//             price: price.value
//         }
//         itemId.value = `item ${Date.now()}`
//     }

//     localStorage.setItem(itemId.value, JSON.stringify(item));

//     form.reset();
//     itemId.value = '';
//     renderList();

// });

// function renderList() {
//     itemList.innerHTML = '';
//     let totalPrice = 0;

//     for (const key in localStorage) {
//         if (localStorage.hasOwnProperty(key)) {

//             const item = JSON.parse(localStorage.getItem(key));
//             const li = document.createElement('li');

//             li.innerHTML = `<span>${item.name}</span> <span>$${item.price}</span>`
//             itemList.appendChild(li);

//             const editBtn = document.createElement('button');
//             editBtn.textContent = 'Edit';
//             li.appendChild(editBtn);

//             editBtn.addEventListener('click', () => {
//                 nameInput.value = item.name;
//                 price.value = item.price;
//                 itemId.value = key;
//             })
//             const deleteBtn = document.createElement('button');
//             deleteBtn.textContent = 'Delete';
//             li.appendChild(deleteBtn);

//             deleteBtn.addEventListener('click', () => {
//                 localStorage.removeItem(key);
//                 renderList();
//             })
//             totalPrice += Number(item.price);

//         }

//     }

//     const totalItem = document.createElement('h4');
//     totalItem.textContent = totalPrice;

//     itemList.appendChild(totalItem);
// }

// renderList();

// const myFragment = document.createDocumentFragment();
// const box = document.querySelector('.box');

// const myText1 = document.createElement('p');
// myText1.textContent = 'My text 1';

// const myText2 = document.createElement('p');
// myText2.textContent = 'My text 2';

// const myText3 = document.createElement('p');
// myText3.textContent = 'My text 3';

// myFragment.appendChild(myText1);
// myFragment.appendChild(myText2);
// myFragment.appendChild(myText3);

// box.appendChild(myFragment);


// console.log('Hello World');
// alert('I am alert')
// console.log('By World');


// let pizza;

// function pizzaOrder() {
//     console.log('Order Pizza');

//     setTimeout(() => {
//         pizza = 'My pizza';
//     }, 2000);

//     console.log('Pizza was ordered');
// }
// pizzaOrder();

// setTimeout(() => {
//     console.log(`Eating ${pizza}`);
// }, 2500);

const myBox = document.querySelector('.box');

fetch('https://restcountries.com/v3.1/all').then((response) => response.json()).then((data) => {
    data.map((country) => {
        const countryFlag = document.createElement('img');
        countryFlag.src = `${country.flags.png}`;
        countryFlag.alt = `${country.flags.alt}`;

        myBox.appendChild(countryFlag);

        const countryName = document.createElement('h2');
        countryName.textContent = country.name.common;

        myBox.appendChild(countryName);



        console.log(country);

    })
}).catch((error) => console.log(error.message));