//part 1

const playGame = input => {
  let tracker = input.reduce((tracker, turn, index) => {
    tracker[turn] = [index + 1];
    return tracker;
  }, {});
  let previousNum = input[input.length - 1];
  let turn = input.length;
  while (turn < 30000000) {
    turn++
    if (tracker[previousNum].length === 1) {
      tracker['0'].push(turn);
      previousNum = 0;
    } else {
      const lastTwo = tracker[previousNum].slice(-2);
      const difference = lastTwo[1] - lastTwo[0];
      if (!tracker[difference]) {
        tracker[difference] = [];
      }
      tracker[difference].push(turn);
      previousNum = difference;
    }
  }
  return previousNum;
}


// part 2
const playGame = (input, numOfTurns) => {
  let tracker = new Map();
  let previousNum = input.pop();
  input.forEach((turn, index) => {
    tracker.set(turn, index + 1)
  });
  for (let i = input.length + 1; i < numOfTurns; i++) {
    let difference = 0
    if (tracker.has(previousNum)) {
      difference = i - tracker.get(previousNum);
    }
    tracker.set(previousNum, i);
    previousNum = difference;
  }
  return previousNum;
}
