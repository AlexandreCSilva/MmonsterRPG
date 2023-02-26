import React, { createContext, createRef, useEffect, useState } from 'react';

const CanvasContext = createContext();

function Canvas(props) {
  const ref = createRef();
  const [renderingContext, setRenderingContext] = useState();

  useEffect(() => {
    const context = ref.current.getContext('2d');

    context.canvas.width = 1024;
    context.canvas.height = 576;

    setRenderingContext(context);
  }, []);

  return (
    <CanvasContext.Provider value={renderingContext}>
      <canvas ref={ref}/>
      {props.children}
    </CanvasContext.Provider>
  );
};

export { Canvas, CanvasContext };
