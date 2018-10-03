import React, { Component } from 'react';
import SplitPane from 'react-split-pane';
import SplitterLayout from 'react-splitter-layout';

import Avatar from '@material-ui/core/Avatar';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import AddIcon from '@material-ui/icons/Add';


import './armadoDocePack.css'
import CervezasData from './cervezasData.js'



class ArmadoDocePack extends Component {

  constructor(props){
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount(){
    var cervezasArray = CervezasData();
    this.setState({
      arraCervezas:cervezasArray,
      ready:true
      })
  }

  handleClick =(key)=>{
    const evento = key;
    alert("hola " + evento);
  }




  render() {
    return (

      <div className="modal-div">
        <SplitterLayout primaryIndex={0}>



          <div>



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
