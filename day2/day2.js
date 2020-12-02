//Part 1

const checkPasswords = input => {
  let passwordCheck = input.map(password => {
    const passwordSplit = password.password.split('');
    const passwordLetterCount = passwordSplit.reduce((wordCount, letter) => {
      if (!wordCount[letter]) {
        wordCount[letter] = 0;
      }
      wordCount[letter]++;
      return wordCount;
    }, {});
    const nums = password.num.split('-');
    const newNums = nums.map(num => parseInt(num));
    const targetLetter = password.letter.slice(0, 1);
    if (passwordLetterCount[targetLetter] >= newNums[0] && passwordLetterCount[targetLetter] <= newNums[1]) {
      return true
    } else {
      return false;
    }
  })
  return passwordCheck.filter(check => check).length
}

//Part 2

const checkPasswords = input => {
  let passwordCheck = input.map(password => {
    const nums = password.num.split('-');
    const newNums = nums.map(num => parseInt(num));
    const targetLetter = password.letter.slice(0, 1);
    const check1 = password.password[newNums[0] - 1] === targetLetter && password.password[newNums[1] - 1] !== targetLetter;
    const check2 = password.password[newNums[0] - 1] !== targetLetter && password.password[newNums[1] - 1] === targetLetter
    if (check1 || check2) {
      return true
    } else {
      return false;
    }
  })
  return passwordCheck.filter(check => check).length
}
