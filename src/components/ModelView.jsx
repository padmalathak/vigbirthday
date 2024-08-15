import { OrbitControls, View } from "@react-three/drei";
import React, { Suspense } from "react";
import { AmbientLight, PerspectiveCamera } from "three";
import Lights from "./Lights";
import Iphone from "./Iphone";
import Loader from "./Loader";
import * as THREE from "three";

function ModelView({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationSize,
  size,
  item,
}) {
  return (
    <View
      index={index}
      id={gsapType}
      className={`w-full h-full ${index === 2} ?'right-[-100%]':
        ${index === 3} ?'right-[-200%]':''`}
    >
      {/* <AmbientLight intensity={0.3} /> */}
      {/* <PerspectiveCamera makeDefault position={[0, 0, 4]} /> */}
      <Lights />
      <OrbitControls
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0, 0, 0)}
        onEnd={() => setRotationState(controlRef.current.getAzimuthaAngle())}
      />
      <group
        ref={groupRef}
        name={`${index === 1} ? 'small':${index === 2}?'large':'vignesh'`}
        position={[0, 0, 0]}
      >
        <Suspense fallback={<Loader />}>
          <Iphone
            scale={index === 1 ? [4, 4, 3] : [4, 3, 1]}
            item={item}
            size={size}
          />
        </Suspense>
      </group>
    </View>
  );
}

export default ModelView;
