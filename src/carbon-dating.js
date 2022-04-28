const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(input) {
    if (arguments.length != 1 || typeof arguments[0] != 'string') return false;
    if (parseFloat(input) != NaN) {
        let res = Math.ceil((Math.log(MODERN_ACTIVITY / parseFloat(input))) / (0.693 / HALF_LIFE_PERIOD));
        if (res > 0 && res != Infinity) return res;
    }
    return false;
}

module.exports = {
    dateSample
};