"use client";
import React from "react";
import { ActiveTool, Editor } from "../Types";
import ToolSidebarHeader from "./tool-sidebar-header";
import clsx from "clsx";
import ShapeTool from "./shape-tool";
import { FaCircle, FaSquare, FaSquareFull } from "react-icons/fa";
import { IoTriangle } from "react-icons/io5";
import { FaDiamond } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

interface ShapeSidebarProps {
  editor: Editor;
  activeTool: ActiveTool;
  onChangeActiveTool: (activeTool: ActiveTool) => void;
}

export default function TextSidebar({ activeTool, editor }: ShapeSidebarProps) {
  return (
    <aside
      className={clsx("h-full w-[340px]", {
        hidden: activeTool != "text",
      })}
    >
      <ToolSidebarHeader
        title="Text"
        description="Add and customize shapes for your design."
      />

      <div className="mt-3 w-full p-2">
        <Button
          className="w-full h-12 cursor-pointer"
          onClick={() => {
            editor.addText("Hello", {
              fontSize: 60,
              text: "said",
              fontFamily:"poppens"
            });
          }}
        >
          Add Header
        </Button>
      </div>
    </aside>
  );
}
