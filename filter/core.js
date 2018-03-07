function onlyEven(array) {
  return array.filter(seeEven => seeEven % 2 === 0);
  // seeEven could be better named as `element` or `number`
}

function onlyOneWord(array) {
  return array.filter(checkSpace => !checkSpace.includes(' ') );
  // similarly, checkSpace could be better-named
}

function positiveRowsOnly(array) {
  return array.filter(row => row.every(item => item >= 0));
}

function truthyValuesOnly(array) {
  return array.filter(element => !!element);
  // interesting solution with !! !
}

module.exports = {
  onlyEven: onlyEven,
  onlyOneWord: onlyOneWord,
  positiveRowsOnly: positiveRowsOnly,
  truthyValuesOnly: truthyValuesOnly
};
