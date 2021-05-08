bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
tips = [];
totals = [];


function calcTip(bill){
    const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
    return tip
}
let billNo = 0
for(billNo = 0; billNo<=bills.length-1; billNo++){
    tip = calcTip(bills[billNo]);
    tips.push(tip);
    totals.push(tip + bills[billNo]);
}

console.log(bills, tips, totals);

