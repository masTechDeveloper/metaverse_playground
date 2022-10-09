import type { NextPage } from "next";
import { Canvas } from "@react-three/fiber";
// import CameraOrbitControler from "../components/CameraOrbitControler";
import { OrbitControls, Stats, useAnimations } from "@react-three/drei";
import { useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Lights from "../components/Lights";

// import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";

const Character = () => {
  // const fbx = useLoader(FBXLoader, "./models/player.fbx");
  // return <primitive object={fbx} />;
  const model = useLoader(GLTFLoader, "./models/player.glb");

  const { actions } = useAnimations(model.animations, model.scene);

  model.scene.scale.set(0.4, 0.4, 0.4);
  // console.log(model);
  model.scene.traverse((object) => {
    if (object.isMesh) {
    }
  });

  useEffect(() => {
    actions?.idel?.play();
  }, []);

  return <primitive object={model.scene} />;
};

const Home: NextPage = () => {
  return (
    <div className="container">
      <Canvas
        camera={{ fov: 50, near: 0.1, far: 1000, position: [-2, 3, 5] }}
        shadows
      >
        <OrbitControls />
        <Stats />
        <axesHelper args={[2]} />
        <gridHelper />

        <Lights />
        <mesh castShadow>
          <Character />
        </mesh>
        <mesh rotation-x={Math.PI * -0.5} receiveShadow>
          <planeGeometry args={[500, 500]} />
          <meshStandardMaterial color={"#42a7b0"} />
        </mesh>
      </Canvas>
    </div>
  );
};

export default Home;
