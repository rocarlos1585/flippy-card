import React, { Component } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import Card from '@material-ui/core/Card';
//import {Card} from 'antd';
//import {Card, Icon, Image} from 'semantic-ui-react'
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';


import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import Drawer from '@material-ui/core/Drawer';

import logo from './logo.svg';
import cerveza from './cerveza-2.JPG'

import afortunada from './images/Afortunada.JPG'
import californiaAle from './images/californiaAle.JPG'
import ippolita from './images/Ippolita.JPG'
import stout from './images/Stout.JPG'
import botella from './images/botella2.png'
import backSide from './images/back-side-background.png'

import './listaCerveza_mobile.css'



class CardCerveza extends Component{
  constructor(props){
    super()

    this.state={
      isFlippedClick:true,
      isFlippedHover:false,

    };

    this.handleClick = this.handleClick.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }


  handleClick = () =>{
    console.log("entro al metodo");
    this.setState({
      isFlippedClick:!this.state.isFlippedClick
    })
  }


  handleMouseOut = () =>{

    console.log("el mouse ya no esta encima");
    this.setState({
      isFlippedClick:true,
      isFlippedHover:true,

    });
  }

  render(){
    return(

      <div className="div-flipy">
          <Flippy
            flipOnHover={false} // default false
            flipOnClick={this.state.isFlippedClick} // default false

            flipDirection="horizontal" // horizontal or vertical
            ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
            // if you pass isFlipped prop component will be controlled component.
            // and other props, which will go to div
            style={{height:"100%", width:"120%",  }} /// these are optional style, it is not necessary
          >

            <FrontSide onClick={this.handleClick} style={{backgroundColor: '#efefef', borderRadius: 8}}>
              <div className="div-frontSide">
                <img src={this.props.imagen} className= "imagenFront"></img>
              </div>
            </FrontSide>


            <BackSide  style={{ backgroundColor: '#efefef', opacity:"0.9", borderRadius: 8}}>
              <div className="div-backSide">
                <div className="div-botones-back">
                  <Button variant="contained" size="large" color="primary" >cerveza 1</Button>
                  <Button variant="contained" size="large" color="primary">cerveza 2</Button>
                  <Button variant="contained" size="large" color="primary">cerveza 3</Button>
                </div>

                <img src={backSide} onClick={this.handleClick} className="imagenBack"></img>

              </div>
            </BackSide>
          </Flippy>
        </div>
    );
  }

}




class ListaCervezas_mobile extends Component {
  constructor(){
    super();
    this.state={
      ready:false,
    }
  }


  componentWillMount(){

    var cervezasArray = [];

    cervezasArray [0]={
      imagen : ippolita,
      nombre : 'Ippolita',
      precio : "$45.00",
    };

    cervezasArray [1]={
      imagen : afortunada,
      nombre : 'Afortunada',
      precio : "$45.00",
    };

    cervezasArray[2]={
      imagen : californiaAle,
      nombre : 'California Ale',
      precio : "$45.00",
    };

    cervezasArray[3]={
      imagen : stout,
      nombre : 'Stout',
      precio : "$45.00",
    };

    this.setState({
      arraCervezas:cervezasArray,
      ready:true
      })
  }

  render() {

    const isReady = this.state.ready;
    console.log(this.cervezasArray)


    return (


      <div className = "div-principal">
      { isReady ? (
        <div className="div-lista">

              {this.state.arraCervezas.map((it)=>(

                <span className = "span-items">
                  <CardCerveza nombre={it.nombre} imagen={it.imagen}/>
                </span>

              ))}


          </div>
      ) : (
          <h1>NO</h1>
      )}

      </div>

    );
  }
}

export default ListaCervezas_mobile;
