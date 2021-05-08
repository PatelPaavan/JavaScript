const calcAverage = (a,b,c) => (a + b + c) / 3;


function checkWinner(avgDolphinScore,avgKoalaScore){
    if(avgDolphinScore>= avgKoalaScore*2){
        console.log(`Dolphins win (${avgDolphinScore} vs. ${avgKoalaScore})`);
    }else if(avgKoalaScore >= avgDolphinScore*2){
        console.log(`Koalas win (${avgKoalaScore} vs. ${avgDolphinScore})`);
    }
    else console.log("NO one Won");
}

// //Data 1

let avgDolphinScore = calcAverage(44,23,71);
let avgKoalaScore = calcAverage(65,54,49);
checkWinner(avgDolphinScore,avgKoalaScore);

//Data 2


avgDolphinScore = calcAverage(85,54,41);
avgKoalaScore = calcAverage(23,34,27);

checkWinner(avgDolphinScore,avgKoalaScore);