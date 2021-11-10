let pokemonRepository = (function () {
  let pokemonList = [

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

   function getAll () {
     return pokemonList;
 }
 function add(pokemon) {
     pokemonList.push(pokemon);
 }
 function addListItem (pokemon) {
     let pokemonList = document.querySelector('.pokemon-list');
     let listPokemon = document.createElement('li');
     let button = document.createElement('button');
     button.innerText = pokemon.name;
     button.classList.add('button-class')
     listPokemon.appendChild(button);
     pokemonList.appendChild(listPokemon);
     button.addEventListener('click', showDetails (pokemon));
 }

 function showDetails(pokemon) {
     console.log (pokemon);
 }

 return {
     getAll: getAll,
     add: add,
     addListItem: addListItem
 };
 } )();
 pokemonRepository.getAll().forEach(function (pokemon) {
     pokemonRepository.addListItem(pokemon);
 });
