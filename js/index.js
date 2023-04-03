// const myBox = document.querySelector('.box');

// fetch('https://restcountries.com/v3.1/all').then((response) => response.json()).then((data) => {
//     data.map((country) => {
//         const countryFlag = document.createElement('img');
//         countryFlag.src = `${country.flags.png}`;
//         countryFlag.alt = `${country.flags.alt}`;

//         myBox.appendChild(countryFlag);

//         const countryName = document.createElement('h2');
//         countryName.textContent = country.name.common;

//         myBox.appendChild(countryName);

//         if (country.currencies !== undefined && country.currencies !== null) {
//             const currenciesInArray = Object.keys(country.currencies);
//             const currencyText = document.createElement('span');
//             currencyText.textContent = currenciesInArray[0];
//             console.log(currenciesInArray[0]);
//             myBox.appendChild(currencyText);
//         }
//     })

// }).catch((error) => console.log(error.message));



// let age = 23;
// let age2 = age;

// age2 = 40;
// age = 30;

// const info = {
//     name: 'John',
//     age: 30
// }

// const info2 = info;

// console.log(info, info2);

// info2.age = 35;

// console.log(info);
// console.log(info2);



// const students101 = {
//     name: 'Jack',
//     age: 21
// }


// const newStudent = students101;


// newStudent.name = 'John';

// console.log(newStudent);
// console.log(students101);


// const arr1 = ['Hello', 2, 'World', true];

// const newArr = JSON.parse(JSON.stringify(arr1));

// newArr[1] = 5;

// console.log(arr1);

// console.log(newArr);

// newArr[1] = 5;

// console.log(arr1);


// function myInfo(a, b, c) {
//     return `Hello I am ${this.name} I am ${this.age} years old ${a + b + c}`
// }

// const obj = {
//     name: 'John',
//     age: 35
// }

// const obj2 = {
//     name: 'Jack',
//     age: 36,
// }
// const laterCall = myInfo.bind(obj);


// console.log(myInfo.call(obj));

// console.log(myInfo.call(obj2, 1, 2, 3));
// console.log(myInfo.apply(obj2, [1, 2, 3])); 

const options = {
    method: 'GET',
    params: { q: 'Bitcoin', lang: 'en', sort_by: 'relevancy', page: '1' },
    headers: {
        'x-api-key': 'wvkXdkebSntH2YW9nTprZea7jG7xTCAg8i2bTsjuFvw'
    },

};

fetch('https://api.newscatcherapi.com/v2/search?q=Business', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

// const person = {
//     name: 'John',
//     age: 23,
//     id: 10
// }

// fetch(url, {
//     method: 'POST',
//     headers: { 'Content-type': 'application/json' },
//     body: JSON.stringify(person)
// }).then((response) => response.json()).then((data) => console.log(data)).catch((error) => console.log(error));

// // fetch(url, {
// //     method: 'Delete'
// // })

// const objId = 1;

// fetch(`${url}/${objId}`, {
//     method: 'PUT',
//     headers: { 'Content-type': 'application/json' },
//     body: JSON.stringify({
//         name: 'Jack',
//         age: 35,
//         id: 15
//     })
// }).then((response) => response.json()).then((data) => console.log(data)).catch((error) => console.log(error))



