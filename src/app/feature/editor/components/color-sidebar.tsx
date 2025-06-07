"use client";
import React from "react";
import { ActiveTool, Editor } from "../Types";
import ToolSidebarHeader from "./tool-sidebar-header";
import clsx from "clsx";
import ColorPiker from "./Color-piker";

interface ShapeSidebarProps {
  editor: Editor;
  activeTool: ActiveTool;
  onChangeActiveTool: (activeTool: ActiveTool) => void;
}

export default function ColorSidebar({
  activeTool,
  editor,
}: ShapeSidebarProps) {
  return (
    <aside
      className={clsx("h-full w-[340px]", {
        hidden: activeTool != "fill",
      })}
    >
      <ToolSidebarHeader
        title="Shape"
        description="Add and customize shapes for your design."
      />
      <ColorPiker
        defaultColor={editor.fillColor}
        onChangeComplete={(e) => {
          editor.changeFillColor(e.hex);
        }}
      />
    </aside>
  );
}
