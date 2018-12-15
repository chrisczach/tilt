import React, { Component } from 'react';
import classes from './App.module.css';

class App extends Component {
  state = {
    tiltSuppported: false,
    xOffset: 0,
    yOffset: 0,
    x: 0,
    y: 0
  };

  tiltHandler = e => {
    this.setState(state => ({
      x: e.gamma - state.xOffset,
      y: e.beta - state.yOffset
    }));
  };

  resetHandler = e => {
    this.setState(state => ({
      xOffset: state.x + state.xOffset,
      yOffset: state.y + state.yOffset
    }));
  };

  componentDidMount() {
    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', this.tiltHandler, false);
      this.setState({ tiltSuppported: true });
      console.log(window.DeviceOrientationEvent);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('deviceorientation', this.tiltHandler, false);
  }

  render() {
    return (
      <>
        <p>Tilt Supported: {this.state.tiltSuppported ? 'true' : 'false'}</p>
        <p>x Offset: {Math.round(this.state.xOffset)}</p>
        <p>y Offset: {Math.round(this.state.yOffset)}</p>
        <p>x: {Math.round(this.state.x)}</p>
        <p>y: {Math.round(this.state.y)}</p>
        <div onClick={this.resetHandler}>RESET</div>
      </>
    );
  }
}

export default App;
