import { createRoot } from "react-dom/client";

import "./index.css";
import Box from "./Box";
import { Canvas } from "@react-three/fiber";

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
    </Canvas>
  );
} else {
  throw new Error("The root container not found !");
}
