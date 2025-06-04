import { fabric } from "fabric";
import { useCallback, useState } from "react";
import useAutoResize from "./use-auto-resize";

export default function useEditor() {
  const [canves, setCanves] = useState<fabric.Canvas | null>(null);
  const [container, setContainer] = useState<HTMLDivElement | null>(null);

  const {} = useAutoResize({
    canves,
    container,
  });

  const init = useCallback(
    ({
      initialCanvas,
      initialContainer,
    }: {
      initialCanvas: fabric.Canvas;
      initialContainer: HTMLDivElement;
    }) => {
      // style controller object
      fabric.Object.prototype.set({
        cornerColor: "#fff",
        cornerStyle: "circle",
        borderColor: "#3b82f6",
        borderScaleFactor: 1.5,
        transparentCorners: false,
        borderOpacityWhenMoving: 1,
        cornerStrokeColor: "#3b82f6",
      });

      const initailWordspace = new fabric.Rect({
        width: 300,
        height: 1200,
        fill: "white",
        name: "clip",
        selectable: false,
        hasControls: false,
        moveCursor: "",
        shadow: new fabric.Shadow({
          color: "rgba(0,0,0,0.8)",
          blur: 5,
        }),
      });

      initialCanvas.setWidth(initialContainer.offsetWidth);
      initialCanvas.setHeight(initialContainer.offsetHeight);

      initialCanvas.add(initailWordspace);
      initialCanvas.centerObject(initailWordspace);
      initialCanvas.clipPath = initailWordspace;
      setContainer(initialContainer);
      setCanves(initialCanvas);

      const newReac = new fabric.Rect({
        width: 100,
        height: 100,
        fill: "black",
      });
      initialCanvas.add(newReac);
      initialCanvas.centerObject(newReac);
    },
    []
  );
  return { init };
}
