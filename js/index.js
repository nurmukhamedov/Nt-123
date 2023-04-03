// const apiKey = 'c1ba5d7054ad4225561ffacb783be3c6';
// const baseUrl = 'https://api.themoviedb.org/3/';

// const imagesUrl = 'https://image.tmdb.org/t/p/w500';


// const fragment = document.createDocumentFragment();


// const loader_container = document.querySelector('.loader-container');
// const loader = document.createElement('div');
// loader.classList.add('loader');

// loader_container.appendChild(loader);

// let currentPage = 1;

// async function getMovies() {
//     const searchTerm = document.querySelector('#search').value;

//     let url;

//     if (searchTerm) {
//         url = `${baseUrl}search/movie?api_key=${apiKey}&query=${searchTerm}`;
//     } else {
//         url = `${baseUrl}discover/movie?api_key=${apiKey}&page=${currentPage}`;
//     }

//     try {
//         const response = await fetch(url);
//         const data = await response.json();

//         let totalPages = data.total_pages > 5 ? 5 : data.total_pages;

//         const movie_container = document.querySelector('.movie-container');
//         movie_container.innerHTML = '';
//         if (data.results.length === 0) {
//             const message = document.querySelector('.not-found');
//             message.textContent = 'Siz izlagan kino topilmadi'
//         } else {
//             data.results.map((movie) => {
//                 const movieCard = document.createElement('div');
//                 movieCard.classList.add('movie-card');

//                 const movieImage = document.createElement('img');
//                 movieImage.src = `${imagesUrl}${movie.backdrop_path}`;
//                 movieImage.alt = movie.title;

//                 const movieTitle = document.createElement('h3');
//                 movieTitle.textContent = movie.title;

//                 const movieRelease = document.createElement('span');
//                 movieRelease.textContent = `Released: ${movie.release_date}`;


//                 fragment.appendChild(movieImage);
//                 fragment.appendChild(movieTitle);
//                 fragment.appendChild(movieRelease);
//                 movieCard.appendChild(fragment);
//                 movie_container.appendChild(movieCard);
//             })

//             const paginationWrapper = document.querySelector('.pagination-wrapper');
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
//                         getMovies();
//                     })

//                     paginationWrapper.appendChild(button);
//                 }
//             }
//         }

//     } catch (error) {
//         console.error(error.message);
//     } finally {
//         const loader = document.querySelector('.loader');
//         if (loader) {
//             loader_container.remove();
//         }
//     }
// }

// const searchInput = document.querySelector('#search');
// const btn = document.querySelector('#searchBtn');

// searchInput.addEventListener('keypress', (e) => {
//     if (e.key === 'Enter') {
//         getMovies();
//     }
// });
// btn.addEventListener('click', () => {

//     currentPage = 1;
//     getMovies();
// });

// getMovies();


// function myFunction() {
//     console.log('Hello world');
// }

// const myTimeout = setTimeout(function () {
//     console.log('Hello world');
// }, 2000);

// setTimeout(() => {
//     clearTimeout(myTimeout);
// }, 4000);

// let i = 0;

// function myFunction() {
//     console.log(`Count ${i}`);
//     i++;
// }

// const myInterval = setInterval(myFunction, 2000);

// setTimeout(() => {
//     clearInterval(myInterval);
// }, 8000);

// const arr = [1, 2, 3, 4, 5];

// // const a = arr[0];
// // const b = arr[1];
// // const c = arr[2];

// const [a, b, c, d] = arr;

// console.log(a, b, c, d);

// const obj = {
//     name: 'John',
//     age: 35
// }

// const { name, age } = obj;

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];

// console.log(...arr1);

// const arr3 = [...arr1, ...arr2]
// console.log(arr3);


// const obj1 = {
//     x: 1,
//     y: 2
// }
// const obj2 = {
//     z: 3,
//     w: 4
// }

// const obj3 = { ...obj1, obj2 };

// console.log(obj3);

// function sum(...args) {
//     console.log(args);
// }

// sum(1, 2, 3, 4, 5)

const obj = { x: 1, y: 2, z: 3, w: 4 };

// const { x, ...hello } = obj;
// console.log(x);
// console.log(hello);

// console.log(obj);

// const objToArray = Object.values(obj);

// console.log(objToArray);

// const newArray = Object.entries(obj);

// console.log(newArray);


const url = 'https://restcountries.com/v3.1/all';

const searchTermUrl = `https://restcountries.com/v3.1/name/${name}?fullText=true`;


async function getCountries() {


    try {
        const response = await fetch(url);
        const data = await response.json();

        const countryWrapper = document.querySelector('.countries');
        data.map((country) => {

            const { flags, name, population, currencies } = country;
            const currenciesInArray = Object.keys(currencies)[0];

            const countryElement = document.createElement('div');
            const flagElement = document.createElement('img');
            const countryName = document.createElement('h3');
            const populationElement = document.createElement('span');
            const currencyElement = document.createElement('span');

            flagElement.src = flags.png;
            flagElement.alt = name.common;
            countryName.innerText = name.common;
            countryElement.appendChild(flagElement);
            populationElement.innerText = population;
            currencyElement.textContent = currenciesInArray;

            countryElement.appendChild(countryName);
            countryElement.appendChild(populationElement);
            countryElement.appendChild(currencyElement);
            countryWrapper.appendChild(countryElement);



        })
    } catch (error) {
        console.error(error.message);
    }
}

getCountries();

