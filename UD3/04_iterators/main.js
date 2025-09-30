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

function mapAges(factionPilots) {
  let memFactionPilots = factionPilots.map(function(x){
    return x.years;
  });
  return memFactionPilots;
 
}

/*
rebels: devolver únicamente los pilotos rebeldes, 
utilizando la función filter
*/
function rebels() {

  let arryRebels = pilots.filter((pilots) => pilots.faction === "Rebels");
  return arryRebels;

}

function empires() {

  let arryEmpires = pilots.filter((pilots) => pilots.faction === "Empire");
  return arryEmpires;

}

/*
totalFaction: devolver el número de pilotos de 
una determinada facción
*/
function totalFaction(faction) {
  if(faction==="Rebels"){
    let rebelsFaction = rebels();
    //let accumulator =0;
    let rebelsNumber = rebelsFaction.reduce(function(accumulator, currentValue){
      return accumulator +1;
    }, 0)
    return rebelsNumber;
  }else if(faction==="Empire"){
    let empireFaction = empires();
    //let accumulator =0;
    let empireNumber = empireFaction.reduce(function(accumulator, currentValue){
      return accumulator +1;
    }, 0)
    return empireNumber;
  }

}

function avgYears(faction) {
  if(faction ==="Rebels"){
    let rebelsFaction = rebels();
    // Obtengo el número de integrantes de la facción
    let rebelsNumber = rebelsFaction.reduce(function(accumulator, currentValue){
      return accumulator +1;
    }, 0);
    
    //Obtengo la suma de las edades de la facción 
    let rebelsAgeSum = mapAges(rebelsFaction).reduce(function(accumulator, currentValue){
      return accumulator + currentValue;
    }, 0);
    
    return (rebelsAgeSum/rebelsNumber);
  
  
  }else if(faction === "Empire"){
    let empireFaction = empires();
    // Obtengo el número de integrantes de la facción
    let empiresNumber = empireFaction.reduce(function(accumulator, currentValue){
      return accumulator +1;
    }, 0);
    
    //Obtengo la suma de las edades de la facción 
    let empireAgeSum = mapAges(empireFaction).reduce(function(accumulator, currentValue){
      return accumulator + currentValue;
    }, 0);
    
    return (empireAgeSum/empiresNumber);
  }


}

// use console.log
iterateSimple()
console.log(iterateSimple());

iterateForEach()
console.log(iterateForEach());


try {
  
  assert.deepStrictEqual(mapIds(), [2,8,40,66])
  //console.log(mapIds());
  
  assert.deepStrictEqual(rebels(), [pilots[0], pilots[3]])
  //console.log(rebels());

  assert.deepStrictEqual(totalFaction('Rebels'), 2)
/*
  console.log(totalFaction('Rebels'));
  console.log(totalFaction('Empire'));

  console.log(avgYears('Rebels'));
  console.log(avgYears('Empire'));
*/
  assert.deepStrictEqual(avgYears('Rebels'), 22.5)
  assert.deepStrictEqual(avgYears('Empire'), 25)

} catch (error) {
  console.error(error)
}