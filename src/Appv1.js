import React, { Component } from 'react';
/*
export default class App extends Component {
  render() {
  	var respuesta = 'Hola, ¡buenos días!'
  	//cuando hago el return tengo que devolver un s´olo elemento
  	//por eso ponemos las dos etiquetas dentro de un div
    return (
     <div>
        <h1>Hola Mundo</h1>
        <p>{respuesta}</p>
      </div>
    );
  }*/
  /*segundo ejemplo
  export default class App extends Component {
  render() {
  	//nos recorremos el array con un map en lugar de con un for
    const famosos = [ 'Oliver Khan', 'Albert Einstein' ]
    return (
      <div>
        {famosos.map(famoso => <h1>{famoso}</h1>)}
      </div>
    );
  }
}

otro ejemplo
export default class App extends Component {

render() {
  	var comentarios= [
  {autor: 'Oliver Khan', frase: 'Ultimamente veo más los abdominales de Cristiano Ronaldo que los pechos de mi mujer'},
  {autor: 'Albert Einstein', frase: 'Dos cosas son infinitas: el universo y la estupidez humana; y yo no estoy seguro sobre el universo'}
    ]
    return (
      <div>
        {comentarios.map(comentario => <h1>{comentario.autor})</h1>}
      </div>
    );
  }
} */

import React, { Component } from 'react'
export default class App extends Component {
 render() {
   var cervezas = require('./cervezas.json')
   return (
     <div>
       <h1>Mi lista de cervezas</h1>
       {cervezas.map(cerveza => <div><h2>{cerveza.Nombre}</h2><p>{cerveza.Envase}</p></div>)}
     </div>
   );
 }
}