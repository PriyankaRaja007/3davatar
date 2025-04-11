import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Center, OrbitControls } from "@react-three/drei";
import { Avatar } from "./components/Avatar";
import { DressSelector } from "./components/DressSelector";
import "./App.css";

function App() {
  const [dress, setDress] = useState("default");
  const [gender, setGender] = useState("male");
  const [size, setSize] = useState({ height: 170, weight: 70 });

  const handleSizeChange = (newSize) => {
    console.log('Size changed:', newSize);
    setSize(newSize);
  };

  return (
    <div className="app">
      <Canvas
        camera={{
          fov: 30,
          near: 0.1,
          far: 200,
          position: [0, 2, 8],
        }}
      >
        <ambientLight intensity={0.5} />
        <Environment preset="sunset" />
        <OrbitControls 
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          minDistance={3}
          maxDistance={15}
          minPolarAngle={0}
          maxPolarAngle={Math.PI}
          rotateSpeed={0.5}
          panSpeed={0.5}
          zoomSpeed={0.5}
        />
        <Center>
          <Avatar 
            dress={dress} 
            gender={gender} 
            size={size}
            animation="Standing"
          />
        </Center>
      </Canvas>
      <DressSelector 
        onDressChange={setDress}
        onGenderChange={setGender}
        onSizeChange={handleSizeChange}
        currentGender={gender}
        currentDress={dress}
      />
    </div>
  );
}

export default App;
