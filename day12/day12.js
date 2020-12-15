// part 1

const getDirections = input => {
  const directionInfo = {
    'N': {count: 1, direction: 'y'},
    'S': {count: -1, direction: 'y'},
    'E': {count: 1, direction: 'x'},
    'W': {count: -1, direction: 'x'}
  }
  const directions = ['N', 'E', 'S', 'W'];
  let currentDirection = 'E';
  let currentPlace = {
    'x': 0,
    'y': 0
  }

  input.forEach(direction => {
    const action = direction.slice(0,1);
    const actionCount = parseInt(direction.slice(1, direction.length));
    if (action === 'L' || action === 'R') {
      currentDirection = turnDirections(action, actionCount, directions, currentDirection);
    }
    if (action === 'F') {
      currentPlace = moveForward(currentDirection, actionCount, currentPlace, directionInfo);
    }
    if (action === 'S' || action === 'W' || action === 'E' || action === 'N') {
      currentPlace = moveForward(action, actionCount, currentPlace, directionInfo);
    }

  })
  return Math.abs(currentPlace.x) + Math.abs(currentPlace.y)
}

const turnDirections = (action, actionCount, directions, currentDirection) => {
  const amountCount = actionCount / 90;
  const currentDirectionPlace = directions.indexOf(currentDirection);
  if (action === 'L') {
    let moveCount = currentDirectionPlace - amountCount;
    if (moveCount < 0) {
      moveCount = directions.length - (moveCount * -1);
    }
    return directions[moveCount]
  } else {
    let moveCount = currentDirectionPlace + amountCount;
    if (moveCount >= 4) {
      moveCount -= 4
    }
    return directions[moveCount]
  }
}

const moveForward = (currentDirection, actionCount, currentPlace, directionInfo) => {
  const count = directionInfo[currentDirection].count * actionCount;
  const direction = directionInfo[currentDirection].direction;
  currentPlace[direction] += count;
  return currentPlace;
}

// part 2

const getDirections = input => {
  const directionInfo = {
    'N': {count: 1, direction: 'y'},
    'S': {count: -1, direction: 'y'},
    'E': {count: 1, direction: 'x'},
    'W': {count: -1, direction: 'x'}
  }
  const directions = ['N', 'E', 'S', 'W'];
  let currentWayPoint = {
    'E': 10,
    'N': 1
  }
  let currentShipPosition = {
    'x': 0,
    'y': 0
  }

  input.forEach(direction => {
    const action = direction.slice(0,1);
    const actionCount = parseInt(direction.slice(1, direction.length));
    if (action === 'L' || action === 'R') {
      currentWayPoint = turnDirections(action, actionCount, directions, currentWayPoint);
    }
    if (action === 'F') {
      currentShipPosition = moveForward(actionCount, currentWayPoint, currentShipPosition, directionInfo);
    }
    if (action === 'S' || action === 'W' || action === 'E' || action === 'N') {
      currentWayPoint = moveWayPoint(action, actionCount, currentWayPoint, directionInfo);
    }
  })
  return Math.abs(currentShipPosition.x) + Math.abs(currentShipPosition.y)
}

const turnDirections = (action, actionCount, directions, currentWayPoint) => {
  const amountCount = actionCount / 90;
  let newWayPoint = {}
  const wayPointDirections = Object.keys(currentWayPoint);
  wayPointDirections.forEach(direction => {
    const currentDirectionPlace = directions.indexOf(direction);
    if (action === 'L') {
      let moveCount = currentDirectionPlace - amountCount;
      if (moveCount < 0) {
        moveCount = directions.length - (moveCount * -1);
      }
      newWayPoint[directions[moveCount]] = currentWayPoint[direction]
    } else {
      let moveCount = currentDirectionPlace + amountCount;
      if (moveCount >= 4) {
        moveCount -= 4
      }
      newWayPoint[directions[moveCount]] = currentWayPoint[direction]
    }
  })
  return newWayPoint;
}

const moveWayPoint = (action, actionCount, currentWayPoint, directionInfo) => {
  if (currentWayPoint[action] === undefined) {
    if (action === 'S') {
      currentWayPoint.N -= actionCount;
      if (currentWayPoint.N < 0) {
        currentWayPoint.S = Math.abs(currentWayPoint.N);
        delete currentWayPoint.N
      }
    } else if (action === 'N') {
      currentWayPoint.S -= actionCount;
      if (currentWayPoint.S < 0) {
        currentWayPoint.N = Math.abs(currentWayPoint.S);
        delete currentWayPoint.S
      }
    } else if (action === 'E') {
      currentWayPoint.W -= actionCount;
      if (currentWayPoint.W < 0) {
        currentWayPoint.E = Math.abs(currentWayPoint.W);
        delete currentWayPoint.W
      }
    } else if (action === 'W') {
      currentWayPoint.E -= actionCount;
      if (currentWayPoint.E < 0) {
        currentWayPoint.W = Math.abs(currentWayPoint.E);
        delete currentWayPoint.E;
      }
    }
  } else {
    currentWayPoint[action] += actionCount;
  }
  return currentWayPoint;
}

const moveForward = (actionCount, currentWayPoint, currentShipPosition, directionInfo) => {
  const wayPointDirections = Object.keys(currentWayPoint);
  wayPointDirections.forEach(direction => {
    const count = directionInfo[direction].count * actionCount;
    const position = directionInfo[direction].direction;
    currentShipPosition[position] += (count * currentWayPoint[direction]);
  })
  return currentShipPosition;
}

getDirections(input);
