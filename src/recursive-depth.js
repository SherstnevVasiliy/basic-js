const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let maxDepth = 0;
    arr.map(item => {
      if (Array.isArray(item)) {
        (maxDepth = Math.max(this.calculateDepth(item), maxDepth))
        };
      });
    maxDepth += 1;
    return maxDepth;
  };
};