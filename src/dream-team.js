const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members ) {
  if(!members) return false;
  let newArr = []
  for (let i = 0; i < members.length; i++) {
    if (typeof(members[i]) == 'string') {
      newArr.push(members[i].split('').filter(elem => elem != ' ')[0].toUpperCase())
    }
  };
  return (newArr.length != 0) ? newArr.sort().join('') : false
};
