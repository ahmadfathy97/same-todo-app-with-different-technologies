import React, { Component } from 'react';
import './style.css'

import Products from './components/Products'
import About from './components/About'

class App extends Component {
  render(){
    return(
      <div>
        <div className="container">
          <Products />
        </div>
      </div>
    )
  }
}
export default App
