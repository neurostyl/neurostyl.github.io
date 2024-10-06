import { Canvas } from "@react-three/fiber";
import { Cube } from "./Cube";
import { OrbitControls } from "@react-three/drei";
import Navbar from './Sections/Navbar.tsx'


function App() {
  return (
    <div
      className="App"
      style={{
        height: "100vh",
        width: "100vw"
      }}
    >
     
      <Canvas
        camera={{
          near: 0.1,
          far: 1000,
          zoom: 1,
          position: [0, 0, 5]
        }}
      >
        <Cube />
        <ambientLight args={[0xffffff]} intensity={0.2} />
        <directionalLight position={[1, 1, 1]} intensity={0.8} />
        <OrbitControls />
      </Canvas>
      <Navbar />
    </div>
  );
}

export default App;
