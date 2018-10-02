import React, { Component } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import logo from './logo.svg';
import cerveza from './cerveza-2.JPG'
import './App.css';
import ListaCervezas from './listaCervezas.js';
import ListaCervezas2 from './listaCervezas2.js';
import ListaCervezas_mobile from './listaCervezas_mobile.js';

class App extends Component {


  render() {
    const theme = createMuiTheme();

    return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <ListaCervezas2/>
      </MuiThemeProvider>
    </div>
    );
  }
}

export default App;
