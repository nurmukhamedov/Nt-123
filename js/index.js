// const years = [1998, 2000, 1975, 2005];

// const calcAge = function (year) {
//     return 2023 - year
// }

// for (let i = 0; i < years.length; i++) {
//     const element = years[i];

//     console.log(calcAge(element));
// }
// const box = document.querySelector('.box');

// const numbers = [1, 2, 3, 4, 5, 6];

// const calcNumbers = function (num) {
//     return num * 2;
// }

// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     box.innerHTML = box.innerHTML + `<span> ${calcNumbers(element)} </span>`
// }
// const numbers = [1, 2, 3, 4, 5, 6];

// for (let i = numbers.length - 1; i >= 0; i--) {
//     const element = numbers[i];

//     console.log(element);
// }

// const years = [1998, 2000, 1975, 2005];
// const box = document.querySelector('.box');

// const calcAge = function (year) {
//     return 2023 - year
// }
// const numbers = [1, 2, 3, 4, 5, 6];


// for (let year of years) {
//     box.innerHTML += `<h2>Ages: ${year}</h2>`
// }


// for (let i = 0; i < years.length; i++) {
//     const element = years[i];

//     console.log(calcAge(element));
// }


// const box = document.querySelector('.box');
// const body = document.querySelector('body');

// const newElement = document.createElement('div')
// newElement.classList.add('block');
// newElement.textContent = 'Hello World';
// body.appendChild(newElement);

// const element = ['Hello', 'World', 1, 2, 3];
// const stringElement = element.join(' ');

// console.log(stringElement);

// const myString = 'Hello World dears';
// const newArray = myString.split();

// console.log(newArray);

// const numbers = [1, 2, 3, 4, 5];

// console.log(numbers.reverse());

// const text = document.querySelector('.name')
// const btn = document.querySelector('.btn')
// const box = document.querySelector('.box')

// btn.addEventListener('click', () => {

//     const reversedText = text.value.split('').reverse().join('');
//     box.textContent = reversedText;
// })

// const propName = prompt('Property yozing')

// const person = {
//     firstName: 'Muhammadrasul',
//     lastName: 'Nurmukhamedov',
//     age: 23
// }

// const myArray = ['Hello', 'World'];

// console.log(typeof myArray);


// console.log(person[propName]);

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let total = 0;

for (const num of myNum) {
    total += num
}

// for (let i = 0; i < myNum.length; i++) {
//     const num = myNum[i];

//     total = total + num;

// }

console.log(total);






