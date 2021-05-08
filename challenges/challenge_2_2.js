function calcTip(bill){
    const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
    return tip
}

console.log(calcTip(100));

bills = [125,555,44];
tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

total = [tips[0]+bills[0], tips[1]+bills[1], tips[2]+bills[2]];

console.log(bills);
console.log(tips);
console.log(total);