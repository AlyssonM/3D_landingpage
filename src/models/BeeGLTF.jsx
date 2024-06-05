import { Canvas } from "@react-three/fiber";
import {a} from '@react-spring/three'
import { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from 'three';
import BeeGLTFScene from "../assets/3d/bee_gltf.glb";



export function BeeGLTF({position, scale, setInfo, Hive, ...props}) {
  const { scene, gl, viewport } = useThree();
  const BeeGLTFRef = useRef();
  const { nodes, materials, animations } = useGLTF(BeeGLTFScene);
  const { actions } = useAnimations(animations, BeeGLTFRef);
  
  useEffect(() => {
    const handleWheel = (event) => {
      if(Math.abs(event.deltaY) > 0){
        setInfo({ show: false, content: null });
        //isAnimating.current = Math.abs(event.deltaY) > 0? true:false;
      }        
      //direction.current = event.deltaY > 0 ? 1 : -1;  
    };
  
    const handleKeyDown = (event) => {
      if(event.key === 'ArrowDown'){
        //isAnimating.current = true;
        // direction.current = 1;
        setInfo({ show: false, content: null });
      }
      else if(event.key === 'ArrowUp'){
        //isAnimating.current = true;
        // direction.current = -1;
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
        //isAnimating.current = true;
      }
      else{
        isAnimating.current = false;
      }
      // direction.current = difference < 0 ? 1 : -1;
      startYRef.current = touchY;
    };

    if(Hive == true){
      BeeGLTFRef.current.position.z = 4.8;  
    }
    else{
        BeeGLTFRef.current.position.z = 9;  
    }

    const canvas = gl.domElement;
    canvas.addEventListener("wheel", handleWheel);
    canvas.addEventListener('touchstart', handleTouchStart, { passive: false });
    canvas.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('keydown', handleKeyDown);
    actions["All Animations"].play()
    return () => {
        
        canvas.removeEventListener("wheel", handleWheel);
        canvas.removeEventListener('touchstart', handleTouchStart);
        canvas.removeEventListener('touchmove', handleTouchStart);
        window.removeEventListener('keydown', handleKeyDown);
       
      };
  }, [Hive]);
  
  return (
    <a.group ref={BeeGLTFRef} position={position} scale={scale}>
      <group name="Sketchfab_Scene" >
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group
                name="base_dummy_46"
                position={[0, 0.086, 0.007]}
                rotation={[Math.PI / 2, 0, 0]}>
                <group
                  name="backpack_gloss_0"
                  position={[-0.002, 0.173, 0.18]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={136.034}>
                  <mesh
                    name="Object_5"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_5.geometry}
                    material={materials.transp_1}
                  />
                </group>
                <group
                  name="backpack_low001_1"
                  position={[-0.002, 0.173, 0.18]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={136.034}>
                  <mesh
                    name="Object_7"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_7.geometry}
                    material={materials.base_1}
                  />
                </group>
                <group name="base_body_v2_2" position={[0.011, -0.007, 0.086]}>
                  <mesh
                    name="Object_9"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_9.geometry}
                    material={materials.base_1}
                  />
                </group>
                <group name="dummy_head_5">
                  <group
                    name="head_new001_3"
                    position={[-0.002, 0.173, 0.18]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={136.034}>
                    <mesh
                      name="Object_12"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_12.geometry}
                      material={materials.base_1}
                    />
                  </group>
                  <group name="Object012_4" position={[-0.002, 0.029, -0.425]}>
                    <mesh
                      name="Object_14"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_14.geometry}
                      material={materials.base_1}
                    />
                  </group>
                </group>
                <group name="Dummy_vent_base_left_9" position={[-0.298, -0.01, -0.046]}>
                  <group name="Dummy_vent_left_7" position={[-0.213, 0, -0.017]}>
                    <group
                      name="vent_left001_6"
                      position={[0.509, 0.183, 0.243]}
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={136.034}>
                      <mesh
                        name="Object_18"
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_18.geometry}
                        material={materials.base_1}
                      />
                    </group>
                  </group>
                  <group
                    name="vent_base_left001_8"
                    position={[0.296, 0.183, 0.226]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={136.034}>
                    <mesh
                      name="Object_20"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_20.geometry}
                      material={materials.base_1}
                    />
                  </group>
                </group>
                <group
                  name="Dummy_vent_base_right_13"
                  position={[0.3, -0.01, -0.046]}
                  rotation={[0, 0, Math.PI]}>
                  <group name="Dummy_vent_right_11" position={[-0.21, 0, -0.017]}>
                    <group
                      name="vent_left001001_10"
                      position={[0.512, -0.183, 0.243]}
                      rotation={[Math.PI / 2, 0, Math.PI]}
                      scale={136.034}>
                      <mesh
                        name="Object_24"
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_24.geometry}
                        material={materials.base_1}
                      />
                    </group>
                  </group>
                  <group
                    name="vent_base_right001_12"
                    position={[0.302, -0.183, 0.226]}
                    rotation={[Math.PI / 2, 0, Math.PI]}
                    scale={136.034}>
                    <mesh
                      name="Object_26"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_26.geometry}
                      material={materials.base_1}
                    />
                  </group>
                </group>
                <group
                  name="left_hands_base_23"
                  position={[-0.246, 0.092, 0.105]}
                  rotation={[0, 1.309, 0]}>
                  <group name="left_hands_1_21" position={[-0.243, 0, 0]} rotation={[0, 0, -0.698]}>
                    <group
                      name="Dummy_capture_left_down_15"
                      position={[-0.169, 0, -0.013]}
                      rotation={[1.57, 0.005, -0.003]}
                      scale={[1.184, 0.389, 1.184]}>
                      <group
                        name="wrist_2_14"
                        position={[-0.02, 0.033, 0]}
                        rotation={[-3.141, 0.005, -0.006]}
                        scale={[0.97, 4.312, 0.844]}>
                        <mesh
                          name="Object_31"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_31.geometry}
                          material={materials.base_1}
                        />
                      </group>
                    </group>
                    <group name="Dummy_hand_18" position={[-0.169, 0, -0.002]}>
                      <group
                        name="Dummy_capture_left_up_17"
                        position={[0, 0, 0.016]}
                        rotation={[1.57, 0.005, -0.003]}
                        scale={[1.201, 0.394, 1.201]}>
                        <group
                          name="wrist_1_16"
                          position={[-0.02, -0.035, 0]}
                          rotation={[0.001, -0.005, 0.006]}
                          scale={[0.957, 4.254, 0.833]}>
                          <mesh
                            name="Object_35"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_35.geometry}
                            material={materials.base_1}
                          />
                        </group>
                      </group>
                    </group>
                    <group
                      name="forearm_19"
                      position={[-0.007, 0, 0]}
                      rotation={[0, 0, Math.PI / 2]}
                      scale={[1, 13.488, 1]}>
                      <mesh
                        name="Object_37"
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_37.geometry}
                        material={materials.base_1}
                      />
                    </group>
                    <group name="wrist_0_20" position={[-0.169, 0, 0]}>
                      <mesh
                        name="Object_39"
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_39.geometry}
                        material={materials.base_1}
                      />
                    </group>
                  </group>
                  <group
                    name="shoulder_22"
                    position={[-0.031, 0.004, -0.006]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={1.155}>
                    <mesh
                      name="Object_41"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_41.geometry}
                      material={materials.base_1}
                    />
                  </group>
                </group>
                <group
                  name="Point001_33"
                  position={[0, 0.007, 0.082]}
                  rotation={[0, 0, Math.PI / 2]}>
                  <group name="Point002_32" position={[0, 0, 0.158]}>
                    <group
                      name="base_part_1_low001_24"
                      position={[0.166, 0.002, -0.059]}
                      rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                      scale={136.034}>
                      <mesh
                        name="Object_45"
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_45.geometry}
                        material={materials.base_1}
                      />
                    </group>
                    <group name="Point003_31" position={[0, -0.002, 0.111]}>
                      <group
                        name="base_part_2_low001_25"
                        position={[0, 0.002, -0.016]}
                        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                        scale={129.757}>
                        <mesh
                          name="Object_48"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_48.geometry}
                          material={materials.base_1}
                        />
                      </group>
                      <group name="Box001_30" position={[-0.007, 0.001, 0.096]} scale={1.058}>
                        <mesh
                          name="Object_50"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_50.geometry}
                          material={materials.base_1}
                        />
                        <group name="Box002_29" position={[0, 0, 0.06]}>
                          <mesh
                            name="Object_52"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_52.geometry}
                            material={materials.base_1}
                          />
                          <group name="Box003_28" position={[0, 0, 0.012]} scale={0.904}>
                            <mesh
                              name="Object_54"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_54.geometry}
                              material={materials.base_1}
                            />
                            <group
                              name="pathcord_new_2_27"
                              position={[-0.018, 0, -0.084]}
                              rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                              scale={98.442}>
                              <mesh
                                name="Object_56"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_56.geometry}
                                material={materials.base_1}
                              />
                              <group
                                name="Box006_26"
                                position={[0, -0.001, 0.002]}
                                rotation={[Math.PI / 2, 0, Math.PI / 2]}
                                scale={0.011}>
                                <mesh
                                  name="Object_58"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes.Object_58.geometry}
                                  material={materials.base_1}
                                />
                              </group>
                            </group>
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                </group>
                <group
                  name="right_hands_base001_43"
                  position={[0.217, 0.085, 0.099]}
                  rotation={[-0.022, -1.222, -3.076]}>
                  <group
                    name="right_hands_002_41"
                    position={[-0.243, 0, 0]}
                    rotation={[0, 0, Math.PI / 4]}>
                    <group name="Dummy_hand001_38" position={[-0.169, 0, 0.001]}>
                      <group
                        name="Dummy_capture_left_down001_35"
                        position={[0, 0, -0.014]}
                        rotation={[1.57, 0.005, -0.003]}
                        scale={[1.184, 0.389, 1.184]}>
                        <group name="Object013_34" position={[-0.021, 0.033, 0.027]}>
                          <mesh
                            name="Object_64"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_64.geometry}
                            material={materials.base_1}
                          />
                        </group>
                      </group>
                      <group
                        name="Dummy_capture_left_up001_37"
                        position={[0, 0, 0.016]}
                        rotation={[1.57, 0.005, -0.003]}
                        scale={[1.201, 0.394, 1.201]}>
                        <group name="Box009_36" position={[-0.021, -0.042, 0.026]} scale={0.986}>
                          <mesh
                            name="Object_67"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_67.geometry}
                            material={materials.base_1}
                          />
                        </group>
                      </group>
                    </group>
                    <group
                      name="forearm001_40"
                      position={[-0.007, 0, 0]}
                      rotation={[0, 0, Math.PI / 2]}
                      scale={[1, 13.488, 1]}>
                      <mesh
                        name="Object_69"
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_69.geometry}
                        material={materials.base_1}
                      />
                      <group
                        name="wrist_003_39"
                        position={[0, 0.012, 0]}
                        rotation={[0, 0, -Math.PI / 2]}
                        scale={[0.074, 1, 1]}>
                        <mesh
                          name="Object_71"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_71.geometry}
                          material={materials.base_1}
                        />
                      </group>
                    </group>
                  </group>
                  <group
                    name="shoulder001_42"
                    position={[-0.031, 0.004, -0.006]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={1.155}>
                    <mesh
                      name="Object_73"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_73.geometry}
                      material={materials.base_1}
                    />
                  </group>
                </group>
                <group
                  name="Sphere001_45"
                  position={[-0.002, -0.44, -0.035]}
                  rotation={[Math.PI / 2, 0, Math.PI]}>
                  <mesh
                    name="Object_75"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_75.geometry}
                    material={materials.base_1}
                  />
                  <group name="Object_44" position={[0, 0, -0.002]} scale={[1.293, 1.293, 0.845]}>
                    <mesh
                      name="Object_77"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_77.geometry}
                      material={materials.base_1}
                    />
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

export default BeeGLTF;