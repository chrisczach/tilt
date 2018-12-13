import useDeviceOrientation from '@rehooks/device-orientation';
import React, { Component } from 'react';

const Orientation = () => {
  let value = useDeviceOrientation();
  return (
    <div>
      <p>Absolute: {value.absolute || 'Device not supported'}</p>
      <p>Alpha: {value.alpha || 'Device not supported'}</p>
      <p>Beta: {value.beta || 'Device not supported'}</p>
      <p>Gamma: {value.gamma || 'Device not supported'}</p>
    </div>
  );
};

export default Orientation;
