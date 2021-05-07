let country = "India";
let continent = "Asia";
let population = 136;
console.log("Country: ",country);
console.log("Continent: ",continent);
console.log("Total Population: ",population);

// datatype
let isIsLand = false;
let language;
console.log(typeof isIsLand);
console.log(typeof population);
console.log(typeof language);
console.log(typeof country);

// Declaring Const
language =  "Hindi";
const motherTongue = "Gujarati";
console.log(motherTongue);
// motherTongue = "Gujarati";   Can't change the const variable

// Operators
console.log("If your country split in half, and each half would contain half the population, then how many people would live in each half? ",population/2); //population of 1 half if the the country is splitted into two.
console.log(population+1);
let finlandPopulation = 6;
console.log("Does my country have more people than Finland?",population>finlandPopulation);
let averagePopulation = 33;
console.log("Does my country has less people than average Population? ",population>averagePopulation);
let description = country + " is in " + continent + ", and its " + population +" million people speak " + language;
console.log(description);

//  Introduction

let firstName = "Pavan";
let lastName = "Patel";

const fullName = `${firstName} ${lastName}`;
console.log(fullName);

console.log(`use backtiicks to make code clean`);
console.log(`backticks also
works if you need
multiline output`);
console.log(`it works same as inverted commas but makes it easier`)


//type conversion

let inputAge = "1997";
console.log(inputAge + 24);     // Converts number to string
console.log(Number(inputAge) + 24);  // explicitly convert string to number.


//type coersion

console.log(2021 - inputAge);       // automatically convert string to number.
console.log(2021/(2021-inputAge));

//truthy and falsy values

// there are 5 falsy values: 0, " ", undefined, null, NaN.
// Every other values are truthy values.

const money = 0;        //money is 0 so it will be considered false.

if(money){
    console.log(`Don't Spend all the money`);
}else{
    console.log(`You should get a job`);
}