import {
  BoxGeometry,
  Mesh, 
  MeshStandardMaterial,
  MathUtils
} from 'three';

function createCube() {
  const geometry = new BoxGeometry(2, 2, 2);

  // Switch the old "basic" material to
  // a physically correct "standard" material
  const material = new MeshStandardMaterial({ color: 'purple' });

  const cube = new Mesh(geometry, material);

  const radiansPerSecond = MathUtils.degToRad(30);

  cube.rotation.set(-0.5, -0.1, 0.8);

  cube.tick = (delta) => {
    // increase the cube's rotation each frame
    cube.rotation.z += radiansPerSecond * delta;
    cube.rotation.x += radiansPerSecond * delta;
    cube.rotation.y += radiansPerSecond * delta;
  };

  return cube;
}

export { createCube };
