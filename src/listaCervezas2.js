import React, { Component } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import Card from '@material-ui/core/Card';

import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';


import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import AddIcon from '@material-ui/icons/Add';

import Drawer from '@material-ui/core/Drawer';

import {Button, icon} from 'semantic-ui-react'

import logo from './logo.svg';

import { FaBeer } from 'react-icons/fa';

import afortunada from './images/Afortunada.JPG'
import californiaAle from './images/californiaAle.JPG'
import ippolita from './images/Ippolita.JPG'
import stout from './images/Stout.JPG'
import botella from './images/botella2.png'

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
    alert("agregaste un six de "+this.props.nombre);
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


        <div id="image_div">
          <div class="image_wrapper">

            <div className="div_botones">

            <Button animated='vertical'
                    style={{
                    backgroundColor:"#2d0f15",
                    opacity:"0.7",
                    borderRadius:"80px",
                    zIndex:"2",
                    marginTop:"40px",
                    marginRight:"30px",
                    width:"200px",
                    height:"50px",
                    fontSize:"2.5vh",
                    textAlign:"center",
                    color:"#efefef"
                    }}>

              <Button.Content visible>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <FaBeer /> x6 </Button.Content>
              <Button.Content hidden>{this.props.precio}</Button.Content>
            </Button>

            <Button animated='vertical'
                    style={{
                    backgroundColor:"#2d0f15",
                    opacity:"0.7",
                    borderRadius:"80px",
                    zIndex:"2",
                    marginTop:"40px",
                    marginRight:"30px",
                    width:"200px",
                    height:"50px",
                    fontSize:"2.5vh",
                    textAlign:"center",
                    color:"#efefef"
                    }}>

              <Button.Content visible >&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <FaBeer /> x12 </Button.Content>
              <Button.Content hidden> {this.props.precio}</Button.Content>
            </Button>

            <Button animated='vertical'
                    style={{
                    backgroundColor:"#2d0f15",
                    opacity:"0.7",
                    borderRadius:"80px",
                    zIndex:"2",
                    marginTop:"40px",
                    marginRight:"30px",
                    width:"200px",
                    height:"50px",
                    fontSize:"2.5vh",
                    textAlign:"center",
                    color:"#efefef"
                    }}>

              <Button.Content visible>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <FaBeer /> x24 </Button.Content>
              <Button.Content hidden> {this.props.precio} </Button.Content>
            </Button>

            </div>

            <img src={this.props.imagen} className= "imagenFront"  ></img>

          </div>
        </div>
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
                  <CardCerveza2 imagen={it.imagen} nombre={it.nombre} precio={it.precio}/>
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
