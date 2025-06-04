"use client";
import React, { useEffect, useRef } from "react";
import useEditor from "../hooks/use-editor";
import { fabric } from "fabric";

export default function Editor() {
  const { init } = useEditor();

  //   #region refs
  const canvesRef = useRef(null);
  const ContainerRef = useRef<HTMLDivElement>(null);
  //#endregion

  useEffect(() => {
    const Canvas = new fabric.Canvas(canvesRef.current, {
      controlsAboveOverlay: true,
      preserveObjectStacking: true,
    });
    init({
      initialCanvas: Canvas,
      initialContainer: ContainerRef.current!,
    });
  }, [init]);

  return (
    <div className="h-full flex flex-col">
      <div className="h-full flex-1 bg-muted" ref={ContainerRef}>
        <canvas className="w-full h-full" ref={canvesRef} />
      </div>
    </div>
  );
}
