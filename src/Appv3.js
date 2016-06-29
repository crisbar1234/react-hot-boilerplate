import React, { Component } from 'react';
import Cerveza from './Cerveza.js'
export default class App extends Component {
  getCervezas() {
    var cervezas = require('./cervezas.json')
    return cervezas.map(cerveza =><Cerveza key={cerveza.Nombre} desc={cerveza.Descripción} marca={cerveza.Nombre} envase={cerveza.Envase}/>)
  }
  render() {
    let cervezas = this.getCervezas()
    return (
      <main>
        <h1>Mi lista de cervezas</h1>
        {cervezas}
      </main>
    );
  }
}