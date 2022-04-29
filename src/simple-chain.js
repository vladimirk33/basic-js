const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
    chain: [],
    getLength() {
        return this.chain.length;
    },
    addLink(value) {
        this.chain.push(`( ${value} )`);
        return this;
    },
    removeLink(pos) {
        if (!Number.isInteger(pos) || pos <= 0 || pos > this.chain.length) {
            this.chain = [];
            throw new Error("You can't remove incorrect link!");
        }
        this.chain.splice(pos - 1, 1);
        return this;
    },
    reverseChain() {
        this.chain.reverse();
        return this;
    },
    finishChain() {
        let res = this.chain.join('~~');
        this.chain = [];
        return res;
    }
};

module.exports = {
    chainMaker
};