var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
var candyString = ['foo'];

function destructivelyAddElementToBeginningOfArray(chocolateBars, candyString) {
  chocolateBars.unshift(candyString);
  return chocolateBars;
}

function addElementToBeginningOfArray(chocolateBars, candyString){
  return [candyString, ...chocolateBars];
}
function destructivelyAddElementToEndOfArray(chocolateBars, candyString) {
  chocolateBars.push(candyString);
  return chocolateBars;
}
function addElementToEndOfArray(chocolateBars, candyString) {
  return [...chocolateBars, candyString];
}