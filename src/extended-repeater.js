const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
    if (options['separator'] === undefined) options['separator'] = '+';
    if (options['additionSeparator'] === undefined) options['additionSeparator'] = '';
    let res = [];
    for (let i = 0; i < options['repeatTimes']; i++) {
        let temp = str;
        for (let j = 0; j < options['additionRepeatTimes']; j++) {
            temp += options['addition'] + options['additionSeparator'];
        }
        res.push(temp);
    }
    return res.join(options['separator']);
}

module.exports = {
    repeater
};