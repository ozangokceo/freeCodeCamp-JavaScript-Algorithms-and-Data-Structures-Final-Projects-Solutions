function checkCashRegister(price, cash, cid) {
    if(cash < price) {
      return "Error! Cash can not be lower than the price.."
    }
  
    let billValues = [
      ["PENNY", 0.01], ["NICKEL", 0.05], 
      ["DIME", 0.1], ["QUARTER", 0.25], 
      ["ONE", 1], ["FIVE", 5], 
      ["TEN", 10], ["TWENTY", 20],
      ["ONE HUNDRED", 100]
    ];
  
    let emptyArray = [
      ["PENNY", 0], ["NICKEL", 0], 
      ["DIME", 0], ["QUARTER", 0], 
      ["ONE", 0], ["FIVE", 0], 
      ["TEN", 0], ["TWENTY", 0],
      ["ONE HUNDRED", 0]
    ];
  
    let changeArray = [];
    let totalChange = cash.toFixed(3) - price.toFixed(3);
  
    let totalMoneyInDrawer = 0;
  
    for (let i = 0; i < 9; i++) {
      if(totalChange >= billValues[8 - i][1] ) {
        let intermediateChange = 0.000;
        while (totalChange >= billValues[8 - i][1] && cid[8 - i][1] > 0) {
          cid[8 - i][1] = Number(cid[8 - i][1].toFixed(3)) - billValues[8 - i][1];
          intermediateChange = Number(intermediateChange.toFixed(3)) + billValues[8 - i][1]
          totalChange = totalChange.toFixed(3) - billValues[8 - i][1]
        }
          changeArray.push([billValues[8 - i][0], intermediateChange])
      }
    }
  
    if(totalChange > 0) { 
      return {status: "INSUFFICIENT_FUNDS", change: []}
    }
    for (let i = 0; i < 9; i++) {
      totalMoneyInDrawer += Number(cid[8 - i][1].toFixed(3));
    }
  
    if(totalMoneyInDrawer === 0 && totalChange === 0) {
      let nonEmpty = [];
      for (let i = 0; i < changeArray.length; i++) {
        if(changeArray[i][1] !== 0) {
          nonEmpty.push(changeArray[i]);
        }
      }
      for (let i = 0; i < nonEmpty.length; i++) {
        for (let j = 0; j < emptyArray.length; j++) {
          if(emptyArray[j][0] === nonEmpty[i][0]) {
            emptyArray.splice(j, 1, nonEmpty[i]);
          }
        }
      }
      return {status: "CLOSED", change: emptyArray}
    }
  
    return {status: "OPEN", change: changeArray};
  }
  
  //tests..
  console.table(checkCashRegister(19.5, 20, [["PENNY", 1.01], 
  ["NICKEL", 2.05], ["DIME", 3.1], 
  ["QUARTER", 4.25], ["ONE", 90], 
  ["FIVE", 55], ["TEN", 20], 
  ["TWENTY", 60], ["ONE HUNDRED", 100]]));
  console.log(76.74.toFixed(3) - 20)
  
  
  console.table(checkCashRegister(3.26, 100, [["PENNY", 1.01], 
  ["NICKEL", 2.05], ["DIME", 3.1], 
  ["QUARTER", 4.25], ["ONE", 90], 
  ["FIVE", 55], ["TEN", 20], 
  ["TWENTY", 60], ["ONE HUNDRED", 100]]));
  
  
  console.table(checkCashRegister(19.5, 20, [["PENNY", 0.01], 
  ["NICKEL", 0], ["DIME", 0], 
  ["QUARTER", 0], ["ONE", 0], 
  ["FIVE", 0], ["TEN", 0], 
  ["TWENTY", 0], ["ONE HUNDRED", 0]]));
  
  
  console.table(checkCashRegister(19.5, 20, [["PENNY", 0.01], 
  ["NICKEL", 0], ["DIME", 0], 
  ["QUARTER", 0], ["ONE", 1], 
  ["FIVE", 0], ["TEN", 0], 
  ["TWENTY", 0], ["ONE HUNDRED", 0]]));
  
  console.table(checkCashRegister(19.5, 20, [["PENNY", 0.5], 
  ["NICKEL", 0], ["DIME", 0], 
  ["QUARTER", 0], ["ONE", 0], 
  ["FIVE", 0], ["TEN", 0], 
  ["TWENTY", 0],["ONE HUNDRED", 0]]));