import React, { Component } from 'react';

import SplitPane from 'react-split-pane';

import SplitterLayout from 'react-splitter-layout';

import {withGetScreen} from 'react-getscreen';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import Avatar from '@material-ui/core/Avatar';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import AddIcon from '@material-ui/icons/Add';
import Divider from '@material-ui/core/Divider';

import { Button, Image, Item } from 'semantic-ui-react'
import { Label } from 'semantic-ui-react'
import { Message } from 'semantic-ui-react'

import afortunada from './images/Afortunada.JPG'
import californiaAle from './images/californiaAle.JPG'
import ippolita from './images/Ippolita.JPG'
import stout from './images/Stout.JPG'
import canita from './images/canita.JPG'
import paleAle from './images/paleAle.JPG'
import botella from './images/botella2.png'


import './armadoDocePack.css'
import CervezasData from './cervezasData.js'


class PackItem extends Component{

  constructor(props){
      super();
    }

  render(){
      return(
        <div className="div-label">
          <Label as='a' color='red'image>
            <img src={this.props.imagen}/>
            {this.props.nombre}

          </Label>
        </div>
      )
    }
  }


class ArmadoDocePack extends Component {

  constructor(props){
    super();

    this.state={
      packArraState:[],
      auxiliar:0,
      limiteMessage:false,
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleClickPackItem = this.handleClickPackItem.bind(this);
  }

  componentWillMount(){
    var cervezasArray = CervezasData();

    this.setState({
      arraCervezas:cervezasArray,
      })
  }

  handleClick =(key)=>{

    const evento = key;


    if(this.state.packArraState.length < this.props.limite){

      this.setState({ packArraState:this.state.packArraState.concat(this.state.arraCervezas[evento]) })

    }

    else if (this.state.packArraState.length >= this.props.limite ){
      alert("solo puedes agregar "+this.props.limite+" cervezas")
    }


    this.setState({
      auxiliar:evento,
    })
  }


  handleClickPackItem=(key)=>{

    alert("quitaste "+this.state.packArraState[key].nombre)

    var array=this.state.packArraState;
    array.splice(key,1);
    this.setState({
      packArraState:array,
    })

  }


  render() {


    if (this.props.isMobile()) return (

            <div className="modal-div-mobil">


              <div className="pack-list-div-mobile">

                  {this.state.packArraState.map((it, key)=>(

                    <div className="lista-pack-mobile" onClick={this.handleClickPackItem.bind(this, key)}>
                      <PackItem nombre={it.nombre} imagen={it.imagen} />
                    </div>


                  ))}


              </div>

              <Divider/>

              <div className="product-selector-div-mobile">

                  <Carousel selectedItem={this.state.auxiliar} showStatus={false} dynamicHeight={true} showArrows={false} showThumbs={false} showIndicators={false} infiniteLoop >


                        <div onClick={this.handleClick.bind(this, 0)}>
                          <img style={{width:"100%", height:"80%"}}  src={ippolita}/>
                        </div>

                        <div onClick={this.handleClick.bind(this, 1)}>
                          <img style={{width:"100%", height:"80%"}}  src={afortunada}/>
                        </div>

                        <div onClick={this.handleClick.bind(this, 2)}>
                          <img style={{width:"100%", height:"80%"}}  src={californiaAle}/>
                        </div>

                        <div onClick={this.handleClick.bind(this, 3)}>
                          <img style={{width:"100%", height:"80%"}}  src={stout}/>
                        </div>

                        <div onClick={this.handleClick.bind(this, 4)}>
                          <img style={{width:"100%", height:"80%"}}  src={canita}/>
                        </div>

                        <div onClick={this.handleClick.bind(this, 5)}>
                          <img style={{width:"100%", height:"80%"}}  src={paleAle}/>
                        </div>



                </Carousel>
              </div>


          </div>

        );


    return (

      <div className="modal-div">
        <SplitterLayout primaryIndex={0}  vertical={false}>

          <div className="pack-list-div">
            <ul className="pack-list-ul">


              {this.state.packArraState.map((it, key)=>(

                <li className="lista-pack" onClick={this.handleClickPackItem.bind(this, key)}>
                  <PackItem nombre={it.nombre} imagen={it.imagen} />
                </li>
              ))}

            </ul>
          </div>



          <div className="product-selector-div">

              <div className="grid-container">
                {this.state.arraCervezas.map((it,key)=>(

                    <div class="div-imagenes-productos" onClick={this.handleClick.bind(this, key)}>
                      <img className="product-img"  src={it.imagen}></img>

                    </div>


                ))}
            </div>
          </div>
        </SplitterLayout>
      </div>

    );
  }
}

export default withGetScreen (ArmadoDocePack);
