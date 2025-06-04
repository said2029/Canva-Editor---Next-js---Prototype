interface AutoResizeProps {
  canves: fabric.Canvas | null;
  container: HTMLDivElement | null;
}

export default function useAutoResize({ canves, container }: AutoResizeProps) {
  return <div>use-auto-resize</div>;
}
