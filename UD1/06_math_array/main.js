// Declarar un array numérico (entero) y crear un método que imprima:
// La suma de todos los elementos
// El elemento más grande
// El elemento más pequeño
// La media de los elementos


/*
1. **`push()`**: Agrega uno o más elementos al final 
del arreglo.
```javascript
let array = [1, 2, 3];
array.push(4); // [1, 2, 3, 4]
```
2. **`unshift()`**: Agrega uno o más elementos al 
principio del arreglo.
```javascript
let array = [1, 2, 3];
array.unshift(0); // [0, 1, 2, 3]
```
3. **`splice()`**: Inserta uno o más elementos en una 
posición específica del arreglo.
```javascript
let array = [1, 2, 3];
array.splice(1, 0, 4); // [1, 4, 2, 3]

*Métodos para extraer elementos**

1. **`shift()`**: Elimina el primer elemento del 
arreglo y lo devuelve.
```javascript
let array = [1, 2, 3];
let elemento = array.shift(); // 1
console.log(array); // [2, 3]
```
2. **`pop()`**: Elimina el último elemento del arreglo 
y lo devuelve.
```javascript
let array = [1, 2, 3];
let elemento = array.pop(); // 3
console.log(array); // [1, 2]
```
3. **`slice()`**: Extrae una parte del arreglo y la 
devuelve como un nuevo arreglo.
```javascript
let array = [1, 2, 3, 4, 5];
let subArray = array.slice(1, 3); // [2, 3]
console.log(array); // [1, 2, 3, 4, 5]
```
4. **`splice()`**: Puedes utilizar `splice()` para 
extraer elementos del arreglo y reemplazarlos con 
otros.
```javascript
let array = [1, 2, 3];
let elemento = array.splice(1, 1); // [2]
console.log(array); // [1, 3]

*/

let array= [1,2,3,4];


function doCalculation(array) {
    //Imprimo el array
    console.log(array);

    //Imprimmo la suma
    console.log(`La suma del array es: ${getSum(array)}`);

    //Imprimo el maximo
    console.log(`El numero maximo del array es: ${getMax(array)}`);

    //Imprimo el minimo
    console.log(`El numero minimo del array es: ${getMin(array)}`);

    //Imprimo la media
    console.log(`La media del array es: ${getAverage(array)}`);

    //Imprimo la moda
    console.log(`La moda del array es: ${getMode(array)}`);

    //Imprimo separación
    console.log(`##############################################`);
    
    
}

function getSum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

function getMax(array) {
    let max= array[0];

    for(let i=0; i<array.length; i++){
        if(array[i]>max){
            max=array[i];
        }
    }
    return max;
}   

function getMin(array) {
    let min= array[0];
    
    for(let i=0; i<array.length; i++){
        if(array[i]<min){
            min=array[i];
        }
    }
    return min;
}

function getAverage(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length;
}

function getMode(array){
    let frequency = {};
    let maxFreq = 0;
    let mode = null;

    for (let i = 0; i < array.length; i++) {
        let num = array[i];
        frequency[num] = (frequency[num] || 0) + 1;

        if (frequency[num] > maxFreq) {
            maxFreq = frequency[num];
            mode = num;
        }
    }
    return mode;

}








doCalculation([1,2,3,4])
doCalculation([5,5,5,5])
doCalculation([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5])

