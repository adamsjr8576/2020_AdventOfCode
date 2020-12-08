// part 1
const getValidBagCount = allBags => {
  const bagNames = Object.keys(allBags);
  const bagCheck = bagNames.map(name => {
    return checkBag(allBags[name], allBags)
  });
  return bagCheck.filter(check => check).length
}

const checkBag = (bagsContained, allBags) => {
  if (bagsContained['no other bag']) {
    return false
  } else if (bagsContained['shiny gold']) {
    return true;
  }
  const bags = Object.keys(bagsContained);
  const check = bags.map(bag => {
    return checkBag(allBags[bag], allBags)
  })
  return check.includes(true) ? true : false;
}

//part 2

const shinyGoldBag = {
    "mirrored bronze": "1",
    "dull aqua": "4",
    "dotted indigo": "2",
    "light indigo": "1"
  }

  const countBags = (bag, allBags) => {
    if (bag['no other bag']) {
      return 0;
    }
    const bagsWithin = Object.keys(bag);
    return bagsWithin.reduce((count, bagWithin) => {
      return count + (parseInt(bag[bagWithin])* (1+countBags(allBags[bagWithin], allBags)))
    }, 0)
  }

  countBags(shinyGoldBag, input)
