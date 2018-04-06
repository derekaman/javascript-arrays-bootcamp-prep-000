var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
 var newArray = [element, ...array];
 return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
 array.unshift(element);
  return array;
  }

function addElementToEndOfArray(array, element) {
  var newArray = [...array, element];
  return newArray;
}

function destructivelyAddElementToEndOfArray(array, element) {
 array.push(element);
  return array;
}

function accessElementInArray(array, index) {
  console.log(array[index]);
  var element = array[index];
  return element;
}
  
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}
  
function removeElementFromBeginningOfArray(array) {
  array.slice();
}
  
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1);
}