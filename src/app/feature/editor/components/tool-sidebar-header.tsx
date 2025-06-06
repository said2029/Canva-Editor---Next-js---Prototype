import React from "react";

interface ToolSidebarHeaderProps {
  title: string;
  description?: string;
}

export default function ToolSidebarHeader({
  title,
  description,
}: ToolSidebarHeaderProps) {
  return (
    <div className="border-b pb-3">
      <div className="p-2">
        <h3 className="font-semibold ">{title}</h3>
        <p className="text-muted-foreground text-xs mt-1">{description}</p>
      </div>
    </div>
  );
}
