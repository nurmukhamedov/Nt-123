


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

const form = document.querySelector('.form'),
    formName = document.querySelector('.form__name'),
    formSpan = document.querySelectorAll('.form__span'),
    formRelation = document.querySelector('.form__relation'),
    formNumber = document.querySelector('.form__number'),
    button = document.querySelector('.form__button'),
    title = document.querySelectorAll('.title');

console.log(formSpan);
form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!formName.value) {
        formSpan[0].textContent = 'Iltimos namega ma`lumot kiriting';
        formName.classList.add('danger');
    } else {
        formSpan[0].textContent = '';
        formName.classList.remove('danger');
    }
    if (!formRelation.value) {
        formSpan[1].textContent = 'Iltimos relationga ma`lumot kiriting';
        formRelation.classList.add('danger');
    } else {
        formSpan[1].textContent = '';
        formRelation.classList.remove('danger');
    }
    if (!formNumber.value) {
        formSpan[2].textContent = 'Iltimos numberga ma`lumot kiriting';
        formNumber.classList.add('danger');
    } else {
        formSpan[2].textContent = '';
        formNumber.classList.remove('danger');
    }

    title[0].textContent = `Name: ${formName.value}`;
    title[1].textContent = `Relation: ${formRelation.value}`;
    title[2].textContent = `Number: ${formNumber.value}`;
})    