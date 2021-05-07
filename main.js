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