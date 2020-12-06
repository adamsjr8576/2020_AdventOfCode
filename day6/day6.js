// part 1

const getYesCount = input => {
  return input.reduce((yesCount, group) => {
    let yesTracker = group.reduce((yesTracker, responses) => {
      const splitResponses = responses.split('');
      splitResponses.forEach(response => {
        if (!yesTracker[response]) {
          yesTracker[response] = 0;
        }
        yesTracker[response]++
      })
      return yesTracker;
    }, {});
    yesCount += Object.keys(yesTracker).length
    return yesCount;
  }, 0)
}

//part 2

const getYesCount = input => {
  return input.reduce((yesCount, group) => {
    let yesTracker = group.reduce((yesTracker, responses) => {
      const splitResponses = responses.split('');
      splitResponses.forEach(response => {
        if (!yesTracker[response]) {
          yesTracker[response] = 0;
        }
        yesTracker[response]++
      })
      return yesTracker;
    }, {});
    const yesAnswers = Object.keys(yesTracker);
    yesAnswers.forEach(yesAnswer => {
      if (yesTracker[yesAnswer] === group.length) {
        yesCount++;
      }
    })
    return yesCount;
  }, 0)
}
