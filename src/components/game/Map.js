import React, { useContext } from 'react';
import { CanvasContext } from '../Canvas';

export function Map() {
  const context = useContext(CanvasContext);
  const image = new Image();

  image.onload = function(res) {
    context.drawImage(image, -750, -550);
  };

  image.src = require('../../assets/Images/Pellet Town.png');

  return <></>;
}
