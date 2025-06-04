import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface SidebarItemType {
  icon: LucideIcon;
  label: string;
  onClick?: () => void;
  activeTool: Boolean;
}

export default function SidebarItem({
  icon: Icon,
  label,
  activeTool,
  onClick,
}: SidebarItemType) {
  return (
    <Button
      onClick={onClick}
      variant={"ghost"}
      className={cn(
        "flex flex-col py-3 h-fit cursor-pointer w-full size-16",
        activeTool && "bg-gray-100"
      )}
    >
      <Icon />
      <p className="text-xs">{label}</p>
    </Button>
  );
}
