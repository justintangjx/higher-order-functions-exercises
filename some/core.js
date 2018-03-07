// Check to see if any of the elements in the
// array are numbers greater than 10.
function anyGreaterThan10(input) {
  return input.some(biggerThan10 => biggerThan10 > 10);
}

// Check to see if any of the strings in
// the array is longer than 10 characters.
function longWord(input) {
  return input.some(longerThan10 => longerThan10.length > 10);
}

// Check to see if any of the elements in
// the matrix are true.
function truePossibilities(input) {
  return input.some(item => item.some(element => element == true));
}

// Check to see if 'Lost' is in
// the phrase (using some).
function lostCarcosa(input) {
  return input.some(item => item.includes("Lost Carcosa"));
}

module.exports = {
  anyGreaterThan10,
  longWord,
  truePossibilities,
  lostCarcosa
};
