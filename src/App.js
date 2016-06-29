import React, { Component } from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import Index from './views/Index'
import Contactar from './views/Contactar'
import Cervezas from './views/Cervezas'
import Template from './layout/Template'

import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import injectTapEventPlugin from 'react-tap-event-plugin'

  // Needed for onTouchTap
  // Check this repo:
  // https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin()

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Router history={browserHistory}>
          <Route path='/' component={Template}>
            /*observa que definimos IndexRoute, que será la ruta por defecto*/
            /*Todas las rutas siguientes están anidadas dentro de template, es decir
            son hijas de la anterior y desde la template cargaremos la que corresponda*/
            <IndexRoute component={Index}/>
            <Route path='cervezas' component={Cervezas}/>
            <Route path='/contactar' component={Contactar}/>
          </Route>
        </Router>
      </MuiThemeProvider>    
    )
  }
}