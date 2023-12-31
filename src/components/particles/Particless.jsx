import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesOptions from "./particles.json";
function Particless() {
  const particlesInit = useCallback((main) => {
    loadFull(main);
  }, []);
  return <Particles options={particlesOptions} init={particlesInit} />;
}
export default Particless;
