import {
  CylinderGeometry,
  Mesh,
  MeshStandardMaterial,
  TextureLoader,
  MathUtils,
  Vector2,
} from 'three';

function createMaterial() {
  // crreate texture loader
  const textureLoader = new TextureLoader();

  // load a texture
  const textureAO = textureLoader.load('/assets/worn-shiny-metal-ao.png');
  const textureMetal = textureLoader.load('/assets/worn-shiny-metal-Metallic.png');
  const textureRough = textureLoader.load('/assets/worn-shiny-metal-Roughness.png');
  const textureHeight = textureLoader.load('/assets/worn-shiny-metal-Height.png');
  const textureNormal = textureLoader.load('/assets/worn-shiny-metal-Normal-dx.png');
  const textureColor = textureLoader.load('/assets/hexa_logo_blue.png');

  const radian_to_rotate = MathUtils.degToRad(30);
  textureColor.rotation = radian_to_rotate;
  textureColor.center = new Vector2(0.5, 0.5);

  // create a "standard" material
  const material = new MeshStandardMaterial({
    map : textureColor,
    // NormalMap
    normalMap : textureNormal,
    normalScale : new Vector2(1, 1),
    // aoMap
    aoMap : textureAO,
    aoMapIntensity : 1,
    // Displacement
    displacementMap : textureHeight,
    displacementScale : 0.1,
    displacementBias : -0.05,
    // Roughness
    roughnessMap : textureRough,
    roughness : 0,
    // Metalness
    metalnessMap : textureMetal,
    metalness : 0.9,
  });
  
  return material;
}

function createCube() {
  const geometry = new CylinderGeometry(2, 2, 0.3, 6);

  const material = createMaterial();
  // a physically correct "standard" material
  // const material = new MeshStandardMaterial({ color: 'purple' });

  const cube = new Mesh(geometry, material);

  const radiansPerSecond = MathUtils.degToRad(30);

  cube.rotation.set(0.3, 1, 1);

  cube.tick = (delta) => {
    // increase the cube's rotation each frame
    cube.rotation.z += radiansPerSecond * delta;
    cube.rotation.x += radiansPerSecond * delta;
    cube.rotation.y += radiansPerSecond * delta;
  };

  return cube;
}

export { createCube };