module.exports = function getSeason(date) {
  if (arguments.length === 0) {
    return 'Unable to determine the time of year!';
  }
  if (Object.prototype.toString.call(date) != '[object Date]'){
    throw new Error();
  }

  const month = date.getMonth();
  if (month > 1 && month < 5) {
    return 'spring';
  } 
  if (month > 4 && month < 8) {
    return 'summer';
  } 
  if (month >7 && month < 11) {
    return 'fall';
  } 
  return 'winter'
};