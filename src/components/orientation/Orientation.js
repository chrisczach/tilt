import useDeviceOrientation from '@rehooks/device-orientation';
import React, { Component, useState } from 'react';

const Orientation = () => {
  let value = useDeviceOrientation();
  [verticalReset, setVerticalReset] = useState;
  const vertical = Math.round(value.beta);
  const horizontal = Math.round(value.gamma);
  return (
    <div>
      <p>Vertical: {vertical}</p>
      <p>Horizontal: {horizontal}</p>
    </div>
  );
};

export default Orientation;
