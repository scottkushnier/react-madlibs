function isDigit(c) {
  return c >= "0" && c <= "9";
}

function addCommas(s) {
  // will use two passes, since need commas every three digits from decimal, working -left-
  // first pass, count # digits before decimal
  let digitCount = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == ".") {
      break;
    }
    if (isDigit(s[i])) {
      digitCount++;
    }
  }
  //   console.log("digit count: ", digitCount);
  // second pass, add commas to a new string
  let acc = "";
  let digitCounter = 0;
  let sawDecimal = false;
  for (let i = 0; i < s.length; i++) {
    acc += s[i];
    if (isDigit(s[i])) {
      digitCounter++;
    }
    if (s[i] == ".") {
      sawDecimal = true;
    }
    // if number if digits left is divisible by 3 (and not zero), then add comma
    if (
      !sawDecimal &&
      digitCount != digitCounter &&
      (digitCount - digitCounter) % 3 == 0
    ) {
      acc += ",";
    }
  }

  return acc;
}

module.exports = addCommas;
