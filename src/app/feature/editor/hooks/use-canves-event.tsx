"use client";
import React, { useEffect } from "react";

interface useCanvesEventProps {
  canves: fabric.Canvas | null;
  setSelectedObject: (object: fabric.Object[]) => void;
}

export default function useCanvesEvent({
  canves,
  setSelectedObject,
}: useCanvesEventProps) {
  useEffect(() => {
    if (canves) {
      canves.on("selection:created", (e) => {
        setSelectedObject(e.selected || []);
      });
      canves.on("selection:updated", (e) => {
        setSelectedObject(e.selected || []);
      });
      canves.on("selection:cleared", (e) => {
        setSelectedObject([]);
      });
    }

    return () => {
      canves?.off("selection:created");
      canves?.off("selection:updated");
      canves?.off("selection:cleared");
    };
  }, [canves]);
  return <div></div>;
}
