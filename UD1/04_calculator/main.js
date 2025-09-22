// Declarar 2 variables con número e imprimir por consola (mediante console.log()) el valor de:
// Suma
// Resta
// Multiplicación
// División


// define variables
let x, y;

x=10
y=5

function sum(x, y){
    return (x + y)
}

function dif(x, y){
    return (x-y)
}

function product(x, y){
    return (x*y)
}

function div(x, y){
    return (x/y)
}

// print sum, substract, multiply and divide
console.log(`El resutado de la suma de ${x} y ${y} es = ${sum(x, y)}`)
console.log(`El resutado de la resta de ${x} y ${y} es = ${dif(x, y)}`)
console.log(`El resutado de la multiplicación de ${x} y ${y} es = ${product(x, y)}`)
console.log(`El resutado de la división de ${x} y ${y} es = ${div(x, y)}`)