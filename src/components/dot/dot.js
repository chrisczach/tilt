import React, { Component } from 'react';
import classes from './dot.module.css';
const Dot = (props) => {
  const x = Math.round(Math.min(Math.max(props.x,-90),90));
  const y = Math.round(props.y);
  const style = {
    position: 'absolute',
    top: `calc(50% - ${x}px)`,
    left: `calc(50% - ${y}px)`,
    transform: 'translate(-50%, -50%)'
  }
  return (
    <div style={style}>{x} {y}</div>
)
}

export default Dot;