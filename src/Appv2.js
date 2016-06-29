import React, { Component } from 'react';
import Cerveza from './cerveza';
export default class App extends Component {
  /* primera versi´on
 render() {
   var cervezas = require('./cervezas.json')
   return (
     <div>
       <h1>Mi lista de cervezas</h1>
       {cervezas.map(cerveza => <div><h2>{cerveza.Nombre}</h2><p>{cerveza.Envase}</p></div>)}
     </div>
   );
 } segunda versi´on utilizando el componente cerveza*/
 export default class App extends Component {
 render() {
   var cervezas = require('./cervezas.json')
   return (
     <div>
       {cervezas.map(cerveza => <Cerveza key={cerveza.Nombre} marca={cerveza.Nombre} envase={cerveza.Envase}/>)}
     </div>
   );
 }
}
}