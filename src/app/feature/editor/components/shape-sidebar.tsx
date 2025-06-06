"use client";
import React from "react";
import { ActiveTool, Editor } from "../Types";
import ToolSidebarHeader from "./tool-sidebar-header";
import clsx from "clsx";
import ShapeTool from "./shape-tool";
import { FaCircle, FaSquare, FaSquareFull } from "react-icons/fa";
import { IoTriangle } from "react-icons/io5";
import { FaDiamond } from "react-icons/fa6";

interface ShapeSidebarProps {
  editor: Editor;
  activeTool: ActiveTool;
  onChangeActiveTool: (activeTool: ActiveTool) => void;
}

export default function ShapeSidebar({
  activeTool,
  editor,
}: ShapeSidebarProps) {
  return (
    <aside
      className={clsx("h-full w-[340px]", {
        hidden: activeTool != "shapes",
      })}
    >
      <ToolSidebarHeader
        title="Shape"
        description="Add and customize shapes for your design."
      />

      <div className="mt-3 grid grid-cols-3 gap-4 w-full p-2">
        <ShapeTool
          icon={FaCircle}
          onClick={() => {
            editor?.addCircle();
          }}
        />
        <ShapeTool icon={FaSquare} onClick={editor?.addSoftRectangle} />
        <ShapeTool icon={FaSquareFull} onClick={() => {}} />
        <ShapeTool icon={IoTriangle} onClick={() => {}} />
        <ShapeTool icon={FaDiamond} onClick={() => {}} />
      </div>
    </aside>
  );
}
