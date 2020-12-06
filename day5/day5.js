//part 1

const findPassportIDs = input => {
  let passportIDs = input.map(direction => {
    let rowStart = 0;
    let rowEnd = 127;
    let columnStart = 0;
    let columnEnd = 7;
    let finalRow;
    let finalColumn;
    const splitDirection = direction.split('');
    for (var i = 0; i < splitDirection.length; i++) {
      const direction = splitDirection[i]
      if (direction === 'F' || direction === 'B') {
        const narrowedOptions = narrowDirection(rowStart, rowEnd, direction);
        if (narrowedOptions.end) {
          rowStart = narrowedOptions.start;
          rowEnd = narrowedOptions.end;
        }
        finalRow = narrowedOptions;
      } else {
        const narrowedOptions = narrowDirection(columnStart, columnEnd, direction);
        if (narrowedOptions.end) {
          columnStart = narrowedOptions.start;
          columnEnd = narrowedOptions.end;
        }
        finalColumn = narrowedOptions;
      }
    }
    return finalRow * 8 + finalColumn
  });
  return passportIDs.sort((a, b) => b - a)[0];
}

const narrowDirection = (start, end, direction) => {
  let half = Math.ceil((end - start) / 2);
  if ((half === 1 && direction === 'F') || (half === 1 && direction === 'L')) {
    return start;
  } else if ((half === 1 && direction === 'B') || (half === 1 && direction === 'R')) {
    return end;
  }
  if (direction === 'F' || direction === 'L') {
    end = end - half;
  } else {
    start = start + half;
  }
  return {
    start,
    end
  }
}

//Part 2

const findMySeat = passportIDs => {
  for (var i = 1; i < passportIDs.length - 1; i++) {
    const current = passportIDs[i]
    const next = passportIDs[i + 1]
    if (next !== current + 1) {
      return current + 1;
    }
  }
}


const findPassportIDs = input => {
  let passportIDs = input.map(direction => {
    let rowStart = 0;
    let rowEnd = 127;
    let columnStart = 0;
    let columnEnd = 7;
    let finalRow;
    let finalColumn;
    const splitDirection = direction.split('');
    for (var i = 0; i < splitDirection.length; i++) {
      const direction = splitDirection[i]
      if (direction === 'F' || direction === 'B') {
        const narrowedOptions = narrowDirection(rowStart, rowEnd, direction);
        if (narrowedOptions.end) {
          rowStart = narrowedOptions.start;
          rowEnd = narrowedOptions.end;
        }
        finalRow = narrowedOptions;
      } else {
        const narrowedOptions = narrowDirection(columnStart, columnEnd, direction);
        if (narrowedOptions.end) {
          columnStart = narrowedOptions.start;
          columnEnd = narrowedOptions.end;
        }
        finalColumn = narrowedOptions;
      }
    }
    return finalRow * 8 + finalColumn
  });
  return passportIDs.sort((a, b) => a - b)
}

const narrowDirection = (start, end, direction) => {
  let half = Math.ceil((end - start) / 2);
  if ((half === 1 && direction === 'F') || (half === 1 && direction === 'L')) {
    return start;
  } else if ((half === 1 && direction === 'B') || (half === 1 && direction === 'R')) {
    return end;
  }
  if (direction === 'F' || direction === 'L') {
    end = end - half;
  } else {
    start = start + half;
  }
  return {
    start,
    end
  }
}


const passportIds = findPassportIDs(input);
findMySeat(passportIds)
