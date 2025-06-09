"use client";
import React from "react";
import { ActiveTool, Editor } from "../Types";
import ToolSidebarHeader from "./tool-sidebar-header";
import clsx from "clsx";
import ColorPiker from "./Color-piker";
import { Slider } from "@/components/ui/slider";

interface StrokeColorSidebarProps {
  editor: Editor;
  activeTool: ActiveTool;
  onChangeActiveTool: (activeTool: ActiveTool) => void;
}

export default function StrokeColorSidebar({
  activeTool,
  editor,
}: StrokeColorSidebarProps) {
  return (
    <aside
      className={clsx("h-full w-[340px]", {
        hidden: activeTool != "stroke-color",
      })}
    >
      <ToolSidebarHeader
        title="Stroke Color"
        description="Change the stroke color for your selected element."
      />
      <ColorPiker
        defaultColor={editor.strokeColor}
        onChangeComplete={(e) => {
          editor.changeStrokeColor(e.hex);
        }}
      />

      <div className="mt-5 px-2 space-y-3">
        {/* change stroke */}
        <div>
          <p className="font-sans font-bold text-xs">
            Stroke Width ({editor.strokeWidth})
          </p>
          <Slider
            className="mt-2"
            onValueChange={(e) => {
              const value = +e;
              editor.changeStrokeWidth(value);
            }}
            defaultValue={[editor.strokeWidth]}
            value={[editor.strokeWidth]}
            max={100}
            step={1}
          />
        </div>
        <hr className="my-2.5 w-full border" />
        <div>
          <p className="font-sans font-bold text-xs">
            Rounded ({editor.strokeWidth})
          </p>
          <Slider
            className="mt-2"
            onValueChange={(e) => {
              const value = +e;
              editor.changeStrokeWidth(value);
            }}
            defaultValue={[editor.strokeWidth]}
            value={[editor.strokeWidth]}
            max={100}
            step={1}
          />
        </div>
        <hr className="my-2.5 w-full border" />
        <div>
          <p className="font-sans font-bold text-xs">
            Stroke DashArray ({editor.strokeWidth})
          </p>
          <Slider
            className="mt-2"
            onValueChange={(e) => {
              const value = +e;
              editor.changeStrokeWidth(value);
            }}
            defaultValue={[editor.strokeWidth]}
            value={[editor.strokeWidth]}
            max={100}
            step={1}
          />
        </div>
      </div>
    </aside>
  );
}
