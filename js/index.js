// const calcTimeTravel = function (distance) {
//     const walkingSpeed = 3.6;
//     const bikeSpeed = 20.1;
//     const carSpeed = 70;
//     const planeSpeed = 800;




//     const walkingTime = (distance / walkingSpeed).toFixed(2);
//     const bikeTime = (distance / bikeSpeed).toFixed(2);
//     const carTime = (distance / carSpeed).toFixed(2);
//     const planeTime = (distance / planeSpeed).toFixed(2);

//     return {
//         walking: walkingTime,
//         biking: bikeTime,
//         car: carTime,
//         plane: planeTime
//     }
// }

// const userDistance = document.querySelector('.distance');
// const btn = document.querySelector('.btn');
// const boxSpan = document.querySelectorAll('.box span');

// btn.addEventListener('click', () => {
//     const travel = calcTimeTravel(userDistance.value)

//     boxSpan[0].textContent = `Piyoda ${travel.walking} hours`
//     boxSpan[1].textContent = `Velosiped ${travel.biking} hours`
//     boxSpan[2].textContent = `Mashina ${travel.car} hours`
//     boxSpan[3].textContent = `Samolyot ${travel.plane} hours`

// })


// const x = 15;
// const y = 5;
// const z = 100;

// const numbers = [10, 85, 21, 5, 8, 4, 100, 45, 152];

// let minNum = numbers[0];
// let maxNum = numbers[0];

// for (let i = 0; i < numbers.length; i++) {
//     minNum = Math.min(minNum, numbers[i]);
//     maxNum = Math.max(maxNum, numbers[i]);
// }

// let range = maxNum - minNum;

// console.log(minNum, maxNum);

// console.log(range);


// const me = {
//     myName: 'Muhammadrasul',
//     myAge: 23,
//     myLastName: 'Nurmukhamedov',
//     myInfo: function () {
//         return `${me.myName} ${me.myLastName} ${me.myAge}`
//     }
// }

// // console.log(me.myInfo());

// for (const prop in me) {
//     console.log(me[prop]);
// }

// const student = {
//     firstName: 'Jasur',
//     age: 21,
//     info: function () {
//         return `${this.firstName} ${this.age}`
//     }
// }
// console.log(student.info());

// const student2 = {
//     firstName: 'Davron',
//     age: 33,
//     greeting: student.info
// }

// console.log(student2.greeting());


// const form = document.querySelector('.form'),
//     name = document.querySelector('.name'),
//     relation = document.querySelector('.relation'),
//     number = document.querySelector('.number'),
//     btn = document.querySelector('.btn'),
//     box = document.querySelector('.box');


// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     const contact = document.createElement('div');
//     contact.classList.add('contact');

//     nameSpan = document.createElement('span');
//     nameSpan.textContent = name.value;
//     contact.appendChild(nameSpan);

//     relateSpan = document.createElement('span');
//     relateSpan.textContent = relation.value;
//     contact.appendChild(relateSpan);

//     numberSpan = document.createElement('span');
//     numberSpan.textContent = number.value;
//     contact.appendChild(numberSpan);

//     deleteButton = document.createElement('button');
//     deleteButton.textContent = 'Delete';
//     contact.appendChild(deleteButton);

//     box.appendChild(contact);

//     deleteButton.addEventListener('click', () => {
//         box.removeChild(contact);
//     })

//     form.reset();
// });


// const negativeNumbers = [1, 2, 3, - 3, -5, 9.25, -5];
// const positiveNumebrs = [];

// const compileToPositive = function (number) {

//     for (let i = 0; i < number.length; i++) {

//         let element = number[i];

//         if (element < 0) {
//             element = element * -1;
//         }

//         positiveNumebrs.push(Math.round(element));
//     }
//     return positiveNumebrs;

// }

// console.log(compileToPositive(negativeNumbers));

// let i = 0;

// while (i < 50) {
//     console.log('Salom dunyo');

//     i++;
// }


// let dice = Math.round(Math.random() * 10 + 1);


// while (dice !== 9) {
//     dice = Math.round(Math.random() * 10 + 1);
//     if (dice === 9) {
//         console.log('Siz yutdingiz 9 chiqdi');
//     } else {
//         console.log(`Boshqa son ${dice} chiqdi`);
//     };
// }





const form = document.querySelector('.form');
const formInput = document.querySelector('.form__input');
const formButton = document.querySelector('.form__button');
const activities = document.querySelector('.activities');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!formInput.value) {
    } else {
        const divBox = document.createElement('div');
        divBox.classList.add('form__box');
        const list = document.createElement('p');
        list.classList.add('activity__list');
        list.textContent = formInput.value;
        divBox.appendChild(list);

        const removeButton = document.createElement('button');
        removeButton.classList.add('activity__remove');

        const removeImg = document.createElement('img');
        removeImg.src = './images/delete.png';

        removeButton.appendChild(removeImg);


        divBox.appendChild(removeButton);

        activities.appendChild(divBox);

        removeButton.addEventListener('click', () => {
            activities.removeChild(divBox);
        });

        form.reset();
    }

})