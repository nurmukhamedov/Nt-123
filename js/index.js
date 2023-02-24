// const userAge = +prompt('Yilingizni kiriting');
// let century = 21;

// if (userAge >= 2001) {
//     console.log(`Siz ${century} asr odamisiz`);
// } else {
//     console.log(`Siz ${century - 1} asr odamisiz`);
// }

// const number1 = +prompt('Birinchi son kiriting');
// const number2 = +prompt('Ikkinchi son kiriting');
// const userAnswer = +prompt('Sonlar yigindisi');

// if (userAnswer === number1 + number2) {
//     console.log(`Javobingiz to'gri ${number1 + number2} bo'lishi kerak edi`);
// } else {
//     console.log(`Siz xato javob berdingiz aslida ${number1 + number2} bo'lishi kerak edi`);
// }

// const flightPrice = 500;
// const hotelPrice = 250;
// const entertainmentPrice = 120;
// let usdToUzs = 11000;
// let euroToUzs = 12000;

// const totalPrice = (flightPrice * usdToUzs) + (hotelPrice * usdToUzs) + (entertainmentPrice * euroToUzs);

// const userMoney = +prompt('Qancha pulingiz bor safar uchun');

// if (totalPrice <= userMoney) {
//     console.log(`Sizda ${userMoney} pul bor safar uchun yetadi`);
// } else {
//     console.log('Uyda qoling');
// }

// const myNum = Math.floor(6.999);

// console.log(myNum);

// const myNumWithCeil = Math.ceil(6.1);
// console.log(myNumWithCeil);

// const myNumWithRound = Math.round(6.4);
// console.log(myNumWithRound);
// let num = 8.65865165132;
// const numWithFixed = num.toFixed(3);
// console.log(numWithFixed);

// const numWithRandom = Math.round(Math.random() * (5 - 15) + 15);
// console.log(numWithRandom);

// let myString = String('2');

// let convertStringToNum = Number(myString)

// console.log(typeof myString);

// console.log(typeof convertStringToNum);

// const calculation = 100 - '5' + '1' - 5;

// console.log(calculation);
// console.log("23" * 2);

// const myBooleanValue = Boolean(2 * 5);

// console.log(myBooleanValue);

// console.log(2 + 3 + 4 + "5" + 2);
// console.log('10' - '4' - '3' - 2 + '5');

// let myMoney = 15000;

// if (myMoney) {
//     console.log('Pulingiz bor ekan');
// } else {
//     console.log('Pulingiz yoq ekan');
// }

// let height;

// if (height) {
//     console.log('Qiymat kiritildi');
// } else {
//     console.log('Qiymat yoq');
// }


// let myAge = 22;
// let myLevel = 'Strong Middle Developer';

// if (myAge >= 18 || myLevel === 'Middle Developer') {
//     console.log('Sizni ishga olamiz');
// } else {
//     console.log('Afsus ishga olmaymiz');
// }

// const isDrivingLicence = 0;
// const isVisible = 'Good';

// let isTired = false;

// if (isDrivingLicence || isVisible || isTired) {
//     console.log('Siz mashina hayday olasiz');
// } else {
//     console.log('Siz mashina hayday olmaysiz');
// }

// const title = document.getElementsByTagName('button');

// console.log(title);

const johnWeight = +prompt('Jonning vazni');
const johnHeight = +prompt('Jonning boyi');
const bobWeight = +prompt('Bobning vazni');
const bobHeight = +prompt('Bobning boyi');

const johnBmi = Math.round(johnWeight / johnHeight ** 2);
const bobBmi = Math.round(bobWeight / bobHeight ** 2);

console.log(johnBmi);
console.log(bobBmi);

if (johnBmi > bobBmi) {
    console.log('John BMI katta');
} else if (johnBmi === bobBmi) {
    console.log('Ikkisi ham teng');
} else {
    console.log('Bob BMI katta');
}