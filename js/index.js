// const students = [
//     { id: 1, name: 'Alice', grade: 'A' },
//     { id: 2, name: 'Bob', grade: 'C' },
//     { id: 3, name: 'Charlie', grade: 'B' },
//     { id: 4, name: 'Dave', grade: 'A' },
//     { id: 5, name: 'Eve', grade: 'B' },
// ];

// const input = document.querySelector('.input'),
//     btn = document.querySelector('.btn'),
//     box = document.querySelector('.studentInfo');

// btn.addEventListener('click', () => {
//     const id = input.value;

//     const checkStudent = students.find((student) => student.id == id);
//     if (checkStudent) {
//         box.innerHTML = `<h2> Name:${checkStudent.name} Grade:${checkStudent.grade} Id: ${checkStudent.id} </h2>`
//     } else {
//         box.innerHTML = `<h2>Bunday id nomli o'quvchi yo'q</h2>`
//     }

// })


// const myList = document.querySelectorAll('.list li');
// console.log(myList);

// myList.forEach((list) => {
//     list.addEventListener('click', () => {
//         console.log(`Clicked ${list.textContent}`);
//     });
// })


// console.log(window);

// localStorage.setItem('1', 'Muhammadrasul');
// localStorage.setItem('2', 'Ahmadjon');

// const userName = localStorage.getItem('1');


// localStorage.clear();

// const person = {
//     name: 'Muhammadrasul',
//     age: 23
// }

// const jsonFormat = JSON.stringify(person);

// console.log(jsonFormat);

// const objFormat = JSON.parse(jsonFormat);

// console.log(objFormat);

// console.log(person.hasOwnProperty('name'));
// const second = document.querySelector('.second');
// console.log(second);

// const first = second.previousElementSibling;
// const third = second.nextElementSibling;
// const four = third.nextElementSibling;
// console.log(four);

// const container = first.parentNode;

// console.log(container);


// const btn = document.querySelector('.btn');

// const middle = btn.closest('body');

// console.log(middle);

const form = document.querySelector('.form');

const nameInput = document.querySelector('#name');
const price = document.querySelector('#price');
const itemId = document.querySelector('#itemId');
const itemList = document.querySelector('.itemList');


form.addEventListener('submit', (e) => {

    e.preventDefault();

    if (!nameInput.value && !price.value) {
        alert('Malumot kiriting')
    }

    if (itemId.value) {
        item = JSON.parse(localStorage.getItem(itemId.value));
        item.name = nameInput.value
        item.price = price.value
    } else {
        item = {
            name: nameInput.value,
            price: price.value
        }
        itemId.value = `item ${Date.now()}`
    }

    localStorage.setItem(itemId.value, JSON.stringify(item));

    form.reset();

    renderList();
});

function renderList() {
    itemList.innerHTML = '';

    for (const key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {

            const item = JSON.parse(localStorage.getItem(key));
            const li = document.createElement('li');

            li.innerHTML = `<span>${item.name}</span> <span>$${item.price}</span>`
            itemList.appendChild(li);

            const editBtn = document.createElement('button');
            editBtn.textContent = 'Edit';
            li.appendChild(editBtn);

            editBtn.addEventListener('click', () => {
                nameInput.value = item.name;
                price.value = item.price;
                itemId.value = key;
            })
        }
    }
}

renderList();