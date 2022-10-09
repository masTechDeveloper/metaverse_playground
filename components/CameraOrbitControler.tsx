import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const CameraOrbitControler = () => {
  const { camera, gl } = useThree();

  useEffect(() => {
    const control = new OrbitControls(camera, gl.domElement);

    return () => {
      control.dispose();
    };
  }, [camera, gl]);

  return null;
};

export default CameraOrbitControler;
