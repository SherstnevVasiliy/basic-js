const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if(value!==''){
      this.chain.push(`( ${String(value)} )`);  
    } 
    else{
        this.chain.push('( )');
    }
    return this;
  },
  removeLink(position) {
    if (position < 1 || position > this.chain.length) {
      this.chain = [];
      throw new Error;
    }
    this.chain.splice(position-1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
		let result = this.chain.join('~~');
		this.chain = [];
		return result;
  }
};

module.exports = chainMaker;
