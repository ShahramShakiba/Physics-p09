import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import GUI from 'lil-gui';
import * as THREE from 'three';
import CANNON from 'cannon';

const canvas = document.querySelector('canvas.webgl');
const scene = new THREE.Scene();
const gui = new GUI();

let width = window.innerWidth;
let height = window.innerHeight;

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

//================ Physics =======================
const world = new CANNON.World();
world.gravity.set(0, -9.82, 0);

//============ Sphere
const sphereShape = new CANNON.Sphere(0.5);
const sphereBody = new CANNON.Body({
  mass: 1,
  position: new CANNON.Vec3(0, 3, 0),
  shape: sphereShape,
});

world.addBody(sphereBody);

/* Test sphere */
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

//=================== Animate ========================
const clock = new THREE.Clock();
let prevTime = 0;

const tick = () => {
  const elapsedTime = clock.getElapsedTime();
  const deltaTime = elapsedTime - prevTime;
  prevTime = elapsedTime;

  //===== Update Physics World
  world.step(1 / 60, deltaTime, 3);

  sphere.position.x = sphereBody.position.x;
  sphere.position.y = sphereBody.position.y;
  sphere.position.z = sphereBody.position.z;

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
