import React, { Component } from 'react';
import classes from './App.module.css';

class App extends Component {
  state = {
    tiltSuppported: false,
    xOffSet: 0,
    yOffSet: 0,
    x: 0,
    y: 0,
  }

  tiltHandler = (e) => {
    this.setState({x: e.beta, y: e.gamma})
  }

  componentDidMount() {
    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', this.tiltHandler, false);
      this.setState({ tiltSuppported: true });
      console.log(window.DeviceOrientationEvent);
    }
  }

  componentWillUnmount() { 
    window.removeEventListener('deviceorientation',this.tiltHandler,false)
  }

  render() {
    return (
      <><p>Tilt Supported: {this.state.tiltSuppported ? 'true' : 'false'}</p>
        <p>X: {this.state.x}</p>
      <p>Y: {this.state.y}</p>
      </>
    )
      
  
  }
}

export default App;
