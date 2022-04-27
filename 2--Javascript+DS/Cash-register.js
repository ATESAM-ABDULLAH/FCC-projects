function checkCashRegister(price, cash, cid) {
  const totalCash = cid.reduce((total, value) => {
    return total + value[1]
  }, 0)
  var units = [ 
    0.01,
    0.05,
    0.1,
    0.25,
    1,
    5,
    10,
    20,
    100,
  ] 
  var change = cash - price
  if (change === totalCash) return {
    status: "CLOSED",
    change: cid
  }

  var possibleUnits = units.filter(unit => {
    if (unit <= change) return unit
  })
  
  var remainingChange = change
  var changeArr = []
  for (var i = possibleUnits.length - 1; i >= 0; i--) {
    if (cid[i][1] >= remainingChange) {
      if (remainingChange % possibleUnits[i] === 0) {
        changeArr.push([cid[i][0], remainingChange])
      } else {
        var diff = possibleUnits[i] * Math.floor(remainingChange / possibleUnits[i])
        remainingChange -= diff
        if (remainingChange === 0) break
        if (parseFloat(remainingChange.toFixed(2)) === 0.01) {
          changeArr.push([cid[i][0], diff + 0.01])
          return {
    status: "OPEN",
    change: changeArr
  }
        } else if (diff > 0) changeArr.push([cid[i][0], diff])        
      }
    } else {
      changeArr.push([cid[i][0], cid[i][1]])
      remainingChange -= cid[i][1]
    }
  }
  if (remainingChange > 0) return {
    status: "INSUFFICIENT_FUNDS",
    change: []
  }
  return {
    status: "OPEN",
    change: changeArr
  }
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);