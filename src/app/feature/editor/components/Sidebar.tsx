import React from "react";
import SidebarItem from "./sidebar-item";
import {
  BrickWall,
  ImageIcon,
  Settings,
  Shapes,
  Sparkles,
  Type,
} from "lucide-react";
import { ActiveTool } from "../Types";

interface SidebarProps {
  activeTool?: ActiveTool;
  onChangeActiveTool: (tool: ActiveTool) => void;
}

export default function Sidebar({
  activeTool,
  onChangeActiveTool,
}: SidebarProps) {
  return (
    <aside className="w-[100px] bg-white">
      <ul className="mt-5 flex flex-col items-center justify-center gap-2.5">
        <li>
          <SidebarItem
            activeTool={activeTool === "templates"}
            onClick={() => {
              onChangeActiveTool("templates");
            }}
            icon={BrickWall}
            label="Design"
          />
        </li>
        <li>
          <SidebarItem
            activeTool={activeTool === "images"}
            onClick={() => {
              onChangeActiveTool("images");
            }}
            icon={ImageIcon}
            label="Image"
          />
        </li>
        <li>
          <SidebarItem
            activeTool={activeTool === "text"}
            onClick={() => {
              onChangeActiveTool("text");
            }}
            icon={Type}
            label="Text"
          />
        </li>
        <li>
          <SidebarItem
            activeTool={activeTool === "shapes"}
            onClick={() => {
              onChangeActiveTool("shapes");
            }}
            icon={Shapes}
            label="Shapes"
          />
        </li>
        <li>
          <SidebarItem
            activeTool={activeTool === "ai"}
            onClick={() => {
              onChangeActiveTool("ai");
            }}
            icon={Sparkles}
            label="AI"
          />
        </li>
        <li>
          <SidebarItem
            activeTool={activeTool === "settings"}
            onClick={() => {
              onChangeActiveTool("settings");
            }}
            icon={Settings}
            label="Setting"
          />
        </li>
      </ul>
    </aside>
  );
}
