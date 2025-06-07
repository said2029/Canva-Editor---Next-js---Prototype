import { Button } from "@/components/ui/button";
import React from "react";
import { ActiveTool, Editor } from "../Types";
import { cn } from "@/lib/utils";

interface ToolBarProps {
  onChangeActiveTool: (value: ActiveTool) => void;
  editor: Editor;
}

export default function ToolBar({ onChangeActiveTool, editor }: ToolBarProps) {
  return (
    <div className="w-full bg-white absolute top-0 z-[50] py-2 px-3">
      <div>
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
      </div>
    </div>
  );
}
