const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {
    if (!message && !key) {
      throw Error();
    }
    let str = '';
    message = message.toUpperCase();
    key = key.toUpperCase();
    let count = 0;
    for (let i in message) {
      if (message.charCodeAt(i) < 65 || message.charCodeAt(i) > 90)
        str += message[i];
      else {
        str += String.fromCharCode(
          ((message.charCodeAt(i) + key.charCodeAt(count % key.length) - 130) % 26) + 65,
        );
        count++;
      }
    }
    if (this.direct) {
      return str;
    } else {
      return str.split('').reverse().join('');
    }
  }

  decrypt(message, key) {
    if (!message && !key) {
      throw Error();
    }
    let str = '';
    message = message.toUpperCase();
    key = key.toUpperCase();
    let count = 0;
    for (let i in message) {
      if (message.charCodeAt(i) < 65 || message.charCodeAt(i) > 90)
        str += message[i];
      else {
        str += String.fromCharCode(
          ((message.charCodeAt(i) - key.charCodeAt(count % key.length) + 26) % 26) + 65,
        );
        count++;
      }
    }
    if (this.direct) {
      return str;
    } else {
      return str.split('').reverse().join('');
    }
  }
}

module.exports = VigenereCipheringMachine;
