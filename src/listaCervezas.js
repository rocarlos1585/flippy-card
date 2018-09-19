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

import './listaCervezas.css'


class CardCerveza extends Component{
  constructor(props){
    super()
  }


  render(){

    return(

      <Card  style={{ borderRadius: 8, width: '27vw', height: '36vw'}}>
        <CardContent style={{backgroundColor: '#A32A1F'}}>
          <Flippy
            flipOnHover={false} // default false
            flipOnClick={true} // default false
            flipDirection="horizontal" // horizontal or vertical
            ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
            // if you pass isFlipped prop component will be controlled component.
            // and other props, which will go to div
            style={{  width: '23.5vw', height: '33vw' }} /// these are optional style, it is not necessary
          >


            <FrontSide style={{backgroundColor: '#DEE0C1',  borderRadius: 8}}>
              <img src={cerveza} className= "imagenFront"></img>
              <p className="p-imagen">STOUT</p>
            </FrontSide>


            <BackSide style={{ backgroundColor: '#DEE0C1', borderRadius: 8 }}>
              {/*this.props.nombre*/}
              <div className = "divCantidad1">
                <img src={logo} className = "imagenBack1"></img>
                <p> holi </p>



              </div>


            </BackSide>


          </Flippy>
        </CardContent>
      </Card>
    );
  }

}




class ListaCervezas extends Component {
  constructor(){
    super();
    this.state={
      ready:false,
    }
  }


  componentWillMount(){

    var cervezasArray = [];

    cervezasArray [0]={
      imagen : 'cerveza',
      nombre : 'cerveza 1',
      precio : 45.00,
    };

    cervezasArray [1]={
      imagen : 'cerveza',
      nombre : 'cerveza 2',
      precio : 45.00,
    };

    cervezasArray[2]={
      imagen : 'cerveza',
      nombre : 'cerveza 3',
      precio : 45.00,
    };

    cervezasArray[3]={
      imagen : 'cerveza',
      nombre : 'cerveza 4',
      precio : 45.00,
    };

    cervezasArray[4]={
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
        <div>
          <GridList cellHeight = {500} spacing= {4} cols={3.2}>

              {this.state.arraCervezas.map((it)=>(

                <GridListTile key={it} >
                  <CardCerveza nombre={it.nombre}/>
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

export default ListaCervezas;
