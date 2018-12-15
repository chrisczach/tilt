import React, { Component } from 'react';
import classes from './dot.module.css';
const Dot = (props) => {

  const style = {
    position: 'absolute',
    top: `calc(50% - ${props.x}px)`,
    left: `calc(50% - ${props.y}px)`,
    transform: 'translate(-50%, -50%)'
  }
  return (
    <div style={style}>{props.x} {props.y}</div>
)
}

export default Dot;