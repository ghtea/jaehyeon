import { OrbitControls, Preload } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

export type SceneProps = Parameters<typeof Canvas>[0];

const Scene = ({ children, ...others }: SceneProps) => {
  return (
    <Canvas {...others}>
      <directionalLight intensity={0.75} />
      <ambientLight intensity={0.75} />
      {children}
      <Preload all />
      <OrbitControls />
    </Canvas>
  );
};

export default Scene;
