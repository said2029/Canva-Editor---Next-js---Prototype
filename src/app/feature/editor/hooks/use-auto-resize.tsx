"use client";
import { useCallback, useEffect } from "react";
import { fabric } from "fabric";

interface AutoResizeProps {
  canves: fabric.Canvas | null;
  container: HTMLDivElement | null;
}

export default function useAutoResize({ canves, container }: AutoResizeProps) {
  const autoZoom = useCallback(() => {
    if (!canves || !container) return;

    const width = container.offsetWidth;
    const height = container.offsetHeight;

    canves.setWidth(width);
    canves.setHeight(height);

    const center = canves.getCenter();

    const zoomRatio = 0.85;
    const localWorkspace = canves
      .getObjects()
      .find((item) => item.name === "clip");

    //@ts-ignore
    const scale = fabric.util.findScaleToFit(localWorkspace, {
      width: width,
      height: height,
    });

    const zoom = zoomRatio * scale;

    canves.setViewportTransform(fabric.iMatrix.concat());
    canves.zoomToPoint(new fabric.Point(center.left, center.top), zoom);

    if (!localWorkspace) return;

    const workspaceCenter = localWorkspace.getCenterPoint();
    const viewportTransform = canves.viewportTransform;

    if (
      canves.width === undefined ||
      canves.height === undefined ||
      !viewportTransform
    ) {
      return;
    }

    viewportTransform[4] =
      canves.width / 2 - workspaceCenter.x * viewportTransform[0];

    viewportTransform[5] =
      canves.height / 2 - workspaceCenter.y * viewportTransform[3];

    canves.setViewportTransform(viewportTransform);

    localWorkspace.clone((cloned: fabric.Rect) => {
      canves.clipPath = cloned;
      canves.requestRenderAll();
    });
  }, [canves, container]);

  useEffect(() => {
    let resizeObserver: ResizeObserver | null = null;

    if (canves && container) {
      resizeObserver = new ResizeObserver(() => {
        autoZoom();
      });

      resizeObserver.observe(container);
    }

    return () => {
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, [canves, container, autoZoom]);

  return { autoZoom };
}
