import React, { Dispatch, memo, useEffect, VFC } from "react";
import styled from "@emotion/styled";
import { fabric } from "fabric";

import { Action } from "../types/canvas";
import {FabricCanvasContainer} from "./containers";

const CANVAS_ID = "canvas";

type Props = {
  className?: string;
  dispatch: Dispatch<Action>;
};

const CanvasComponent: React.FC<Props> = memo(({ className, dispatch }) => {
  useEffect(() => {
    const initCanvas = new fabric.Canvas(CANVAS_ID, {
      isDrawingMode: true,
      width: 800,
      height: 600,
      backgroundColor: "#000000"
    });

    dispatch({ type: "init", canvas: initCanvas });
  }, []);

  return (
    <div className={className}>
      <canvas id={CANVAS_ID} />
    </div>
  );
});

const StyledComponent = styled(CanvasComponent)`
  border: 3px double #aaa;
`;

const Container: VFC = () => {
  const { dispatch } = FabricCanvasContainer.useContainer();

  return <StyledComponent dispatch={dispatch} />;
};

export default Container;
