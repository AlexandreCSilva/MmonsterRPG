import React, { createRef, useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Canvas } from '../components/Canvas';
import { Map } from '../components/game/Map';

export function Game() {
  return (
    <GameBox>
      <Canvas>
        <Map></Map>
      </Canvas>
    </GameBox>
  );
}

const GameBox = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
`;
