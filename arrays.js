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
function accessElementInArray(chocolateBars, index) {
  return chocolateBars[index];
}
function destructivelyRemoveElementFromBeginningOfArray(chocolateBars) {
  chocolateBars.shift();
  return chocolateBars
}
function removeElementFromBeginningOfArray(chocolateBars) {
  return chocolateBars.slice(1);
}
function destructivelyRemoveElementFromEndOfArray(chocolateBars) {
  chocolateBars.pop();
  return chocolateBars
}