import { Environment, OrbitControls } from "@react-three/drei";
import { Avatar } from "./Avatar";

export function Experience({ dress = "default", gender = "male" }) {
  return (
    <>
      <OrbitControls 
        enableZoom={true} 
        enablePan={true} 
        enableRotate={true}
        minDistance={2}
        maxDistance={10}
      />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} />
      
      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="#f0f0f0" />
      </mesh>
      
      <Avatar dress={dress} gender={gender} position={[0, -0.5, 0]} />
      <Environment preset="sunset" />
    </>
  );
}
