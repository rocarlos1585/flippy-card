import React, { Component } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import logo from './logo.svg';
import cerveza from './cerveza-2.JPG'
import './App.css';
import ListaCervezas from './listaCervezas.js'

class App extends Component {
  render() {
    return (
    <div className="App">
      <MuiThemeProvider>
        <ListaCervezas/>
      </MuiThemeProvider>
    </div>
    );
  }
}

export default App;
