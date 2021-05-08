// let billValue = 275;
// //Task 1
// billValue>=50 && billValue<=300 ?tip = billValue*0.15 : tip = billValue*0.2;
// console.log(tip);
// //Task 2
// console.log(`The bill was ${billValue}, the tip was ${tip}, and the total value ${billValue + tip}`);

// billValue = 40;
// //Task 1
// // 50 <= billValue <= 300 ? tip = billValue*0.15 : tip = billValue*0.2;
// billValue>=50 && billValue<=300 ? tip = billValue*0.15 : tip = billValue*0.2;
// console.log(tip);
// //Task 2
// console.log(`The bill was ${billValue}, the tip was ${tip}, and the total value ${billValue + tip}`);


// billValue = 430;
// //Task 1
// billValue>=50 && billValue<=300 ? tip = billValue*0.15 : tip = billValue*0.2;
// console.log(tip);
// //Task 2
// console.log(`The bill was ${billValue}, the tip was ${tip}, and the total value ${billValue + tip}`);

const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
// task 1 
console.log(tip);

//task2

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);


