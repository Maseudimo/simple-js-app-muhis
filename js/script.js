

  pokemonList = [
 {name:"Zekrom", height:2.9, weight:345, types:["Dragon","Electric"]},
 {name:"Gyrados",height:6.5, weight:235, types:["Water","Flying"]},
 {name:"Steelix",height:9.2, weight:400, types:["Steel","Ground"]},
 {name:"Houndour",height:0.6,weight:10.8,types:["Dark","Fire"]},
 {name:"Nidoking",height:1.4,weight:62,  types:["Ground","Poison"]}];

 //Listing the name and height of each pokemon in the array.
 //Listing the name and height of each pokemon in the array.
 for (let i = 0; i < pokemonList.length; i++){
   document.write(pokemonList[i].name + " - Height: " + pokemonList[i].height +"m");
 // Conditional to deteremine which Pokemon have a height greater than 2.5m. using <br> temporarily until i figure out how to make it a list!
   if (pokemonList[i].height > 2.5) document.write("  - Wow, thats tall!" + "<br>");
   else document.write("<br>");
 }
