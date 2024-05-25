import { DirectionalLight, AmbientLight } from 'three';

function createLights() {
  const light = new DirectionalLight('white', 8);
  const ambientLight = new AmbientLight('white', 10);

  light.position.set(0, 0, 5);

  return light;
}

export { createLights };
