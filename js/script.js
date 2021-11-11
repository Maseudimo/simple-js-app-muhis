var pokemonRepository = (function () {
  var pokemonList = [

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



];
   //adds pokemon to the pokedex
   function getAll () {
   return pokemonList;
}
function add(pokemon) {
   pokemonList.push(pokemon);
}

 function addListItem(pokemon) {
    let listContainer = document.querySelector('.pokemon-list');
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('poke-button');
    listItem.appendChild(button);
    listContainer.appendChild(listItem);
    button.addEventListener('click', showDetails (pokemon));
        button.addEventListener('click', function() {
            showDetails(pokemon)
        });
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
