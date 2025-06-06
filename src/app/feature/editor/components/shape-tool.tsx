import type { LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";
import React from "react";
import { cn } from "@/lib/utils";

interface ShapeToolProps {
  icon: LucideIcon | IconType;
  onClick?: () => void;
  iconClassName?: string;
}
export default function ShapeTool({
  icon: Icon,
  onClick,
  iconClassName,
}: ShapeToolProps) {
  return (
    <button
      className="w-full h-full p-4 border rounded-sm cursor-pointer"
      onClick={onClick}
    >
      <Icon className={cn("w-full h-full", iconClassName)} />
    </button>
  );
}
