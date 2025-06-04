"use client";
import React, { useEffect, useRef, useState } from "react";
import useEditor from "../hooks/use-editor";
import { fabric } from "fabric";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import ToolBar from "./ToolBar";
import Footer from "./Footer";
import { ActiveTool } from "../Types";

export default function Editor() {
  const { init } = useEditor();
  const [activeTool, setActiveTools] = useState<ActiveTool>();

  const onChangeActiveTool = (tool: ActiveTool) => {
    if (activeTool != tool) {
      setActiveTools(tool);
    }
  };

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

    return () => {
      Canvas.dispose();
    };
  }, [init]);

  return (
    <div className="h-full flex flex-col">
      <Navbar />
      <div className="absolute h-[calc(100%-68px)] w-full top-[68px] flex">
        <Sidebar activeTool={activeTool} onChangeActiveTool={onChangeActiveTool}/>
        <main className="bg-muted flex-1 overflow-auto relative flex-col">
          <ToolBar />
          <div
            className="flex-1 bg-muted h-[calc(100%-124px)]"
            ref={ContainerRef}
          >
            <canvas className="w-full h-full" ref={canvesRef} />
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
}
