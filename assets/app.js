// Homework_19 #1
let mass = +prompt('Ваш вес: (кг.)');
let height = +prompt('Ваш рост:  (м.)');

let BMI = mass / (height ** 2);

if (BMI <= 16.5) { 
    console.log('Выраженный дефицит массы тела');
} 
else if (BMI > 16.5 && BMI <= 18.5) {
    console.log('Недостаточная масса тела');
}
else if (BMI > 18.5 && BMI <= 25) {
    console.log('Нормальная масса тела');
}
else if (BMI > 25 && BMI <= 30) {
    console.log('Избыточная масса тела');
}
else if (BMI > 30 && BMI <= 35) {
    console.log('Ожирение 1 степени');
}
else if (BMI > 35 && BMI <= 40) {
    console.log('Ожирение 2 степени');
}
else if (BMI > 40) {
    console.log('Ожирение 3 степени');
}


/*
// Homework_19 #2  год считается високосным, если номер этого года делится нацело на 4, за исключением тех, которые делятся нацело на 100 и не делятся на 400.
let year = +prompt('Введите год ');
if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
    console.log(year + ' год - высокосный');
} else { 
    console.log(year + ' год - невысокосный ');
}
*/