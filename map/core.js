function multiplyBy10(array) {
  return array.map(x => x * 10);
  // x could be more explicitly named as number
}

function onlyVowels(array) {
  return array.map(item => item.replace(/[^aeiou]/g, ""));
  // nice solution!
}

function doubleMatrix(array) {
  return array.map(item => item.map(element => element * 2));
  // nice way to decompose a neste array.
  // the clear difference in variable names helped me (as a reader) to mentally distinguish the contents of both arrays
}

function onlyNames(array) {
  return array.map(person => person["name"]);
  // good variable name!
}

module.exports = {
  multiplyBy10: multiplyBy10,
  onlyVowels: onlyVowels,
  doubleMatrix: doubleMatrix,
  onlyNames: onlyNames
};
