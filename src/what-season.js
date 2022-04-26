const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(dateObject) {
    if (arguments.length <= 0) {
        return 'Unable to determine the time of year!';
    }
    if (!(dateObject instanceof Date && !isNaN(dateObject))) {
        return 'Invalid date!'
    }
    let dateMonth = dateObject.getMonth() + 1;
    let res;
    if (dateMonth === 12 || (dateMonth >= 1 && dateMonth <= 2)) {
        res = 'winter';
    } else if (dateMonth >= 3 && dateMonth <= 5) {
        res = 'spring';
    } else if (dateMonth >= 6 && dateMonth <= 8) {
        res = 'summer';
    } else {
        res = 'autumn';
    }
    return res;
}

module.exports = {
    getSeason
};