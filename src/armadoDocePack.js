import React, { Component } from 'react';
import SplitPane from 'react-split-pane';
import SplitterLayout from 'react-splitter-layout';

import Avatar from '@material-ui/core/Avatar';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import AddIcon from '@material-ui/icons/Add';
import { Button, Image, Item } from 'semantic-ui-react'
import { Label } from 'semantic-ui-react'

import afortunada from './images/Afortunada.JPG'
import californiaAle from './images/californiaAle.JPG'
import ippolita from './images/Ippolita.JPG'
import stout from './images/Stout.JPG'
import docepack from './images/docePack.jpg'
import botella from './images/botella2.png'


import './armadoDocePack.css'
import CervezasData from './cervezasData.js'


class PackItem extends Component{

  constructor(props){
      super();
    }

  render(){
      return(
        <div>
          <Label as='a' color='teal' image>
            <img src={this.props.imagen} />
            {this.props.nombre}
            <Label.Detail>1</Label.Detail>
          </Label>
        </div>
      )
    }
  }


class ArmadoDocePack extends Component {

  constructor(props){
    super();

    this.state={
      docePackArraState:[],
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

    this.setState({
      docePackArraState:this.state.docePackArraState.concat(this.state.arraCervezas[evento])
    })
  }


  handleClickPackItem=(key)=>{

    alert("quitaste "+this.state.docePackArraState[key].nombre)

    var array=this.state.docePackArraState;
    array.splice(key,1);
    this.setState({
      docePackArraState:array,
    })

  }


  render() {
    return (

      <div className="modal-div">
        <SplitterLayout primaryIndex={0}>

          <div className="pack-list-div">
            <ul>
              {this.state.docePackArraState.map((it, key)=>(

                <li onClick={this.handleClickPackItem.bind(this, key)}>
                  <PackItem nombre={it.nombre} imagen={it.imagen} />
                </li>
              ))}
            </ul>
          </div>


          <div className="product-selector-div">
            <GridList cellHeight = {50} cols={4.2}>

                {this.state.arraCervezas.map((it,key)=>(

                  <GridListTile key={it} >

                    <div class="div-imagenes-productos">
                      <img className="product-img" style={{ borderRadius:80, width: 50, height: 50, }} src={it.imagen}></img>
                      <button onClick={this.handleClick.bind(this, key)} class="update"  value="Update" > + </button>
                    </div>

                  </GridListTile>
                ))}
            </GridList>
          </div>
        </SplitterLayout>
      </div>

    );
  }
}

export default ArmadoDocePack;
