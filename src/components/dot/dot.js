import React, { Component } from 'react';
import classes from './dot.module.css';
const Dot = (props) => {
  const x = Math.round(Math.min(Math.max(props.x,-90),90));
  const y = Math.round(props.y);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: `translate(calc(-50% + ${y}px), -50% + ${y}px)`
  }
  return (
    <div style={style}>{x} {y}</div>
)
}

export default Dot;