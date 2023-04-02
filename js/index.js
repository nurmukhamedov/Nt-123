// // const myBox = document.querySelector('.box');

// // fetch('https://restcountries.com/v3.1/all').then((response) => response.json()).then((data) => {
// //     data.map((country) => {
// //         const countryFlag = document.createElement('img');
// //         countryFlag.src = `${country.flags.png}`;
// //         countryFlag.alt = `${country.flags.alt}`;

// //         myBox.appendChild(countryFlag);

// //         const countryName = document.createElement('h2');
// //         countryName.textContent = country.name.common;

// //         myBox.appendChild(countryName);

// //         const populationText = document.createElement('h4');


// //         const populationInString = String(country.population);

// //         if (populationInString.length === 6) {
// //             populationText.textContent = `${populationInString.slice(0, 3)}k`;
// //             myBox.appendChild(populationText)
// //         } else {
// //             populationText.textContent = populationInString;
// //             myBox.appendChild(populationText)
// //         }

// //     })
// // }).catch((error) => console.log(error.message));

// // function multiply(num) {

// //     return function (factor) {
// //         return num * factor
// //     }
// // };
// // const double = multiply(5);
// // console.log(double(2));


// const imagesUrl = 'https://image.tmdb.org/t/p/w500';
// let url = 'https://api.themoviedb.org/3/discover/movie?api_key=c1ba5d7054ad4225561ffacb783be3c6';
// const searchUrl = 'https://api.themoviedb.org/3/search/movie?api_key=c1ba5d7054ad4225561ffacb783be3c6&query=';




// const fragment = document.createDocumentFragment();
// const moviesList = document.querySelector('.movies-list');

// const loaderContainer = document.querySelector('.loader_container')
// const loading = document.createElement('div');
// loading.classList.add('loader');
// loaderContainer.appendChild(loading);

// const search = document.querySelector('.search');
// const btn = document.querySelector('.btn');
// const paginationWrapper = document.querySelector('.pagination_wrapper');

// let currentPage = 1;

// async function fetchData() {

//     const searchTerm = search.value;

//     if (searchTerm) {
//         url = `${searchUrl}${searchTerm}`
//     } else {
//         url = `https://api.themoviedb.org/3/discover/movie?api_key=c1ba5d7054ad4225561ffacb783be3c6&page=${currentPage}`
//     }

//     try {
//         const response = await fetch(url);
//         const data = await response.json();

//         let totalPages = data.total_pages > 5 ? 10 : data.total_pages;

//         moviesList.innerHTML = '';

//         if (data.results.length === 0) {
//             const notFound = document.createElement('div');
//             notFound.textContent = 'Hech qanday malumot yoq';
//             moviesList.appendChild(notFound)
//         } else {
//             data.results.map((movie) => {
//                 const image = document.createElement('img');
//                 image.src = `${imagesUrl}${movie.backdrop_path}`;
//                 image.alt = movie.title;

//                 const title = document.createElement('h2');
//                 title.textContent = movie.title;

//                 fragment.appendChild(image);
//                 fragment.appendChild(title);

//                 moviesList.appendChild(fragment);
//             });

//             paginationWrapper.innerHTML = '';

//             if (totalPages > 1) {
//                 for (let i = 1; i <= totalPages; i++) {

//                     const button = document.createElement('button');
//                     button.innerText = i;

//                     if (currentPage === i) {
//                         button.classList.add('active');
//                     }
//                     button.addEventListener('click', () => {
//                         currentPage = i;
//                         fetchData();
//                     })

//                     paginationWrapper.appendChild(button);
//                 }
//             }
//         }


//     } catch (error) {
//         console.log(error);
//     }


// }


// fetchData();

// btn.addEventListener('click', () => {
//     fetchData();
// })
// search.addEventListener('keypress', (event) => {
//     if (event.key === 'Enter') {

//         fetchData();

//     }
// })

// // const options = {
// //     method: 'GET',
// //     headers: {
// //         'X-RapidAPI-Key': 'cf812e6b39msh77575a1c454d246p1b5032jsn9d81105df2bb',
// //         'X-RapidAPI-Host': 'footapi7.p.rapidapi.com'
// //     }
// // };

// // fetch('https://footapi7.p.rapidapi.com/api/search/ronaldo', options)
// //     .then(response => response.json())
// //     .then(response => console.log(response))
// //     .catch(err => console.error(err));


// const helloWorld = () => {
//     console.log('Hello World');
// }

// const id = setTimeout(helloWorld, 2000);

// clearTimeout(id);


// const myInterval = setInterval(helloWorld, 2000);

// setTimeout(() => {
//     clearInterval(myInterval)
// }, 5000);

// const obj = {
//     name: 'Jonh',
//     age: 32
// }

// const { name: myName, age: myAge } = obj;

// console.log(myName, myAge);

// const arr = [1, 2, 3, 4, 5];

// const [a, b, c] = arr;

// console.log(a, b);

// const arr1 = [1, 2, 3, 4, 5, 6];
// const arr2 = [7, 8, 9, 10];

// const arr3 = [...arr1, ...arr2];

// console.log(arr3);

// const obj1 = {
//     x: 1,
//     y: 2
// }
// const obj2 = {
//     z: 3,
//     w: 4
// }
// const obj3 = { ...obj1, ...obj2 }
// console.log(obj3);

// function myFun(...args) {
//     console.log(args);
// }

// myFun(1, 2, 3, 4, 5)

// const obj = {
//     x: 1,
//     y: 2,
//     z: 3
// }

// const { x, ...newObj } = obj;

// console.log(x);
// console.log(newObj);

// const objArr = Object.keys(obj);
// console.log(objArr);
// const objnewArr = Object.values(obj);
// console.log(objnewArr);
// const newArray = Object.entries(obj);

// console.log(...newArray);



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

        const currency = Object.keys(country.currencies);
        console.log(currency[0]);

    })

}).catch((error) => console.log(error.message));