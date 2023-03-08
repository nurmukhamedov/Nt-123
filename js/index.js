// const form = document.querySelector('.form'),
//     formName = document.querySelector('.form__name'),
//     formSpan = document.querySelectorAll('.form__span'),
//     formRelation = document.querySelector('.form__relation'),
//     formNumber = document.querySelector('.form__number'),
//     button = document.querySelector('.form__button'),
//     title = document.querySelectorAll('.title'),
//     formPassword = document.querySelector('.form__password'),
//     confirmPassword = document.querySelector('.confirm__password');

// console.log(formSpan);
// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     if (!formName.value) {
//         formSpan[0].textContent = 'Iltimos namega ma`lumot kiriting';
//         formName.classList.add('danger');
//     } else {
//         formSpan[0].textContent = '';
//         formName.classList.remove('danger');
//     }
//     if (!formRelation.value) {
//         formSpan[1].textContent = 'Iltimos relationga ma`lumot kiriting';
//         formRelation.classList.add('danger');
//     } else {
//         formSpan[1].textContent = '';
//         formRelation.classList.remove('danger');
//     }
//     if (!formNumber.value) {
//         formSpan[2].textContent = 'Iltimos numberga ma`lumot kiriting';
//         formNumber.classList.add('danger');
//     } else if (!validatePhoneNumber(formNumber.value)) {
//         formSpan[2].textContent = 'Number formati notogri';
//         formNumber.classList.add('danger');
//     }
//     else {
//         formSpan[2].textContent = '';
//         formNumber.classList.remove('danger');
//     }
//     if (confirmPassword.value !== formPassword.value) {
//         formSpan[3].textContent = 'Parol mos kelmadi';
//         confirmPassword.classList.add('danger');
//     } else {
//         formSpan[3].textContent = ' ';
//         confirmPassword.classList.remove('danger');
//         confirmPassword.classList.add('success');
//     }

//     title[0].textContent = `Name: ${formName.value}`;
//     title[1].textContent = `Relation: ${formRelation.value}`;
//     title[2].textContent = `Number: ${formNumber.value}`;
// });

// function validatePhoneNumber(phoneNumber) {
//     const pattern = /^\d{3}-\d{3}-\d{4}$/;
//     return pattern.test(phoneNumber);
// }



// const enteredMoney = document.querySelector('.enteredMoney');
// const selectedCurrency = document.querySelector('.selectedCurrency');
// const dollar = document.querySelector('.dollar');
// const euro = document.querySelector('.euro');
// const btn = document.querySelector('.btn');
// const box = document.querySelector('.box');

// btn.addEventListener('click', () => {
//     if (selectedCurrency.value === dollar.value) {
//         box.innerText = `Dollar: ${(enteredMoney.value / 11500).toFixed(2)}`
//     } else if (selectedCurrency.value === euro.value) {
//         box.innerText = `Euro: ${(enteredMoney.value / 12000).toFixed(2)}`
//     } else {
//         box.innerText = 'Xato'
//     }
// })


const fruits = ['Banana', 'Apple', 'Orange', 'Watermelon', 'Strawberry'];

// console.log(fruits[fruits.length - 1]);

// // const myArray = new Array('Doston', 'Ahmadjon', 'Asilbek', 'Sherzod');
// // console.log(myArray);

// const students = ['Doston', 'Ahmadjon', 'Asilbek', 'Sherzod'];

// students.push('Muhammad', 'Muhammadmustafo');


// students.unshift('Sultonbek');

// students.pop();
// students.pop();
// students.shift();


// const checkArray = students.includes('Doston');

// console.log(checkArray);

// console.log(students);



// const myArray = [1, 2, 3, 4, 5, [6, 7, 8, 9]];


// const nestedArray = myArray[5];

// console.log(nestedArray[1]);


// const myArray = [125, 555, 44, 450, 128, 1050, 320];

// const calcBill = function (bill) {
//     if (bill >= 50 && bill <= 300) {
//         return bill * 0.15
//     } else {
//         return bill * 0.3
//     }
// }


// for (let i = 0; i < myArray.length; i++) {
//     console.log(calcBill(myArray[i]));
// }

// myArray[0]
// myArray[1]
// myArray[2]


// console.log(calcBill(myArray[0]));
// console.log(calcBill(myArray[1]));
// console.log(calcBill(myArray[2]));

const years = [1998, 1999, 2000, 1978, 2004];



// const calcBirthYear = function (year) {
//     if (year <= 2000) {
//         return 'Siz 20 asrda tugilgansiz'
//     } else {
//         return 'Siz 21 asrda tugilgansiz'
//     }
// }

// console.log(calcBirthYear(years[0]));
// console.log(calcBirthYear(years[1]));
// console.log(calcBirthYear(years[2]));
// console.log(calcBirthYear(years[3]));
// console.log(calcBirthYear(years[4]));


// const numbers = ['Muhammadrasul', 'Doston', 'Ahmadjon'];

// for (let i = 0; i < 3; i++) {
//     console.log(numbers[i]);
// }

