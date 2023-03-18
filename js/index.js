// const obj = {
//     Bob: 1700,
//     John: 6000,
//     Evelina: 1200
// }
// const obj2 = {
//     Bob: 1700,
//     John: 6000,
//     Evelina: 1200,
//     Jack: 5600,
//     Mal: 5400
// }

// function sumSalaries(salaries) {
//     let salaryTotal = 0;
//     for (let employees in salaries) {
//         salaryTotal += salaries[employees]
//     }

//     return salaryTotal;
// }

// console.log(sumSalaries(obj));
// console.log(sumSalaries(obj2));

// const numbers = [-3, -2, 0, 2, 8, 100];

// console.log(...numbers);

// const findMissingNumbers = function (nums) {
//     let min = Math.min(...nums);
//     let max = Math.max(...nums);
//     const newNumber = [];

//     for (let i = min; i <= max; i++) {
//         if (!nums.includes(i)) {
//             newNumber.push(i)
//         }
//     }

//     return newNumber;
// }
// console.log(findMissingNumbers(numbers));

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const findNum = (nums, checkNum) => {
//     if (nums.includes(checkNum)) {
//         return 'CR7'
//     } else {
//         return 'Nothing'
//     }
// }

// console.log(findNum(numbers, 11));

// const colors = ['Orange', 'Red', 'Blue', 'Pink', 'Yellow', 'Green'];
// const numbers = [1, 2, 3, 4, 5]
// // const selectedColors = colors.slice(1, 2);
// // console.log(selectedColors);
// // console.log(colors);

// const selectedItems = (array) => {
//     const newArray = array.slice(0, 3);

//     return newArray
// }

// console.log(selectedItems(colors));

// console.log(selectedItems(numbers));

const fruits = ['Apple', 'Banana', 'Orange', 5, 'Banana', 'Cherry', 'Strawberry', 'Melon', 'Watermelon', 'Pitch'];
// console.log(fruits);
// fruits.splice(1, 3, 'Hello');

// console.log(fruits);

// const myFruit = fruits.indexOf(5);

// console.log(myFruit);

// const findIndex = function (array, element) {

//     return array.indexOf(element)
// }

// console.log(findIndex([1, 2, 3, 4, 5], 2));

const numbers = [2, 4, 6, 8, 1];

const calcNum = function (num) {
    return num % 2 === 0
}

const isEven = numbers.some(num => num % 2 === 0);

console.log(isEven);