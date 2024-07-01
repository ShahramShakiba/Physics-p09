# <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Objects/Laptop.webp" alt="Laptop" width="35" /> &nbsp; _Physics_ &nbsp; <img src="https://skillicons.dev/icons?i=threejs" height="35" alt="threejs logo"  />  

<!----------------------------------------- Description ---------------------------------------->
### <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Symbols/Bubbles.png" alt="Bubbles" width="40" height="40" />&nbsp; _Description_

> To begin with, it is important to note that, this project have been sourced from an exceptional `Three.js Journey` Course. <br/>
 
### 👤 Instructed by a _proficient_ and _expert educator_ <a href="https://threejs-journey.com/" target="_blank"> _"Bruno Simon"_ </a>. 

 <br/>

### Introduction to Physics 
In the context of Three.js, physics refers to the simulation of realistic physical interactions within a 3D environment.  <br/> This includes simulating gravity, collisions, forces, and other physical phenomena to create a more immersive and dynamic experience for users interacting with the 3D scene. <br/> <br/>

### Why Use Physics ?
One of the primary reasons why physics is used in Three.js is to enhance the realism and interactivity of 3D applications or games. <br/> By incorporating physics simulations, developers can create more engaging experiences where objects behave in a lifelike manner, responding to user input and environmental conditions.<br/><br/>

### Benefits of Using Physics : 
1. _` Realism and Immersion `_ <br/>
Adding physics to your Three.js scenes enhances realism. Objects can move, collide, and react to forces like gravity just as they would in the real world. <br/> This makes your 3D scenes more immersive and engaging for users.

2. _` Interactive Simulations `_ <br/>
Physics enables the creation of interactive simulations where users can interact with objects in the scene. <br/> For example, you can create games, educational tools, or interactive product demonstrations where users can manipulate objects and see realistic responses. <br/> You can simulate gravity, friction, and other forces, allowing objects to fall, roll, or slide naturally. 

3. _` Enhanced Animation `_ <br/>
Physics can simplify the creation of complex animations. Instead of manually calculating the movement and interaction of objects, a physics engine can handle these calculations, allowing for more natural and fluid animations.

4. _` Dynamic Environments `_ <br/>
With physics, you can create dynamic environments where objects react to each other and to user interactions. <br/> This can add a layer of unpredictability and excitement to your scenes, making them more engaging. <br/><br/>


### Libraries 
There are many ways of adding physics to your project, and it depends on what you want to achieve. <br/> You can create your own physics with some mathematics and solutions like Raycaster, but if you wish to get realistic physics with tension, friction, bouncing, constraints, pivots, etc. and all that in 3D space, you better use a library. <br/><br/>
There are multiple available libraries. First, you must decide if you need a 3D library or a 2D library. While you might think it has to be a 3D library because Three.js is all about 3D, you might be wrong. 2D libraries are usually much more performant, and if you can sum up your experience physics up to 2D collisions, you better use a 2D library. <br/><br/>

#### For 3D physics, there are three main libraries:
1. Ammo.js
   - Website: http://schteppe.github.io/ammo.js-demos/
   - Git repository: https://github.com/kripken/ammo.js/
   - Documentation: No documentation
   - Direct JavaScript port of Bullet (a physics engine written in C++)
   - A little heavy
   - Still updated by a community

2. Cannon.js
   - Website: https://lo-th.github.io/Oimo.js/
   - Git repository: https://github.com/lo-th/Oimo.js
   - Documentation: http://lo-th.github.io/Oimo.js/docs.html
   - Lighter than Ammo.js
   - Easier to implement than Ammo.js
   - Mostly maintained by one developer
   - Hasn't been updated for 2 years 

3. Rapier
   - Website: https://rapier.rs/
   - Git repository: https://github.com/dimforge/rapier
   - Documentation: https://rapier.rs/javascript3d/index.html
   - Very similar to Cannon.js
   - Good performance
   - Currently maintained

<br/><br/>

#### 2D Physics
For 2D physics, there are many libraries, but here's the most popular: <br/>
1. Matter.js
   - Website: https://brm.io/matter-js/
   - Git repository: https://github.com/liabru/matter-js
   - Documentation: https://brm.io/matter-js/docs/
   - Mostly maintained by one developer
   - Still kind of updated

2. P2.js
   - Website: https://schteppe.github.io/p2.js/
   - Git repository: https://github.com/schteppe/p2.js
   - Documentation: http://schteppe.github.io/p2.js/docs/
   - Mostly maintained by one developer (Same as Cannon.js)
   - Hasn't been update for 2 years

3. Planck.js
   - Website: https://piqnt.com/planck.js/
   - Git repository: https://github.com/shakiba/planck.js
   - Documentation: https://github.com/shakiba/planck.js/tree/master/docs
   - Mostly maintained by one developer
   - Still updated nowadays
  
4. Box2D.js
   - Website: http://kripken.github.io/box2d.js/demo/webgl/box2d.html
   - Git repository: https://github.com/kripken/box2d.js/
   - Documentation: No documentation
   - Mostly maintained by one developer (same as Ammo.js)
   - Still updated nowadays

5. Rapier
   - Website: https://rapier.rs/
   - Git repository: https://github.com/dimforge/rapier
   - Documentation: https://rapier.rs/javascript2d/index.html
   - Same library as for 3D

     
<br/><br/>

<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Eyes.png" alt="Eyes" width="25" height="25" /> Feel free to delve into the code as it has been written in a straightforward manner for easy understanding.
<br/> <br/> 

> [!IMPORTANT]
>> ### It is crucial to understand the ....:
>> - ...


<br/><br/>

> _Which Concepts Have I Covered_: <br/>

01. _<h4>Install Cannon.js a 3D Physics library: `  npm install --save cannon  ` </h4>_
02. _<h4>Creating World, Shape and Body in Physics world and Updating Threejs world according to the Physics world</h4>_
03. _<h4>Create a static Floor using quaternion.setFromAxisAngle(new CANNON.Vec3(-1, 0, 0), Math.PI / 2)</h4>_
04. _<h4>Make the Ball bounce using Contact Material (combination of the two Materials and contains properties for when objects collide)</h4>_
05. _<h4>Apply Forces using applyForce and applyLocalForce</h4>_
06. _<h4>Handle Multiple Objects by creating a Function</h4>_
07. _<h4>Add Boxes to the Scene</h4>_
08. _<h4>Performance - Broadphase to get better performances | SAPBroadphase(Sweep And Prune)-tests bodies on arbitrary axes during multiple steps. Also for get better performances add "Sleep" property</h4>_
09. _<h4>Listen to the Events on Body like "collide", "sleep" - Play a hit sound when elements collide</h4>_
10. _<h4>Remove Things from 3D Environment and Physics world</h4>_
10. _<h4>...</h4>_

<br/><br/>

<!-------- try it live -------->
#### _Give it a go in real-time and give me a Star_ &nbsp; <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Glowing%20Star.png" alt="Glowing Star" width="25"  /> <a href="https://shahram-shakiba.vercel.app/" target="_blank"> &nbsp; _Physics_ </a> 

<br/>

<!--------- Video --------->
<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Objects/Clapper%20Board.webp" alt="Clapper Board" width="35" /> &nbsp; 



  <br/> 

***

<!--======================= Social Media ===========================-->
 ## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People%20with%20professions/Man%20Detective%20Light%20Skin%20Tone.png" alt="Man Detective Light Skin Tone" width="65" /> Find me around the Web  
<a href="https://www.linkedin.com/in/shahramshakiba/" target="_blank">
    <img src="https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/linkedin/default.svg" width="52" height="40" alt="linkedin logo"  />
  </a> &nbsp;&nbsp;&nbsp;
  <a href="https://t.me/ShahramShakibaa" target="_blank">
    <img src="https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/telegram/default.svg" width="52" height="40" alt="telegram logo"  />
  </a> &nbsp;&nbsp;&nbsp;
  <a href="https://wa.me/message/LM2IMM3ABZ7ZM1" target="_blank">
    <img src="https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/whatsapp/default.svg" width="52" height="40" alt="whatsapp logo"  />
  </a> &nbsp;&nbsp;&nbsp;
  <a href="https://instagram.com/shahram.shakibaa?igshid=MzNlNGNkZWQ4Mg==" target="_blank">
    <img src="https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/instagram/default.svg" width="52" height="40" alt="instagram logo"  />
  </a> &nbsp;&nbsp;&nbsp;
  <a href="https://twitter.com/ShahramShakibaa" target="_blank">
    <img src="https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/twitter/default.svg" width="52" height="40" alt="twitter logo"  />
  </a>
