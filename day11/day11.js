const stabalizeSeatingChaos = input => {
 let seatsChanged = true;
 let numSeatsChanged = 0;
 let loops = 1;
 let currentState = input;
 const conditions = {
   'L': '#',
   "#": 'L'
 }
 while(seatsChanged) {
   let blankArrangement = currentState.map(row => {
     return row.map(seat => '')
   })
   for (let i = 0; i < currentState.length; i++) {
     const currentRow = currentState[i];
     for (j = 0; j < currentRow.length; j++) {
       const currentSeat = currentRow[j];
       if (currentSeat !== '.') {
         const checkResults = [
           checkSeatAdjacent(currentSeat, i, j, currentState, 'down'),
           checkSeatAdjacent(currentSeat, i, j, currentState, 'up'),
           checkSeatAdjacent(currentSeat, i, j, currentState, 'left'),
           checkSeatAdjacent(currentSeat, i, j, currentState, 'right'),
           checkSeatAdjacent(currentSeat, i, j, currentState, 'upperRight'),
           checkSeatAdjacent(currentSeat, i, j, currentState, 'upperLeft'),
           checkSeatAdjacent(currentSeat, i, j, currentState, 'lowerRight'),
           checkSeatAdjacent(currentSeat, i, j, currentState, 'lowerLeft'),
         ];
         const checkChange = checkResults.filter(result => result);
         if ((currentSeat === 'L' && checkChange.length === 8) || (currentSeat === '#' && checkChange.length >= 4)) {
           blankArrangement[i][j] = conditions[currentState[i][j]];
           numSeatsChanged++;
         } else {
           blankArrangement[i][j] = currentState[i][j];
         }
       } else {
         blankArrangement[i][j] = '.'
       }
     }
   }
   currentState = blankArrangement;
   if (numSeatsChanged === 0) {
     seatsChanged = false;
   } else {
     numSeatsChanged = 0;
   }
   loops++;
 }
 return currentState.reduce((acc, row) => {
   row.forEach(seat => {
     if (seat === '#'){
       acc += 1
     }
   })
   return acc
 }, 0)
}



const checkSeatAdjacent = (currentSeat, i, j, currentState, direction) => {
 let seatAdjacent;
 if (currentSeat === 'L' && i === 0 && (direction === 'up' || direction === 'upperLeft' || direction ==='upperRight')) {
   return true;
 }
 if (currentSeat === 'L' && i === currentState.length-1 && (direction === 'down' || direction === 'lowerLeft' || direction ==='lowerRight')) {
   return true;
 }
 if (currentSeat === 'L' && j === 0 && (direction === 'left' || direction === 'lowerLeft' || direction === 'upperLeft')) {
   return true;
 }
 if (currentSeat === 'L' && j === currentState[0].length - 1 && (direction === 'right' || direction ==='lowerRight' || direction ==='upperRight')) {
   return true;
 }
 if (currentSeat === '#' && i === 0 && (direction === 'up' || direction === 'upperLeft' || direction ==='upperRight')) {
   return false;
 }
 if (currentSeat === '#' && i === currentState.length-1 && (direction === 'down' || direction === 'lowerLeft' || direction ==='lowerRight')) {
   return false;
 }
 if (currentSeat === '#' && j === 0 && (direction === 'left' || direction === 'lowerLeft' || direction === 'upperLeft')) {
   return false;
 }
 if (currentSeat === '#' && j === currentState[0].length - 1 && (direction === 'right' || direction ==='lowerRight' || direction ==='upperRight')) {
   return false;
 }

 if (direction === 'down') {
   seatAdjacent = currentState[i+1][j];
 } else if (direction === 'up'){
   seatAdjacent = currentState[i-1][j]
 } else if (direction === 'left') {
   seatAdjacent = currentState[i][j-1]
 } else if (direction === 'right') {
   seatAdjacent = currentState[i][j+1]
 } else if (direction === 'upperRight') {
   seatAdjacent = currentState[i-1][j+1]
 } else if (direction === 'upperLeft') {
   seatAdjacent = currentState[i-1][j-1]
 } else if (direction === 'lowerRight') {
   seatAdjacent = currentState[i+1][j+1]
 } else if (direction === 'lowerLeft') {
   seatAdjacent = currentState[i+1][j-1]
 }

 if (currentSeat === 'L' && seatAdjacent === '.') {
   return true;
 }
 if (currentSeat === 'L' && seatAdjacent === 'L') {
     return true;
 }
 if (currentSeat === '#' && seatAdjacent === '#') {
   return true;
 }
 return false;
}

stabalizeSeatingChaos(input)


//part 2

const stabalizeSeatingChaos = input => {
  let seatsChanged = true;
  let numSeatsChanged = 0;
  let loops = 1;
  let currentState = input;
  const conditions = {
    'L': '#',
    "#": 'L'
  }
  while(seatsChanged) {
    let blankArrangement = currentState.map(row => {
      return row.map(seat => '')
    })
    for (let i = 0; i < currentState.length; i++) {
      const currentRow = currentState[i];
      for (j = 0; j < currentRow.length; j++) {
        const currentSeat = currentRow[j];
        if (currentSeat !== '.') {
          const checkResults = [
            checkSeatAdjacent(currentSeat, i, j, currentState, 'down'),
            checkSeatAdjacent(currentSeat, i, j, currentState, 'up'),
            checkSeatAdjacent(currentSeat, i, j, currentState, 'left'),
            checkSeatAdjacent(currentSeat, i, j, currentState, 'right'),
            checkSeatAdjacent(currentSeat, i, j, currentState, 'upperRight'),
            checkSeatAdjacent(currentSeat, i, j, currentState, 'upperLeft'),
            checkSeatAdjacent(currentSeat, i, j, currentState, 'lowerRight'),
            checkSeatAdjacent(currentSeat, i, j, currentState, 'lowerLeft'),
          ];
          const checkChange = checkResults.filter(result => result);
          if ((currentSeat === 'L' && checkChange.length === 8) || (currentSeat === '#' && checkChange.length >= 5)) {
            blankArrangement[i][j] = conditions[currentSeat];
            numSeatsChanged++;
          } else {
            blankArrangement[i][j] = currentState[i][j];
          }
        } else {
          blankArrangement[i][j] = '.'
        }
      }
    }
    currentState = blankArrangement;
    if (numSeatsChanged === 0) {
      seatsChanged = false;
    } else {
      numSeatsChanged = 0;
    }
    loops++;
  }
  return currentState.reduce((acc, row) => {
    row.forEach(seat => {
      if (seat === '#'){
        acc += 1
      }
    })
    return acc
  }, 0)
}



const checkSeatAdjacent = (currentSeat, i, j, currentState, direction) => {
  let seatAdjacent;
  if (currentSeat === 'L' && i === 0 && (direction === 'up' || direction === 'upperLeft' || direction ==='upperRight')) {
    return true;
  }
  if (currentSeat === 'L' && i === currentState.length-1 && (direction === 'down' || direction === 'lowerLeft' || direction ==='lowerRight')) {
    return true;
  }
  if (currentSeat === 'L' && j === 0 && (direction === 'left' || direction === 'lowerLeft' || direction === 'upperLeft')) {
    return true;
  }
  if (currentSeat === 'L' && j === currentState[0].length - 1 && (direction === 'right' || direction ==='lowerRight' || direction ==='upperRight')) {
    return true;
  }
  if (currentSeat === '#' && i === 0 && (direction === 'up' || direction === 'upperLeft' || direction ==='upperRight')) {
    return false;
  }
  if (currentSeat === '#' && i === currentState.length-1 && (direction === 'down' || direction === 'lowerLeft' || direction ==='lowerRight')) {
    return false;
  }
  if (currentSeat === '#' && j === 0 && (direction === 'left' || direction === 'lowerLeft' || direction === 'upperLeft')) {
    return false;
  }
  if (currentSeat === '#' && j === currentState[0].length - 1 && (direction === 'right' || direction ==='lowerRight' || direction ==='upperRight')) {
    return false;
  }

  if (direction === 'down') {
    seatAdjacent = findDownAdjacentSeat(currentState[i+1][j], currentState, j, i + 1, currentState);
  } else if (direction === 'up'){
    seatAdjacent = findUpAdjacentSeat(currentState[i-1][j], currentState, j, i - 1);
  } else if (direction === 'left') {
    seatAdjacent = findLeftAdjacentSeat(currentState[i][j-1], currentState, i, j - 1);
  } else if (direction === 'right') {
    seatAdjacent = findRightAdjacentSeat(currentState[i][j+1], currentState, i, j + 1, currentState[i]);
  } else if (direction === 'upperRight') {
    seatAdjacent = findURAdjacentSeat(currentState[i-1][j+1], currentState, j+1, i-1, currentState[i]);
  } else if (direction === 'upperLeft') {
    seatAdjacent = findULAdjacentSeat(currentState[i-1][j-1], currentState, j-1, i-1);
  } else if (direction === 'lowerRight') {
    seatAdjacent = findLRAdjacentSeat(currentState[i+1][j+1], currentState, j+1, i+1, currentState[i]);
  } else if (direction === 'lowerLeft') {
    seatAdjacent = findLLAdjacentSeat(currentState[i+1][j-1], currentState, j-1, i+1);
  }

  if (currentSeat === 'L' && seatAdjacent === '.') {
    return true;
  }
  if (currentSeat === 'L' && seatAdjacent === 'L') {
      return true;
  }
  if (currentSeat === '#' && seatAdjacent === '#') {
    return true;
  }
  return false;
}

const findDownAdjacentSeat = (adjacentSeat, currentState, stationaryPosition, changingPosition, level) => {
  if (adjacentSeat === '.') {
    for (changingPosition; changingPosition < level.length; changingPosition++) {
      if (currentState[changingPosition][stationaryPosition] === '#' || currentState[changingPosition][stationaryPosition] === 'L') {
        return currentState[changingPosition][stationaryPosition]
      }
    }
    return adjacentSeat;
  } else {
    return adjacentSeat
  }
}

const findRightAdjacentSeat = (adjacentSeat, currentState, stationaryPosition, changingPosition, level) => {
  if (adjacentSeat === '.') {
    for (changingPosition; changingPosition < level.length; changingPosition++) {
      if (currentState[stationaryPosition][changingPosition] === '#' || currentState[stationaryPosition][changingPosition] === 'L') {
        return currentState[stationaryPosition][changingPosition]
      }
    }
    return adjacentSeat;
  } else {
    return adjacentSeat
  }
}

const findLeftAdjacentSeat = (adjacentSeat, currentState, stationaryPosition, changingPosition) => {
  if (adjacentSeat === '.') {
    for (changingPosition; changingPosition >= 0; changingPosition-- ) {
      if (currentState[stationaryPosition][changingPosition] === '#' || currentState[stationaryPosition][changingPosition] === 'L') {
        return currentState[stationaryPosition][changingPosition]
      }
    }
    return adjacentSeat;
  } else {
    return adjacentSeat
  }
}

const findUpAdjacentSeat = (adjacentSeat, currentState, stationaryPosition, changingPosition) => {
  if (adjacentSeat === '.') {
    for (changingPosition; changingPosition >= 0; changingPosition-- ) {
      if (currentState[changingPosition][stationaryPosition] === '#' || currentState[changingPosition][stationaryPosition] === 'L') {
        return currentState[changingPosition][stationaryPosition]
      }
    }
    return adjacentSeat;
  } else {
    return adjacentSeat
  }
}

const findLLAdjacentSeat = (adjacentSeat, currentState, changingPositionX, changingPositionY) => {
  if (adjacentSeat === '.') {
    while (changingPositionX >= 0 && changingPositionY < currentState.length) {
      if (currentState[changingPositionY][changingPositionX] === '#' || currentState[changingPositionY][changingPositionX] === 'L') {
        return currentState[changingPositionY][changingPositionX]
      }
      changingPositionX--;
      changingPositionY++;
    }
    return adjacentSeat;
  } else {
    return adjacentSeat
  }
}

const findURAdjacentSeat = (adjacentSeat, currentState, changingPositionX, changingPositionY, level) => {
  if (adjacentSeat === '.') {
    while (changingPositionX < level.length && changingPositionY >= 0) {
      if (currentState[changingPositionY][changingPositionX] === '#' || currentState[changingPositionY][changingPositionX] === 'L') {
        return currentState[changingPositionY][changingPositionX]
      }
      changingPositionX++;
      changingPositionY--;
    }
    return adjacentSeat;
  } else {
    return adjacentSeat
  }
}

const findULAdjacentSeat = (adjacentSeat, currentState, changingPositionX, changingPositionY) => {
  if (adjacentSeat === '.') {
    while (changingPositionX >= 0 && changingPositionY >= 0) {
      if (currentState[changingPositionY][changingPositionX] === '#' || currentState[changingPositionY][changingPositionX] === 'L') {
        return currentState[changingPositionY][changingPositionX]
      }
      changingPositionX--;
      changingPositionY--;
    }
    return adjacentSeat;
  } else {
    return adjacentSeat
  }
}

const findLRAdjacentSeat = (adjacentSeat, currentState, changingPositionX, changingPositionY, level) => {
  if (adjacentSeat === '.') {
    while (changingPositionX < level.length && changingPositionY < currentState.length) {
      if (currentState[changingPositionY][changingPositionX] === '#' || currentState[changingPositionY][changingPositionX] === 'L') {
        return currentState[changingPositionY][changingPositionX]
      }
      changingPositionX++;
      changingPositionY++;
    }
    return adjacentSeat;
  } else {
    return adjacentSeat
  }
}


stabalizeSeatingChaos(input)
