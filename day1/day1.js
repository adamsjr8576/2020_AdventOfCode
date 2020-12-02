//Part 1 solution:

const find2020Entries = expenseReport => {
 expenseReport.sort((a, b) => {
   return a - b;
 });
 let num1;
 let num2;
 for (var i = 0; i < expenseReport.length; i++) {
   if (expenseReport[i] > 1010) {
     break;
   } else {
     num1 = expenseReport[i];
     for (var j = i+1; j < expenseReport.length; j++) {
       num2 = expenseReport[j];

       if (num1 + num2 === 2020) {
         return num1 * num2
       }
     }
   }
 }
}

//Part 2 solution

const find2020Entries = expenseReport => {
  expenseReport.sort((a, b) => {
    return a - b;
  });
  let midIndex;
  for (var i = 0; i < expenseReport.length; i++) {
    if (expenseReport[i] >= 1010) {
      midIndex = i;
      break;
    }
  }
  let num1;
  let num2;
  let num3;
  for (var i = 0; i < midIndex; i++) {
    num1 = expenseReport[i];
    for (var j = i+1; j < midIndex; j++) {
      num2 = expenseReport[j];
      let firstSum = num2 + num1;
      if (firstSum < 1010) {
        for (var k = midIndex; k < expenseReport.length; k++) {
          num3 = expenseReport[k];
          if (firstSum + num3 === 2020) {
            return num1 * num3 * num2
          }
        }
      }
    }
  }
}
