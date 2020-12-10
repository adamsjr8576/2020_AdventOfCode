// part 1

const countJoltDifferences = input => {
  const joltDifferencesTracker = {}
  input.sort((a, b) => a - b);
  for (let i = 1; i < input.length; i++) {
    const difference = input[i] - input[i-1];
    if (!joltDifferencesTracker[difference]) {
      joltDifferencesTracker[difference] = 0;
    }
    joltDifferencesTracker[difference]++
  }
  const startDifference = input[0] - 0;
  joltDifferencesTracker[startDifference]++;
  joltDifferencesTracker['3']++;
  return joltDifferencesTracker['1'] * joltDifferencesTracker['3'];
}

//part 2

const findTotal = input => {
  const counter = {0: 1};
  input.sort((a, b) => a - b);
  input.unshift(0);
  input.push(input[input.length-1] + 3);
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[j] > input[i] + 3) {
        break;
      }
      if (!counter[j]) {
        counter[j] = 0;
      }
      counter[j] += counter[i];
    };
  }
  return counter[input.length - 1]
}
findTotal(input)
