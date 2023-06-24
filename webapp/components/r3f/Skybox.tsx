import * as THREE from "three";
import { useTexture } from "@react-three/drei";

export default function Skybox({ image, position = [0, 0, 0] }: any) {
  const texture: any = useTexture(image);

  return (
    <mesh position={position} rotation={[0, Math.PI / 3, 0]}>
      <pointLight intensity={1} />
      <meshBasicMaterial map={texture} side={THREE.BackSide} opacity={0.2} />
    </mesh>
  );
}
