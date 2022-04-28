const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domainsArr) {
    let res = {};
    for (let i = 0; i < domainsArr.length; i++) {
        let currDomains = domainsArr[i].split('.').reverse();
        let domain = `.${currDomains[0]}`;
        for (let j = 1; j < currDomains.length + 1; j++) {
            if (res[domain] === undefined) {
                res[domain] = 1;
            } else {
                res[domain]++;
            }
            domain += `.${currDomains[j]}`;
        }
    }
    return res;
}

module.exports = {
    getDNSStats
};