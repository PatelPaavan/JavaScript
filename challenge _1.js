
console.log("\nWelcome to the Coding Challenge");

//Test Data 1
let markMass = 78;
let markHeight = 1.69;

let johnMass = 92;
let johnHeight = 1.95;

let markBMI = markMass/markHeight**2;
let johnBMI = johnMass/johnHeight**2;
let markHigherBMI = markBMI > johnBMI;


console.log("Test Data 1");
console.log(markBMI,johnBMI,markHigherBMI);

//Test Data 2

markMass = 95;
markHeight = 1.88;

johnMass = 85;
johnHeight = 1.76;

markBMI = markMass/markHeight**2;
johnBMI = johnMass/johnHeight**2;
markHigherBMI = markBMI > johnBMI;
console.log("Test Data 2")
console.log(markBMI,johnBMI,markHigherBMI);