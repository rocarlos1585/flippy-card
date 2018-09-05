import React, { Component } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import logo from './logo.svg';
import cerveza from './cerveza-2.JPG'
import './App.css';


class ItemCerveza extends Component {

  render() {
    return (

      // ... component class

      	// .. return
        <Card>
          <CardContent>
            <Flippy
              flipOnHover={false} // default false
              flipOnClick={true} // default false
              flipDirection="horizontal" // horizontal or vertical
              ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
              // if you pass isFlipped prop component will be controlled component.
              // and other props, which will go to div
              style={{ width: '250px', height: '300px' }} /// these are optional style, it is not necessary
            >
              <FrontSide>
                <img src={cerveza} className= "imagenFront"></img>
              </FrontSide>
              <BackSide
                style={{ backgroundColor: '#175852'}}>
                ROCKS
              </BackSide>
            </Flippy>
          </CardContent>
        </Card>

    );
  }
}

export default ItemCerveza;
