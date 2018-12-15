import React, { Component } from 'react';
import classes from './dot.module.css';
const Dot = (props) => {
  const x = Math.min(Math.max(props.x,-90),90);
  const y = props.y;

  return (
    <div className={classes.dot}>{x} {y}</div>
)
}

export default Dot;