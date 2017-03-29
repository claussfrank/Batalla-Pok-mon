// creamos un  constructor  que nos  permita agregar  nustros  pokemones  con sus especificaciones.
function Pokemon(nombre,color,puntosAtaque){
  this.nombre = nombre;
  this.color = color;
  this.nivelDeAmistad = 0;
  this.vida = 100;
  this.puntosAtaque = puntosAtaque;

  this.saludar = function(){
    alert("Hello, I am " + this.nombre + "and I am ready to fight")
  };

  this.pelear = function(pokemonObjeto){ //le  ponemos pokemonObjeto por  que  cuando  llame  a esta  funcion le  debemos poner  el  nombre  del  pokemon que deseamos que pelea.
    pokemonObjeto.vida = pokemonObjeto.vida - this.puntosAtaque;
  }

  this.beber = function(tipoAlcohol){
    if(tipoAlcohol == "chelas"){
      this.nivelDeAmistad += 80;
    }else if (tipoAlcohol) {
      this.nivelDeAmistad += 10;
    }
  };
}
//creamos  una   variable  global  para  que podamos guardar toda  la  informacin que ingresamos  a  nuestro pokemon
var pokemons = [];

//creamos  una  funcion en donde  vamos  ingresar  los pokemones ademas  de  sus  propiedades.

function crearPokemon(){
  var nombrePokemon = document.getElementById('nombrePokemon');
  var colorPokemon = document.getElementById('colorPokemon');
  var puntosAtaque = document.getElementById('puntosAtaque');

//estamos creando un nuevo pokemon  asignando  sus propiedades mediente el constructor
  var pokemon = new Pokemon(nombrePokemon.value,
                            colorPokemon.value,
                            parseInt(puntosAtaque.value)
                          );
  pokemons.push(pokemon); //estamos mandando  los  datos al arreglo vacio que  tenemos  para poderlo agrar al pokemon con sus propiedades.
  console.log(nombrePokemon.value);
  mostrarPokemons(); //para que  se  pueda mostrar la  informacion la mandamos
  mostrarPokemons2();
  borrar();
}
// vamos  a mostrar  los pokemones que ingresamos

function mostrarPokemons(){
  var listaPokemons = document.getElementById('listaPokemons');
   listaPokemons.innerHTML ="";

      pokemons.forEach(function(pokemon){
        var elemento = document.createElement("option");
        elemento.innerHTML = pokemon.nombre;
        listaPokemons.appendChild(elemento);
      })
}
function mostrarPokemons2(){
  var listaPokemons2 = document.getElementById('listaPokemons2');
    listaPokemons2.innerHTML="";

      pokemons.forEach(function(pokemon){
        var elemento = document.createElement("option");
        elemento.innerHTML = pokemon.nombre;
        listaPokemons2.appendChild(elemento);
      })
}

function borrar(){
  var vacio =""
  document.getElementById("nombrePokemon").value = vacio;
  document.getElementById("colorPokemon").value = vacio;
  document.getElementById("puntosAtaque").value = vacio;
}

/*function pelea() {
  var elmentoDelSelect = document.getElementById("listaPokemons")[0].value
   if (elmentoDelSelect == pokemons.nombre){
     alert ("hola");
 }
}*/
function buscar(pokemons,nombre) {
      var buscarpokemon = pokemons.filter(function(busquedaPoke){
        return busquedaPoke.nombre});
          return buscarpokemon; //devolver el resultado
}
