import { Button } from "@/components/ui/button";
import React from "react";
import { ActiveTool, Editor } from "../Types";
import { cn } from "@/lib/utils";
import { ArrowDown, ArrowUp } from "lucide-react";

interface ToolBarProps {
  onChangeActiveTool: (value: ActiveTool) => void;
  editor: Editor;
}

export default function ToolBar({ onChangeActiveTool, editor }: ToolBarProps) {
  return (
    <div className="w-full bg-white absolute top-0 z-[50] py-2 px-3 gap-3 flex items-center gap-4">
      <div className="flex items-center gap-2">
        {/* color button select */}
        <Button
          onClick={() => {
            onChangeActiveTool("fill");
          }}
          className="size-5 cursor-pointer"
          size={"icon"}
          variant={"ghost"}
        >
          <div
            style={{
              backgroundColor: editor.fillColor,
            }}
            className={cn("w-full h-full rounded-2xl")}
          ></div>
        </Button>

        {/* stroke color */}
        <Button
          onClick={() => {
            onChangeActiveTool("stroke-color");
          }}
          className="size-5 cursor-pointer"
          size={"icon"}
          variant={"ghost"}
        >
          <div
            style={{
              borderColor: editor.strokeColor,
            }}
            className={cn("w-full h-full rounded-2xl border-2")}
          ></div>
        </Button>
      </div>

      <div className="space-x-1">
        <Button
          onClick={() => {
            editor.bringForward();
          }}
          className="size-5 cursor-pointer"
          size={"icon"}
          variant={"ghost"}
        >
          <ArrowUp />
        </Button>
        <Button
          onClick={() => {
            editor.sendBackwards();
          }}
          className="size-5 cursor-pointer"
          size={"icon"}
          variant={"ghost"}
        >
          <ArrowDown />
        </Button>
      </div>
    </div>
  );
}
