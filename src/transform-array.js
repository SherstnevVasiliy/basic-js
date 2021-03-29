const CustomError = require("../extensions/custom-error");

module.exports = function transform(array) {
  if(!array) {
    throw new Error('Error');
  }

  let newArray = [];
  for (let i = 0; i < array.length; i++) {

    switch (array[i]) {
      case `--discard-next`:
        i++;
        break; 
      case `--discard-prev`:
        (newArray.length && array[i - 2] != `--discard-next`) ? newArray.pop() : newArray;
        break;
      case `--double-next`:
        (i < array.length - 1) ? newArray.push(array[i+1]) : newArray;
        break;
      case `--double-prev`: (i > 0 && array[i - 2] != `--discard-next`) ? newArray.push(array[i-1]) : newArray;
        break;
      default: newArray.push(array[i])
    }
  }
  return newArray
};
