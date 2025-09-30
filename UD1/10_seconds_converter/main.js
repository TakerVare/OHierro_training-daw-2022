const assert = require('assert').strict;

function toHoursMinutesSeconds(value) {
    let hours = 0
    let minuts =0
    let seconds =0

    if(value>= 3600){
        hours=parseInt(value/3600)
        value=value%3600
    }
    if(value>=60){
        minuts=parseInt(value/60)
        value=value%60
    }
    seconds=value

    return `${hours}:${minuts}:${seconds}`
}
console.log(toHoursMinutesSeconds(3600));


assert.deepStrictEqual(toHoursMinutesSeconds(3600), "1:0:0")
assert.deepStrictEqual(toHoursMinutesSeconds(3720), "1:2:0")
assert.deepStrictEqual(toHoursMinutesSeconds(3725), "1:2:5")

console.log('Todos los test OK')