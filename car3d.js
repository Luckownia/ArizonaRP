  let scene;
            const container3d = document.querySelector(".car-3d");

            function init() {
                scene = new THREE.Scene();


                camera = new THREE.PerspectiveCamera(70, container3d.offsetWidth / container3d.offsetHeight, 1, 5000);

                camera.rotation.y = 45 / 180 * Math.PI;

                camera.position.x = 5;
                camera.position.y = 11;
                camera.position.z = 7;
                hlight = new THREE.AmbientLight(0x404040, 10);
                scene.add(hlight);

                directionalLight = new THREE.DirectionalLight(0xffffff, 2);
                directionalLight.position.set(0, 1, 0);
                directionalLight.castShadow = true;
                scene.add(directionalLight);

                light = new THREE.PointLight(0xc4c4c4, 3);
                light.position.set(0, 3, 10);
                scene.add(light);

                light2 = new THREE.PointLight(0xc4c4c4, 3);
                light2.position.set(10, 1, 0);
                scene.add(light2);

                light3 = new THREE.PointLight(0xc4c4c4, 3);
                light3.position.set(0, 1, -10);
                scene.add(light3);

                light4 = new THREE.PointLight(0xc4c4c4, 3);
                light4.position.set(-10, 3, 0);
                scene.add(light4);

                renderer = new THREE.WebGLRenderer({
                    alpha: true
                });
                renderer.setSize(container3d.offsetWidth, container3d.offsetHeight);
                document.body.appendChild(container3d);
                container3d.appendChild(renderer.domElement);

                let loader = new THREE.GLTFLoader();

                loader.load('scene.gltf', function (gltf) {
                    car = gltf.scene.children[0];
                    car.scale.set(2.6, 2.6, 2.6);
                    gltf.scene.position.set(0, 10, 0);
                    car.rotation.z = 0.3;
                    scene.add(gltf.scene);
                    animate();
                });
            }





            function animate() {
                requestAnimationFrame(animate);
                renderer.render(scene, camera);
                container3d.addEventListener("mousemove", (e) => {
                    let x = -(window.innerWidth - 2 * e.clientX) / 700;
                    car.rotation.z = x;
                })
                /* container3d.addEventListener("mouseleave", () => {
                     car.rotation.z = 0.3;
                     /* smooth transition*/
                /* })*/

            }
            init();