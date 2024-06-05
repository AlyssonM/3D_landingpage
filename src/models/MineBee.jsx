
import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import {a} from '@react-spring/three'
import { useFrame, useThree } from "@react-three/fiber";
import MineBeeScene from "../assets/3d/minecraft_bee.glb";
import * as THREE from 'three';

export function MineBee({position, rotation, scale, setInfo, setPositionLeft, setTransformValue, Hive, setHive, ...props}) {
    const MineBeeRef = useRef();
  const { scene, gl, viewport } = useThree();
  const { nodes, materials, animations } = useGLTF(MineBeeScene)
  const { actions } = useAnimations(animations, MineBeeRef)

  const animatetime = useRef(0);
  const direction = useRef(0);
  const isAnimating = useRef(false);
  const stage = useRef(0);
  let t = 0;

  const points = [
    new THREE.Vector3(-0.05, 0, 4.79),
    new THREE.Vector3(0, 0, 4.71),
    new THREE.Vector3(-0.2, 0.021, 4.72),
    new THREE.Vector3(-0.19, 0.020, 4.77)
  ];

  const points2 = [
    new THREE.Vector3(-0.19, 0.020, 4.77),
    new THREE.Vector3(-0.05, 0, 4.8),
    new THREE.Vector3(0.01, 0, 4.74),
    new THREE.Vector3(0.06, 0, 4.79)
  ];
  const points3 = [
    new THREE.Vector3(0.06, 0, 4.79),
    new THREE.Vector3(0.1, 0, 4.86),
    new THREE.Vector3(0.3, 0, 4.88),
    new THREE.Vector3(0.46, 0, 4.79)
  ];
  const points4 = [
    new THREE.Vector3(0.46, 0, 4.79),
    new THREE.Vector3(0.5, 0, 4.9),
    new THREE.Vector3(0.711, 0.01, 4.79)
  ];

  const points5 = [
    new THREE.Vector3(0.711, 0.01, 4.79),
    new THREE.Vector3(0.65, 0, 4.84),
    new THREE.Vector3(0.30, -0.1, 4.86),
    new THREE.Vector3(0.13, -0.22, 4.88),
    new THREE.Vector3(-0.55, -0.34, 4.8),
    new THREE.Vector3(-0.65, -0.31, 4.77)
  ];

  const points6 = [
    new THREE.Vector3(-0.65, -0.31, 4.77),
    new THREE.Vector3(-0.47, -0.35, 4.87),
    new THREE.Vector3(-0.45, -0.16, 4.9),
    new THREE.Vector3(-0.49, -0.01, 4.82),
    new THREE.Vector3(-0.47, 0, 4.77)
  ];

const curve = new THREE.CatmullRomCurve3(points);
const curve2 = new THREE.CatmullRomCurve3(points2);
const curve3 = new THREE.CatmullRomCurve3(points3);
const curve4 = new THREE.CatmullRomCurve3(points4);
const curve5 = new THREE.CatmullRomCurve3(points5);
const curve6 = new THREE.CatmullRomCurve3(points6);
//const geometry1 = new THREE.BufferGeometry().setFromPoints(curve6.getPoints(50));
//const material = new THREE.LineBasicMaterial({ color: 0xff0000 });
//const curveObject1 = new THREE.Line(geometry1, material);

  useEffect(() =>{
    actions["Take 001"].play()
    //scene.add(curveObject1);

    const handleWheel = (event) => {
      if(Math.abs(event.deltaY) > 0){
        setInfo({ show: false, content: null });
        if(Hive == false)
          isAnimating.current = Math.abs(event.deltaY) > 0? true:false;
        if(stage.current == 6 && MineBeeRef.current.position.distanceTo(points6[4]) <= 0.00001){
          setHive(true)
          setInfo({ show: false, content: null });
          isAnimating.current = false;
        }
      }        
      direction.current = event.deltaY > 0 ? 1 : -1;  
    };

    const handleKeyDown = (event) => {
      if(event.key === 'ArrowDown'){
        if(Hive == false)
          isAnimating.current = true;
        direction.current = 1;
        setInfo({ show: false, content: null });
        if(stage.current == 6 && MineBeeRef.current.position.distanceTo(points6[4]) <= 0.00001){
          setHive(true)
          setInfo({ show: false, content: null });
          isAnimating.current = false;
        }
      }
      else if(event.key === 'ArrowUp'){
        if(Hive == false)
          isAnimating.current = true;
        direction.current = -1;
        setInfo({ show: false, content: null });
      }
    };

    const handleTouchStart = (event) => {
      event.preventDefault(); 
      const touch = event.touches[0];
      startYRef.current = touch.clientY; 
    };
    
    const handleTouchMove = (event) => {
      event.preventDefault(); 
      const touch = event.touches[0];
      const touchY = touch.clientY;
      const difference = startYRef.current - touchY;
      if(Math.abs(difference) > 0){
        setInfo({ show: false, content: null });
        if(Hive == false)
          isAnimating.current = true;
        if(stage.current == 6 && MineBeeRef.current.position.distanceTo(points6[4]) <= 0.00001){
          setHive(true)
          setInfo({ show: false, content: null });
          isAnimating.current = false;
        }
      }
      else{
        isAnimating.current = false;
      }
      direction.current = difference < 0 ? 1 : -1;
      startYRef.current = touchY;
    };

    const canvas = gl.domElement;
    canvas.addEventListener("wheel", handleWheel);
    canvas.addEventListener('touchstart', handleTouchStart, { passive: false });
    canvas.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      //scene.remove(curveObject1);
      //curveObject1.geometry.dispose();
      //curveObject1.material.dispose();
      canvas.removeEventListener("wheel", handleWheel);
      canvas.removeEventListener('touchstart', handleTouchStart);
      canvas.removeEventListener('touchmove', handleTouchStart);
      window.removeEventListener('keydown', handleKeyDown);
    };

}, []);

useFrame(({ clock, camera }) => {
  const delta = (1.3/100) * direction.current;

        if(stage.current == 0){
            t = Math.max(0, Math.min(1, t+0.01)); 
            const cam1 = new THREE.Vector3(0, 0, 4.9);
            const cam2 = new THREE.Vector3(0, -0.03, 5.05);
            camera.position.lerpVectors(cam1, cam2, t);
            if(t >= 1){ 
                animatetime.current = 0; 
                stage.current = 1;  
                setInfo({ show: true, index: 0, content: 'Informações sobre o Estágio 1' });
                setPositionLeft('70%');
                setTransformValue('-50%');
            }
        }

        if(Hive){
          MineBeeRef.current.position.z += 0.0011;  
        }
        if(isAnimating.current && Hive == false){
          switch(stage.current){   
            case 1:
                animatetime.current = Math.max(0, Math.min(1, animatetime.current+delta)); 
                const position1 = new THREE.Vector3(0, -0.03, 5.05);
                const position2 = new THREE.Vector3(-0.1, 0.0, 4.9);
                const startQuaternion = new THREE.Quaternion().setFromEuler(new THREE.Euler(0, 0, 0));
                const endQuaternion = new THREE.Quaternion().setFromEuler(new THREE.Euler(0, 20*Math.PI / 180, 0));
                camera.quaternion.slerpQuaternions(startQuaternion, endQuaternion, animatetime.current);
                camera.position.lerpVectors(position1, position2, animatetime.current);
                const pos = curve.getPointAt(animatetime.current);
                MineBeeRef.current.position.x = pos.x;
                MineBeeRef.current.position.y = pos.y;
                MineBeeRef.current.position.z = pos.z;  
                const tangent = curve.getTangentAt(animatetime.current);
                if(MineBeeRef.current.position.distanceTo(points[3]) > 0.01){
                  MineBeeRef.current.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), tangent.normalize());
                }   
            break;
            case 2:
              animatetime.current = Math.max(0, Math.min(1, animatetime.current+delta)); 
              const position3 = new THREE.Vector3(-0.1, 0.0, 4.9);
              const position4 = new THREE.Vector3(0.10, 0.0, 5);
              const startQuaternion2 = new THREE.Quaternion().setFromEuler(new THREE.Euler(0, 20*Math.PI / 180, 0)); // Rotação inicial
              const endQuaternion2 = new THREE.Quaternion().setFromEuler(new THREE.Euler(0, 0*Math.PI / 180, 0));   // Rotação final
              camera.position.lerpVectors(position3, position4, animatetime.current);
              camera.quaternion.slerpQuaternions(startQuaternion2, endQuaternion2, animatetime.current);
              const pos2 = curve2.getPointAt(animatetime.current);
              MineBeeRef.current.position.x = pos2.x;
              MineBeeRef.current.position.y = pos2.y;
              MineBeeRef.current.position.z = pos2.z;
              const tangent2 = curve2.getTangentAt(animatetime.current);
              if(MineBeeRef.current.position.distanceTo(points2[2]) > 0.01){
                MineBeeRef.current.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), tangent2.normalize());
              } 
            break;

            case 3:
              animatetime.current = Math.max(0, Math.min(1, animatetime.current+delta)); 
                const position5 = new THREE.Vector3(0.10, 0.0, 5);
                const position6 = new THREE.Vector3(0.5, 0, 4.95);
                const startQuaternion3 = new THREE.Quaternion().setFromEuler(new THREE.Euler(0, 0*Math.PI / 180, 0)); // Rotação inicial
                const endQuaternion4 = new THREE.Quaternion().setFromEuler(new THREE.Euler(0, 0*Math.PI / 180, 0));   // Rotação final
                camera.position.lerpVectors(position5, position6, animatetime.current);
                camera.quaternion.slerpQuaternions(startQuaternion3, endQuaternion4, animatetime.current);
                const pos3 = curve3.getPointAt(animatetime.current);
                MineBeeRef.current.position.x = pos3.x;
                MineBeeRef.current.position.y = pos3.y;
                MineBeeRef.current.position.z = pos3.z;
                const tangent3 = curve3.getTangentAt(animatetime.current);
                if(MineBeeRef.current.position.distanceTo(points3[3]) > 0.001){
                  MineBeeRef.current.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), tangent3.normalize());
                }  
                break;

            case 4:
                animatetime.current = Math.max(0, Math.min(1, animatetime.current+delta)); 
                const position7 = new THREE.Vector3(0.5, 0, 4.95);
                const position8 = new THREE.Vector3(0.7, 0, 4.99);
                const startQuaternion5 = new THREE.Quaternion().setFromEuler(new THREE.Euler(0, 0*Math.PI / 180, 0)); // Rotação inicial
                const endQuaternion6 = new THREE.Quaternion().setFromEuler(new THREE.Euler(0, 0*Math.PI / 180, 0));   // Rotação final
                camera.position.lerpVectors(position7, position8, animatetime.current);
                camera.quaternion.slerpQuaternions(startQuaternion5, endQuaternion6, animatetime.current);
                const pos4 = curve4.getPointAt(animatetime.current);
                MineBeeRef.current.position.x = pos4.x;
                MineBeeRef.current.position.y = pos4.y;
                MineBeeRef.current.position.z = pos4.z;
                const tangent4 = curve4.getTangentAt(animatetime.current);
                if(MineBeeRef.current.position.distanceTo(points4[2]) > 0.001){
                  MineBeeRef.current.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), tangent4.normalize());
                }  
                break;

            case 5:
              animatetime.current = Math.max(0, Math.min(1, animatetime.current+delta)); 
              const position9 = new THREE.Vector3(0.7, 0, 4.99);
              const position10 = new THREE.Vector3(-0.61, -0.31, 5.05);
              const startQuaternion7 = new THREE.Quaternion().setFromEuler(new THREE.Euler(0, 0*Math.PI / 180, 0)); // Rotação inicial
              const endQuaternion8 = new THREE.Quaternion().setFromEuler(new THREE.Euler(0, 0*Math.PI / 180, 0));   // Rotação final
              camera.position.lerpVectors(position9, position10, animatetime.current);
              camera.quaternion.slerpQuaternions(startQuaternion7, endQuaternion8, animatetime.current);
              const pos5 = curve5.getPointAt(animatetime.current);
              MineBeeRef.current.position.x = pos5.x;
              MineBeeRef.current.position.y = pos5.y;
              MineBeeRef.current.position.z = pos5.z;
              const tangent5 = curve4.getTangentAt(animatetime.current);
              if(MineBeeRef.current.position.distanceTo(points5[5]) > 0.0001){
                if(direction.current > 0)
                  MineBeeRef.current.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, -1), tangent5.normalize());
                else 
                  MineBeeRef.current.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), tangent5.normalize());
              }  
              break;

            case 6:
              animatetime.current = Math.max(0, Math.min(1, animatetime.current+delta)); 
              const position11 = new THREE.Vector3(-0.61, -0.31, 5.05);
              const position12 = new THREE.Vector3(-0.54, 0, 5.01);
              const startQuaternion9 = new THREE.Quaternion().setFromEuler(new THREE.Euler(0, 0*Math.PI / 180, 0)); // Rotação inicial
              const endQuaternion10 = new THREE.Quaternion().setFromEuler(new THREE.Euler(0, 0*Math.PI / 180, 0));   // Rotação final
              camera.position.lerpVectors(position11, position12, animatetime.current);
              camera.quaternion.slerpQuaternions(startQuaternion9, endQuaternion10, animatetime.current);
              const pos6 = curve6.getPointAt(animatetime.current);
              MineBeeRef.current.position.x = pos6.x;
              MineBeeRef.current.position.y = pos6.y;
              MineBeeRef.current.position.z = pos6.z;
              const tangent6 = curve5.getTangentAt(animatetime.current);
              if(MineBeeRef.current.position.distanceTo(points6[4]) > 0.0001){
                if(direction.current > 0)
                  MineBeeRef.current.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, -1), tangent6.normalize());
                else 
                  MineBeeRef.current.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), tangent6.normalize());
              }  
              break;
          }
          if(stage.current == 1 && MineBeeRef.current.position.distanceTo(points[3]) <= 0.0001){
            isAnimating.current = false;  
            if(direction.current > 0){
                  MineBeeRef.current.rotation.x = 0*Math.PI/180;
                  MineBeeRef.current.rotation.y = 0*Math.PI/180;
                  MineBeeRef.current.rotation.z = 0*Math.PI/180;
                  stage.current = 2;
                
                  setInfo({ show: true, index: 1, content: 'Informações sobre o Estágio 1' });
                  setPositionLeft('70%');
                  setTransformValue('-50%');
                  animatetime.current = 0;
              }
              
          }
          else if(stage.current == 2 && MineBeeRef.current.position.distanceTo(points[3]) <= 0.000001){
            isAnimating.current = false;  
            if(direction.current < 0){
              MineBeeRef.current.rotation.x = 0*Math.PI/180;
              MineBeeRef.current.rotation.y = 0*Math.PI/180;
              MineBeeRef.current.rotation.z = 0*Math.PI/180;
              stage.current = 1;
              
              setInfo({ show: true, index: 1, content: 'Informações sobre o Estágio 1' });
              setPositionLeft('70%');
              setTransformValue('-50%');
              animatetime.current = 1;
            }
              
          }
          else if(stage.current == 2 && MineBeeRef.current.position.distanceTo(points2[3]) <= 0.000001){        
            MineBeeRef.current.rotation.x = 0*Math.PI/180;
            //MineBeeRef.current.rotation.y = 20*Math.PI/180;
            MineBeeRef.current.rotation.z = 0*Math.PI/180;
            if(direction.current < 0){
              stage.current = 2;
              animatetime.current = 1;
            }
            else{
              stage.current = 3;
              animatetime.current = 0;
            }
          
            setInfo({ show: true, index: 2, content: 'Informações sobre o Estágio 2' });
            setPositionLeft('66%');
            setTransformValue('-30%');
            isAnimating.current = false;
              
          }
          else if(stage.current == 3 && MineBeeRef.current.position.distanceTo(points2[3]) <= 0.000001){ 
            isAnimating.current = false;
            MineBeeRef.current.rotation.x = 0*Math.PI/180;
            //MineBeeRef.current.rotation.y = 20*Math.PI/180;
            MineBeeRef.current.rotation.z = 0*Math.PI/180;
            if(direction.current < 0){
              stage.current = 2;
              animatetime.current = 1;
            }
            else{
              stage.current = 4;
              animatetime.current = 0;
            }
          
            setInfo({ show: true, index: 2, content: 'Informações sobre o Estágio 2' });
            setPositionLeft('66%');
            setTransformValue('-30%');
          }
          else if(stage.current == 3 && MineBeeRef.current.position.distanceTo(points3[3]) <= 0.001){ 
            isAnimating.current = false;
            MineBeeRef.current.rotation.x = 0*Math.PI/180;
            //MineBeeRef.current.rotation.y = 20*Math.PI/180;
            MineBeeRef.current.rotation.z = 0*Math.PI/180;
            if(direction.current < 0){
              stage.current = 3;
              animatetime.current = 1;
            }
            else{
              stage.current = 4;
              animatetime.current = 0;
            }
            
            setInfo({ show: true, index: 3, content: 'Informações sobre o Estágio 3' });
            setPositionLeft('66%');
            setTransformValue('-45%');   
          }
          else if(stage.current == 4 && MineBeeRef.current.position.distanceTo(points3[3]) <= 0.001){ 
            isAnimating.current = false;
            MineBeeRef.current.rotation.x = 0*Math.PI/180;
            //MineBeeRef.current.rotation.y = 20*Math.PI/180;
            MineBeeRef.current.rotation.z = 0*Math.PI/180;
            if(direction.current < 0){
              stage.current = 3;
              animatetime.current = 1;
            }
            else{
              stage.current = 4;
              animatetime.current = 1;
            }
            
            setInfo({ show: true, index: 3, content: 'Informações sobre o Estágio 4' });
            setPositionLeft('66%');
            setTransformValue('-45%'); 
            
          }
          else if(stage.current == 4 && MineBeeRef.current.position.distanceTo(points4[2]) <= 0.001){ 
            isAnimating.current = false;
            MineBeeRef.current.rotation.x = 0*Math.PI/180;
            MineBeeRef.current.rotation.y = 0*Math.PI/180;
            MineBeeRef.current.rotation.z = 0*Math.PI/180;
            if(direction.current < 0){
              stage.current = 3;
              animatetime.current = 1;
            }
            else{
              stage.current = 5;
              animatetime.current = 0;
            }
        
            setInfo({ show: true, index: 4, content: 'Informações sobre o Estágio 4' });
            setPositionLeft('65%');
            setTransformValue('-40%'); 
            
          }
          else if(stage.current == 5 && MineBeeRef.current.position.distanceTo(points5[5]) <= 0.00001){ 
            isAnimating.current = false;
            MineBeeRef.current.rotation.x = 5*Math.PI/180;
            MineBeeRef.current.rotation.y = 0*Math.PI/180;
            MineBeeRef.current.rotation.z = 0*Math.PI/180;
            if(direction.current < 0){
              stage.current = 5;
              animatetime.current = 1;
            }
            else{
              stage.current = 6;
              animatetime.current = 0;
            }
        
            setInfo({ show: true, index: 5, content: 'Informações sobre o Estágio 5' });
            setPositionLeft('65%');
            setTransformValue('-45%');
            
          }
          else if(stage.current == 5 && MineBeeRef.current.position.distanceTo(points5[0]) <= 0.00001){ 
            isAnimating.current = false;
            MineBeeRef.current.rotation.x = 0*Math.PI/180;
            MineBeeRef.current.rotation.y = 0*Math.PI/180;
            MineBeeRef.current.rotation.z = 0*Math.PI/180;
            if(direction.current < 0){
              stage.current = 4;
              animatetime.current = 1;
            }
            else{
              stage.current = 5;
              animatetime.current = 0;
            }
          
            setInfo({ show: true, index: 4, content: 'Informações sobre o Estágio 4' });
            setPositionLeft('65%');
            setTransformValue('-40%');
            
          }

          else if(stage.current == 6 && MineBeeRef.current.position.distanceTo(points6[0]) <= 0.00001){ 
            isAnimating.current = false;
            MineBeeRef.current.rotation.x = 0*Math.PI/180;
            MineBeeRef.current.rotation.y = 0*Math.PI/180;
            MineBeeRef.current.rotation.z = 0*Math.PI/180;
            if(direction.current < 0){
              stage.current = 5;
              animatetime.current = 1;
            }
            else{
              stage.current = 6;
              animatetime.current = 0;
            }
          
            setInfo({ show: true, index: 5, content: 'Informações sobre o Estágio 5' });
            
          }
          else if(stage.current == 6 && MineBeeRef.current.position.distanceTo(points6[4]) <= 0.00001){ 
            isAnimating.current = false;
            MineBeeRef.current.rotation.x = 0*Math.PI/180;
            MineBeeRef.current.rotation.y = 0*Math.PI/180;
            MineBeeRef.current.rotation.z = 0*Math.PI/180;
            if(direction.current < 0){
              stage.current = 6;
              animatetime.current = 1;
            }
            else{
              stage.current = 6;
              animatetime.current = 1;
            }
          
            setInfo({ show: true, index: 6, content: 'Informações sobre o Estágio 6' });
            
          }
          else{
            setHive(false);
          }
          
        }

});

  return (
    <a.group ref={MineBeeRef} position={position} rotation={rotation} scale={scale}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, -Math.PI]}>
          <group name="Beefbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="CTRL_Bee" rotation={[-0.188, 0, 0]}>
                  <group name="polySurface19" position={[3, -3, 4]}>
                    <mesh
                      name="polySurface19_Bee_Texture_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.polySurface19_Bee_Texture_0.geometry}
                      material={materials.Bee_Texture}
                    />
                    <group
                      name="CTRL_Antennae"
                      position={[-3.049, 4.977, -8.478]}
                      rotation={[1.582, 0, -Math.PI / 2]}>
                      <group
                        name="pPlane3"
                        position={[0.522, 1.537, -0.019]}
                        rotation={[Math.PI, -Math.PI / 2, 0]}>
                        <mesh
                          name="pPlane3_Bee_Texture_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pPlane3_Bee_Texture_0.geometry}
                          material={materials.Bee_Texture}
                        />
                        <group
                          name="pPlane8"
                          position={[-4.996, -1.512, 9.001]}
                          rotation={[0, 0, -Math.PI / 2]}>
                          <mesh
                            name="pPlane8_Bee_Texture_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.pPlane8_Bee_Texture_0.geometry}
                            material={materials.Bee_Texture}
                          />
                        </group>
                      </group>
                      <group
                        name="pPlane2"
                        position={[0.522, -1.454, -0.019]}
                        rotation={[Math.PI, -Math.PI / 2, 0]}>
                        <mesh
                          name="pPlane2_Bee_Texture_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pPlane2_Bee_Texture_0.geometry}
                          material={materials.Bee_Texture}
                        />
                        <group
                          name="pPlane9"
                          position={[-4.996, -4.502, 9.001]}
                          rotation={[0, 0, -Math.PI / 2]}>
                          <mesh
                            name="pPlane9_Bee_Texture_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.pPlane9_Bee_Texture_0.geometry}
                            material={materials.Bee_Texture}
                          />
                        </group>
                      </group>
                    </group>
                    <group
                      name="nurbsCircle4"
                      position={[-2.956, -0.499, -6.54]}
                      rotation={[-0.436, 0, Math.PI / 2]}>
                      <group name="CTRL_LegFrontRight" position={[-0.014, -0.965, 0]}>
                        <group
                          name="pPlane14"
                          position={[9.628, -5.987, -4.477]}
                          rotation={[0, Math.PI / 2, 0]}>
                          <mesh
                            name="pPlane14_Bee_Texture_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.pPlane14_Bee_Texture_0.geometry}
                            material={materials.Bee_Texture}
                          />
                        </group>
                      </group>
                      <group name="CTRL_LegFrontLeft" position={[-0.014, 0.986, 0]}>
                        <group
                          name="pPlane15"
                          position={[9.628, -5.961, -4.477]}
                          rotation={[0, Math.PI / 2, 0]}>
                          <mesh
                            name="pPlane15_Bee_Texture_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.pPlane15_Bee_Texture_0.geometry}
                            material={materials.Bee_Texture}
                          />
                        </group>
                      </group>
                    </group>
                    <group
                      name="CTRL_WingLEFT"
                      position={[-4.496, 6.545, -4.501]}
                      rotation={[Math.PI / 2, 0, 0]}>
                      <group
                        name="WingL"
                        position={[4.496, 4.501, 6.559]}
                        rotation={[-Math.PI / 2, 0, 0]}>
                        <group name="group1">
                          <group name="polySurface21" position={[2.439, 0, 0]}>
                            <mesh
                              name="polySurface21_Bee_Texture_0"
                              castShadow
                              receiveShadow
                              geometry={nodes.polySurface21_Bee_Texture_0.geometry}
                              material={materials.Bee_Texture}
                            />
                          </group>
                          <group name="polySurface5">
                            <mesh
                              name="polySurface5_Bee_Texture_0"
                              castShadow
                              receiveShadow
                              geometry={nodes.polySurface5_Bee_Texture_0.geometry}
                              material={materials.Bee_Texture}
                            />
                          </group>
                          <group name="polySurface6">
                            <mesh
                              name="polySurface6_Bee_Texture_0"
                              castShadow
                              receiveShadow
                              geometry={nodes.polySurface6_Bee_Texture_0.geometry}
                              material={materials.Bee_Texture}
                            />
                          </group>
                          <group name="polySurface1">
                            <mesh
                              name="polySurface1_Bee_Texture_0"
                              castShadow
                              receiveShadow
                              geometry={nodes.polySurface1_Bee_Texture_0.geometry}
                              material={materials.Bee_Texture}
                            />
                          </group>
                          <group name="polySurface2">
                            <mesh
                              name="polySurface2_Bee_Texture_0"
                              castShadow
                              receiveShadow
                              geometry={nodes.polySurface2_Bee_Texture_0.geometry}
                              material={materials.Bee_Texture}
                            />
                          </group>
                          <group name="polySurface4">
                            <mesh
                              name="polySurface4_Bee_Texture_0"
                              castShadow
                              receiveShadow
                              geometry={nodes.polySurface4_Bee_Texture_0.geometry}
                              material={materials.Bee_Texture}
                            />
                          </group>
                          <group name="polySurface7">
                            <mesh
                              name="polySurface7_Bee_Texture_0"
                              castShadow
                              receiveShadow
                              geometry={nodes.polySurface7_Bee_Texture_0.geometry}
                              material={materials.Bee_Texture}
                            />
                          </group>
                          <group name="polySurface8">
                            <mesh
                              name="polySurface8_Bee_Texture_0"
                              castShadow
                              receiveShadow
                              geometry={nodes.polySurface8_Bee_Texture_0.geometry}
                              material={materials.Bee_Texture}
                            />
                          </group>
                          <group name="polySurface3">
                            <mesh
                              name="polySurface3_Bee_Texture_0"
                              castShadow
                              receiveShadow
                              geometry={nodes.polySurface3_Bee_Texture_0.geometry}
                              material={materials.Bee_Texture}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                    <group
                      name="CTRL_WingRIGHT"
                      position={[-1.531, 6.548, -4.501]}
                      rotation={[Math.PI / 2, 0, 0]}>
                      <group
                        name="WingR"
                        position={[1.373, 4.501, 6.559]}
                        rotation={[-Math.PI / 2, 0, 0]}>
                        <group name="polySurface10">
                          <mesh
                            name="polySurface10_Bee_Texture_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.polySurface10_Bee_Texture_0.geometry}
                            material={materials.Bee_Texture}
                          />
                        </group>
                        <group name="polySurface11">
                          <mesh
                            name="polySurface11_Bee_Texture_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.polySurface11_Bee_Texture_0.geometry}
                            material={materials.Bee_Texture}
                          />
                        </group>
                        <group name="polySurface12">
                          <mesh
                            name="polySurface12_Bee_Texture_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.polySurface12_Bee_Texture_0.geometry}
                            material={materials.Bee_Texture}
                          />
                        </group>
                        <group name="polySurface13">
                          <mesh
                            name="polySurface13_Bee_Texture_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.polySurface13_Bee_Texture_0.geometry}
                            material={materials.Bee_Texture}
                          />
                        </group>
                        <group name="polySurface14">
                          <mesh
                            name="polySurface14_Bee_Texture_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.polySurface14_Bee_Texture_0.geometry}
                            material={materials.Bee_Texture}
                          />
                        </group>
                        <group name="polySurface15">
                          <mesh
                            name="polySurface15_Bee_Texture_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.polySurface15_Bee_Texture_0.geometry}
                            material={materials.Bee_Texture}
                          />
                        </group>
                        <group name="polySurface16">
                          <mesh
                            name="polySurface16_Bee_Texture_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.polySurface16_Bee_Texture_0.geometry}
                            material={materials.Bee_Texture}
                          />
                        </group>
                        <group name="polySurface17">
                          <mesh
                            name="polySurface17_Bee_Texture_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.polySurface17_Bee_Texture_0.geometry}
                            material={materials.Bee_Texture}
                          />
                        </group>
                        <group name="polySurface18">
                          <mesh
                            name="polySurface18_Bee_Texture_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.polySurface18_Bee_Texture_0.geometry}
                            material={materials.Bee_Texture}
                          />
                        </group>
                      </group>
                    </group>
                    <group
                      name="CTRL_LegRight1"
                      position={[-1.057, -0.481, -4.459]}
                      rotation={[-0.698, 0, Math.PI / 2]}>
                      <group
                        name="pPlane13"
                        position={[9.596, -6.026, -4.504]}
                        rotation={[0, Math.PI / 2, 0]}>
                        <mesh
                          name="pPlane13_Bee_Texture_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pPlane13_Bee_Texture_0.geometry}
                          material={materials.Bee_Texture}
                        />
                      </group>
                    </group>
                    <group
                      name="CTRL_LegLeft1"
                      position={[-5.084, -0.483, -4.459]}
                      rotation={[-0.698, 0, Math.PI / 2]}>
                      <group
                        name="pPlane10"
                        position={[9.596, -6.07, -4.504]}
                        rotation={[0, Math.PI / 2, 0]}>
                        <mesh
                          name="pPlane10_Bee_Texture_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pPlane10_Bee_Texture_0.geometry}
                          material={materials.Bee_Texture}
                        />
                      </group>
                    </group>
                    <group
                      name="CTRL_LegLEft2"
                      position={[-5.084, -0.481, -2.469]}
                      rotation={[-0.698, 0, Math.PI / 2]}>
                      <group
                        name="pPlane11"
                        position={[9.596, -6.07, -4.483]}
                        rotation={[0, Math.PI / 2, 0]}>
                        <mesh
                          name="pPlane11_Bee_Texture_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pPlane11_Bee_Texture_0.geometry}
                          material={materials.Bee_Texture}
                        />
                      </group>
                    </group>
                    <group
                      name="CTRL_LegRight2"
                      position={[-1.057, -0.481, -2.469]}
                      rotation={[-0.698, 0, Math.PI / 2]}>
                      <group
                        name="pPlane12"
                        position={[9.596, -6.026, -4.483]}
                        rotation={[0, Math.PI / 2, 0]}>
                        <mesh
                          name="pPlane12_Bee_Texture_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pPlane12_Bee_Texture_0.geometry}
                          material={materials.Bee_Texture}
                        />
                      </group>
                    </group>
                    <group
                      name="Stinger"
                      position={[-2.955, 3.002, 1]}
                      rotation={[0, 0, Math.PI / 2]}>
                      <mesh
                        name="Stinger_Bee_Texture_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Stinger_Bee_Texture_0.geometry}
                        material={materials.Bee_Texture}
                      />
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </a.group>
  )
}

export default MineBee;
