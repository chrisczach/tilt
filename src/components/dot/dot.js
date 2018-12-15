import React, { Component } from 'react';
import classes from './dot.module.css';
const Dot = props => {
  const style = {
    position: 'absolute',
    top: `calc(50% + ${props.x / 2}vmin)`,
    left: `calc(50% + ${props.y / 2}vmin)`,
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'orangered', 
    width: '3vmin',
    height: '3vmin',
    borderRadius: '1000px'
    
  };
  return (
    <div style={style}>
    &nbsp;
    </div>
  );
};

export default Dot;
