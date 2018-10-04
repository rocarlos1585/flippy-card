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
import Dialog from '@material-ui/core/Dialog';

import {Button, icon} from 'semantic-ui-react'

import logo from './logo.svg';

import { FaBeer } from 'react-icons/fa';

import afortunada from './images/Afortunada.JPG'
import californiaAle from './images/californiaAle.JPG'
import ippolita from './images/Ippolita.JPG'
import stout from './images/Stout.JPG'
import docepack from './images/docePack.jpg'
import botella from './images/botella2.png'

import './listaCervezas2.css'
import ArmadoDocePack from './armadoDocePack.js'
import CervezasData from './cervezasData.js'




class CardCerveza2 extends Component{


  constructor(props){

    super();
    this.state={
      isOver:false,
      open:false,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }

  handleClick = () =>{

    this.setState({open:true});

  }


  handleClickOpen = () => {

  this.setState({ open: true });

  }

  handleClose = () => {
  this.setState({ open: false });

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
      {this.props.nombre == "Mix 12 Pack"?(


        <div id="image_div">
          <div class="image_wrapper">

            <div className="div_botones">

            <Button onClick={this.handleClick} animated='vertical'
                    style={{
                    backgroundColor:"#2d0f15",
                    opacity:"0.7",
                    borderRadius:"20px",
                    zIndex:"2",
                    marginTop:"50%",
                    marginLeft:"30%",
                    width:"28vh",
                    height:"8vh",
                    fontSize:"2.5vh",
                    textAlign:"center",
                    color:"#efefef"
                    }}>

              <Button.Content visible>&nbsp; &nbsp; ARMALO </Button.Content>
              <Button.Content hidden>{this.props.precio}</Button.Content>
            </Button>
            </div>

            <img src={this.props.imagen} className= "imagenFront" ></img>

            <div>
              <Dialog open={this.state.open} onClose={this.handleClose}>
                  <ArmadoDocePack/>
              </Dialog>
            </div>

          </div>
        </div>

      ):(

        <div id="image_div">
          <div class="image_wrapper">

            <div className="div_botones">

            <Button animated='vertical'
                    style={{
                    backgroundColor:"#2d0f15",
                    opacity:"0.7",
                    borderRadius:"20px",
                    zIndex:"2",
                    marginTop:"10%",

                    width:"28vh",
                    height:"6vh",
                    fontSize:"2.5vh",
                    textAlign:"center",
                    color:"#efefef"
                    }}>

              <Button.Content visible>&nbsp; &nbsp; &nbsp; &nbsp; <FaBeer /> x6 </Button.Content>
              <Button.Content hidden>{this.props.precio}</Button.Content>
            </Button>

            <Button animated='vertical'
                    style={{
                    backgroundColor:"#2d0f15",
                    opacity:"0.7",
                    borderRadius:"20px",
                    zIndex:"2",
                    marginTop:"25%",

                    width:"28vh",
                    height:"6vh",
                    fontSize:"2.5vh",
                    textAlign:"center",
                    color:"#efefef"
                    }}>

              <Button.Content visible > &nbsp; &nbsp; &nbsp; &nbsp; <FaBeer /> x12 </Button.Content>
              <Button.Content hidden> {this.props.precio}</Button.Content>
            </Button>

            <Button animated='vertical'
                    style={{
                    backgroundColor:"#2d0f15",
                    opacity:"0.7",
                    borderRadius:"20px",
                    zIndex:"2",
                    marginTop:"25%",

                    width:"28vh",
                    height:"6vh",
                    fontSize:"2.5vh",
                    textAlign:"center",
                    color:"#efefef"
                    }}>

              <Button.Content visible> &nbsp; &nbsp; &nbsp; &nbsp; <FaBeer /> x24 </Button.Content>
              <Button.Content hidden> {this.props.precio} </Button.Content>
            </Button>

            </div>

            <img src={this.props.imagen} className= "imagenFront"  ></img>

          </div>
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
    var cervezasArray = CervezasData();
    this.setState({
      arraCervezas:cervezasArray,
      ready:true
      })
  }

  render() {

    const isReady = this.state.ready;

    return (

      <div className = "div-principal2">
      { isReady ? (
        <div class="grid-container">


              {this.state.arraCervezas.map((it)=>(

                <div class="grid-item">
                  <CardCerveza2 imagen={it.imagen} nombre={it.nombre} precio={it.precio}/>
                </div>
              ))}


          </div>
      ) : (
          <h1>NO</h1>
      )}

      </div>

    );
  }
}



export default ListaCervezas2;
