import { Color, SketchPicker } from "react-color";

interface ColorPikerProps {
  defaultColor: Color | undefined;
  onChangeComplete: (e:any) => void;
}
export default function ColorPiker({
  defaultColor,
  onChangeComplete,
}: ColorPikerProps) {
  return (
    <div className="px-2 flex justify-center items-center flex-col">
      <SketchPicker
        color={defaultColor}
        className="!shadow-none !w-full mt-2.5"
        onChangeComplete={onChangeComplete}
      />
    </div>
  );
}
