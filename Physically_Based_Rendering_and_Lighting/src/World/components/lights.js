import { DirectionalLight, SpotLight } from 'three';

function createLights() {
  // Create a directional light
  const light = new SpotLight('white', 200);

  // move the light right, up, and towards us
  light.position.set(0, 5, 5);

  return light;
}

export { createLights };
