
let pokemonList = [];
let pokemon1 = {name: "Squirtle", height: 0.5, weight: 9, types: ['water']};
let pokemon2 = {name: "Beedrill", height: 1, weight: 29.5, types: ['bug','poison']};
let pokemon3 = {name: "Nidoran", height: 0.5, weight: 9, types: ['poison']};
let pokemon4 = {name: "Venomoth", height: 1.5, weight: 12.5, types: ['bug','poison']};
let pokemon5 = {name: "Meganium", height: 1.8, weight: 100.5, types: ['grass']};


console.log(pokemonList);
// to display all the Pokemon names
for(let i=0; i<pokemonList.length; i++){
  document.write("<p>" + pokemonList[i].name + "</p>");
}
