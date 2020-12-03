//Part 1

const checkForObstacles = input => {
  let obstacleCount = 0;
  let trajectoryCount = 0;

  for (var i = 0; i < input.length; i++) {
    if (input[i][trajectoryCount] === '#') {
      obstacleCount++;
    }
    trajectoryCount += 3;
    if (trajectoryCount > 30) {
      trajectoryCount -= 31;
    }
  }
  return obstacleCount;
}


//Part 2

const slopes = [[1,1], [3,1], [5,1], [7,1], [1,2]];

const checkForObstacles = (input, traverseNum, downNum) => {
  let obstacleCount = 0;
  let trajectoryCount = 0;

  for (var i = 0; i < input.length; i += downNum) {
    if (input[i][trajectoryCount] === '#') {
      obstacleCount++;
    }
    trajectoryCount += traverseNum;
    if (trajectoryCount > 30) {
      trajectoryCount -= 31;
    }
  }
  return obstacleCount;
}

const checkForVariousSlopes = (input, slopes) => {
  let obstacleProduct;

  for (var i = 0; i < slopes.length; i++) {
    const obstacleCount = checkForObstacles(input, slopes[i][0],slopes[i][1]);
    if (obstacleProduct === undefined) {
      obstacleProduct = obstacleCount;
    } else {
      obstacleProduct = obstacleProduct * obstacleCount;
    }
  }

  return obstacleProduct;
}

checkForVariousSlopes(input, slopes);
