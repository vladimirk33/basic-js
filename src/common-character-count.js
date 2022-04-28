const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(str1, str2) {
    let str1Arr = str1.split('');
    let str2Arr = str2.split('');
    let res = 0;
    for (let i = 0; i < str1.length; i++) {
        if (str2Arr.includes(str1[i]) && str1Arr.includes(str1[i])) {
            str1Arr.splice(str1Arr.indexOf(str1[i]), 1);
            str2Arr.splice(str2Arr.indexOf(str1[i]), 1);
            res++;
        }
    }
    return res;
}

module.exports = {
    getCommonCharacterCount
};