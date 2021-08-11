import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Content } from './styles';
const BigSphere = props => {
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const mesh = useRef();
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
  return (
    <mesh
      visible
      {...props}
      ref={mesh}
      scale={1.5}
      position={[1, 1, 0]}
      rotation-x={1}
      onPointerOver={event => setHover(true)}
      onPointerOut={event => setHover(false)}
    >
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hover ? '#fa9190' : '#acb5bb'} />
    </mesh>
  );
};

const GraphicModel = props => {
  return (
    <Content>
      <Canvas>
        <ambientLight intensity={0.1} />
        <BigSphere />
        <pointLight position={[10, 10, 10]} />
      </Canvas>
    </Content>
  );
};

export default GraphicModel;
