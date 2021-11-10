let pokemonRepository = (function () {
  let repository = [

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
   function add(pokemon) {
       if (
         typeof pokemon === "object" &&
         "name" in pokemon &&
         "height" in pokemon &&
         "types" in pokemon
       ) {
         repository.push(pokemon);
       } else {
         console.log("pokemon is not correct");
       }
     }
     function getAll() {
       return repository;
     }
     
     function addListItem(pokemon){
   let pokemonList = document.querySelector(".pokemon-list");
   let listpokemon = document.createElement("li");
   let button = document.createElement("button");
   button.innerText = pokemon.name;
   button.classList.add("button-class");
   listpokemon.appendChild(button);
   pokemonList.appendChild(listpokemon);
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
