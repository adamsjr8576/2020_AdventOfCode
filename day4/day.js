// Part 1:

const validatePassports = input => {
  const requiredFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];
  return input.reduce((validCount, passport) => {
    const passportFields = Object.keys(passport);
    let passportFieldCheck = true;
    for (let i = 0; i < requiredFields.length; i++) {
      if (!passportFields.includes(requiredFields[i])) {
        passportFieldCheck = false;
        break;
      }
    }
      if (passportFieldCheck) {
        validCount++;
      }
    return validCount
  }, 0)
}

//Part 2:

const validatePassports = input => {
  const requiredFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];
  return input.reduce((validCount, passport) => {
    const passportFields = Object.keys(passport);
    let passportFieldCheck = true;
    for (let i = 0; i < requiredFields.length; i++) {
      if (!passportFields.includes(requiredFields[i])) {
        passportFieldCheck = false;
        break;
      }
    }
    if (passportFieldCheck && validateFields(passport)) {
      validCount++;
    }
    return validCount
  }, 0)
}

const validateFields = passport => {
  return (
    validateYear('byr', passport) && validateYear('iyr', passport)
    && validateYear('eyr', passport) && validateHeight(passport.hgt) && validateHairColor(passport.hcl)
    && validateEyeColor(passport.ecl) && validateId(passport.pid)
  )
}

const validateYear = (key, passport) => {
  const year = passport[key];
  if (year.length !== 4) {
    return false
  }
  const yearNum = parseInt(year);
  let yearCheck = false;
  if (key === "byr" && yearNum >= 1920 && yearNum <= 2002) {
    yearCheck = true;
  }
  if (key === "iyr" && yearNum >= 2010 && yearNum <= 2020) {
    yearCheck = true;
  }
  if (key === "eyr" && yearNum >= 2020 && yearNum <= 2030) {
    yearCheck = true;
  }
  return yearCheck;
}

const validateHeight = height => {
  if (height.includes('in')) {
    const heightSplit = height.split('i');
    const heightNum = parseInt(heightSplit[0]);
    return heightNum >= 59 && heightNum <= 76? true : false;
  } else if (height.includes('cm')) {
    const heightSplit = height.split('c');
    const heightNum = parseInt(heightSplit[0]);
    return heightNum >= 150 && heightNum <= 193? true : false;
  } else {
    return false;
  }
}


const validateHairColor = hairColor => {
  const validColorValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
  if (hairColor[0] !== '#') {
    return false
  }
  let splitHairColor = hairColor.split('');
  splitHairColor.shift();
  if (splitHairColor.length !== 6) {
    return false;
  }
  for (let i = 0; i < splitHairColor.length; i++) {
    if (!validColorValues.includes(splitHairColor[i])) {
      return false;
    }
  }
  return true;
}

const validateEyeColor = eyeColor => {
  const possibleEyeColors = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];
  return possibleEyeColors.includes(eyeColor)? true : false;
}

const validateId = id => {
  if (id.length !== 9) {
    return false
  }
  let numCheck = true;
  for (let i = 0; i < id.length; i++) {
    if (!(parseInt(id[i]) >= 0 && parseInt(id[i]) <= 9)) {
      numCheck = false
    }
  }
  return numCheck;
}
