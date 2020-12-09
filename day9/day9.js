//part 1

const attackWeakness = input => {
  for (let i = 25; i < input.length; i++) {
    const preamble = input.slice(i - 25, i);
    if (checkPreamble(preamble, input[i])) {
      return input[i]
    }
  }
}

const checkPreamble = (preamble, sum) => {
  let check = true;
  for (let i = 0; i < preamble.length; i++) {
    const firstNum = preamble[i];
    for (let j = i + 1; j < preamble.length; j++) {
      const secondNum = preamble[j];
      if (firstNum + secondNum === sum) {
        check = false
      }
    }
  }
  return check;
}

//part 2

const findWeakness = input => {
  const invalidNum = attackWeakness(input);
  let startIndex = 0;
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    sum += input[i];
    if (sum === invalidNum) {
      const contiguousRange = input.slice(startIndex, i);
      contiguousRange.sort((a, b) => a - b);
      return contiguousRange.shift() + contiguousRange.pop();
    }
    if (sum > invalidNum) {
      i = startIndex;
      startIndex++;
      sum = 0;
    }
  }
}
