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


const form = document.querySelector('.form'),
    name = document.querySelector('.name'),
    relation = document.querySelector('.relation'),
    number = document.querySelector('.number'),
    btn = document.querySelector('.btn'),
    box = document.querySelector('.box');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const contact = document.createElement('div');
    contact.classList.add('contact');

    nameSpan = document.createElement('span');
    nameSpan.textContent = name.value;
    contact.appendChild(nameSpan);

    relateSpan = document.createElement('span');
    relateSpan.textContent = relation.value;
    contact.appendChild(relateSpan);

    numberSpan = document.createElement('span');
    numberSpan.textContent = number.value;
    contact.appendChild(numberSpan);


    box.appendChild(contact);

});

const deleteBtn = document.querySelector('.delete');
const text = document.querySelector('.text');

deleteBtn.addEventListener('click', () => {
    box.removeChild(text)
})
