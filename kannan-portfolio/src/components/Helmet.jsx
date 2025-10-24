import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

/**
 * A component to load and animate the 3D model
 */
function Model(props) {
  // 1. Load the model from the /public folder
  const { scene } = useGLTF('/master_chief_helmet.glb');
  const modelRef = useRef();

  // 2. Animate the model on each frame
  useFrame(() => {
    if (modelRef.current) {
      // This will make it rotate slowly
       modelRef.current.rotation.y += 0.003;
    }
  });

  // 3. Render the model
  // You can adjust scale and position as needed
  return (
    <primitive 
      object={scene} 
      ref={modelRef} 
      scale={0.02} 
      position={[0, -1, 0]} 
      {...props} 
    />
  );
}

/**
 * The main scene component
 */
function HelmetScene() {
  return (
    <div className="helmet-canvas">
      <Canvas camera={{ position: [0, 0, -7], fov: 30 }}>
        {/* Suspense is required to show a fallback while the model loads */}
        <Suspense fallback={null}>
          {/* Add some lights */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <directionalLight position={[-10, -10, -5]} intensity={0.3} />
          
          <Model />
        </Suspense>
      </Canvas>
    </div>
  );
}

// Preload the model
useGLTF.preload('/master_chief_helmet.glb');

export default HelmetScene;