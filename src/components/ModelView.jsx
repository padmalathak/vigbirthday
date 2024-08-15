import { View } from "@react-three/drei";
import React, { Suspense } from "react";
import { AmbientLight, PerspectiveCamera } from "three";
import Lights from "./Lights";
import Iphone from "./Iphone";
import Loader from "./Loader";

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
      className={`border-2 border-red-500 w-full h-full ${
        index === 2
      } ?'right-[-100%]':
        ${index === 3} ?'right-[-200%]':''`}
    >
      {/* <AmbientLight intensity={0.3} /> */}
      {/* <PerspectiveCamera makeDefault position={[0, 0, 4]} /> */}
      <Lights />
      <Suspense fallback={<Loader />}>
        <Iphone />
      </Suspense>
    </View>
  );
}

export default ModelView;
