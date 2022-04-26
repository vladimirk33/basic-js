const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(address) {
    let numAlphabet = '0123456789';
    let charAlphabet = 'ABCDEF';
    address = address.split('-');
    for (let i = 0; i < address.length; i++) {
        if (!
            ((numAlphabet.includes(address[i][0]) ||
                    charAlphabet.includes(address[i][0])) &&
                (numAlphabet.includes(address[i][1]) ||
                    charAlphabet.includes(address[i][1]))
            )) return false;
    }
    return true;
}
module.exports = {
    isMAC48Address
};