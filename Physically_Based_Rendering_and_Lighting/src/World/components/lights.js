import { DirectionalLight, HemisphereLight } from 'three';

function createLights() {
  const ambientLight = new HemisphereLight(
    'white', // bright sky color
    'darkslategrey', // dim ground color
    5, // intensity
  );

  const mainLight = new DirectionalLight('white', 5);
  mainLight.position.set(5, 5, 5);

  return { ambientLight, mainLight };
}

export { createLights };
