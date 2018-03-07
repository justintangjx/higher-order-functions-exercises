function multiplyBy10(array) {
  return array.map(x => x * 10);
}

function onlyVowels(array) {
  return array.map(item => item.replace(/[^aeiou]/g, ""));
}

function doubleMatrix(array) {
  return array.map(item => item.map(element => element * 2));
}

function onlyNames(array) {
  return array.map(person => person["name"]);
}

module.exports = {
  multiplyBy10: multiplyBy10,
  onlyVowels: onlyVowels,
  doubleMatrix: doubleMatrix,
  onlyNames: onlyNames
};
