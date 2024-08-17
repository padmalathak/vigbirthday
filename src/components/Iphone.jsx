import React, { useEffect, useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";

function Model(props) {
  const { nodes, materials } = useGLTF("/models/vig3d2.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_0.geometry}
        material={nodes.mesh_0.material}
      />
    </group>
  );
}

export default Model;
useGLTF.preload("/models/vig3d2.glb");
