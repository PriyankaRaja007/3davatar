import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { Avatar } from '../../r3f-portfolio-avatar/src/components/Avatar';

const AvatarViewer = ({ dress = "default", gender = "male", size = { height: 170, weight: 70 } }) => {
  return (
    <div style={{ width: '100%', height: '400px' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Avatar 
            dress={dress}
            gender={gender}
            size={size}
          />
          <OrbitControls enableZoom={true} />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default AvatarViewer; 