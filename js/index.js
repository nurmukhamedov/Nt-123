// const x = 4 * 5;

// const checkX = x == 20 ? 'Togri' : '20 emas';


// console.log(checkX);

// const checkAverage = function (attempt1, attempt2, attempt3) {
//     return (attempt1 + attempt2 + attempt3) / 3;
// }

// const team1 = Math.round(checkAverage(80, 90, 170));
// const team2 = Math.round(checkAverage(90, 88, 200));
// console.log(team1);
// console.log(team2);

// const winnerFun = (data1, data2) => {
//     if (data1 > data2) {
//         return '1 Jamoa galaba qozondi'
//     } else if (data1 === data2) {
//         return 'Durrang'
//     } else {
//         return '2 Jamoa galaba qozondi'
//     }
// }

// console.log(winnerFun(team1, team2));

// const totalStudents = 2500;

// const checkPercentageOfStudents = function (number) {
//     const checkStudent = number / totalStudents * 100;
//     return `${checkStudent.toFixed(2)}%`;
// }


// console.log(checkPercentageOfStudents(27));
// console.log(checkPercentageOfStudents(23));

// const title = document.querySelector('.title');

// const btn = document.querySelector('.btn');

// const body = document.querySelector('body');



// btn.addEventListener('click', function () {

//     body.classList.toggle('dark');

// })
// // let textWithTextContent = title.textContent;

// // let textWithInnerText = title.innerText;

// let textWithInnerHtml = title.innerHTML;

// // console.log(textWithTextContent);

// // console.log(textWithInnerText);

// console.log(textWithInnerHtml);



const btn = document.querySelector('.btn');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');

btn.addEventListener('click', function () {
    modal.classList.add('modal-extra');
});

close.addEventListener('click', function () {
    modal.classList.remove('modal-extra');
});


