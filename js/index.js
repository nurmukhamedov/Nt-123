


// "use strict";
// // console.log(x);
// // console.log(firstName);
// // const firstName = 'Muhammadrasul';

// // const x = 5;

// // console.log(x());

// function myFun(params) {


//     const x = 2;
// }

// myFun();

// myX = 5;

// console.log(myX);

// const checkMyNum = isNaN(-20);
// console.log(checkMyNum);

// const checkString = /W/;

// const checkString2 = new RegExp('m');

// const myName = 'Muhammadrasul'

// console.log(checkString2.test(myName));

// console.log(checkString.test('Hello World'));

// const text = 'Lorem ipsum dolor sit amet cat consectetur adipisicing.';

// const myPattern = new RegExp('cat');

// console.log(myPattern.test(text));

// const pattern1 = /uz|oz/;

// const string1 = 'Uzbekistan';

// const match1 = string1.match(pattern1);

// console.log(match1);

// const pattern2 = /[^Tashkent]+/;
// const string2 = 'Samarkand';
// const match2 = string2.match(pattern2);
// console.log(match2);

// const pattern3 = /^J.*a$/;
// const string3 = 'JBegzod aka';
// const match3 = string3.match(pattern3);

// const matchTest = pattern3.test(string3);

// console.log(matchTest);
// console.log(match3);




// const pattern4 = /^\d+$/;
// const string4 = '123,4';

// const match4 = string4.match(pattern4);
// console.log(match4);

// const pattern5 = /\D+/;
// const string5 = '12a34';
// const match5 = string5.match(pattern5);

// console.log(match5);

// const pattern6 = /^\w+$/;
// const string6 = 'hello_world123';
// const match6 = string6.match(pattern6);

// console.log(match6);

// const title = document.querySelector('.title');

// title.style.backgroundColor = 'blue';
// title.style.fontSize = '50px';

// const myText = ' hello world ';

// // console.log(myText.length);

// // const newText = myText.trim();

// // console.log(newText.length);
// console.log(myText);

// const myTextUpper = myText.toUpperCase();
// console.log(myTextUpper);



// const pattern = /^\d{3}-\d{3}-\d{4}/;

// const myNumber = '123-4456-7890';

// console.log(pattern.test(myNumber));

// const myInput = document.querySelector('.myInput');
// const btn = document.querySelector('.btn');
// const title = document.querySelector('.title');


// btn.addEventListener('click', () => {
//     title.textContent = myInput.value;
// });

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

