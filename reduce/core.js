function sum(array) {
  const reducer = (accumulator, currentValue) => (accumulator + currentValue);
  return array.reduce(reducer);
}

function productAll(array) {
  const joiner = (accumulator, currentValue) => (accumulator.concat(currentValue));
  const reducer = (accumulator, currentValue) => (accumulator*currentValue);
  return (array.reduce(joiner)).reduce(reducer);
}

function luckyNumbers(array) {
  let firstString = "Your lucky numbers are: ";
  const reducer = (accumulator, currentValue) => (accumulator + ", " + currentValue)
  var numberString = array.reduce(reducer);
  return firstString + numberString + ".";
  // clean and readable solution
}

module.exports = {
  sum: sum,
  productAll: productAll,
  luckyNumbers: luckyNumbers
};

