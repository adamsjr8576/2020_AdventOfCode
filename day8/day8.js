// part 1

const runInstructions = input => {
  let ruleTracker = {}
  let accumulator = 0;

  for (let i = 0; i < input.length; i++) {
    if (ruleTracker[i]) {
      return accumulator;
    }
    ruleTracker[i] = 'check';
    if (input[i][0] === 'acc') {
      accumulator = accumulate(input[i][1], accumulator)
    } else if (input[i][0] === 'jmp') {
      i = jump(input[i][1], i) - 1
    }
  }
  return accumulator;
}

const jump = (rule, i) => {
  const jumpNum = rule.substring(1, rule.length);
  if (rule[0] === '+') {
    i += parseInt(jumpNum)
  } else {
    i -= parseInt(jumpNum)
  }
  return i;
}

const accumulate = (rule, accumulator) => {
  const accNum = rule.substring(1, rule.length);
  if (rule[0] === '+') {
    accumulator += parseInt(accNum)
  } else {
    accumulator -= parseInt(accNum)
  }
  return accumulator;
}

// part 2

const runInstructions = input => {
  let ruleTracker = {}
  let accumulator = 0;
  let checkTerminate = false

  for (let i = 0; i < input.length; i++) {
    if (ruleTracker[i]) {
      return accumulator;
    }
    if (input[i][0] === 'jmp') {
      const checkCase = runCase(i, ['nop', input[i][1]], checkTerminate, input, ruleTracker, accumulator);
      if (checkCase.checkTerminate) {
        return checkCase.accumulator
      }
    } else if (input[i][0] === 'nop') {
      const checkCase = runCase(i, ['jmp', input[i][1]], checkTerminate, input, ruleTracker, accumulator);
      if (checkCase.checkTerminate) {
        return checkCase.accumulator
      }
    }
    ruleTracker[i] = 'check';
    if (input[i][0] === 'acc') {
      accumulator = accumulate(input[i][1], accumulator)
    } else if (input[i][0] === 'jmp') {
      i = jump(input[i][1], i) - 1
    }
  }
  return accumulator;
}

const runCase = (currentPlace, currentRule, checkTerminate, input, ruleTracker, accumulator) => {
  let inputCopy = [...input];
  let ruleTrackerCopy = {...ruleTracker}
  inputCopy[currentPlace] = currentRule;
  for (let i = currentPlace; i < inputCopy.length; i++) {
    if (ruleTrackerCopy[i]) {
      return checkTerminate
    }
    ruleTrackerCopy[i] = 'check';
    if (inputCopy[i][0] === 'acc') {
      accumulator = accumulate(inputCopy[i][1], accumulator)
    } else if (inputCopy[i][0] === 'jmp') {
      i = jump(inputCopy[i][1], i) - 1
    }
    if (i === inputCopy.length - 1) {
      checkTerminate = true;
    }
  }
  return {checkTerminate, accumulator}
}

const jump = (rule, i) => {
  const jumpNum = rule.substring(1, rule.length);
  if (rule[0] === '+') {
    i += parseInt(jumpNum)
  } else {
    i -= parseInt(jumpNum)
  }
  return i;
}

const accumulate = (rule, accumulator) => {
  const accNum = rule.substring(1, rule.length);
  if (rule[0] === '+') {
    accumulator += parseInt(accNum)
  } else {
    accumulator -= parseInt(accNum)
  }
  return accumulator;
}

runInstructions(input)
