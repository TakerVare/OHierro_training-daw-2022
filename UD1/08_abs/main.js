const { log } = require('console');

const assert = require('assert').strict;

function abs(value) {
    let result=value;
    if(value<0){
        result=value*(-1);
    }

    return result;
}


console.log(`El valor absoluto de 4 es ${abs(4)}`);
console.log(`El valor absoluto de -4 es ${abs(4)}`);
console.log(`El valor absoluto de 0 es ${abs(0)}`);


assert.strictEqual(abs(4), 4)
assert.strictEqual(abs(-4), 4)
assert.strictEqual(abs(0), 0)