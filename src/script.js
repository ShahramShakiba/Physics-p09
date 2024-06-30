import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import GUI from 'lil-gui';
import Cannon from 'cannon';
import * as THREE from 'three';

const canvas = document.querySelector('canvas.webgl');
const scene = new THREE.Scene();
const gui = new GUI();

let width = window.innerWidth;
let height = window.innerHeight;

const debugObj = {
  createSphere: () => {
    createSphere(Math.random() * 0.5, {
      x: (Math.random() - 0.5) * 3,
      y: 3,
      z: (Math.random() - 0.5) * 4,
    });
  },
};

gui.add(debugObj, 'createSphere');

//=============== Textures =======================
const textureLoader = new THREE.TextureLoader();
const cubeTextureLoader = new THREE.CubeTextureLoader();

const environmentMapTexture = cubeTextureLoader.load([
  '/textures/environmentMaps/0/px.png',
  '/textures/environmentMaps/0/nx.png',
  '/textures/environmentMaps/0/py.png',
  '/textures/environmentMaps/0/ny.png',
  '/textures/environmentMaps/0/pz.png',
  '/textures/environmentMaps/0/nz.png',
]);

//================= Physics ========================
const world = new Cannon.World();
world.gravity.set(0, -9.82, 0);

//============ Material
const defaultMaterial = new Cannon.Material('default');
const defaultContactMaterial = new Cannon.ContactMaterial(
  defaultMaterial,
  defaultMaterial,
  {
    friction: 0.1, // default: 0.3 - the resistance
    restitution: 0.7, // default: 0.3 - bounce
  }
);

world.addContactMaterial(defaultContactMaterial);
world.defaultContactMaterial = defaultContactMaterial;

//=========== Floor
const floorShape = new Cannon.Plane();
const floorBody = new Cannon.Body();
floorBody.mass = 0; // default is 0 therefore we can omit it
floorBody.addShape(floorShape);
floorBody.quaternion.setFromAxisAngle(new Cannon.Vec3(-1, 0, 0), Math.PI / 2);
// floorBody.material = defaultMaterial;

// floorBody.position; // it's in the center of the scene, we don't want to move it - don't touch the position

world.addBody(floorBody);

//================= Floor =========================
const floor = new THREE.Mesh(
  new THREE.PlaneGeometry(10, 10),
  new THREE.MeshStandardMaterial({
    color: '#777777',
    metalness: 0.3,
    roughness: 0.4,
    envMap: environmentMapTexture,
    envMapIntensity: 0.5,
  })
);
floor.receiveShadow = true;
floor.rotation.x = -Math.PI * 0.5;
scene.add(floor);

//================== Lights ========================
const ambientLight = new THREE.AmbientLight(0xffffff, 2.1);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
directionalLight.position.set(5, 5, 5);
directionalLight.castShadow = true;
directionalLight.shadow.mapSize.set(1024, 1024);
directionalLight.shadow.camera.far = 15;
directionalLight.shadow.camera.left = -7;
directionalLight.shadow.camera.top = 7;
directionalLight.shadow.camera.right = 7;
directionalLight.shadow.camera.bottom = -7;
scene.add(directionalLight);

//================= Camera ==========================
const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 100);
camera.position.set(-3, 3, 3);
scene.add(camera);

//============== Orbit Controls =====================
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

//================= Renderer ========================
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
});
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.setSize(width, height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

//=============== Resize Listener ====================
window.addEventListener('resize', () => {
  width = window.innerWidth;
  height = window.innerHeight;

  camera.aspect = width / height;
  camera.updateProjectionMatrix();

  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

//=================== Utils ========================
const objects = [];

const createSphere = (radius, position) => {
  const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(radius, 20, 20),
    new THREE.MeshStandardMaterial({
      metalness: 0.3,
      roughness: 0.4,
      envMap: environmentMapTexture,
    })
  );

  sphere.castShadow = true;
  sphere.position.copy(position);
  scene.add(sphere);

  //======== Cannon.js Body
  const shape = new Cannon.Sphere(radius);
  const body = new Cannon.Body({
    mass: 1,
    shape,
    material: defaultMaterial,
  });
  body.position.copy(position);
  world.addBody(body);

  objects.push({
    sphere,
    body,
  });
};

createSphere(0.5, { x: 0, y: 3, z: 0 });

//=================== Animate ========================
const clock = new THREE.Clock();
let prevTime = 0;

const tick = () => {
  const elapsedTime = clock.getElapsedTime();
  const deltaTime = elapsedTime - prevTime;
  prevTime = elapsedTime;

  //===== Update Physics World
  world.step(1 / 60, deltaTime, 3); // 01

  for (const obj of objects) {
    obj.sphere.position.copy(obj.body.position);
  }

  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};

tick();

/* step() 
  step(
    1. a fixed time stamp,  // 1/60 - run at 60 frame per second

    2. how much time passed since the last step,  // deltaTime

    3. how much iterations the world can apply to catch up with a 
    potential delay,  // 3 - three steps
     )
*/

/* Test
///============ Sphere
const sphereShape = new Cannon.Sphere(0.5);
const sphereBody = new Cannon.Body({
  mass: 1,
  position: new Cannon.Vec3(0, 4, 0),
  shape: sphereShape,
  /// material: defaultMaterial,
});

sphereBody.applyLocalForce(
  new Cannon.Vec3(100, 0, 0), // force
  new Cannon.Vec3(0, 0, 0) // localPoint - center of the ball
);

world.addBody(sphereBody);


/// Test sphere 
const sphere = new THREE.Mesh(
  new THREE.SphereGeometry(0.5, 32, 32),
  new THREE.MeshStandardMaterial({
    metalness: 0.3,
    roughness: 0.4,
    envMap: environmentMapTexture,
    envMapIntensity: 0.5,
  })
);
sphere.castShadow = true;
sphere.position.y = 0.5;
scene.add(sphere);


  ///===== Update Physics World        03- force          worldPoint
  sphereBody.applyForce(new Cannon.Vec3(-0.2, 0, 0), sphereBody.position);

  
  /// Update positions based-on physics world - 02
  sphere.position.copy(sphereBody.position);
*/
