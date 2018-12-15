import React, { Component } from 'react';
import classes from './App.module.css';
import Dot from '../../components/dot/dot'

function usefulOrientation(alpha, beta, gamma){
	alpha -= window.orientation;
	while(alpha < 0) alpha += 360;
	while(alpha > 360) alpha -= 360;
	if(window.orientation === 180){
		return {alpha: alpha,
			beta: -beta,
			gamma: -gamma};
	}else if(window.orientation === 90){
		return {alpha: alpha,
			beta: -gamma,
			gamma: beta};
	}else if(window.orientation === -90){
		return {alpha: alpha,
			beta: gamma,
			gamma: -beta};
	}else{
		return {alpha: alpha,
			beta: beta,
			gamma: gamma};
	}
}

class App extends Component {
  state = {
    tiltSuppported: false,
    xOffset: 0,
    yOffset: 0,
    x: 0,
    y: 0
  };

  tiltHandler = e => {
    const orientation = usefulOrientation(e.alpha, e.beta, e.gamma);

    this.setState(state => {
      const x = Math.round(Math.min(Math.max(orientation.beta, -90), 90)) - state.xOffset;
      let y = Math.round(orientation.gamma) - state.yOffset;
      if ((y < -45 && state.y > 0) || (y > 45 && state.y < 0)) {
        y = state.y;
      }

      return {x,y}
    });
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
        <Dot x={this.state.x} y={this.state.y}/>
      </>
    );
  }
}

export default App;
