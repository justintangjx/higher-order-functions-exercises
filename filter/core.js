function onlyEven(array) {
  return array.filter(seeEven => seeEven % 2 === 0);

}

function onlyOneWord(array) {
  return array.filter(checkSpace => !checkSpace.includes(' ') );
}

function positiveRowsOnly(array) {
  return array.filter(row => row.every(item => item >= 0));
}

function truthyValuesOnly(array) {
  return array.filter(element => !!element);
}

module.exports = {
  onlyEven: onlyEven,
  onlyOneWord: onlyOneWord,
  positiveRowsOnly: positiveRowsOnly,
  truthyValuesOnly: truthyValuesOnly
};
