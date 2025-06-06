"use client";
import { fabric } from "fabric";
import { useCallback, useMemo, useState } from "react";
import useAutoResize from "./use-auto-resize";
import { BuildEditorProps, Editor } from "../Types";
import useCanvesEvent from "./use-canves-event";

const BuildEditor = ({ canvas }: BuildEditorProps) => {
  const center = (obj: fabric.Object) => {
    if (!canvas) return;
    const workspace = canvas.getObjects().find((item) => item.name == "clip");
    const point = workspace?.getCenterPoint();
    // @ts-ignore
    canvas._centerObject(obj, point);
  };
  const addCanvesObject = (obj: fabric.Object) => {
    center(obj);
    canvas.add(obj);
    canvas.setActiveObject(obj);
  };

  return {
    addCircle: () => {
      console.log("first");
      const circle = new fabric.Circle({
        width: 100,
        height: 100,
        fill: "#000",
        radius: 150,
      });
      addCanvesObject(circle);
    },
    addSoftRectangle: () => {
      const squire = new fabric.Rect({
        width: 100,
        height: 100,
        rx: 12,
        ry: 12,
        fill: "#000",
      });
      addCanvesObject(squire);
    },
    addDiamond: () => {
      const squire = new fabric.Rect({
        width: 100,
        height: 100,
        rx: 12,
        ry: 12,
        fill: "#000",
        angle: 45,
      });
      addCanvesObject(squire);
    },

    addRectangle: () => {
      const squire = new fabric.Rect({
        width: 100,
        height: 100,
      });
      addCanvesObject(squire);
    },
    addTriangle: () => {
      const squire = new fabric.Triangle({
        width: 100,
        height: 100,
      });
      addCanvesObject(squire);
    },

    delete: () => {
      if (!canvas) return;
      const activeObject = canvas.getActiveObjects();
      if (activeObject) {
        activeObject.map((ob) => {
          canvas.remove(ob);
        });
      }
      canvas.discardActiveObject();
    },
  };
};
export default function useEditor() {
  const [canves, setCanves] = useState<fabric.Canvas | null>(null);
  const [container, setContainer] = useState<HTMLDivElement | null>(null);
  const [selectedObject, setSelectedObject] = useState<fabric.Object[]>([]);

  useCanvesEvent({
    canves: canves,
    setSelectedObject: setSelectedObject,
  });

  const editor = useMemo(() => {
    if (canves) {
      return BuildEditor({
        canvas: canves,
      });
    }
    return {};
  }, [canves]) as Editor;

  useAutoResize({
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
    },
    []
  );
  return { init, editor };
}
