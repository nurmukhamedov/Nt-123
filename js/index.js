// const arr = [1, 2, 3, 4, 5, 6];

// const checkNumber = function (numbers, target) {
//     const checkNum = numbers.indexOf(target);

//     if (checkNum === - 1) {
//         return []
//     } else {
//         return [checkNum]
//     }
// }
// console.log(checkNumber(arr, 5));
// console.log(checkNumber(arr, 4));
// console.log(checkNumber(arr, 8));
// console.log(checkNumber(arr, 2));

let people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];

// const checkAge = function (allPeople, age) {
//     return allPeople.age >= age
// }

// const checkPeople = people.every((person) => checkAge(person, 20));

// if (checkPeople) {
//     console.log('Katta bola');
// } else {
//     console.log('Yosh');
// }

// const checkAge = function (allPeople, userAge) {

//     const checkPeople = allPeople.every((person) => person.age >= userAge);

//     if (checkPeople) {
//         return 'Katta bola'
//     } else {
//         return 'Yosh'
//     }
// }

// console.log(checkAge(people, 30));

// const myAge = function (birthYear) {
//     return 2023 - birthYear;
// }
// console.log(myAge(2000));

// const sayHello = () => console.log('Hello World');


// const btn = document.querySelector('.btn');

// btn.addEventListener('click', () => {
//     console.log('Hello World');
// });


// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach((num, index, array) => {
//     array[index] = num * 2;
// });

// console.log(numbers);

// const newNumbers = numbers.map((number) => {
//     return number * 2
// });


// console.log(newNumbers);

// const numbers = [5, 8, 1, 2, 6, 7, 10];

// const names = ['David', 'Jack', 'Bob', 'Anhel'].sort();


// console.log(names);

const numbers = [-5, -1, 1, 1, 2, 5, -4, 3, 4, 5, 6, 7, 9, 8];

const array = [1, 2, 3, 4, 5]

// const newNumbers = numbers.filter((num) => num < 2);

// console.log(newNumbers);


// const totalNumber = array.reduce((acc, element) => {
//     return acc + element
// });

// console.log(totalNumber);

const cars = [
    {
        img: 'https://motor.ru/imgs/2022/03/03/10/5274800/6ddcf7e5e0a907893873e987c81ec9d1fedcc76e.jpg',
        car: 'BMW',
        status: 'new',
        quantity: 8
    },
    {
        img: 'https://www.bmwgroup.com/content/dam/grpw/websites/bmwgroup_com/home/720x720_the-new-bmw-i7-xdriv.jpg.grp-transform/small/720x720_the-new-bmw-i7-xdriv.jpg',
        car: 'BMW',
        status: 'old',
        quantity: 12
    },
    {
        img: 'https://images.drive.com.au/driveau/image/upload/c_fill,h_675,w_1200/q_auto:eco/f_auto/v1/cms/uploads/ggutkfdonramc5akyims',
        car: 'Mercedes Benz',
        status: 'new',
        quantity: 2
    },
    {
        img: 'https://www.investing.com/academy/wp-content/uploads/2022/08/tesla-statistics.jpg',
        car: 'Tesla',
        status: 'new',
        quantity: 15
    },
    {
        img: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/2021_Toyota_Land_Cruiser_300_3.4_ZX_%28Colombia%29_front_view_04.png',
        car: 'Toyota',
        status: 'old',
        quantity: 19
    }
];

const row = document.querySelector('.row');

const newElements = cars.map((element) => {
    return `
     <div class="col-lg-4">
     <div class="card" style="width: 18rem;">
         <img src='${element.img}'
             class="card-img-top" alt="BMW">
         <div class="card-body">
         <h2>${element.car}</h2>
             <h5 class="card-title">Status: ${element.status}</h5>
             <p>Quantity: ${element.quantity}</p>
         </div>
     </div>
 </div>
     `
})
console.log(newElements.join(''));

row.innerHTML = newElements.join('');