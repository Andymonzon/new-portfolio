import { Canvas } from "@react-three/fiber";
import { Room } from "../Room/Room";
import {
  CameraControls,
  Environment,
  PerspectiveCamera,
  Sphere,
} from "@react-three/drei";

export const CanvasContainer = () => {
  return (
    <Canvas className="w-full h-full">
      <Room />
      <Environment preset="city" />
      {/* <CameraControls /> */}
    </Canvas>
  );
};
