const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(num) {
    let max = 0;
    for (let i = 0; i < num.toString().length; i++) {
        let currNum = num.toString().slice(0, i) + num.toString().slice(i + 1);
        if (currNum > max) {
            max = currNum;
        }
    }
    return parseInt(max);
}

module.exports = {
    deleteDigit
};