import React, { Component } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import {withGetScreen} from 'react-getscreen';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';



import AddIcon from '@material-ui/icons/Add';
import Drawer from '@material-ui/core/Drawer';
import Dialog from '@material-ui/core/Dialog';
import Icon from '@material-ui/core/Icon';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';


import {Button, icon} from 'semantic-ui-react'
import { Image, Reveal } from 'semantic-ui-react'

import logo from './logo.svg';

import afortunada from './images/Afortunada.JPG'
import californiaAle from './images/californiaAle.JPG'
import ippolita from './images/Ippolita.JPG'
import stout from './images/Stout.JPG'
import docepack from './images/docePack.jpg'
import botella from './images/botella2.png'

import './componenteTienda.css'
import ArmadoDocePack from './armadoDocePack.js'
import CervezasData from './cervezasData.js'



class ComponenteTienda extends Component {


  constructor(props){

    super();
    this.state={
      ready:false,
      open:false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () =>{

    this.setState({open:true});

  }

  componentWillMount(){
    var cervezasArray = CervezasData();
    this.setState({
      arraCervezas:cervezasArray,
      ready:true
      })
  }

  handleClickOpen = () => {

  this.setState({ open: true });

  }

  handleClose = () => {
  this.setState({ open: false });

}


handleExpandClick = () => {
  this.setState(state => ({ expanded: !state.expanded }));
};


  render() {

    const isReady = this.state.ready;


    return (

      <div className = "div-principal2">
      { isReady ? (



        <div class="grid-container">


          <div className="grid-item">
            <Card id="cardSix" style={{width: "100%", height: "100%",}}>
             <CardMedia style={{height: 0, paddingTop: '56.25%'}} image={ippolita} />

             <CardContent>
               <Typography component="h1">
                  Ippolita
               </Typography>
             </CardContent>

             <CardActions style={{display: 'block'}} disableActionSpacing>

             <Button variant="contained" color="primary" onClick={this.handleClick} >
               Upload
               <AddShoppingCartIcon  />
             </Button>

             </CardActions>
            </Card>
          </div>





          <div className="grid-item">
            <Card id="cardDoce" style={{width: "100%", height: "100%",}}>
             <CardMedia style={{height: 0, paddingTop: '56.25%'}} image={ippolita} />

             <CardContent>
               <Typography component="h1">
                  Ippolita
               </Typography>
             </CardContent>

             <CardActions style={{display: 'block'}} disableActionSpacing>

             <Button variant="contained" color="primary" onClick={this.handleClick} >
               Upload
               <AddShoppingCartIcon  />
             </Button>

             </CardActions>
            </Card>
          </div>


          <div className="grid-item">
            <Card id="cardVeinticuatro" style={{width: "100%", height: "100%",}}>
             <CardMedia style={{height: 0, paddingTop: '56.25%'}} image={ippolita} />

             <CardContent>
               <Typography component="h1">
                  Ippolita
               </Typography>
             </CardContent>

             <CardActions style={{display: 'block'}} disableActionSpacing>

             <Button variant="contained" color="primary" onClick={this.handleClick} >
               Upload
               <AddShoppingCartIcon  />
             </Button>

             </CardActions>
            </Card>
        </div>


        <div>

        { this.props.isMobile() ? (
          <div className="modal">
            <Dialog open={this.state.open} onClose={this.handleClose}>
              <h1>Hola</h1>
            </Dialog>
          </div>
        ) : (

          <div className="modal">
            <Dialog style={{margin:"5px"}}open={this.state.open} onClose={this.handleClose}>
                <ArmadoDocePack/>
            </Dialog>
          </div>
        )}

        </div>


        </div>
      ) : (
          <h1>NO</h1>
      )}

      </div>

    );
  }
}



export default withGetScreen (ComponenteTienda);
