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
import AddIcon from '@material-ui/icons/Add';

import Drawer from '@material-ui/core/Drawer';

import logo from './logo.svg';

import afortunada from './images/Afortunada.JPG'
import californiaAle from './images/californiaAle.JPG'
import ippolita from './images/Ippolita.JPG'
import stout from './images/Stout.JPG'
import botella from './images/botella.png'


import './listaCervezas2.css'




class CardCerveza2 extends Component{


  constructor(props){

    super();
    this.state={ isOver:false, };

    this.handleClick = this.handleClick.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }

  handleClick = () =>{
    alert("agregaste un six");
  }

  handleMouseOver = () =>{
    console.log("el mouse esta encima");
    this.setState({
      isOver:true,
    });
  }

  handleMouseOut = () =>{

    console.log("el mouse ya no esta encima");
    this.setState({
      isOver:false,
    });
  }


  render(){

    const isOver = this.state.isOver;

    return(

      <div>

      { this.state.isOver ? (

        <div id="image_div">
          <div class="image_wrapper">

            <div className = "div_botones">
              <button className="button1" onClick={this.handleClick}>6X</button>
              <button className="button2" >12X</button>
              <button className="button3">24X</button>
            </div>


            <img src={this.props.imagen} className= "imagenFront"  onMouseOut={this.handleMouseOut} ></img>
          </div>
        </div>

      ) : (

        <div>
          <img src={this.props.imagen} className= "imagenFront" onMouseOver={this.handleMouseOver} ></img>
        </div>

      )}

      </div>


    );
  }

}




class ListaCervezas2 extends Component {


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
      nombre : 'cerveza 1',
      precio : 45.00,
    };

    cervezasArray [1]={
      imagen : afortunada,
      nombre : 'cerveza 2',
      precio : 45.00,
    };

    cervezasArray[2]={
      imagen : californiaAle,
      nombre : 'cerveza 3',
      precio : 45.00,
    };

    cervezasArray[3]={
      imagen : stout,
      nombre : 'cerveza 4',
      precio : 45.00,
    };

    /**cervezasArray[4]={
      imagen : 'cerveza',
      nombre : 'cerveza 5',
      precio : 45.00,
    };

    cervezasArray[5]={
      imagen : 'cerveza',
      nombre : 'cerveza 6',
      precio : 45.00,
    };

    cervezasArray [6]={
      imagen : 'cerveza',
      nombre : 'cerveza 7',
      precio :45.00,
    };**/

    this.setState({
      arraCervezas:cervezasArray,
      ready:true
      })
  }

  render() {

    const isReady = this.state.ready;
    console.log(this.cervezasArray)

    return (

      <div className = "div-principal2">
      { isReady ? (
        <div>
          <GridList cellHeight = {400} cols={4.2}>

              {this.state.arraCervezas.map((it)=>(

                <GridListTile key={it} >
                  <CardCerveza2 imagen={it.imagen}/>
                </GridListTile>
              ))}

          </GridList>
          </div>
      ) : (
          <h1>NO</h1>
      )}

      </div>

    );
  }
}



export default ListaCervezas2;
