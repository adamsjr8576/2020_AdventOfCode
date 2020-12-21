// part 1

const findFirstBus = input => {
  const earliestDeparture = parseInt(input[0]);
  const busses = input[1].filter(bus => bus !== 'x').map(bus => parseInt(bus));
  let closestToDeparture;
  let busNumber;
  busses.forEach(bus => {
    const busCount = Math.floor(earliestDeparture / bus) + 1;
    const nextDeparture = busCount * bus;
    if (closestToDeparture === undefined) {
      closestToDeparture = nextDeparture;
    } else if (nextDeparture < closestToDeparture) {
      closestToDeparture = nextDeparture;;
      busNumber = bus;
    }
  })
  const timeDifference = closestToDeparture - earliestDeparture;
  return timeDifference * busNumber;
}


// part 2 Not optimized for BigInt

const findConsecutiveBusses = input => {
  let found = false;
  let currentNum = 0;
  while (!found) {
    let check = [];
    for (i = 1; i < input[1].length; i++) {
      if (input[1][i] !== 'x') {
        const num = parseInt(input[1][i])
        if ((currentNum + i) % num === 0) {
          check.push(true)
        } else {
          check.push(false);
          break;
        }
      }
    }
    if (check.filter(check => !check).length === 0) {
      found = true;
    }
    currentNum += parseInt(input[1][0])
  }
  return currentNum;
}
