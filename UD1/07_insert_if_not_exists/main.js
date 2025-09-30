const assert = require('assert').strict

function insertIfNotExists(array, item, position) {
    if(position==false){  //Se inserta al final
        if(array.includes(item)==false){
            array.push(item);
            //console.log('NO Contiene el elemento');
        }else{
            //console.log('Contiene el elemento');
        }
    }else{  //Se inserta al principio
        if(array.includes(item)==false){
            array.unshift(item);
            //console.log('NO Contiene el elemento');
        }else{
            //console.log('Contiene el elemento');
        }
    }
    
    return array
}


let array = ['pera', 'manzana']

let result = insertIfNotExists(array, 'pera', false)

//console.log(result);
assert.deepStrictEqual(result, ['pera', 'manzana'])

result = insertIfNotExists(array, 'melón', false)
//console.log(result);
assert.deepStrictEqual(result, ['pera', 'manzana', 'melón'])

result = insertIfNotExists(array, 'melocotón', true)
assert.deepStrictEqual(result, ['melocotón', 'pera', 'manzana', 'melón'])

console.log('Todos los test OK');
