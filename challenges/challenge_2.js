//1) calculate the average score for each team.
let avgDolphinScore = (96 + 108 + 89) / 3;
let avgKoalaScore = (88 + 91 + 110) / 3;

console.log(avgDolphinScore);
console.log(avgKoalaScore);

if(avgDolphinScore > avgKoalaScore){
    console.log(`Dophins with average score ${avgDolphinScore} is the Winner. `);
}else if(avgKoalaScore > avgDolphinScore){
    console.log(`Koalas with average score ${avgKoalaScore} is the Winner. `);
}else{
    console.log(`Both the teams have same avg Score !!!`);
}

// Bonus 1

avgDolphinScore = (97 + 112 + 101) / 3;
avgKoalaScore = (109 + 95 + 123) / 3; 

console.log(avgDolphinScore);
console.log(avgKoalaScore);

if((avgDolphinScore > avgKoalaScore) && avgDolphinScore >= 100){
    console.log(`Dophins with average score ${avgDolphinScore} is the Winner. `);
}else if((avgKoalaScore > avgDolphinScore) && avgKoalaScore >= 100){
    console.log(`Koalas with average score ${avgKoalaScore} is the Winner. `);
}else{
    console.log(`Both the teams have same avg Score !!!`);
}


// Bonus 2

avgDolphinScore = (97 + 112 + 101) / 3;
avgKoalaScore = (109 + 95 + 106) / 3; 

console.log(avgDolphinScore);
console.log(avgKoalaScore);

if((avgDolphinScore > avgKoalaScore) && avgDolphinScore >= 100){
    console.log(`Dophins with average score ${avgDolphinScore} is the Winner. `);
}else if((avgKoalaScore > avgDolphinScore) && avgKoalaScore >= 100){
    console.log(`Koalas with average score ${avgKoalaScore} is the Winner. `);
}else if(100 <= avgKoalaScore === avgDolphinScore >= 100){
    console.log(`Match is Draw...`)
}else{
    console.log(`Both the teams have same avg Score, But NoOne wins !!!`);
}

