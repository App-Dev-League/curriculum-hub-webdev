import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Header from './components/header/header'
import InfoDisplayer from './components/infoDisplayer/infoDisplayer';

ReactDOM.render(
  <div>
      <Header/>
      <InfoDisplayer name="Bob" age="15" color="Blue" book="Lord of the Rings"/>
  </div>,
  document.getElementById('root')
)
