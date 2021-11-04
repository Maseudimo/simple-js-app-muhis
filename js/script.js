//List of pokemon Array (IIFE Function)
let pokemonRepository = (function () {
// Array of Pokemons, with their names, heights and types
  pokemonList = [
 {
   name:'Zekrom',
   height:2.9,
   weight:345,
   types:["Dragon","Electric"]},

 {

   name:"Gyrados",
   height:6.5,
   weight:235,
   types:["Water","Flying"]},

 {
   name:"Steelix",
   height:9.2,
   weight:400,
   types:["Steel","Ground"]},

 {
   name:"Houndour",
   height:0.6,
   weight:10.8,
   types:["Dark","Fire"]},

 {
   name:"Nidoking",
   height:1.4,
   weight:62,
   types:["Ground","Poison"]
 }
   ];


   //adds pokemon to the pokedex
    function add(pokemon) {
      pokemonList.push(pokemon);
    }

    function getAll() {
    return pokemonList
  }

  return {
    add: add,
    getAll: getAll
  }

  })();

// for each function to write pokemon and its name/height/type
  pokemonRepository.getAll().forEach(function(pokemon){
  document.write( '<p class="whole-info">' + '<h2 class="pokemon-name">' + pokemon.name + '</h2>' + ' (Height: ' + pokemon.height + '\), ' + ' Types: ' + pokemon.types + '</p> <br>');
});
