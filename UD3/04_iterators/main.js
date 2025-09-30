'use strict'

const assert = require('assert').strict;

var pilots = [
  {
    id: 2,
    name: "Wedge Antilles",
    faction: "Rebels",
    years: 10
  },
  {
    id: 8,
    name: "Ciena Ree",
    faction: "Empire",
    years: 20
  },
  {
    id: 40,
    name: "Iden Versio",
    faction: "Empire",
    years: 30
  },
  {
    id: 66,
    name: "Thane Kyrell",
    faction: "Rebels",
    years: 35
  }
];

//iterateSimple: iterar e imprimir 
//los pilotos utilizando un for “normal”
function iterateSimple() {
  let memPitolos = [];
  for(let i=0; i<pilots.length; i++){
    memPitolos.push(pilots[i]);
  }

  return memPitolos;
}

//iterateForEach: iterar e imprimir los 
//pilotos utilizando array.forEach
function iterateForEach() {
  let memPitolos = [];
  pilots.forEach((element) => memPitolos.push(element));
  
  return memPitolos;
  
}


/*
mapIds: devolver un array con los 
id’s de los pilotos utilizando map
*/
function mapIds() {
  let memPitolos = pilots.map(function(x){
    return x.id;
  });
  return memPitolos;
 
}
function rebels() {
}
function totalFaction(faction) {
}
function avgYears(faction) {
}

// use console.log
iterateSimple()
console.log(iterateSimple());

iterateForEach()
console.log(iterateForEach());


try {
  assert.deepStrictEqual(mapIds(), [2,8,40,66])
  console.log(mapIds());
  /*
  assert.deepStrictEqual(rebels(), [pilots[0], pilots[3]])

  assert.deepStrictEqual(totalFaction('Rebels'), 2)

  assert.deepStrictEqual(avgYears('Rebels'), 22.5)
  assert.deepStrictEqual(avgYears('Empire'), 25)
*/
} catch (error) {
  console.error(error)
}
