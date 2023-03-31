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

//         const populationText = document.createElement('h4');


//         const populationInString = String(country.population);

//         if (populationInString.length === 6) {
//             populationText.textContent = `${populationInString.slice(0, 3)}k`;
//             myBox.appendChild(populationText)
//         } else {
//             populationText.textContent = populationInString;
//             myBox.appendChild(populationText)
//         }

//     })
// }).catch((error) => console.log(error.message));

// function multiply(num) {

//     return function (factor) {
//         return num * factor
//     }
// };
// const double = multiply(5);
// console.log(double(2));


const imagesUrl = 'https://image.tmdb.org/t/p/w500';
let url = 'https://api.themoviedb.org/3/discover/movie?api_key=c1ba5d7054ad4225561ffacb783be3c6';
const searchUrl = 'https://api.themoviedb.org/3/search/movie?api_key=c1ba5d7054ad4225561ffacb783be3c6&query=';




const fragment = document.createDocumentFragment();
const moviesList = document.querySelector('.movies-list');

const loaderContainer = document.querySelector('.loader_container')
const loading = document.createElement('div');
loading.classList.add('loader');
loaderContainer.appendChild(loading);

const search = document.querySelector('.search');
const btn = document.querySelector('.btn');

async function fetchData() {

    const searchTerm = search.value;

    if (searchTerm) {
        url = `${searchUrl}${searchTerm}`
    } else {
        url = 'https://api.themoviedb.org/3/discover/movie?api_key=c1ba5d7054ad4225561ffacb783be3c6'
    }

    try {
        const response = await fetch(url);
        const data = await response.json();


        moviesList.innerHTML = '';

        data.results.map((movie) => {

            const image = document.createElement('img');
            image.src = `${imagesUrl}${movie.backdrop_path}`;
            image.alt = movie.title;

            const title = document.createElement('h2');
            title.textContent = movie.title;

            fragment.appendChild(image);
            fragment.appendChild(title);

            moviesList.appendChild(fragment);

            console.log(movie);

        })


    } catch (error) {
        console.log(error);
    }


}


fetchData();

btn.addEventListener('click', () => {
    fetchData();
})
search.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        setTimeout(() => {
            fetchData();
        }, 2000);
    }
})