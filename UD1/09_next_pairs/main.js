const assert = require('assert').strict;

function nextPairs(value) {
    let result=0
    if(value%2===1){
        result= [(value-1), (value+1)]
    }else{
        result=[(value-2), (value+2)]
    }
    return result

}

console.log(`Los pares continuos de 3 son: ${nextPairs(3)}`);
console.log(`Los pares continuos de 4 son: ${nextPairs(4)}`);

assert.deepStrictEqual(nextPairs(3), [2,4])
assert.deepStrictEqual(nextPairs(4), [2,6])