import {a} from '@react-spring/three'
import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

import HQ_2Scene from "../assets/3d/HQ_2.glb";

export function HQ_2(props) {
  const HQ_2Ref = useRef()
  const { nodes, materials, animations } = useGLTF(HQ_2Scene)
  const { actions } = useAnimations(animations, HQ_2Ref);

  useEffect(() => {
    actions["Icosphere rot"].play();
  }, []);

  useFrame(({ clock, camera }) => {
    // HQ_2Ref.current.position.y = -100;
    // HQ_2Ref.current.position.x = -65;
    // HQ_2Ref.current.position.z = 70;
  });

  return (
    <a.group ref={HQ_2Ref} scale={[100,100,100]} position={[-60, -100, 70]}>
      <group name="Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.123}>
          <group
            name="d310ac88f5b04201988b0b6f9be0a790fbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Bee002"
                  position={[507.537, 576.336, -810.351]}
                  rotation={[-Math.PI / 2, 0, -1.925]}
                  scale={[8.95, 8.95, 10.093]}>
                  <group name="Bee002_bee_0" />
                  <mesh
                    name="Bee002_bee_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Bee002_bee_0001.geometry}
                    material={materials.material_39}
                  />
                  <group
                    name="Icosphere006"
                    position={[0.096, -0.451, -0.696]}
                    scale={[0.21, 0.21, 0.186]}>
                    <group name="Icosphere006_Black001_0" />
                    <mesh
                      name="Icosphere006_Black001_0001"
                      castShadow
                      receiveShadow
                      geometry={nodes.Icosphere006_Black001_0001.geometry}
                      material={materials['Black.001']}
                    />
                    <group name="Icosphere006_Black_0" />
                    <mesh
                      name="Icosphere006_Black_0001"
                      castShadow
                      receiveShadow
                      geometry={nodes.Icosphere006_Black_0001.geometry}
                      material={materials.Black}
                    />
                    <group name="Icosphere006_BrownGlaze_0" />
                    <mesh
                      name="Icosphere006_BrownGlaze_0001"
                      castShadow
                      receiveShadow
                      geometry={nodes.Icosphere006_BrownGlaze_0001.geometry}
                      material={materials.BrownGlaze}
                    />
                    <group name="Icosphere006_LightBlue_0" />
                    <mesh
                      name="Icosphere006_LightBlue_0001"
                      castShadow
                      receiveShadow
                      geometry={nodes.Icosphere006_LightBlue_0001.geometry}
                      material={materials.water}
                    />
                  </group>
                </group>
                <group
                  name="Bee003"
                  position={[505.339, 574.035, -810.555]}
                  rotation={[-Math.PI / 2, 0, -1.925]}
                  scale={[9.533, 9.533, 10.751]}>
                  <group name="Bee003_Black_0" />
                  <mesh
                    name="Bee003_Black_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Bee003_Black_0001.geometry}
                    material={materials.Black}
                  />
                  <group name="Bee003_BrownGlaze_0" />
                  <mesh
                    name="Bee003_BrownGlaze_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Bee003_BrownGlaze_0001.geometry}
                    material={materials.BrownGlaze}
                  />
                </group>
                <group
                  name="Books004"
                  position={[724.291, 555.117, -843.19]}
                  rotation={[-0.19, -0.899, 2.98]}
                  scale={[1.189, 1.107, 6.212]}>
                  <group name="Books004_Blue_0" />
                  <mesh
                    name="Books004_Blue_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books004_Blue_0001.geometry}
                    material={materials.Blue}
                  />
                  <group name="Books004_Green_0" />
                  <mesh
                    name="Books004_Green_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books004_Green_0001.geometry}
                    material={materials.Green}
                  />
                  <group name="Books004_Material024_0" />
                  <mesh
                    name="Books004_Material024_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books004_Material024_0001.geometry}
                    material={materials['Material.006']}
                  />
                  <group name="Books004_Turquoise_0" />
                  <mesh
                    name="Books004_Turquoise_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books004_Turquoise_0001.geometry}
                    material={materials.Turquoise}
                  />
                  <group name="Books004_Yellow_0" />
                  <mesh
                    name="Books004_Yellow_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books004_Yellow_0001.geometry}
                    material={materials.Yellow}
                  />
                </group>
                <group
                  name="Books013"
                  position={[683.425, 719.138, -862.181]}
                  rotation={[-3.005, -0.529, 0.057]}
                  scale={[1.321, 1.606, 6.996]}>
                  <group name="Books013_Bordeux_0" />
                  <mesh
                    name="Books013_Bordeux_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books013_Bordeux_0001.geometry}
                    material={materials.Stripey}
                  />
                  <group name="Books013_Green_0" />
                  <mesh
                    name="Books013_Green_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books013_Green_0001.geometry}
                    material={materials.Green}
                  />
                  <group name="Books013_Magenta_0" />
                  <mesh
                    name="Books013_Magenta_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books013_Magenta_0001.geometry}
                    material={materials.Magenta}
                  />
                  <group name="Books013_Material008_0" />
                  <mesh
                    name="Books013_Material008_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books013_Material008_0001.geometry}
                    material={materials['Material.008']}
                  />
                  <group name="Books013_Material024_0" />
                  <mesh
                    name="Books013_Material024_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books013_Material024_0001.geometry}
                    material={materials['Material.006']}
                  />
                  <group name="Books013_PurbleExtra_0" />
                  <mesh
                    name="Books013_PurbleExtra_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books013_PurbleExtra_0001.geometry}
                    material={materials['Purble.Extra']}
                  />
                  <group name="Books013_Turquoise_0" />
                  <mesh
                    name="Books013_Turquoise_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books013_Turquoise_0001.geometry}
                    material={materials.Turquoise}
                  />
                </group>
                <group
                  name="Books014"
                  position={[880.337, 594.533, -861.792]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[108.189, 100, 100]}>
                  <group name="Books014_Black_0" />
                  <mesh
                    name="Books014_Black_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books014_Black_0001.geometry}
                    material={materials.Black}
                  />
                  <group name="Books014_Brown001_0" />
                  <mesh
                    name="Books014_Brown001_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books014_Brown001_0001.geometry}
                    material={materials['Brown.001']}
                  />
                  <group name="Books014_DarkBrown_0" />
                  <mesh
                    name="Books014_DarkBrown_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books014_DarkBrown_0001.geometry}
                    material={materials.DarkBrown}
                  />
                  <group name="Books014_Glass_0" />
                  <mesh
                    name="Books014_Glass_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books014_Glass_0001.geometry}
                    material={materials.Glass}
                  />
                  <group name="Books014_Gloden001_0" />
                  <mesh
                    name="Books014_Gloden001_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books014_Gloden001_0001.geometry}
                    material={materials['Gloden.001']}
                  />
                  <group name="Books014_Gold_0" />
                  <mesh
                    name="Books014_Gold_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books014_Gold_0001.geometry}
                    material={materials.Gold}
                  />
                  <group name="Books014_Grey_0" />
                  <mesh
                    name="Books014_Grey_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books014_Grey_0001.geometry}
                    material={materials.Grey}
                  />
                  <group name="Books014_HoneyComb_0" />
                  <mesh
                    name="Books014_HoneyComb_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books014_HoneyComb_0001.geometry}
                    material={materials.HoneyComb}
                  />
                  <group name="Books014_Magenta_0" />
                  <mesh
                    name="Books014_Magenta_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books014_Magenta_0001.geometry}
                    material={materials.Magenta}
                  />
                  <group name="Books014_Material008_0" />
                  <mesh
                    name="Books014_Material008_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books014_Material008_0001.geometry}
                    material={materials['Material.008']}
                  />
                  <group name="Books014_Material024_0" />
                  <mesh
                    name="Books014_Material024_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books014_Material024_0001.geometry}
                    material={materials['Material.006']}
                  />
                  <group name="Books014_Material_0" />
                  <mesh
                    name="Books014_Material_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books014_Material_0001.geometry}
                    material={materials['Material.004']}
                  />
                  <group name="Books014_Pink_0" />
                  <mesh
                    name="Books014_Pink_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books014_Pink_0001.geometry}
                    material={materials.Pink}
                  />
                  <group name="Books014_PurbleExtra_0" />
                  <mesh
                    name="Books014_PurbleExtra_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books014_PurbleExtra_0001.geometry}
                    material={materials['Purble.Extra']}
                  />
                  <group name="Books014_Silver_0" />
                  <mesh
                    name="Books014_Silver_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books014_Silver_0001.geometry}
                    material={materials.Silver}
                  />
                  <group name="Books014_Turquoise_0" />
                  <mesh
                    name="Books014_Turquoise_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books014_Turquoise_0001.geometry}
                    material={materials.Turquoise}
                  />
                  <group name="Books014_Wax_0" />
                  <mesh
                    name="Books014_Wax_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books014_Wax_0001.geometry}
                    material={materials.material}
                  />
                  <group name="Books014_Yellow_0" />
                  <mesh
                    name="Books014_Yellow_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books014_Yellow_0001.geometry}
                    material={materials.Yellow}
                  />
                </group>
                <group
                  name="Books015"
                  position={[774.401, 576.737, -842.428]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[108.189, 115.71, 100]}>
                  <group name="Books015_Material024_0" />
                  <mesh
                    name="Books015_Material024_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books015_Material024_0001.geometry}
                    material={materials['Material.006']}
                  />
                  <group name="Books015_Purble_0" />
                  <mesh
                    name="Books015_Purble_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books015_Purble_0001.geometry}
                    material={materials.Purble}
                  />
                  <group name="Books015_Turquoise_0" />
                  <mesh
                    name="Books015_Turquoise_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books015_Turquoise_0001.geometry}
                    material={materials.Turquoise}
                  />
                </group>
                <group
                  name="Books016"
                  position={[840.101, 585.277, -865.297]}
                  rotation={[-1.542, 0, 0]}
                  scale={[108.189, 100, 100]}>
                  <group name="Books016_Black_0" />
                  <mesh
                    name="Books016_Black_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books016_Black_0001.geometry}
                    material={materials.Black}
                  />
                  <group name="Books016_Wax_0" />
                  <mesh
                    name="Books016_Wax_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books016_Wax_0001.geometry}
                    material={materials.material}
                  />
                </group>
                <group
                  name="Books017"
                  position={[785.601, 563.439, -823.136]}
                  rotation={[-1.406, -1.451, 1.724]}
                  scale={[1.224, 1.139, 6.391]}>
                  <group name="Books017_Green_0" />
                  <mesh
                    name="Books017_Green_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books017_Green_0001.geometry}
                    material={materials.Green}
                  />
                  <group name="Books017_Magenta_0" />
                  <mesh
                    name="Books017_Magenta_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books017_Magenta_0001.geometry}
                    material={materials.Magenta}
                  />
                  <group name="Books017_Material024_0" />
                  <mesh
                    name="Books017_Material024_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books017_Material024_0001.geometry}
                    material={materials['Material.006']}
                  />
                  <group name="Books017_PurbleExtra_0" />
                  <mesh
                    name="Books017_PurbleExtra_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books017_PurbleExtra_0001.geometry}
                    material={materials['Purble.Extra']}
                  />
                  <group name="Books017_Silver_0" />
                  <mesh
                    name="Books017_Silver_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books017_Silver_0001.geometry}
                    material={materials.Silver}
                  />
                  <group name="Books017_Yellow_0" />
                  <mesh
                    name="Books017_Yellow_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books017_Yellow_0001.geometry}
                    material={materials.Yellow}
                  />
                </group>
                <group
                  name="Books018"
                  position={[781.802, 586.624, -862.968]}
                  rotation={[-1.571, 0, 0]}
                  scale={[108.189, 100, 100]}>
                  <group name="Books018_Black_0" />
                  <mesh
                    name="Books018_Black_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books018_Black_0001.geometry}
                    material={materials.Black}
                  />
                  <group name="Books018_Gold_0" />
                  <mesh
                    name="Books018_Gold_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books018_Gold_0001.geometry}
                    material={materials.Gold}
                  />
                  <group name="Books018_Wax_0" />
                  <mesh
                    name="Books018_Wax_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books018_Wax_0001.geometry}
                    material={materials.material}
                  />
                </group>
                <group
                  name="Books019"
                  position={[901.991, 572.542, -757.773]}
                  rotation={[-2.891, -1.076, 0.209]}
                  scale={[1.454, 1.353, 7.594]}>
                  <group name="Books019_Blue_0" />
                  <mesh
                    name="Books019_Blue_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books019_Blue_0001.geometry}
                    material={materials.Blue}
                  />
                  <group name="Books019_Books_0" />
                  <mesh
                    name="Books019_Books_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books019_Books_0001.geometry}
                    material={materials.GreenPattern}
                  />
                  <group name="Books019_Magenta_0" />
                  <mesh
                    name="Books019_Magenta_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books019_Magenta_0001.geometry}
                    material={materials.Magenta}
                  />
                  <group name="Books019_Material008_0" />
                  <mesh
                    name="Books019_Material008_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books019_Material008_0001.geometry}
                    material={materials['Material.008']}
                  />
                  <group name="Books019_Material024_0" />
                  <mesh
                    name="Books019_Material024_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books019_Material024_0001.geometry}
                    material={materials['Material.006']}
                  />
                  <group name="Books019_Purble_0" />
                  <mesh
                    name="Books019_Purble_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books019_Purble_0001.geometry}
                    material={materials.Purble}
                  />
                  <group name="Books019_Turquoise003_0" />
                  <mesh
                    name="Books019_Turquoise003_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books019_Turquoise003_0001.geometry}
                    material={materials.Wall}
                  />
                  <group name="Books019_Yellow_0" />
                  <mesh
                    name="Books019_Yellow_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books019_Yellow_0001.geometry}
                    material={materials.Yellow}
                  />
                </group>
                <group
                  name="Books020"
                  position={[900.768, 585.42, -832.393]}
                  rotation={[-1.571, 0, 0]}
                  scale={[108.189, 100, 100]}>
                  <group name="Books020_Black_0" />
                  <mesh
                    name="Books020_Black_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books020_Black_0001.geometry}
                    material={materials.Black}
                  />
                  <group name="Books020_Gold_0" />
                  <mesh
                    name="Books020_Gold_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books020_Gold_0001.geometry}
                    material={materials.Gold}
                  />
                  <group name="Books020_Wax_0" />
                  <mesh
                    name="Books020_Wax_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books020_Wax_0001.geometry}
                    material={materials.material}
                  />
                </group>
                <group
                  name="Books036"
                  position={[570.696, 730.673, -786.097]}
                  rotation={[-1.141, -1.441, 1.991]}
                  scale={[1.028, 0.957, 5.372]}>
                  <group name="Books036_Blue_0" />
                  <mesh
                    name="Books036_Blue_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books036_Blue_0001.geometry}
                    material={materials.Blue}
                  />
                  <group name="Books036_Green001_0" />
                  <mesh
                    name="Books036_Green001_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books036_Green001_0001.geometry}
                    material={materials.GreenPattern}
                  />
                  <group name="Books036_LightBlue_0" />
                  <mesh
                    name="Books036_LightBlue_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books036_LightBlue_0001.geometry}
                    material={materials.water}
                  />
                  <group name="Books036_Magenta_0" />
                  <mesh
                    name="Books036_Magenta_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books036_Magenta_0001.geometry}
                    material={materials.Magenta}
                  />
                  <group name="Books036_Material024_0" />
                  <mesh
                    name="Books036_Material024_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books036_Material024_0001.geometry}
                    material={materials['Material.006']}
                  />
                </group>
                <group
                  name="Books037"
                  position={[511.703, 738.144, -862.968]}
                  rotation={[-1.571, 0, 0]}
                  scale={[108.189, 100, 100]}>
                  <group name="Books037_Black_0" />
                  <mesh
                    name="Books037_Black_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books037_Black_0001.geometry}
                    material={materials.Black}
                  />
                  <group name="Books037_Gold_0" />
                  <mesh
                    name="Books037_Gold_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books037_Gold_0001.geometry}
                    material={materials.Gold}
                  />
                  <group name="Books037_Wax_0" />
                  <mesh
                    name="Books037_Wax_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books037_Wax_0001.geometry}
                    material={materials.material}
                  />
                </group>
                <group
                  name="Books038"
                  position={[636.096, 738.144, -862.968]}
                  rotation={[-1.571, 0, 0]}
                  scale={[108.189, 100, 100]}>
                  <group name="Books038_Black_0" />
                  <mesh
                    name="Books038_Black_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books038_Black_0001.geometry}
                    material={materials.Black}
                  />
                  <group name="Books038_Gold_0" />
                  <mesh
                    name="Books038_Gold_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books038_Gold_0001.geometry}
                    material={materials.Gold}
                  />
                  <group name="Books038_Wax_0" />
                  <mesh
                    name="Books038_Wax_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books038_Wax_0001.geometry}
                    material={materials.material}
                  />
                </group>
                <group
                  name="Books039"
                  position={[547.745, 743.755, -865.197]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[108.189, 100, 100]}>
                  <group name="Books039_Black_0" />
                  <mesh
                    name="Books039_Black_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books039_Black_0001.geometry}
                    material={materials.Black}
                  />
                  <group name="Books039_Brown001_0" />
                  <mesh
                    name="Books039_Brown001_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books039_Brown001_0001.geometry}
                    material={materials['Brown.001']}
                  />
                  <group name="Books039_DarkBrown_0" />
                  <mesh
                    name="Books039_DarkBrown_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books039_DarkBrown_0001.geometry}
                    material={materials.DarkBrown}
                  />
                  <group name="Books039_Glass_0" />
                  <mesh
                    name="Books039_Glass_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books039_Glass_0001.geometry}
                    material={materials.Glass}
                  />
                  <group name="Books039_Gloden001_0" />
                  <mesh
                    name="Books039_Gloden001_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books039_Gloden001_0001.geometry}
                    material={materials['Gloden.001']}
                  />
                  <group name="Books039_Gold_0" />
                  <mesh
                    name="Books039_Gold_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books039_Gold_0001.geometry}
                    material={materials.Gold}
                  />
                  <group name="Books039_Grey_0" />
                  <mesh
                    name="Books039_Grey_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books039_Grey_0001.geometry}
                    material={materials.Grey}
                  />
                  <group name="Books039_HoneyComb_0" />
                  <mesh
                    name="Books039_HoneyComb_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books039_HoneyComb_0001.geometry}
                    material={materials.HoneyComb}
                  />
                  <group name="Books039_Magenta_0" />
                  <mesh
                    name="Books039_Magenta_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books039_Magenta_0001.geometry}
                    material={materials.Magenta}
                  />
                  <group name="Books039_Material008_0" />
                  <mesh
                    name="Books039_Material008_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books039_Material008_0001.geometry}
                    material={materials['Material.008']}
                  />
                  <group name="Books039_Material024_0" />
                  <mesh
                    name="Books039_Material024_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books039_Material024_0001.geometry}
                    material={materials['Material.006']}
                  />
                  <group name="Books039_Material_0" />
                  <mesh
                    name="Books039_Material_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books039_Material_0001.geometry}
                    material={materials['Material.004']}
                  />
                  <group name="Books039_Pink_0" />
                  <mesh
                    name="Books039_Pink_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books039_Pink_0001.geometry}
                    material={materials.Pink}
                  />
                  <group name="Books039_PurbleExtra_0" />
                  <mesh
                    name="Books039_PurbleExtra_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books039_PurbleExtra_0001.geometry}
                    material={materials['Purble.Extra']}
                  />
                  <group name="Books039_Silver_0" />
                  <mesh
                    name="Books039_Silver_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books039_Silver_0001.geometry}
                    material={materials.Silver}
                  />
                  <group name="Books039_Turquoise_0" />
                  <mesh
                    name="Books039_Turquoise_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books039_Turquoise_0001.geometry}
                    material={materials.Turquoise}
                  />
                  <group name="Books039_Wax_0" />
                  <mesh
                    name="Books039_Wax_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books039_Wax_0001.geometry}
                    material={materials.material}
                  />
                  <group name="Books039_Yellow_0" />
                  <mesh
                    name="Books039_Yellow_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books039_Yellow_0001.geometry}
                    material={materials.Yellow}
                  />
                </group>
                <group
                  name="Books040"
                  position={[600.078, 740.812, -865.041]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[108.189, 100, 100]}>
                  <group name="Books040_Brown001_0" />
                  <mesh
                    name="Books040_Brown001_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books040_Brown001_0001.geometry}
                    material={materials['Brown.001']}
                  />
                  <group name="Books040_DarkBrown_0" />
                  <mesh
                    name="Books040_DarkBrown_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books040_DarkBrown_0001.geometry}
                    material={materials.DarkBrown}
                  />
                  <group name="Books040_Gloden001_0" />
                  <mesh
                    name="Books040_Gloden001_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books040_Gloden001_0001.geometry}
                    material={materials['Gloden.001']}
                  />
                  <group name="Books040_Gold_0" />
                  <mesh
                    name="Books040_Gold_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books040_Gold_0001.geometry}
                    material={materials.Gold}
                  />
                  <group name="Books040_Green_0" />
                  <mesh
                    name="Books040_Green_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books040_Green_0001.geometry}
                    material={materials.Green}
                  />
                  <group name="Books040_Grey_0" />
                  <mesh
                    name="Books040_Grey_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books040_Grey_0001.geometry}
                    material={materials.Grey}
                  />
                  <group name="Books040_HoneyComb_0" />
                  <mesh
                    name="Books040_HoneyComb_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books040_HoneyComb_0001.geometry}
                    material={materials.HoneyComb}
                  />
                  <group name="Books040_Magenta_0" />
                  <mesh
                    name="Books040_Magenta_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books040_Magenta_0001.geometry}
                    material={materials.Magenta}
                  />
                  <group name="Books040_Material024_0" />
                  <mesh
                    name="Books040_Material024_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books040_Material024_0001.geometry}
                    material={materials['Material.006']}
                  />
                  <group name="Books040_Material_0" />
                  <mesh
                    name="Books040_Material_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books040_Material_0001.geometry}
                    material={materials['Material.004']}
                  />
                  <group name="Books040_Pink_0" />
                  <mesh
                    name="Books040_Pink_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books040_Pink_0001.geometry}
                    material={materials.Pink}
                  />
                  <group name="Books040_PurbleExtra_0" />
                  <mesh
                    name="Books040_PurbleExtra_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books040_PurbleExtra_0001.geometry}
                    material={materials['Purble.Extra']}
                  />
                  <group name="Books040_Silver_0" />
                  <mesh
                    name="Books040_Silver_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books040_Silver_0001.geometry}
                    material={materials.Silver}
                  />
                  <group name="Books040_Turquoise003_0" />
                  <mesh
                    name="Books040_Turquoise003_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books040_Turquoise003_0001.geometry}
                    material={materials.Wall}
                  />
                  <group name="Books040_Turquoise_0" />
                  <mesh
                    name="Books040_Turquoise_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books040_Turquoise_0001.geometry}
                    material={materials.Turquoise}
                  />
                  <group name="Books040_Wax_0" />
                  <mesh
                    name="Books040_Wax_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books040_Wax_0001.geometry}
                    material={materials.material}
                  />
                </group>
                <group
                  name="Books041"
                  position={[610.987, 732.985, -866.231]}
                  rotation={[-1.571, 0, 0]}
                  scale={[82.281, 76.053, 76.053]}>
                  <group name="Books041_Black_0" />
                  <mesh
                    name="Books041_Black_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books041_Black_0001.geometry}
                    material={materials.Black}
                  />
                  <group name="Books041_Gold_0" />
                  <mesh
                    name="Books041_Gold_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books041_Gold_0001.geometry}
                    material={materials.Gold}
                  />
                  <group name="Books041_Wax_0" />
                  <mesh
                    name="Books041_Wax_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books041_Wax_0001.geometry}
                    material={materials.material}
                  />
                </group>
                <group
                  name="Books043"
                  position={[327.319, 434.247, -808.919]}
                  rotation={[-1.571, 0, 0]}
                  scale={[108.189, 100, 100]}>
                  <group name="Books043_Black_0" />
                  <mesh
                    name="Books043_Black_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books043_Black_0001.geometry}
                    material={materials.Black}
                  />
                  <group name="Books043_Gold_0" />
                  <mesh
                    name="Books043_Gold_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books043_Gold_0001.geometry}
                    material={materials.Gold}
                  />
                  <group name="Books043_Wax_0" />
                  <mesh
                    name="Books043_Wax_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books043_Wax_0001.geometry}
                    material={materials.material}
                  />
                </group>
                <group
                  name="Books044"
                  position={[642.016, 463.958, -807.251]}
                  rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                  scale={[117.668, 131.675, 108.761]}>
                  <group name="Books044_Magenta_0" />
                  <mesh
                    name="Books044_Magenta_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books044_Magenta_0001.geometry}
                    material={materials.Magenta}
                  />
                  <group name="Books044_Pink_0" />
                  <mesh
                    name="Books044_Pink_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books044_Pink_0001.geometry}
                    material={materials.Pink}
                  />
                  <group name="Books044_PurbleExtra_0" />
                  <mesh
                    name="Books044_PurbleExtra_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books044_PurbleExtra_0001.geometry}
                    material={materials['Purble.Extra']}
                  />
                  <group name="Books044_Turquoise_0" />
                  <mesh
                    name="Books044_Turquoise_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books044_Turquoise_0001.geometry}
                    material={materials.Turquoise}
                  />
                  <group name="Books044_Wall_0" />
                  <mesh
                    name="Books044_Wall_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books044_Wall_0001.geometry}
                    material={materials.Wall}
                  />
                  <group name="Books044_Wax_0" />
                  <mesh
                    name="Books044_Wax_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books044_Wax_0001.geometry}
                    material={materials.material}
                  />
                </group>
                <group
                  name="Books045"
                  position={[471.648, 431.07, -816.067]}
                  rotation={[-1.571, 0, 0]}
                  scale={[82.281, 76.053, 76.053]}>
                  <group name="Books045_Black_0" />
                  <mesh
                    name="Books045_Black_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books045_Black_0001.geometry}
                    material={materials.Black}
                  />
                  <group name="Books045_Gold_0" />
                  <mesh
                    name="Books045_Gold_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books045_Gold_0001.geometry}
                    material={materials.Gold}
                  />
                  <group name="Books045_Wax_0" />
                  <mesh
                    name="Books045_Wax_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books045_Wax_0001.geometry}
                    material={materials.material}
                  />
                </group>
                <group
                  name="Books046"
                  position={[495.547, 431.07, -816.067]}
                  rotation={[-1.571, 0, 0]}
                  scale={[82.281, 76.053, 76.053]}>
                  <group name="Books046_Black_0" />
                  <mesh
                    name="Books046_Black_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books046_Black_0001.geometry}
                    material={materials.Black}
                  />
                  <group name="Books046_Gold_0" />
                  <mesh
                    name="Books046_Gold_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books046_Gold_0001.geometry}
                    material={materials.Gold}
                  />
                  <group name="Books046_Wax_0" />
                  <mesh
                    name="Books046_Wax_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books046_Wax_0001.geometry}
                    material={materials.material}
                  />
                </group>
                <group
                  name="Books049"
                  position={[703.194, 740.471, -862.968]}
                  rotation={[-1.571, 0, 0]}
                  scale={[108.189, 100, 100]}>
                  <group name="Books049_Black_0" />
                  <mesh
                    name="Books049_Black_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books049_Black_0001.geometry}
                    material={materials.Black}
                  />
                  <group name="Books049_Gold_0" />
                  <mesh
                    name="Books049_Gold_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books049_Gold_0001.geometry}
                    material={materials.Gold}
                  />
                  <group name="Books049_Wax_0" />
                  <mesh
                    name="Books049_Wax_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books049_Wax_0001.geometry}
                    material={materials.material}
                  />
                </group>
                <group
                  name="Bookshelf001"
                  position={[765.495, 569.033, -771.684]}
                  rotation={[-1.683, 0.019, 2.977]}
                  scale={[1.028, 0.957, 5.372]}>
                  <group name="Bookshelf001_Blue_0" />
                  <mesh
                    name="Bookshelf001_Blue_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Bookshelf001_Blue_0001.geometry}
                    material={materials.Blue}
                  />
                  <group name="Bookshelf001_Gold_0" />
                  <mesh
                    name="Bookshelf001_Gold_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Bookshelf001_Gold_0001.geometry}
                    material={materials.Gold}
                  />
                  <group name="Bookshelf001_Green001_0" />
                  <mesh
                    name="Bookshelf001_Green001_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Bookshelf001_Green001_0001.geometry}
                    material={materials.GreenPattern}
                  />
                  <group name="Bookshelf001_Grey_0" />
                  <mesh
                    name="Bookshelf001_Grey_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Bookshelf001_Grey_0001.geometry}
                    material={materials.Grey}
                  />
                  <group name="Bookshelf001_LightBlue_0" />
                  <mesh
                    name="Bookshelf001_LightBlue_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Bookshelf001_LightBlue_0001.geometry}
                    material={materials.water}
                  />
                  <group name="Bookshelf001_Magenta_0" />
                  <mesh
                    name="Bookshelf001_Magenta_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Bookshelf001_Magenta_0001.geometry}
                    material={materials.Magenta}
                  />
                  <group name="Bookshelf001_Walnut_0" />
                  <mesh
                    name="Bookshelf001_Walnut_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Bookshelf001_Walnut_0001.geometry}
                    material={materials.Walnut}
                  />
                  <group name="Bookshelf001_Wax_0" />
                  <mesh
                    name="Bookshelf001_Wax_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Bookshelf001_Wax_0001.geometry}
                    material={materials.material}
                  />
                </group>
                <group
                  name="Bowl002"
                  position={[411.413, 623.871, -817.963]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={12.791}>
                  <group name="Bowl002_BrownGlaze_0" />
                  <mesh
                    name="Bowl002_BrownGlaze_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Bowl002_BrownGlaze_0001.geometry}
                    material={materials.BrownGlaze}
                  />
                </group>
                <group
                  name="Bowl004"
                  position={[411.413, 626.93, -817.963]}
                  rotation={[-Math.PI / 2, 0, 0.337]}
                  scale={12.791}>
                  <group name="Bowl004_BrownGlaze_0" />
                  <mesh
                    name="Bowl004_BrownGlaze_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Bowl004_BrownGlaze_0001.geometry}
                    material={materials.BrownGlaze}
                  />
                </group>
                <group
                  name="Bowl005"
                  position={[411.413, 629.935, -817.963]}
                  rotation={[-Math.PI / 2, 0, 0.337]}
                  scale={12.791}>
                  <group name="Bowl005_BrownGlaze_0" />
                  <mesh
                    name="Bowl005_BrownGlaze_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Bowl005_BrownGlaze_0001.geometry}
                    material={materials.BrownGlaze}
                  />
                </group>
                <group
                  name="Bowl008"
                  position={[494.663, 426.822, -818.282]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[9.078, 9.078, 4.4]}>
                  <group name="Bowl008_BrownGlaze_0" />
                  <mesh
                    name="Bowl008_BrownGlaze_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Bowl008_BrownGlaze_0001.geometry}
                    material={materials.BrownGlaze}
                  />
                </group>
                <group
                  name="Bowl009"
                  position={[411.23, 426.822, -800.973]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[9.078, 9.078, 4.4]}>
                  <group name="Bowl009_BrownGlaze_0" />
                  <mesh
                    name="Bowl009_BrownGlaze_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Bowl009_BrownGlaze_0001.geometry}
                    material={materials.BrownGlaze}
                  />
                </group>
                <group
                  name="Bowl010"
                  position={[326.565, 431.857, -827.278]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[9.078, 9.078, 4.4]}>
                  <group name="Bowl010_BrownGlaze_0" />
                  <mesh
                    name="Bowl010_BrownGlaze_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Bowl010_BrownGlaze_0001.geometry}
                    material={materials.BrownGlaze}
                  />
                </group>
                <group
                  name="Bowl011"
                  position={[323.692, 428.355, -814.588]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[9.078, 9.078, 4.4]}>
                  <group name="Bowl011_BrownGlaze_0" />
                  <mesh
                    name="Bowl011_BrownGlaze_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Bowl011_BrownGlaze_0001.geometry}
                    material={materials.BrownGlaze}
                  />
                </group>
                <group
                  name="Cabinet008"
                  position={[335.201, 413.497, -809.045]}
                  rotation={[-Math.PI / 2, 0, -3.14]}
                  scale={[11.253, 39.514, 13.078]}>
                  <group name="Cabinet008_Brown_0" />
                  <mesh
                    name="Cabinet008_Brown_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cabinet008_Brown_0001.geometry}
                    material={materials.Brown}
                  />
                  <group name="Cabinet008_Gloden_0" />
                  <mesh
                    name="Cabinet008_Gloden_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cabinet008_Gloden_0001.geometry}
                    material={materials.Gloden}
                  />
                </group>
                <group
                  name="Camera001"
                  position={[478.055, 529.801, -456.207]}
                  rotation={[-0.236, Math.PI / 2, 0]}
                  scale={[622.626, 504.623, 624.815]}>
                  <group name="Object_181" />
                </group>
                <group
                  name="Candles009"
                  position={[598.331, 583.596, -857.561]}
                  rotation={[-Math.PI / 2, 0, 0.834]}
                  scale={[1.531, 1.531, 8.529]}>
                  <group name="Candles009_Black_0" />
                  <mesh
                    name="Candles009_Black_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Candles009_Black_0001.geometry}
                    material={materials.Black}
                  />
                  <group name="Candles009_Wax_0" />
                  <mesh
                    name="Candles009_Wax_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Candles009_Wax_0001.geometry}
                    material={materials.material}
                  />
                </group>
                <group
                  name="Candles012"
                  position={[763.511, 592.165, -769.708]}
                  rotation={[-Math.PI / 2, 0, 1.202]}
                  scale={[1.531, 1.531, 8.529]}>
                  <group name="Candles012_Black_0" />
                  <mesh
                    name="Candles012_Black_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Candles012_Black_0001.geometry}
                    material={materials.Black}
                  />
                  <group name="Candles012_Wax_0" />
                  <mesh
                    name="Candles012_Wax_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Candles012_Wax_0001.geometry}
                    material={materials.material}
                  />
                </group>
                <group
                  name="Cube024"
                  position={[293.16, 344.285, -867.828]}
                  rotation={[-Math.PI / 2, 0, 0.983]}
                  scale={8.692}
                />
                <group
                  name="Cube026"
                  position={[557.574, 599.043, -811.452]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[-3.6, -50.652, -1.647]}>
                  <group name="Cube026_Brown_0" />
                  <mesh
                    name="Cube026_Brown_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube026_Brown_0001.geometry}
                    material={materials.Brown}
                  />
                </group>
                <group
                  name="Cube027"
                  position={[433.279, 579.586, -860.808]}
                  rotation={[1.352, 0.144, 0.997]}
                  scale={[-2.333, -25.274, -2.333]}>
                  <group name="Cube027_Gold_0" />
                  <mesh
                    name="Cube027_Gold_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube027_Gold_0001.geometry}
                    material={materials.Gold}
                  />
                  <group name="Cube027_lightbrpwn_0" />
                  <mesh
                    name="Cube027_lightbrpwn_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube027_lightbrpwn_0001.geometry}
                    material={materials.lightbrpwn}
                  />
                  <group name="Cube027_Silver_0" />
                  <mesh
                    name="Cube027_Silver_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube027_Silver_0001.geometry}
                    material={materials.Silver}
                  />
                </group>
                <group
                  name="Cube028"
                  position={[410.931, 612.873, -804.997]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[-7.158, -32.477, -1.239]}>
                  <group name="Cube028_DarkBrown_0" />
                  <mesh
                    name="Cube028_DarkBrown_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube028_DarkBrown_0001.geometry}
                    material={materials.DarkBrown}
                  />
                </group>
                <group
                  name="Cube029"
                  position={[422.51, 564.006, -807.301]}
                  rotation={[-Math.PI / 2, 0, 1.422]}
                  scale={[11.793, 11.793, 5.935]}>
                  <group name="Cube029_Brown001_0" />
                  <mesh
                    name="Cube029_Brown001_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube029_Brown001_0001.geometry}
                    material={materials['Brown.001']}
                  />
                  <group name="Cube029_Gray_0" />
                  <mesh
                    name="Cube029_Gray_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube029_Gray_0001.geometry}
                    material={materials.Gray}
                  />
                </group>
                <group
                  name="Cube030"
                  position={[421.952, 559.643, -770.711]}
                  rotation={[-Math.PI / 2, 0, -0.375]}
                  scale={[7.063, 3.533, 1.66]}>
                  <group name="Cube030_Gold_0" />
                  <mesh
                    name="Cube030_Gold_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube030_Gold_0001.geometry}
                    material={materials.Gold}
                  />
                  <group name="Cube030_Silver_0" />
                  <mesh
                    name="Cube030_Silver_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube030_Silver_0001.geometry}
                    material={materials.Silver}
                  />
                </group>
                <group
                  name="Cube032"
                  position={[550.636, 568.034, -840.959]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[1.026, 1.026, 11.257]}>
                  <group name="Cube032_Gray_0" />
                  <mesh
                    name="Cube032_Gray_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube032_Gray_0001.geometry}
                    material={materials.Gray}
                  />
                  <group name="Cube032_Magenta_0" />
                  <mesh
                    name="Cube032_Magenta_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube032_Magenta_0001.geometry}
                    material={materials.Magenta}
                  />
                </group>
                <group
                  name="Cube033"
                  position={[411.699, 605.552, -810.462]}
                  rotation={[-Math.PI / 2, 0, -0.375]}
                  scale={[7.063, 3.533, 1.66]}>
                  <group name="Cube033_BrownGlaze_0" />
                  <mesh
                    name="Cube033_BrownGlaze_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube033_BrownGlaze_0001.geometry}
                    material={materials.BrownGlaze}
                  />
                  <group name="Cube033_Gold_0" />
                  <mesh
                    name="Cube033_Gold_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube033_Gold_0001.geometry}
                    material={materials.Gold}
                  />
                </group>
                <group
                  name="Cube034"
                  position={[493.942, 558.618, -852.446]}
                  rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                  scale={[16.427, 17.916, 1.018]}>
                  <group name="Cube034_Fire_0" />
                  <mesh
                    name="Cube034_Fire_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube034_Fire_0001.geometry}
                    material={materials.Fire}
                  />
                  <group name="Cube034_Gray_0" />
                  <mesh
                    name="Cube034_Gray_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube034_Gray_0001.geometry}
                    material={materials.Gray}
                  />
                  <group name="Cube034_Grey_0" />
                  <mesh
                    name="Cube034_Grey_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube034_Grey_0001.geometry}
                    material={materials.Grey}
                  />
                  <group name="Cube034_RockBricks_0" />
                  <mesh
                    name="Cube034_RockBricks_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube034_RockBricks_0001.geometry}
                    material={materials.RockBricks}
                  />
                </group>
                <group
                  name="Cube035"
                  position={[457.606, 557.28, -806.789]}
                  rotation={[-Math.PI / 2, 0, -1.484]}
                  scale={[24.226, 6.758, 4.523]}>
                  <group name="Cube035_Glass_0" />
                  <mesh
                    name="Cube035_Glass_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube035_Glass_0001.geometry}
                    material={materials.Glass}
                  />
                  <group name="Cube035_Gray_0" />
                  <mesh
                    name="Cube035_Gray_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube035_Gray_0001.geometry}
                    material={materials.Gray}
                  />
                </group>
                <group
                  name="Cube042"
                  position={[373.983, 611.193, -842.455]}
                  rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                  scale={[1.75, 24.143, 1.005]}>
                  <group name="Cube042_Brown_0" />
                  <mesh
                    name="Cube042_Brown_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube042_Brown_0001.geometry}
                    material={materials.Brown}
                  />
                </group>
                <group
                  name="Cube043"
                  position={[259.063, 566.393, -856.769]}
                  rotation={[Math.PI / 2, 0, -0.017]}
                  scale={[35.05, 15.417, 2.199]}>
                  <group name="Cube043_Black_0" />
                  <mesh
                    name="Cube043_Black_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube043_Black_0001.geometry}
                    material={materials.Black}
                  />
                  <group name="Cube043_Blue_0" />
                  <mesh
                    name="Cube043_Blue_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube043_Blue_0001.geometry}
                    material={materials.Steel}
                  />
                  <group name="Cube043_Gray_0" />
                  <mesh
                    name="Cube043_Gray_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube043_Gray_0001.geometry}
                    material={materials.Gray}
                  />
                </group>
                <group
                  name="Cube044"
                  position={[276.225, 552.736, -790.464]}
                  rotation={[-Math.PI / 2, 0, 0.11]}
                  scale={[30.171, 20.216, 1.184]}>
                  <group name="Cube044_BedSheet_0" />
                  <mesh
                    name="Cube044_BedSheet_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube044_BedSheet_0001.geometry}
                    material={materials.flock}
                  />
                </group>
                <group
                  name="Cube045"
                  position={[364.262, 578.082, -774.681]}
                  rotation={[1.517, -0.256, 2.932]}
                  scale={[-2.333, -25.274, -2.333]}>
                  <group name="Cube045_Gold_0" />
                  <mesh
                    name="Cube045_Gold_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube045_Gold_0001.geometry}
                    material={materials.Gold}
                  />
                  <group name="Cube045_lightbrpwn_0" />
                  <mesh
                    name="Cube045_lightbrpwn_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube045_lightbrpwn_0001.geometry}
                    material={materials.lightbrpwn}
                  />
                  <group name="Cube045_Silver_0" />
                  <mesh
                    name="Cube045_Silver_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube045_Silver_0001.geometry}
                    material={materials.Silver}
                  />
                </group>
                <group
                  name="Cube046"
                  position={[737.521, 593.657, -796.896]}
                  rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
                  scale={[21.545, 33.161, 0.868]}>
                  <group name="Cube046_Gold_0" />
                  <mesh
                    name="Cube046_Gold_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube046_Gold_0001.geometry}
                    material={materials.Gold}
                  />
                  <group name="Cube046_Pages002_0" />
                  <mesh
                    name="Cube046_Pages002_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube046_Pages002_0001.geometry}
                    material={materials['Pages.001']}
                  />
                  <group name="Cube046_Walnut_0" />
                  <mesh
                    name="Cube046_Walnut_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube046_Walnut_0001.geometry}
                    material={materials.Walnut}
                  />
                  <group name="Cube046_Wax_0" />
                  <mesh
                    name="Cube046_Wax_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube046_Wax_0001.geometry}
                    material={materials.material}
                  />
                </group>
                <group
                  name="Cube047"
                  position={[612.506, 567.107, -810.287]}
                  rotation={[-Math.PI / 2, 0, 2.441]}
                  scale={[9.299, 9.299, 1.452]}>
                  <group name="Cube047_Brown_0" />
                  <mesh
                    name="Cube047_Brown_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube047_Brown_0001.geometry}
                    material={materials.Brown}
                  />
                  <group name="Cube047_Magenta_0" />
                  <mesh
                    name="Cube047_Magenta_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube047_Magenta_0001.geometry}
                    material={materials.Magenta}
                  />
                </group>
                <group
                  name="Cube054"
                  position={[692.369, 575.359, -794.315]}
                  rotation={[0.04, -0.696, 1.385]}
                  scale={[-0.695, -6.266, -1.169]}>
                  <group name="Cube054_Black_0" />
                  <mesh
                    name="Cube054_Black_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube054_Black_0001.geometry}
                    material={materials.Black}
                  />
                  <group name="Cube054_LightBrown001_0" />
                  <mesh
                    name="Cube054_LightBrown001_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube054_LightBrown001_0001.geometry}
                    material={materials['LightBrown.001']}
                  />
                  <group name="Cube054_Pages_0" />
                  <mesh
                    name="Cube054_Pages_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube054_Pages_0001.geometry}
                    material={materials['Pages.001']}
                  />
                </group>
                <group
                  name="Cube069"
                  position={[745.846, 716.146, -812.798]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[38.036, 30.595, 1.509]}>
                  <group name="Cube069_Brown001_0" />
                  <mesh
                    name="Cube069_Brown001_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube069_Brown001_0001.geometry}
                    material={materials['Brown.001']}
                  />
                  <group name="Cube069_Map_0" />
                  <mesh
                    name="Cube069_Map_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube069_Map_0001.geometry}
                    material={materials['Material.006']}
                  />
                </group>
                <group
                  name="Cube070"
                  position={[819.251, 729.338, -807.438]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[3.043, 3.822, 3.043]}>
                  <group name="Cube070_Books_0" />
                  <mesh
                    name="Cube070_Books_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube070_Books_0001.geometry}
                    material={materials.GreenPattern}
                  />
                  <group name="Cube070_Brown_0" />
                  <mesh
                    name="Cube070_Brown_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube070_Brown_0001.geometry}
                    material={materials.Brown}
                  />
                  <group name="Cube070_Pages_0" />
                  <mesh
                    name="Cube070_Pages_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube070_Pages_0001.geometry}
                    material={materials['Pages.001']}
                  />
                </group>
                <group
                  name="Cube071"
                  position={[819.251, 765.864, -807.438]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[3.043, 3.822, 3.043]}>
                  <group name="Cube071_Bordeux_0" />
                  <mesh
                    name="Cube071_Bordeux_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube071_Bordeux_0001.geometry}
                    material={materials.Stripey}
                  />
                  <group name="Cube071_Brown_0" />
                  <mesh
                    name="Cube071_Brown_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube071_Brown_0001.geometry}
                    material={materials.Brown}
                  />
                  <group name="Cube071_Wax_0" />
                  <mesh
                    name="Cube071_Wax_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube071_Wax_0001.geometry}
                    material={materials.material}
                  />
                </group>
                <group
                  name="Cube072"
                  position={[813.937, 749.062, -864.215]}
                  rotation={[2.884, -0.078, 0.286]}
                  scale={[2.445, 3.072, 2.445]}>
                  <group name="Cube072_Bordeux_0" />
                  <mesh
                    name="Cube072_Bordeux_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube072_Bordeux_0001.geometry}
                    material={materials.Stripey}
                  />
                  <group name="Cube072_Wax_0" />
                  <mesh
                    name="Cube072_Wax_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube072_Wax_0001.geometry}
                    material={materials.material}
                  />
                </group>
                <group
                  name="Cube073"
                  position={[724.803, 731.82, -780.091]}
                  rotation={[2.899, 0, Math.PI / 2]}
                  scale={[0.753, 9.108, 1.644]}>
                  <group name="Cube073_Brown_0" />
                  <mesh
                    name="Cube073_Brown_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube073_Brown_0001.geometry}
                    material={materials.Brown}
                  />
                </group>
                <group
                  name="Cube074"
                  position={[774.33, 567.164, -844.542]}
                  rotation={[-Math.PI / 2, 0, 0.195]}
                  scale={[23.117, 10.605, 0.933]}>
                  <group name="Cube074_Brown_0" />
                  <mesh
                    name="Cube074_Brown_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube074_Brown_0001.geometry}
                    material={materials.Brown}
                  />
                  <group name="Cube074_Gold_0" />
                  <mesh
                    name="Cube074_Gold_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube074_Gold_0001.geometry}
                    material={materials.Gold}
                  />
                </group>
                <group
                  name="Cube075"
                  position={[818.166, 569.69, -860.201]}
                  rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                  scale={[1.38, 1.152, 11.58]}>
                  <group name="Cube075_Gold_0" />
                  <mesh
                    name="Cube075_Gold_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube075_Gold_0001.geometry}
                    material={materials.Gold}
                  />
                  <group name="Cube075_Walnut_0" />
                  <mesh
                    name="Cube075_Walnut_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube075_Walnut_0001.geometry}
                    material={materials.Walnut}
                  />
                </group>
                <group
                  name="Cube076"
                  position={[822.7, 568.565, -832.671]}
                  rotation={[-Math.PI / 2, 0, -0.521]}
                  scale={[9.299, 9.299, 1.452]}>
                  <group name="Cube076_Brown_0" />
                  <mesh
                    name="Cube076_Brown_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube076_Brown_0001.geometry}
                    material={materials.Brown}
                  />
                  <group name="Cube076_Magenta_0" />
                  <mesh
                    name="Cube076_Magenta_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube076_Magenta_0001.geometry}
                    material={materials.Magenta}
                  />
                </group>
                <group
                  name="Cube077"
                  position={[821.889, 584.405, -865.494]}
                  rotation={[-1.098, 0.061, 0.032]}
                  scale={[6.206, 10.412, 0.391]}>
                  <group name="Cube077_Pages_0" />
                  <mesh
                    name="Cube077_Pages_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube077_Pages_0001.geometry}
                    material={materials['Pages.001']}
                  />
                  <group name="Cube077_Wax_0" />
                  <mesh
                    name="Cube077_Wax_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube077_Wax_0001.geometry}
                    material={materials.material}
                  />
                  <group name="Cube077_Yellow_0" />
                  <mesh
                    name="Cube077_Yellow_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube077_Yellow_0001.geometry}
                    material={materials.Yellow}
                  />
                </group>
                <group
                  name="Cube078"
                  position={[864.885, 596.763, -863.057]}
                  rotation={[-Math.PI / 2, 0, 1.42]}
                  scale={[1.02, 0.703, 1.02]}>
                  <group name="Cube078_Books_0" />
                  <mesh
                    name="Cube078_Books_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube078_Books_0001.geometry}
                    material={materials.GreenPattern}
                  />
                  <group name="Cube078_Pages_0" />
                  <mesh
                    name="Cube078_Pages_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube078_Pages_0001.geometry}
                    material={materials['Pages.001']}
                  />
                </group>
                <group
                  name="Cube079"
                  position={[870.589, 558.442, -860.439]}
                  rotation={[-Math.PI / 2, 0, 1.831]}
                  scale={[1.02, 0.703, 1.02]}>
                  <group name="Cube079_Bordeux_0" />
                  <mesh
                    name="Cube079_Bordeux_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube079_Bordeux_0001.geometry}
                    material={materials.Stripey}
                  />
                  <group name="Cube079_Pages_0" />
                  <mesh
                    name="Cube079_Pages_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube079_Pages_0001.geometry}
                    material={materials['Pages.001']}
                  />
                </group>
                <group
                  name="Cube080"
                  position={[869.418, 561.463, -862.086]}
                  rotation={[-1.129, -0.558, 1.13]}
                  scale={[1.02, 0.703, 1.02]}>
                  <group name="Cube080_Bordeux_0" />
                  <mesh
                    name="Cube080_Bordeux_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube080_Bordeux_0001.geometry}
                    material={materials.Stripey}
                  />
                  <group name="Cube080_Pages_0" />
                  <mesh
                    name="Cube080_Pages_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube080_Pages_0001.geometry}
                    material={materials['Pages.001']}
                  />
                </group>
                <group
                  name="Cube081"
                  position={[798.439, 581.326, -863.057]}
                  rotation={[-1.516, -0.059, 2.615]}
                  scale={[1.02, 0.703, 1.02]}>
                  <group name="Cube081_Books_0" />
                  <mesh
                    name="Cube081_Books_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube081_Books_0001.geometry}
                    material={materials.GreenPattern}
                  />
                  <group name="Cube081_Pages_0" />
                  <mesh
                    name="Cube081_Pages_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube081_Pages_0001.geometry}
                    material={materials['Pages.001']}
                  />
                </group>
                <group
                  name="Cube082"
                  position={[913.323, 597.597, -805.186]}
                  rotation={[0, 1.558, -1.571]}
                  scale={[-21.545, -33.161, -0.868]}>
                  <group name="Cube082_Gold_0" />
                  <mesh
                    name="Cube082_Gold_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube082_Gold_0001.geometry}
                    material={materials.Gold}
                  />
                  <group name="Cube082_Pages001_0" />
                  <mesh
                    name="Cube082_Pages001_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube082_Pages001_0001.geometry}
                    material={materials['Pages.001']}
                  />
                  <group name="Cube082_Walnut_0" />
                  <mesh
                    name="Cube082_Walnut_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube082_Walnut_0001.geometry}
                    material={materials.Walnut}
                  />
                  <group name="Cube082_Wax_0" />
                  <mesh
                    name="Cube082_Wax_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube082_Wax_0001.geometry}
                    material={materials.material}
                  />
                </group>
                <group
                  name="Cube083"
                  position={[760.881, 623.894, -807.438]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[-3.043, -3.822, -3.043]}>
                  <group name="Cube083_Books_0" />
                  <mesh
                    name="Cube083_Books_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube083_Books_0001.geometry}
                    material={materials.GreenPattern}
                  />
                  <group name="Cube083_Brown_0" />
                  <mesh
                    name="Cube083_Brown_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube083_Brown_0001.geometry}
                    material={materials.Brown}
                  />
                  <group name="Cube083_Pages_0" />
                  <mesh
                    name="Cube083_Pages_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube083_Pages_0001.geometry}
                    material={materials['Pages.001']}
                  />
                </group>
                <group
                  name="Cube100"
                  position={[394.395, 470.062, -875.229]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[-29.032, -0.471, -0.471]}>
                  <group name="Cube100_Turquoise_0" />
                  <mesh
                    name="Cube100_Turquoise_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube100_Turquoise_0001.geometry}
                    material={materials.Turquoise}
                  />
                  <group name="Cube100_White_0" />
                  <mesh
                    name="Cube100_White_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube100_White_0001.geometry}
                    material={materials.White}
                  />
                </group>
                <group
                  name="Cube141"
                  position={[376.665, 715.317, -812.798]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[33.265, 30.595, 1.509]}>
                  <group name="Cube141_Brown001_0" />
                  <mesh
                    name="Cube141_Brown001_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube141_Brown001_0001.geometry}
                    material={materials['Brown.001']}
                  />
                  <group name="Cube141_Gold_0" />
                  <mesh
                    name="Cube141_Gold_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube141_Gold_0001.geometry}
                    material={materials.Gold}
                  />
                </group>
                <group
                  name="Cube142"
                  position={[376.665, 719.955, -810.489]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[23.16, 30.595, 1.509]}>
                  <group name="Cube142_Bordeux_0" />
                  <mesh
                    name="Cube142_Bordeux_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube142_Bordeux_0001.geometry}
                    material={materials.Stripey}
                  />
                </group>
                <group
                  name="Cube143"
                  position={[397.635, 761.731, -877.019]}
                  rotation={[Math.PI / 2, 0, -Math.PI]}
                  scale={[-62.562, -1.024, -38.348]}>
                  <group name="Cube143_Brown_0" />
                  <mesh
                    name="Cube143_Brown_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube143_Brown_0001.geometry}
                    material={materials.Brown}
                  />
                  <group name="Cube143_Gold_0" />
                  <mesh
                    name="Cube143_Gold_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube143_Gold_0001.geometry}
                    material={materials.Gold}
                  />
                  <group name="Cube143_StarMap_0" />
                  <mesh
                    name="Cube143_StarMap_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube143_StarMap_0001.geometry}
                    material={materials.StarMap}
                  />
                </group>
                <group
                  name="Cube145"
                  position={[427.681, 782.326, -822.643]}
                  rotation={[-1.738, 0, 1.564]}
                  scale={[1.038, 8.355, 0.962]}>
                  <group name="Cube145_DarkBrown_0" />
                  <mesh
                    name="Cube145_DarkBrown_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube145_DarkBrown_0001.geometry}
                    material={materials.DarkBrown}
                  />
                </group>
                <group
                  name="Cube149"
                  position={[312.737, 735.554, -802.138]}
                  rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                  scale={[-21.545, -33.161, -0.868]}>
                  <group name="Cube149_Gold_0" />
                  <mesh
                    name="Cube149_Gold_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube149_Gold_0001.geometry}
                    material={materials.Gold}
                  />
                  <group name="Cube149_Pages001_0" />
                  <mesh
                    name="Cube149_Pages001_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube149_Pages001_0001.geometry}
                    material={materials['Pages.001']}
                  />
                  <group name="Cube149_Walnut_0" />
                  <mesh
                    name="Cube149_Walnut_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube149_Walnut_0001.geometry}
                    material={materials.wood}
                  />
                  <group name="Cube149_Wax_0" />
                  <mesh
                    name="Cube149_Wax_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube149_Wax_0001.geometry}
                    material={materials.material}
                  />
                </group>
                <group
                  name="Cube151"
                  position={[586.182, 734.245, -784.844]}
                  rotation={[-Math.PI / 2, 0, 1.546]}
                  scale={[3.985, 3.985, 7.524]}>
                  <group name="Cube151_Brown001_0" />
                  <mesh
                    name="Cube151_Brown001_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube151_Brown001_0001.geometry}
                    material={materials['Brown.001']}
                  />
                  <group name="Cube151_BrownGlaze_0" />
                  <mesh
                    name="Cube151_BrownGlaze_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube151_BrownGlaze_0001.geometry}
                    material={materials.BrownGlaze}
                  />
                  <group name="Cube151_Green002_0" />
                  <mesh
                    name="Cube151_Green002_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube151_Green002_0001.geometry}
                    material={materials['Green.002']}
                  />
                  <group name="Cube151_Magenta_0" />
                  <mesh
                    name="Cube151_Magenta_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube151_Magenta_0001.geometry}
                    material={materials.Magenta}
                  />
                </group>
                <group
                  name="Cube153"
                  position={[555.729, 788.185, -864.002]}
                  rotation={[-Math.PI / 2, 0, 1.546]}
                  scale={[4.412, 4.412, 8.33]}>
                  <group name="Cube153_Brown001_0" />
                  <mesh
                    name="Cube153_Brown001_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube153_Brown001_0001.geometry}
                    material={materials['Brown.001']}
                  />
                  <group name="Cube153_BrownGlaze_0" />
                  <mesh
                    name="Cube153_BrownGlaze_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube153_BrownGlaze_0001.geometry}
                    material={materials.BrownGlaze}
                  />
                  <group name="Cube153_Green002_0" />
                  <mesh
                    name="Cube153_Green002_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube153_Green002_0001.geometry}
                    material={materials['Green.002']}
                  />
                  <group name="Cube153_Magenta_0" />
                  <mesh
                    name="Cube153_Magenta_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube153_Magenta_0001.geometry}
                    material={materials.Magenta}
                  />
                </group>
                <group
                  name="Cube154"
                  position={[570.397, 733.058, -794.524]}
                  rotation={[-2.511, -0.344, -3.017]}
                  scale={[3.611, 6.129, 0.462]}>
                  <group name="Cube154_Pages_0" />
                  <mesh
                    name="Cube154_Pages_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube154_Pages_0001.geometry}
                    material={materials['Pages.001']}
                  />
                  <group name="Cube154_Wax_0" />
                  <mesh
                    name="Cube154_Wax_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube154_Wax_0001.geometry}
                    material={materials.material}
                  />
                  <group name="Cube154_Yellow_0" />
                  <mesh
                    name="Cube154_Yellow_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube154_Yellow_0001.geometry}
                    material={materials.Yellow}
                  />
                </group>
                <group
                  name="Cube159"
                  position={[508.603, 866.891, -854.897]}
                  rotation={[-Math.PI / 2, 0, 1.111]}
                  scale={[11.642, 11.642, 13.928]}>
                  <group name="Cube159_Glass_0" />
                  <mesh
                    name="Cube159_Glass_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube159_Glass_0001.geometry}
                    material={materials.Glass}
                  />
                </group>
                <group
                  name="Cube160"
                  position={[542.391, 873.173, -849.869]}
                  rotation={[-Math.PI / 2, 0, 1.546]}
                  scale={[10.059, 10.059, 18.992]}>
                  <group name="Cube160_Brown001_0" />
                  <mesh
                    name="Cube160_Brown001_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube160_Brown001_0001.geometry}
                    material={materials['Brown.001']}
                  />
                  <group name="Cube160_BrownGlaze_0" />
                  <mesh
                    name="Cube160_BrownGlaze_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube160_BrownGlaze_0001.geometry}
                    material={materials.BrownGlaze}
                  />
                  <group name="Cube160_Green002_0" />
                  <mesh
                    name="Cube160_Green002_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube160_Green002_0001.geometry}
                    material={materials['Green.002']}
                  />
                  <group name="Cube160_Magenta_0" />
                  <mesh
                    name="Cube160_Magenta_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube160_Magenta_0001.geometry}
                    material={materials.Magenta}
                  />
                </group>
                <group
                  name="Cube161"
                  position={[483.582, 417.309, -816.668]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[33.265, 24.975, 1.972]}>
                  <group name="Cube161_Blue_0" />
                  <mesh
                    name="Cube161_Blue_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube161_Blue_0001.geometry}
                    material={materials.Blue}
                  />
                  <group name="Cube161_Gold_0" />
                  <mesh
                    name="Cube161_Gold_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube161_Gold_0001.geometry}
                    material={materials.Gold}
                  />
                  <group name="Cube161_Walnut_0" />
                  <mesh
                    name="Cube161_Walnut_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube161_Walnut_0001.geometry}
                    material={materials.white}
                  />
                  <group name="Cube161_White_0" />
                  <mesh
                    name="Cube161_White_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube161_White_0001.geometry}
                    material={materials.White}
                  />
                </group>
                <group
                  name="Cube162"
                  position={[570.236, 470.062, -875.229]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[-29.032, -0.471, -0.471]}>
                  <group name="Cube162_Turquoise_0" />
                  <mesh
                    name="Cube162_Turquoise_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube162_Turquoise_0001.geometry}
                    material={materials.Turquoise}
                  />
                  <group name="Cube162_White_0" />
                  <mesh
                    name="Cube162_White_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube162_White_0001.geometry}
                    material={materials.White}
                  />
                </group>
                <group
                  name="Cube163"
                  position={[483.235, 414.863, -853.788]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[100, 100, 106.566]}>
                  <group name="Cube163_Brown_0" />
                  <mesh
                    name="Cube163_Brown_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube163_Brown_0001.geometry}
                    material={materials.Brown}
                  />
                  <group name="Cube163_Magenta_0" />
                  <mesh
                    name="Cube163_Magenta_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube163_Magenta_0001.geometry}
                    material={materials.Magenta}
                  />
                </group>
                <group
                  name="Cube164"
                  position={[483.235, 414.863, -784.866]}
                  rotation={[Math.PI / 2, 0, -Math.PI]}
                  scale={[-100, -100, -106.566]}>
                  <group name="Cube164_Brown_0" />
                  <mesh
                    name="Cube164_Brown_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube164_Brown_0001.geometry}
                    material={materials.Brown}
                  />
                  <group name="Cube164_Magenta_0" />
                  <mesh
                    name="Cube164_Magenta_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube164_Magenta_0001.geometry}
                    material={materials.Magenta}
                  />
                </group>
                <group
                  name="Cube166"
                  position={[484.05, 431.077, -814.66]}
                  rotation={[-Math.PI / 2, 0, 2.212]}
                  scale={[2.74, 2.74, 5.172]}>
                  <group name="Cube166_Brown001_0" />
                  <mesh
                    name="Cube166_Brown001_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube166_Brown001_0001.geometry}
                    material={materials['Brown.001']}
                  />
                  <group name="Cube166_BrownGlaze_0" />
                  <mesh
                    name="Cube166_BrownGlaze_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube166_BrownGlaze_0001.geometry}
                    material={materials.BrownGlaze}
                  />
                  <group name="Cube166_Green002_0" />
                  <mesh
                    name="Cube166_Green002_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube166_Green002_0001.geometry}
                    material={materials['Green.002']}
                  />
                  <group name="Cube166_Material003_0" />
                  <mesh
                    name="Cube166_Material003_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube166_Material003_0001.geometry}
                    material={materials['Material.014']}
                  />
                </group>
                <group
                  name="Cube167"
                  position={[411.029, 626.683, -791.634]}
                  rotation={[-Math.PI / 2, 0, 2.212]}
                  scale={[3.189, 3.189, 6.022]}>
                  <group name="Cube167_Brown001_0" />
                  <mesh
                    name="Cube167_Brown001_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube167_Brown001_0001.geometry}
                    material={materials['Brown.001']}
                  />
                  <group name="Cube167_BrownGlaze_0" />
                  <mesh
                    name="Cube167_BrownGlaze_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube167_BrownGlaze_0001.geometry}
                    material={materials.BrownGlaze}
                  />
                  <group name="Cube167_Green002_0" />
                  <mesh
                    name="Cube167_Green002_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube167_Green002_0001.geometry}
                    material={materials['Green.002']}
                  />
                  <group name="Cube167_Material003_0" />
                  <mesh
                    name="Cube167_Material003_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube167_Material003_0001.geometry}
                    material={materials['Material.014']}
                  />
                </group>
                <group
                  name="Cube168"
                  position={[325.796, 440.238, -780.229]}
                  rotation={[Math.PI / 2, 0, 1.516]}
                  scale={[-15.759, -50.488, -1.821]}>
                  <group name="Cube168_Brown_0" />
                  <mesh
                    name="Cube168_Brown_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube168_Brown_0001.geometry}
                    material={materials.Brown}
                  />
                  <group name="Cube168_Glass_0" />
                  <mesh
                    name="Cube168_Glass_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube168_Glass_0001.geometry}
                    material={materials.Glass}
                  />
                </group>
                <group
                  name="Cube169"
                  position={[322.995, 440.238, -790.297]}
                  rotation={[Math.PI / 2, 0, 1.516]}
                  scale={[-15.759, -50.488, -1.821]}>
                  <group name="Cube169_Brown_0" />
                  <mesh
                    name="Cube169_Brown_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube169_Brown_0001.geometry}
                    material={materials.Brown}
                  />
                  <group name="Cube169_Glass_0" />
                  <mesh
                    name="Cube169_Glass_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube169_Glass_0001.geometry}
                    material={materials.Glass}
                  />
                </group>
                <group
                  name="Cube170"
                  position={[439.574, 439.624, -812.413]}
                  rotation={[Math.PI / 2, 0, 1.516]}
                  scale={[-15.759, -50.488, -1.821]}>
                  <group name="Cube170_Brown_0" />
                  <mesh
                    name="Cube170_Brown_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube170_Brown_0001.geometry}
                    material={materials.Brown}
                  />
                  <group name="Cube170_Glass_0" />
                  <mesh
                    name="Cube170_Glass_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube170_Glass_0001.geometry}
                    material={materials.Glass}
                  />
                </group>
                <group
                  name="Cube171"
                  position={[641.696, 436.288, -806.358]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[8.575, 26.965, 25.658]}>
                  <group name="Cube171_Black_0" />
                  <mesh
                    name="Cube171_Black_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube171_Black_0001.geometry}
                    material={materials.Black}
                  />
                  <group name="Cube171_Wax_0" />
                  <mesh
                    name="Cube171_Wax_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube171_Wax_0001.geometry}
                    material={materials.material}
                  />
                </group>
                <group
                  name="Cube201"
                  position={[787.607, 441.229, -802.416]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[2.526, 3.822, 3.043]}>
                  <group name="Cube201_Brown_0" />
                  <mesh
                    name="Cube201_Brown_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube201_Brown_0001.geometry}
                    material={materials.Brown}
                  />
                </group>
                <group
                  name="Cube202"
                  position={[787.607, 410.943, -802.416]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[2.526, 3.822, 3.043]}>
                  <group name="Cube202_Brown_0" />
                  <mesh
                    name="Cube202_Brown_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube202_Brown_0001.geometry}
                    material={materials.Brown}
                  />
                </group>
                <group
                  name="Cube203"
                  position={[737.905, 426.266, -865.444]}
                  rotation={[-1.098, 0.061, 0.032]}
                  scale={[6.205, 10.141, 0.351]}>
                  <group name="Cube203_Pages_0" />
                  <mesh
                    name="Cube203_Pages_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube203_Pages_0001.geometry}
                    material={materials['Pages.001']}
                  />
                  <group name="Cube203_Wax_0" />
                  <mesh
                    name="Cube203_Wax_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube203_Wax_0001.geometry}
                    material={materials.material}
                  />
                  <group name="Cube203_Yellow_0" />
                  <mesh
                    name="Cube203_Yellow_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube203_Yellow_0001.geometry}
                    material={materials.Yellow}
                  />
                </group>
                <group
                  name="Cube204"
                  position={[747.757, 413.143, -832.671]}
                  rotation={[-Math.PI / 2, 0, -0.521]}
                  scale={[9.299, 9.299, 1.452]}>
                  <group name="Cube204_Brown_0" />
                  <mesh
                    name="Cube204_Brown_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube204_Brown_0001.geometry}
                    material={materials.Brown}
                  />
                  <group name="Cube204_Magenta_0" />
                  <mesh
                    name="Cube204_Magenta_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube204_Magenta_0001.geometry}
                    material={materials.Magenta}
                  />
                </group>
                <group
                  name="Cube205"
                  position={[671.92, 440.013, -858.091]}
                  rotation={[2.877, 0.048, -0.174]}
                  scale={[2.445, 3.072, 2.445]}>
                  <group name="Cube205_Bordeux_0" />
                  <mesh
                    name="Cube205_Bordeux_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube205_Bordeux_0001.geometry}
                    material={materials.Stripey}
                  />
                  <group name="Cube205_Wax_0" />
                  <mesh
                    name="Cube205_Wax_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube205_Wax_0001.geometry}
                    material={materials.material}
                  />
                </group>
                <group
                  name="Cube206"
                  position={[787.607, 469.025, -802.416]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[2.526, 3.822, 3.043]}>
                  <group name="Cube206_Brown_0" />
                  <mesh
                    name="Cube206_Brown_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube206_Brown_0001.geometry}
                    material={materials.Brown}
                  />
                </group>
                <group
                  name="Cube207"
                  position={[734.176, 413.528, -860.201]}
                  rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                  scale={[1.38, 1.152, 10.047]}>
                  <group name="Cube207_Gold_0" />
                  <mesh
                    name="Cube207_Gold_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube207_Gold_0001.geometry}
                    material={materials.Gold}
                  />
                  <group name="Cube207_Walnut_0" />
                  <mesh
                    name="Cube207_Walnut_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube207_Walnut_0001.geometry}
                    material={materials.Walnut}
                  />
                </group>
                <group
                  name="Cube208"
                  position={[687.191, 440.013, -864.141]}
                  rotation={[2.821, 0.591, -0.005]}
                  scale={[2.445, 3.072, 2.445]}>
                  <group name="Cube208_Books_0" />
                  <mesh
                    name="Cube208_Books_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube208_Books_0001.geometry}
                    material={materials.GreenPattern}
                  />
                  <group name="Cube208_Wax_0" />
                  <mesh
                    name="Cube208_Wax_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube208_Wax_0001.geometry}
                    material={materials.material}
                  />
                </group>
                <group
                  name="Cube209"
                  position={[742.848, 484.695, -813.776]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[1.564, 5.397, 3.827]}>
                  <group name="Cube209_Gold_0" />
                  <mesh
                    name="Cube209_Gold_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube209_Gold_0001.geometry}
                    material={materials.Gold}
                  />
                </group>
                <group
                  name="Cylinder012"
                  position={[544.873, 561.496, -759.253]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={6.298}>
                  <group name="Cylinder012_LightBlue_0" />
                  <mesh
                    name="Cylinder012_LightBlue_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder012_LightBlue_0001.geometry}
                    material={materials.water}
                  />
                  <group name="Cylinder012_lightbrpwn_0" />
                  <mesh
                    name="Cylinder012_lightbrpwn_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder012_lightbrpwn_0001.geometry}
                    material={materials.lightbrpwn}
                  />
                  <group name="Cylinder012_Silver_0" />
                  <mesh
                    name="Cylinder012_Silver_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder012_Silver_0001.geometry}
                    material={materials.Silver}
                  />
                </group>
                <group
                  name="Cylinder014"
                  position={[494.473, 577.443, -843.932]}
                  rotation={[1.551, 0, Math.PI / 2]}
                  scale={[-4.39, -4.39, -3.701]}>
                  <group name="Cylinder014_Fire_0" />
                  <mesh
                    name="Cylinder014_Fire_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder014_Fire_0001.geometry}
                    material={materials.Fire}
                  />
                  <group name="Cylinder014_Gray_0" />
                  <mesh
                    name="Cylinder014_Gray_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder014_Gray_0001.geometry}
                    material={materials.Gray}
                  />
                </group>
                <group
                  name="Cylinder015"
                  position={[555.878, 600.933, -821.904]}
                  rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                  scale={[-4.39, -4.39, -3.701]}>
                  <group name="Cylinder015_Gray_0" />
                  <mesh
                    name="Cylinder015_Gray_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder015_Gray_0001.geometry}
                    material={materials.Gray}
                  />
                </group>
                <group
                  name="Cylinder018"
                  position={[343.828, 304.112, -848.436]}
                  rotation={[-0.207, 0.991, -1.22]}
                  scale={[19.411, 19.411, 5.927]}
                />
                <group
                  name="Cylinder023"
                  position={[227.647, 604.093, -818.017]}
                  rotation={[-Math.PI, -Math.PI / 2, 0]}
                  scale={[12.854, 12.854, 1.557]}>
                  <group name="Cylinder023_Gray_0" />
                  <mesh
                    name="Cylinder023_Gray_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder023_Gray_0001.geometry}
                    material={materials.Gray}
                  />
                  <group name="Cylinder023_Green001_0" />
                  <mesh
                    name="Cylinder023_Green001_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder023_Green001_0001.geometry}
                    material={materials.GreenPattern}
                  />
                  <group name="Cylinder023_Material008_0" />
                  <mesh
                    name="Cylinder023_Material008_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder023_Material008_0001.geometry}
                    material={materials['Material.008']}
                  />
                  <group name="Cylinder023_Silver_0" />
                  <mesh
                    name="Cylinder023_Silver_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder023_Silver_0001.geometry}
                    material={materials.Silver}
                  />
                </group>
                <group
                  name="Cylinder024"
                  position={[348.917, 561.738, -834.013]}
                  rotation={[-Math.PI, -0.756, 0]}
                  scale={[10.603, 10.603, 2.076]}>
                  <group name="Cylinder024_Blue001_0" />
                  <mesh
                    name="Cylinder024_Blue001_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder024_Blue001_0001.geometry}
                    material={materials.Blue}
                  />
                  <group name="Cylinder024_Gray_0" />
                  <mesh
                    name="Cylinder024_Gray_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder024_Gray_0001.geometry}
                    material={materials.Gray}
                  />
                  <group name="Cylinder024_Silver_0" />
                  <mesh
                    name="Cylinder024_Silver_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder024_Silver_0001.geometry}
                    material={materials.Silver}
                  />
                </group>
                <group
                  name="Cylinder025"
                  position={[227.647, 604.093, -780.771]}
                  rotation={[-Math.PI, -Math.PI / 2, 0]}
                  scale={[12.854, 12.854, 1.557]}>
                  <group name="Cylinder025_Gray_0" />
                  <mesh
                    name="Cylinder025_Gray_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder025_Gray_0001.geometry}
                    material={materials.Gray}
                  />
                  <group name="Cylinder025_Green001_0" />
                  <mesh
                    name="Cylinder025_Green001_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder025_Green001_0001.geometry}
                    material={materials.GreenPattern}
                  />
                  <group name="Cylinder025_Material008_0" />
                  <mesh
                    name="Cylinder025_Material008_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder025_Material008_0001.geometry}
                    material={materials['Material.008']}
                  />
                  <group name="Cylinder025_Silver_0" />
                  <mesh
                    name="Cylinder025_Silver_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder025_Silver_0001.geometry}
                    material={materials.Silver}
                  />
                </group>
                <group
                  name="Cylinder028"
                  position={[379.98, 627.814, -780.273]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[4.308, 4.308, 0.88]}>
                  <group name="Cylinder028_Brown_0" />
                  <mesh
                    name="Cylinder028_Brown_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder028_Brown_0001.geometry}
                    material={materials.Brown}
                  />
                  <group name="Cylinder028_BrownGlaze_0" />
                  <mesh
                    name="Cylinder028_BrownGlaze_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder028_BrownGlaze_0001.geometry}
                    material={materials.BrownGlaze}
                  />
                  <group name="Cylinder028_Gold_0" />
                  <mesh
                    name="Cylinder028_Gold_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder028_Gold_0001.geometry}
                    material={materials.Gold}
                  />
                  <group name="Cylinder028_Silver_0" />
                  <mesh
                    name="Cylinder028_Silver_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder028_Silver_0001.geometry}
                    material={materials.Silver}
                  />
                </group>
                <group
                  name="Cylinder037"
                  position={[743.074, 726.575, -812.405]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[1.946, 1.946, 2.205]}>
                  <group name="Cylinder037_Gloden_0" />
                  <mesh
                    name="Cylinder037_Gloden_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder037_Gloden_0001.geometry}
                    material={materials.Gloden}
                  />
                </group>
                <group
                  name="Cylinder038"
                  position={[723.313, 725.577, -830.016]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[0.669, 0.669, 0.59]}>
                  <group name="Cylinder038_Bordeux_0" />
                  <mesh
                    name="Cylinder038_Bordeux_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder038_Bordeux_0001.geometry}
                    material={materials.Stripey}
                  />
                </group>
                <group
                  name="Cylinder040"
                  position={[0, 150.575, 890.873]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[0.085, 0.085, 0.324]}>
                  <mesh
                    name="Cylinder040_Magenta_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder040_Magenta_0.geometry}
                    material={materials.Magenta}
                  />
                </group>
                <group
                  name="Cylinder041"
                  position={[747.976, 726.205, -813.003]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[0.669, 0.669, 0.59]}>
                  <group name="Cylinder041_bee_0" />
                  <mesh
                    name="Cylinder041_bee_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder041_bee_0001.geometry}
                    material={materials.material_39}
                  />
                  <group name="Cylinder041_Gold_0" />
                  <mesh
                    name="Cylinder041_Gold_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder041_Gold_0001.geometry}
                    material={materials.Gold}
                  />
                </group>
                <group
                  name="Cylinder045"
                  position={[0.211, 150.575, 890.873]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[0.085, 0.085, 0.263]}>
                  <mesh
                    name="Cylinder045_Material008_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder045_Material008_0.geometry}
                    material={materials['Material.008']}
                    position={[0, 0.001, 0]}
                  />
                </group>
                <group
                  name="Cylinder046"
                  position={[0.434, 203.166, 890.873]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[0.062, 0.062, 0.439]}>
                  <mesh
                    name="Cylinder046_LightBlue_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder046_LightBlue_0.geometry}
                    material={materials.water}
                    position={[0, 0.001, 0]}
                  />
                </group>
                <group
                  name="Cylinder056"
                  position={[586.086, 779.14, -817.389]}
                  rotation={[-Math.PI / 2, 0.53, 0]}
                  scale={[33.484, 32.177, 9.74]}>
                  <group name="Cylinder056_Glass002_0" />
                  <mesh
                    name="Cylinder056_Glass002_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder056_Glass002_0001.geometry}
                    material={materials['Glass.002']}
                  />
                  <group name="Cylinder056_Gold_0" />
                  <mesh
                    name="Cylinder056_Gold_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder056_Gold_0001.geometry}
                    material={materials.Gold}
                  />
                  <group name="Cylinder056_Walnut_0" />
                  <mesh
                    name="Cylinder056_Walnut_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder056_Walnut_0001.geometry}
                    material={materials.Walnut}
                  />
                </group>
                <group
                  name="Cylinder057"
                  position={[481.331, 855.397, -778.358]}
                  rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
                  scale={[55.956, 55.956, 0.45]}
                />
                <group
                  name="Cylinder058"
                  position={[480.916, 873.796, -779.656]}
                  rotation={[-Math.PI, 0, -Math.PI / 2]}
                  scale={[59.69, 59.69, 4.155]}
                />
                <group
                  name="Cylinder062"
                  position={[374.279, 733.605, -811.018]}
                  rotation={[-Math.PI / 2, 0, -0.171]}
                  scale={[-0.627, -0.627, -6.893]}>
                  <group name="Cylinder062_Gold_0" />
                  <mesh
                    name="Cylinder062_Gold_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder062_Gold_0001.geometry}
                    material={materials.Gold}
                  />
                  <group name="Cylinder062_Walnut_0" />
                  <mesh
                    name="Cylinder062_Walnut_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder062_Walnut_0001.geometry}
                    material={materials.Steel}
                  />
                </group>
                <group
                  name="Cylinder073"
                  position={[420.474, 428.457, -816.277]}
                  rotation={[Math.PI / 2, 0, 2.363]}
                  scale={[-2.408, -2.408, -2.842]}>
                  <group name="Cylinder073_Glass_0" />
                  <mesh
                    name="Cylinder073_Glass_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder073_Glass_0001.geometry}
                    material={materials.Glass}
                  />
                </group>
                <group
                  name="Cylinder074"
                  position={[451.53, 428.457, -816.277]}
                  rotation={[Math.PI / 2, 0, 2.363]}
                  scale={[-2.408, -2.408, -2.842]}>
                  <group name="Cylinder074_Glass_0" />
                  <mesh
                    name="Cylinder074_Glass_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder074_Glass_0001.geometry}
                    material={materials.Glass}
                  />
                </group>
                <group
                  name="Cylinder075"
                  position={[517.349, 428.457, -816.277]}
                  rotation={[Math.PI / 2, 0, 2.363]}
                  scale={[-2.408, -2.408, -2.842]}>
                  <group name="Cylinder075_Glass_0" />
                  <mesh
                    name="Cylinder075_Glass_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder075_Glass_0001.geometry}
                    material={materials.Glass}
                  />
                </group>
                <group
                  name="Cylinder076"
                  position={[549.23, 428.457, -816.277]}
                  rotation={[Math.PI / 2, 0, 2.363]}
                  scale={[-2.408, -2.408, -2.842]}>
                  <group name="Cylinder076_Glass_0" />
                  <mesh
                    name="Cylinder076_Glass_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder076_Glass_0001.geometry}
                    material={materials.Glass}
                  />
                </group>
                <group
                  name="Cylinder078"
                  position={[439.373, 710.371, -808.32]}
                  rotation={[-1.737, -0.17, -0.19]}
                  scale={[-3.19, -3.19, -35.087]}>
                  <group name="Cylinder078_Gold_0" />
                  <mesh
                    name="Cylinder078_Gold_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder078_Gold_0001.geometry}
                    material={materials.Gold}
                  />
                </group>
                <group
                  name="Cylinder082"
                  position={[681.107, 403.813, -761.046]}
                  rotation={[-1.356, 0.379, -0.31]}
                  scale={[0.083, 0.083, 12.091]}>
                  <group name="Cylinder082_Cheese_0" position={[0.001, 0.001, 0]} />
                  <mesh
                    name="Cylinder082_Cheese_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder082_Cheese_0001.geometry}
                    material={materials.Cheese}
                    position={[0.001, 0.001, 0]}
                  />
                  <group name="Cylinder082_Silver_0" position={[0.001, 0.001, 0]} />
                  <mesh
                    name="Cylinder082_Silver_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder082_Silver_0001.geometry}
                    material={materials.Silver}
                    position={[0.001, 0.001, 0]}
                  />
                </group>
                <group
                  name="Decoration003"
                  position={[456.199, 281.384, -831.282]}
                  rotation={[-Math.PI, 0, -Math.PI]}
                  scale={7.873}>
                  <group name="Decoration003_Magenta_0" />
                  <mesh
                    name="Decoration003_Magenta_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Decoration003_Magenta_0001.geometry}
                    material={materials.Magenta}
                  />
                  <group name="Decoration003_Pink_0" />
                  <mesh
                    name="Decoration003_Pink_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Decoration003_Pink_0001.geometry}
                    material={materials.Pink}
                  />
                  <group name="Decoration003_PurbleExtra_0" />
                  <mesh
                    name="Decoration003_PurbleExtra_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Decoration003_PurbleExtra_0001.geometry}
                    material={materials['Purble.Extra']}
                  />
                  <group name="Decoration003_Turquoise_0" />
                  <mesh
                    name="Decoration003_Turquoise_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Decoration003_Turquoise_0001.geometry}
                    material={materials.Turquoise}
                  />
                  <group name="Decoration003_Yellow_0" />
                  <mesh
                    name="Decoration003_Yellow_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Decoration003_Yellow_0001.geometry}
                    material={materials.Yellow}
                  />
                </group>
                <group
                  name="Decoration013"
                  position={[390.452, 502.609, -797.621]}
                  rotation={[Math.PI, -0.204, Math.PI]}
                  scale={3.033}>
                  <group name="Decoration013_Magenta_0" />
                  <mesh
                    name="Decoration013_Magenta_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Decoration013_Magenta_0001.geometry}
                    material={materials.Magenta}
                  />
                  <group name="Decoration013_Pink_0" />
                  <mesh
                    name="Decoration013_Pink_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Decoration013_Pink_0001.geometry}
                    material={materials.Pink}
                  />
                  <group name="Decoration013_PurbleExtra_0" />
                  <mesh
                    name="Decoration013_PurbleExtra_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Decoration013_PurbleExtra_0001.geometry}
                    material={materials['Purble.Extra']}
                  />
                  <group name="Decoration013_Turquoise_0" />
                  <mesh
                    name="Decoration013_Turquoise_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Decoration013_Turquoise_0001.geometry}
                    material={materials.Turquoise}
                  />
                  <group name="Decoration013_Yellow_0" />
                  <mesh
                    name="Decoration013_Yellow_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Decoration013_Yellow_0001.geometry}
                    material={materials.Yellow}
                  />
                </group>
                <group
                  name="Decoration014"
                  position={[619.497, 481.614, -806.435]}
                  rotation={[-Math.PI, 0, -Math.PI]}
                  scale={3.375}>
                  <group name="Decoration014_Green_0" />
                  <mesh
                    name="Decoration014_Green_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Decoration014_Green_0001.geometry}
                    material={materials.Green}
                  />
                  <group name="Decoration014_LightBlue_0" />
                  <mesh
                    name="Decoration014_LightBlue_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Decoration014_LightBlue_0001.geometry}
                    material={materials.water}
                  />
                  <group name="Decoration014_Pink_0" />
                  <mesh
                    name="Decoration014_Pink_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Decoration014_Pink_0001.geometry}
                    material={materials.Pink}
                  />
                  <group name="Decoration014_Purble_0" />
                  <mesh
                    name="Decoration014_Purble_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Decoration014_Purble_0001.geometry}
                    material={materials.Purble}
                  />
                </group>
                <group
                  name="Decoration015"
                  position={[721.931, 491.193, -858.047]}
                  rotation={[0, 0, Math.PI]}
                  scale={-7.772}>
                  <group name="Decoration015_Green_0" />
                  <mesh
                    name="Decoration015_Green_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Decoration015_Green_0001.geometry}
                    material={materials.Green}
                  />
                  <group name="Decoration015_LightBlue_0" />
                  <mesh
                    name="Decoration015_LightBlue_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Decoration015_LightBlue_0001.geometry}
                    material={materials.water}
                  />
                  <group name="Decoration015_Pink_0" />
                  <mesh
                    name="Decoration015_Pink_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Decoration015_Pink_0001.geometry}
                    material={materials.Pink}
                  />
                  <group name="Decoration015_Purble_0" />
                  <mesh
                    name="Decoration015_Purble_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Decoration015_Purble_0001.geometry}
                    material={materials.Purble}
                  />
                </group>
                <group
                  name="Gallibeeo"
                  position={[558.258, 732.344, -812.185]}
                  rotation={[-1.56, 0.094, 1.585]}
                  scale={[8.281, 8.281, 9.339]}>
                  <group name="Gallibeeo_bee_0" />
                  <mesh
                    name="Gallibeeo_bee_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Gallibeeo_bee_0001.geometry}
                    material={materials.material_39}
                  />
                  <group
                    name="Icosphere021"
                    position={[-0.107, -0.781, -0.444]}
                    scale={[0.21, 0.21, 0.186]}>
                    <group name="Icosphere021_Black001_0" />
                    <mesh
                      name="Icosphere021_Black001_0001"
                      castShadow
                      receiveShadow
                      geometry={nodes.Icosphere021_Black001_0001.geometry}
                      material={materials['Black.001']}
                    />
                    <group name="Icosphere021_Black_0" />
                    <mesh
                      name="Icosphere021_Black_0001"
                      castShadow
                      receiveShadow
                      geometry={nodes.Icosphere021_Black_0001.geometry}
                      material={materials.Black}
                    />
                    <group name="Icosphere021_LightBlue_0" />
                    <mesh
                      name="Icosphere021_LightBlue_0001"
                      castShadow
                      receiveShadow
                      geometry={nodes.Icosphere021_LightBlue_0001.geometry}
                      material={materials.water}
                    />
                  </group>
                </group>
                <group
                  name="Icosphere014"
                  position={[689.423, 422.627, -801.237]}
                  rotation={[-Math.PI / 2, 0, 0.409]}
                  scale={1.88}>
                  <group name="Icosphere014_Black_0" />
                  <mesh
                    name="Icosphere014_Black_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Icosphere014_Black_0001.geometry}
                    material={materials.Black}
                  />
                  <group name="Icosphere014_Brown_0" />
                  <mesh
                    name="Icosphere014_Brown_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Icosphere014_Brown_0001.geometry}
                    material={materials.Brown}
                  />
                </group>
                <group
                  name="Icosphere020"
                  position={[374.355, 738.609, -810.962]}
                  rotation={[-Math.PI / 2, 0.616, 0]}
                  scale={5.925}>
                  <group name="Icosphere020_Gold_0" />
                  <mesh
                    name="Icosphere020_Gold_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Icosphere020_Gold_0001.geometry}
                    material={materials.Metal}
                  />
                  <group name="Icosphere020_MagentaGem_0" />
                  <mesh
                    name="Icosphere020_MagentaGem_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Icosphere020_MagentaGem_0001.geometry}
                    material={materials.MagentaGem}
                  />
                </group>
                <group
                  name="Lamps002"
                  position={[834.693, 669.889, -814.734]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}>
                  <group name="Lamps002_Light_0" />
                  <mesh
                    name="Lamps002_Light_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Lamps002_Light_0001.geometry}
                    material={materials.Light}
                  />
                </group>
                <group
                  name="Lamps003"
                  position={[657.703, 660.811, -814.734]}
                  rotation={[-Math.PI / 2, 0, -Math.PI]}
                  scale={[-19.393, -19.393, -1.635]}>
                  <group name="Lamps003_Light_0" />
                  <mesh
                    name="Lamps003_Light_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Lamps003_Light_0001.geometry}
                    material={materials.Light}
                  />
                </group>
                <group
                  name="Lamps004"
                  position={[746.069, 821.47, -814.734]}
                  rotation={[-Math.PI / 2, 0, -Math.PI]}
                  scale={[-19.393, -19.393, -1.635]}>
                  <group name="Lamps004_Light_0" />
                  <mesh
                    name="Lamps004_Light_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Lamps004_Light_0001.geometry}
                    material={materials.Light}
                  />
                </group>
                <group
                  name="Lamps005"
                  position={[481.065, 672.01, -814.734]}
                  rotation={[-Math.PI / 2, 0, -Math.PI]}
                  scale={[-19.393, -19.393, -1.635]}>
                  <group name="Lamps005_Light_0" />
                  <mesh
                    name="Lamps005_Light_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Lamps005_Light_0001.geometry}
                    material={materials.Light}
                    position={[-9.177, 0, 0]}
                  />
                </group>
                <group
                  name="Original007"
                  position={[421.656, 505.597, -853.482]}
                  scale={[102.71, 102.71, 67.55]}>
                  <group name="Original007_Brown_0" />
                  <mesh
                    name="Original007_Brown_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Original007_Brown_0001.geometry}
                    material={materials.Brown}
                  />
                  <group name="Original007_Gloden_0" />
                  <mesh
                    name="Original007_Gloden_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Original007_Gloden_0001.geometry}
                    material={materials.Gloden}
                  />
                  <group name="Original007_GlowyRange_0" />
                  <mesh
                    name="Original007_GlowyRange_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Original007_GlowyRange_0001.geometry}
                    material={materials.GlowyRange}
                  />
                  <group name="Original007_PastelBlue_0" />
                  <mesh
                    name="Original007_PastelBlue_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Original007_PastelBlue_0001.geometry}
                    material={materials.PastelBlue}
                  />
                  <group name="Original007_White_0" />
                  <mesh
                    name="Original007_White_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Original007_White_0001.geometry}
                    material={materials.White}
                  />
                </group>
                <group
                  name="Original008"
                  position={[305.52, 571.024, -876.604]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}>
                  <group name="Original008_Brick001_0" />
                  <mesh
                    name="Original008_Brick001_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Original008_Brick001_0001.geometry}
                    material={materials.Brick}
                  />
                </group>
                <group
                  name="Original010"
                  position={[834.133, 585.158, -835.749]}
                  scale={[102.71, 102.71, 67.55]}>
                  <group name="Original010_Brown_0" />
                  <mesh
                    name="Original010_Brown_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Original010_Brown_0001.geometry}
                    material={materials.Brown}
                  />
                  <group name="Original010_Gloden_0" />
                  <mesh
                    name="Original010_Gloden_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Original010_Gloden_0001.geometry}
                    material={materials.Gloden}
                  />
                  <group name="Original010_GlowyRange_0" />
                  <mesh
                    name="Original010_GlowyRange_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Original010_GlowyRange_0001.geometry}
                    material={materials.GlowyRange}
                  />
                  <group name="Original010_lightbrpwn_0" />
                  <mesh
                    name="Original010_lightbrpwn_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Original010_lightbrpwn_0001.geometry}
                    material={materials.lightbrpwn}
                  />
                </group>
                <group
                  name="Original014"
                  position={[746.674, 737.689, -835.749]}
                  scale={[102.71, 102.71, 67.55]}>
                  <group name="Original014_Brown_0" />
                  <mesh
                    name="Original014_Brown_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Original014_Brown_0001.geometry}
                    material={materials.Brown}
                  />
                  <group name="Original014_Gloden_0" />
                  <mesh
                    name="Original014_Gloden_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Original014_Gloden_0001.geometry}
                    material={materials.Gloden}
                  />
                  <group name="Original014_GlowyRange_0" />
                  <mesh
                    name="Original014_GlowyRange_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Original014_GlowyRange_0001.geometry}
                    material={materials.GlowyRange}
                  />
                  <group name="Original014_Walnut_0" />
                  <mesh
                    name="Original014_Walnut_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Original014_Walnut_0001.geometry}
                    material={materials.Walnut}
                  />
                </group>
                <group
                  name="Original015"
                  position={[665.204, 757.862, -803.579]}
                  scale={[54.023, 62.389, 17.297]}>
                  <group name="Original015_Pages_0" />
                  <mesh
                    name="Original015_Pages_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Original015_Pages_0001.geometry}
                    material={materials['Pages.001']}
                  />
                </group>
                <group
                  name="Original016"
                  position={[752.868, 590.397, -817.508]}
                  scale={[36.634, 29.145, 13.474]}>
                  <group name="Original016_Material005_0" />
                  <mesh
                    name="Original016_Material005_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Original016_Material005_0001.geometry}
                    material={materials['Material.006']}
                  />
                </group>
                <group
                  name="Original022"
                  position={[481.399, 787.475, -839.202]}
                  scale={[102.71, 102.71, 67.55]}>
                  <group name="Original022_Brown002_0" />
                  <mesh
                    name="Original022_Brown002_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Original022_Brown002_0001.geometry}
                    material={materials['Brown.002']}
                  />
                  <mesh
                    name="Original022_Gloden_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Original022_Gloden_0.geometry}
                    material={materials.Gloden}
                  />
                  <group name="Original022_GlowyRange_0" />
                  <mesh
                    name="Original022_GlowyRange_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Original022_GlowyRange_0001.geometry}
                    material={materials.GlowyRange}
                  />
                  <group name="Original022_Walnut_0" />
                  <mesh
                    name="Original022_Walnut_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Original022_Walnut_0001.geometry}
                    material={materials.Walnut}
                  />
                </group>
                <group
                  name="Original023"
                  position={[658.786, 584.629, -835.749]}
                  scale={[102.71, 102.71, 67.55]}>
                  <group name="Original023_Brown_0" />
                  <mesh
                    name="Original023_Brown_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Original023_Brown_0001.geometry}
                    material={materials.Brown}
                  />
                  <group name="Original023_Gloden_0" />
                  <mesh
                    name="Original023_Gloden_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Original023_Gloden_0001.geometry}
                    material={materials.Gloden}
                  />
                  <group name="Original023_GlowyRange_0" />
                  <mesh
                    name="Original023_GlowyRange_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Original023_GlowyRange_0001.geometry}
                    material={materials.GlowyRange}
                  />
                  <group name="Original023_Walnut_0" />
                  <mesh
                    name="Original023_Walnut_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Original023_Walnut_0001.geometry}
                    material={materials.Carvalho}
                  />
                </group>
                <group
                  name="Original024"
                  position={[481.165, 398.764, -813.492]}
                  scale={[218.649, 102.71, 67.55]}>
                  <group name="Original024_Brown_0" />
                  <mesh
                    name="Original024_Brown_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Original024_Brown_0001.geometry}
                    material={materials.Brown}
                  />
                </group>
                <group
                  name="Original029"
                  position={[743.366, 430.919, -835.749]}
                  scale={[102.71, 102.71, 67.55]}>
                  <group name="Original029_Bordeux_0" />
                  <mesh
                    name="Original029_Bordeux_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Original029_Bordeux_0001.geometry}
                    material={materials.Stripey}
                  />
                  <group name="Original029_Brown_0" />
                  <mesh
                    name="Original029_Brown_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Original029_Brown_0001.geometry}
                    material={materials.Brown}
                  />
                  <group name="Original029_Gloden_0" />
                  <mesh
                    name="Original029_Gloden_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Original029_Gloden_0001.geometry}
                    material={materials.Gloden}
                  />
                  <group name="Original029_GlowyRange_0" />
                  <mesh
                    name="Original029_GlowyRange_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Original029_GlowyRange_0001.geometry}
                    material={materials.GlowyRange}
                  />
                  <group name="Original029_Walnut_0" />
                  <mesh
                    name="Original029_Walnut_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Original029_Walnut_0001.geometry}
                    material={materials.Walnut}
                  />
                </group>
                <group
                  name="Plane010"
                  position={[524.318, 564.166, -770.307]}
                  rotation={[Math.PI / 2, 0, 2.734]}
                  scale={-8.921}>
                  <group name="Plane010_Brown_0" />
                  <mesh
                    name="Plane010_Brown_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane010_Brown_0001.geometry}
                    material={materials.Brown}
                  />
                  <group name="Plane010_Gray_0" />
                  <mesh
                    name="Plane010_Gray_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane010_Gray_0001.geometry}
                    material={materials.Gray}
                  />
                </group>
                <group
                  name="Plane011"
                  position={[555.545, 598.102, -781.393]}
                  rotation={[-1.592, 0.001, 0.003]}
                  scale={100}>
                  <group name="Plane011_Brown_0" />
                  <mesh
                    name="Plane011_Brown_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane011_Brown_0001.geometry}
                    material={materials.Brown}
                  />
                  <group name="Plane011_Gray_0" />
                  <mesh
                    name="Plane011_Gray_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane011_Gray_0001.geometry}
                    material={materials.Gray}
                  />
                </group>
                <group
                  name="Plane012"
                  position={[537.586, 571.695, -857.122]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[10.526, 10.526, 15.145]}>
                  <group name="Plane012_BrownGlaze_0" />
                  <mesh
                    name="Plane012_BrownGlaze_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane012_BrownGlaze_0001.geometry}
                    material={materials.BrownGlaze}
                  />
                  <group name="Plane012_Greenish_0" />
                  <mesh
                    name="Plane012_Greenish_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane012_Greenish_0001.geometry}
                    material={materials.Greenish}
                  />
                  <group name="Plane012_Silver_0" />
                  <mesh
                    name="Plane012_Silver_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane012_Silver_0001.geometry}
                    material={materials.Silver}
                  />
                </group>
                <group
                  name="Plane013"
                  position={[556.161, 598.588, -801.583]}
                  rotation={[Math.PI / 2, 1.544, -3.087]}
                  scale={[-22.06, -0.658, -85.15]}>
                  <group name="Plane013_Gray_0" />
                  <mesh
                    name="Plane013_Gray_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane013_Gray_0001.geometry}
                    material={materials.Gray}
                  />
                </group>
                <group
                  name="Plane014"
                  position={[544.713, 572.119, -789.151]}
                  rotation={[1.57, -0.01, 1.138]}
                  scale={[-20.236, -0.604, -78.112]}>
                  <group name="Plane014_Gray_0" />
                  <mesh
                    name="Plane014_Gray_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane014_Gray_0001.geometry}
                    material={materials.Gray}
                  />
                </group>
                <group
                  name="Plane015"
                  position={[361.182, 552.067, -840.018]}
                  rotation={[-Math.PI / 2, 0, 0.093]}
                  scale={[15.399, 28.439, 31.51]}>
                  <group name="Plane015_Books_0" />
                  <mesh
                    name="Plane015_Books_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane015_Books_0001.geometry}
                    material={materials.GreenPattern}
                  />
                </group>
                <group
                  name="Plane017"
                  position={[668.743, 585.693, -868.965]}
                  rotation={[-0.21, 0, 0]}
                  scale={14.014}>
                  <group name="Plane017_Black_0" />
                  <mesh
                    name="Plane017_Black_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane017_Black_0001.geometry}
                    material={materials.Black}
                  />
                  <group name="Plane017_Brown002_0" />
                  <mesh
                    name="Plane017_Brown002_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane017_Brown002_0001.geometry}
                    material={materials.wood}
                  />
                  <group name="Plane017_Silver_0" />
                  <mesh
                    name="Plane017_Silver_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane017_Silver_0001.geometry}
                    material={materials.Silver}
                  />
                  <group name="Plane017_Walnut_0" />
                  <mesh
                    name="Plane017_Walnut_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane017_Walnut_0001.geometry}
                    material={materials.Walnut}
                  />
                </group>
                <group
                  name="Plane018"
                  position={[612.476, 568.148, -818.152]}
                  rotation={[-1.607, 0, 0]}
                  scale={7.599}>
                  <group name="Plane018_Black_0" />
                  <mesh
                    name="Plane018_Black_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane018_Black_0001.geometry}
                    material={materials.Black}
                  />
                  <group name="Plane018_Brown002_0" />
                  <mesh
                    name="Plane018_Brown002_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane018_Brown002_0001.geometry}
                    material={materials.wood}
                  />
                  <group name="Plane018_Silver_0" />
                  <mesh
                    name="Plane018_Silver_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane018_Silver_0001.geometry}
                    material={materials.Silver}
                  />
                  <group name="Plane018_Walnut_0" />
                  <mesh
                    name="Plane018_Walnut_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane018_Walnut_0001.geometry}
                    material={materials.wood}
                  />
                </group>
                <group
                  name="Plane021"
                  position={[592.718, 565.774, -790.717]}
                  rotation={[-1.341, 0.941, 2.86]}
                  scale={[10.792, 14.197, 14.197]}>
                  <group name="Plane021_Pages_0" />
                  <mesh
                    name="Plane021_Pages_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane021_Pages_0001.geometry}
                    material={materials['Pages.001']}
                  />
                  <group name="Plane021_Walnut_0" />
                  <mesh
                    name="Plane021_Walnut_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane021_Walnut_0001.geometry}
                    material={materials.Walnut}
                  />
                </group>
                <group
                  name="Plane022"
                  position={[716.021, 565.774, -855.014]}
                  rotation={[-0.921, -0.767, 0.83]}
                  scale={[10.792, 14.197, 14.197]}>
                  <group name="Plane022_Pages_0" />
                  <mesh
                    name="Plane022_Pages_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane022_Pages_0001.geometry}
                    material={materials['Pages.001']}
                  />
                  <group name="Plane022_Walnut_0" />
                  <mesh
                    name="Plane022_Walnut_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane022_Walnut_0001.geometry}
                    material={materials.Walnut}
                  />
                </group>
                <group
                  name="Plane052"
                  position={[481.192, 780.302, -779.148]}
                  scale={[5.948, 13.543, 39.2]}>
                  <group name="Plane052_Magenta_0" />
                </group>
                <group
                  name="Plane054"
                  position={[650.497, 759.587, -810.909]}
                  rotation={[1.318, 0, 0]}
                  scale={[-0.038, -9.898, -22.816]}>
                  <group name="Plane054_Bordeux_0" position={[0.002, 0, 0]} />
                  <mesh
                    name="Plane054_Bordeux_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane054_Bordeux_0001.geometry}
                    material={materials.Stripey}
                    position={[0.002, 0, 0]}
                  />
                  <group name="Plane054_StarMap_0" position={[0.002, 0, 0]} />
                  <mesh
                    name="Plane054_StarMap_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane054_StarMap_0001.geometry}
                    material={materials.posters}
                    position={[0.002, 0, 0]}
                  />
                  <group name="Plane054_Wax_0" position={[0.002, 0, 0]} />
                  <mesh
                    name="Plane054_Wax_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane054_Wax_0001.geometry}
                    material={materials.material}
                    position={[0.002, 0, 0]}
                  />
                </group>
                <group
                  name="Plane058"
                  position={[343.391, 783.403, -792.929]}
                  rotation={[-Math.PI / 2, 0, -3.079]}
                  scale={[15, 15, 14.341]}>
                  <group name="Plane058_Brown001_0" />
                  <mesh
                    name="Plane058_Brown001_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane058_Brown001_0001.geometry}
                    material={materials['Brown.001']}
                  />
                  <group name="Plane058_Green002_0" />
                  <mesh
                    name="Plane058_Green002_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane058_Green002_0001.geometry}
                    material={materials['Green.002']}
                  />
                  <group name="Plane058_Green_0" />
                  <mesh
                    name="Plane058_Green_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane058_Green_0001.geometry}
                    material={materials.Green}
                  />
                  <group name="Plane058_LightBlue_0" />
                  <mesh
                    name="Plane058_LightBlue_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane058_LightBlue_0001.geometry}
                    material={materials.water}
                  />
                  <group name="Plane058_White_0" />
                  <mesh
                    name="Plane058_White_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane058_White_0001.geometry}
                    material={materials.White}
                  />
                </group>
                <group
                  name="Plane059"
                  position={[385.717, 809.834, -807.61]}
                  rotation={[-Math.PI / 2, 0, -3.079]}
                  scale={[15, 15, 14.341]}>
                  <group name="Plane059_Brown001_0" />
                  <mesh
                    name="Plane059_Brown001_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane059_Brown001_0001.geometry}
                    material={materials['Brown.001']}
                  />
                  <group name="Plane059_Green002_0" />
                  <mesh
                    name="Plane059_Green002_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane059_Green002_0001.geometry}
                    material={materials['Green.002']}
                  />
                  <group name="Plane059_Green_0" />
                  <mesh
                    name="Plane059_Green_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane059_Green_0001.geometry}
                    material={materials.Green}
                  />
                  <group name="Plane059_LightBlue_0" />
                  <mesh
                    name="Plane059_LightBlue_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane059_LightBlue_0001.geometry}
                    material={materials.water}
                  />
                  <group name="Plane059_White_0" />
                  <mesh
                    name="Plane059_White_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane059_White_0001.geometry}
                    material={materials.White}
                  />
                </group>
                <group
                  name="Plane064"
                  position={[624.798, 638.063, -807.611]}
                  rotation={[-Math.PI / 2, 0, -2.547]}
                  scale={[15, 15, 14.341]}>
                  <group name="Plane064_Brown001_0" />
                  <mesh
                    name="Plane064_Brown001_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane064_Brown001_0001.geometry}
                    material={materials['Brown.001']}
                  />
                  <group name="Plane064_Green002_0" />
                  <mesh
                    name="Plane064_Green002_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane064_Green002_0001.geometry}
                    material={materials['Green.002']}
                  />
                  <group name="Plane064_Green_0" />
                  <mesh
                    name="Plane064_Green_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane064_Green_0001.geometry}
                    material={materials.Green}
                  />
                  <group name="Plane064_LightBlue_0" />
                  <mesh
                    name="Plane064_LightBlue_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane064_LightBlue_0001.geometry}
                    material={materials.water}
                  />
                  <group name="Plane064_White_0" />
                  <mesh
                    name="Plane064_White_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane064_White_0001.geometry}
                    material={materials.White}
                  />
                </group>
                <group
                  name="Plane068"
                  position={[553.955, 492.393, -792.295]}
                  rotation={[-Math.PI / 2, 0, -3.079]}
                  scale={[15, 15, 14.341]}>
                  <group name="Plane068_Brown001_0" />
                  <mesh
                    name="Plane068_Brown001_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane068_Brown001_0001.geometry}
                    material={materials['Brown.001']}
                  />
                  <group name="Plane068_Green002_0" />
                  <mesh
                    name="Plane068_Green002_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane068_Green002_0001.geometry}
                    material={materials['Green.002']}
                  />
                  <group name="Plane068_Green_0" />
                  <mesh
                    name="Plane068_Green_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane068_Green_0001.geometry}
                    material={materials.Green}
                  />
                  <group name="Plane068_HoneyComb_0" />
                  <mesh
                    name="Plane068_HoneyComb_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane068_HoneyComb_0001.geometry}
                    material={materials.HoneyComb}
                  />
                  <group name="Plane068_LightBlue_0" />
                  <mesh
                    name="Plane068_LightBlue_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane068_LightBlue_0001.geometry}
                    material={materials.water}
                  />
                </group>
                <group
                  name="Plane070"
                  position={[635.17, 418.565, -858.98]}
                  rotation={[-Math.PI / 2, 0, 2.862]}
                  scale={[11.463, 11.463, 25.709]}>
                  <group name="Plane070_Brown001_0" />
                  <mesh
                    name="Plane070_Brown001_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane070_Brown001_0001.geometry}
                    material={materials['Brown.001']}
                  />
                  <group name="Plane070_BrownGlaze_0" />
                  <mesh
                    name="Plane070_BrownGlaze_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane070_BrownGlaze_0001.geometry}
                    material={materials.BrownGlaze}
                  />
                  <group name="Plane070_Green002_0" />
                  <mesh
                    name="Plane070_Green002_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane070_Green002_0001.geometry}
                    material={materials['Green.002']}
                  />
                  <group name="Plane070_Greenish_0" />
                  <mesh
                    name="Plane070_Greenish_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane070_Greenish_0001.geometry}
                    material={materials.Greenish}
                  />
                </group>
                <group
                  name="Plane071"
                  position={[631.775, 418.565, -755.151]}
                  rotation={[-Math.PI / 2, 0, 0.425]}
                  scale={[11.463, 11.463, 25.709]}>
                  <group name="Plane071_Brown001_0" />
                  <mesh
                    name="Plane071_Brown001_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane071_Brown001_0001.geometry}
                    material={materials['Brown.001']}
                  />
                  <group name="Plane071_BrownGlaze_0" />
                  <mesh
                    name="Plane071_BrownGlaze_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane071_BrownGlaze_0001.geometry}
                    material={materials.BrownGlaze}
                  />
                  <group name="Plane071_Green_0" />
                  <mesh
                    name="Plane071_Green_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane071_Green_0001.geometry}
                    material={materials.Green}
                  />
                  <group name="Plane071_Greenish_0" />
                  <mesh
                    name="Plane071_Greenish_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane071_Greenish_0001.geometry}
                    material={materials.Greenish}
                  />
                </group>
                <group
                  name="Plane073"
                  position={[314.083, 460.383, -809.358]}
                  rotation={[-Math.PI / 2, 0, Math.PI]}
                  scale={[169.62, 154.492, 147.059]}>
                  <group name="Plane073_Gold_0" />
                  <mesh
                    name="Plane073_Gold_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane073_Gold_0001.geometry}
                    material={materials.Gold}
                  />
                  <group name="Plane073_Picterr3_0" />
                  <mesh
                    name="Plane073_Picterr3_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane073_Picterr3_0001.geometry}
                    material={materials['Material.014']}
                  />
                </group>
                <group
                  name="Plane103"
                  position={[802.621, 411.775, -799.16]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[23.021, 63.633, 42.636]}>
                  <group name="Plane103_Gloden_0" />
                  <mesh
                    name="Plane103_Gloden_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane103_Gloden_0001.geometry}
                    material={materials.Gloden}
                  />
                  <group name="Plane103_Magenta_0" />
                  <mesh
                    name="Plane103_Magenta_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane103_Magenta_0001.geometry}
                    material={materials.Magenta}
                  />
                </group>
                <group
                  name="Plane104"
                  position={[802.913, 440.525, -793.687]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[21.556, 63.633, 42.636]}>
                  <group name="Plane104_Blue001_0" />
                  <mesh
                    name="Plane104_Blue001_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane104_Blue001_0001.geometry}
                    material={materials.Blue}
                  />
                </group>
                <group
                  name="Plane105"
                  position={[802.913, 468.321, -793.524]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[21.556, 63.633, 42.636]}>
                  <group name="Plane105_Purble_0" />
                  <mesh
                    name="Plane105_Purble_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane105_Purble_0001.geometry}
                    material={materials.Purble}
                  />
                </group>
                <group
                  name="Sphere"
                  position={[282.657, 364.483, -788.36]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={9.612}
                />
                <group
                  name="Sphere001"
                  position={[251.565, 568.578, -785.823]}
                  rotation={[-1.541, -0.616, 0.081]}
                  scale={15.792}>
                  <group name="Sphere001_Magenta_0" />
                  <mesh
                    name="Sphere001_Magenta_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere001_Magenta_0001.geometry}
                    material={materials['Material.011']}
                  />
                </group>
                <group
                  name="Stool010"
                  position={[690.304, 715.857, -788.152]}
                  rotation={[-Math.PI / 2, 0, 0.676]}
                  scale={[11.427, 11.427, 1.954]}>
                  <group name="Stool010_Brown_0" />
                  <mesh
                    name="Stool010_Brown_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Stool010_Brown_0001.geometry}
                    material={materials.Brown}
                  />
                  <group name="Stool010_Magenta_0" />
                  <mesh
                    name="Stool010_Magenta_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Stool010_Magenta_0001.geometry}
                    material={materials.Magenta}
                  />
                </group>
                <group
                  name="Stool011"
                  position={[771.263, 715.857, -863.206]}
                  rotation={[-Math.PI / 2, 0, 2.216]}
                  scale={[11.427, 11.427, 1.954]}>
                  <group name="Stool011_Brown_0" />
                  <mesh
                    name="Stool011_Brown_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Stool011_Brown_0001.geometry}
                    material={materials.Brown}
                  />
                  <group name="Stool011_Magenta_0" />
                  <mesh
                    name="Stool011_Magenta_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Stool011_Magenta_0001.geometry}
                    material={materials.Magenta}
                  />
                </group>
                <group
                  name="Stool012"
                  position={[888.446, 563.519, -794.044]}
                  rotation={[-Math.PI / 2, 0, -0.584]}
                  scale={[11.427, 11.427, 1.954]}>
                  <group name="Stool012_Brown_0" />
                  <mesh
                    name="Stool012_Brown_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Stool012_Brown_0001.geometry}
                    material={materials.Brown}
                  />
                  <group name="Stool012_Magenta_0" />
                  <mesh
                    name="Stool012_Magenta_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Stool012_Magenta_0001.geometry}
                    material={materials.Magenta}
                  />
                </group>
                <group
                  name="Stool014"
                  position={[558.51, 715.366, -813.015]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[11.427, 11.427, 1.954]}>
                  <group name="Stool014_Brown_0" />
                  <mesh
                    name="Stool014_Brown_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Stool014_Brown_0001.geometry}
                    material={materials.Brown}
                  />
                  <group name="Stool014_Magenta_0" />
                  <mesh
                    name="Stool014_Magenta_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Stool014_Magenta_0001.geometry}
                    material={materials.Magenta}
                  />
                </group>
                <group
                  name="Table004"
                  position={[596.78, 565.916, -859.399]}
                  rotation={[-Math.PI / 2, 0, -2.741]}
                  scale={[-14.183, -14.183, -1.23]}>
                  <group name="Table004_Brown_0" />
                  <mesh
                    name="Table004_Brown_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Table004_Brown_0001.geometry}
                    material={materials.Brown}
                  />
                  <group name="Table004_Gloden_0" />
                  <mesh
                    name="Table004_Gloden_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Table004_Gloden_0001.geometry}
                    material={materials.Gloden}
                  />
                </group>
                <group
                  name="Table010"
                  position={[578.289, 717.262, -790.442]}
                  rotation={[-Math.PI / 2, 0, -2.741]}
                  scale={[-22.014, -22.014, -1.037]}>
                  <group name="Table010_Brown_0" />
                  <mesh
                    name="Table010_Brown_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Table010_Brown_0001.geometry}
                    material={materials.Brown}
                  />
                  <group name="Table010_Gloden_0" />
                  <mesh
                    name="Table010_Gloden_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Table010_Gloden_0001.geometry}
                    material={materials.Gloden}
                  />
                </group>
                <group
                  name="Triple003"
                  position={[482.518, 552.905, -813.496]}
                  scale={[102.71, 102.71, 67.55]}>
                  <group name="Triple003_Black_0" />
                  <mesh
                    name="Triple003_Black_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Triple003_Black_0001.geometry}
                    material={materials.Black}
                  />
                  <group name="Triple003_Rock_0" />
                  <mesh
                    name="Triple003_Rock_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Triple003_Rock_0001.geometry}
                    material={materials.floor}
                  />
                </group>
                <group
                  name="Triple004"
                  position={[481.504, 597.523, -813.483]}
                  scale={[98.163, 98.163, 64.56]}>
                  <group name="Triple004_Brick002_0" />
                  <mesh
                    name="Triple004_Brick002_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Triple004_Brick002_0001.geometry}
                    material={materials.Brick}
                  />
                </group>
                <group
                  name="Triple005"
                  position={[481.504, 659.393, -813.487]}
                  scale={[100.16, 100.16, 65.874]}>
                  <group name="Triple005_SOOT_0" />
                  <mesh
                    name="Triple005_SOOT_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Triple005_SOOT_0001.geometry}
                    material={materials.Gloden}
                  />
                </group>
                <group
                  name="Triple006"
                  position={[306.619, 550.581, -813.496]}
                  scale={[102.71, 102.71, 67.55]}>
                  <group name="Triple006_Black_0" />
                  <mesh
                    name="Triple006_Black_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Triple006_Black_0001.geometry}
                    material={materials.Black}
                  />
                  <group name="Triple006_DarkPurble_0" />
                  <mesh
                    name="Triple006_DarkPurble_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Triple006_DarkPurble_0001.geometry}
                    material={materials['Material.013']}
                  />
                </group>
                <group
                  name="Triple007"
                  position={[481.408, 617.251, -858.006]}
                  scale={[102.71, 102.71, 67.55]}>
                  <group name="Triple007_Gloden_0" />
                  <mesh
                    name="Triple007_Gloden_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Triple007_Gloden_0001.geometry}
                    material={materials.Gloden}
                  />
                  <group name="Triple007_GlowyRange_0" />
                  <mesh
                    name="Triple007_GlowyRange_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Triple007_GlowyRange_0001.geometry}
                    material={materials.GlowyRange}
                  />
                </group>
                <group
                  name="Triple008"
                  position={[481.853, 552.028, -813.493]}
                  scale={[102.71, 102.71, 67.55]}>
                  <group name="Triple008_Brown_0" />
                  <mesh
                    name="Triple008_Brown_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Triple008_Brown_0001.geometry}
                    material={materials.Brown}
                  />
                </group>
                <group
                  name="Triple011"
                  position={[744.98, 706.041, -813.496]}
                  rotation={[0, 0.028, 0]}
                  scale={[72.704, 56.622, 47.816]}>
                  <group name="Triple011_Black_0" />
                  <mesh
                    name="Triple011_Black_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Triple011_Black_0001.geometry}
                    material={materials.Black}
                  />
                  <group name="Triple011_Bordeux_0" />
                  <mesh
                    name="Triple011_Bordeux_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Triple011_Bordeux_0001.geometry}
                    material={materials.Stripey}
                  />
                </group>
                <group
                  name="Triple012"
                  position={[823.609, 553.731, -805.568]}
                  rotation={[0, 0.006, 0]}
                  scale={[72.704, 56.622, 47.816]}>
                  <group name="Triple012_Black_0" />
                  <mesh
                    name="Triple012_Black_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Triple012_Black_0001.geometry}
                    material={materials.Black}
                  />
                  <group name="Triple012_Bordeux_0" />
                  <mesh
                    name="Triple012_Bordeux_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Triple012_Bordeux_0001.geometry}
                    material={materials.Stripey}
                  />
                  <group name="Triple012_Wall_0" />
                  <mesh
                    name="Triple012_Wall_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Triple012_Wall_0001.geometry}
                    material={materials.persian}
                  />
                </group>
                <group
                  name="Triple019"
                  position={[396.129, 705.46, -810.966]}
                  rotation={[0, 0.006, 0]}
                  scale={[86.551, 50.143, 56.923]}>
                  <group name="Triple019_Black_0" />
                  <mesh
                    name="Triple019_Black_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Triple019_Black_0001.geometry}
                    material={materials.Black}
                  />
                  <group name="Triple019_Bordeux_0" />
                  <mesh
                    name="Triple019_Bordeux_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Triple019_Bordeux_0001.geometry}
                    material={materials.Stripey}
                  />
                  <group name="Triple019_Wall_0" />
                  <mesh
                    name="Triple019_Wall_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Triple019_Wall_0001.geometry}
                    material={materials.Wall}
                  />
                </group>
                <group
                  name="Triple020"
                  position={[570.03, 705.424, -801.237]}
                  rotation={[0, -0.116, 0]}
                  scale={[49.616, 28.744, 36.921]}>
                  <group name="Triple020_Black_0" />
                  <mesh
                    name="Triple020_Black_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Triple020_Black_0001.geometry}
                    material={materials.Black}
                  />
                  <group name="Triple020_Bordeux_0" />
                  <mesh
                    name="Triple020_Bordeux_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Triple020_Bordeux_0001.geometry}
                    material={materials.Stripey}
                  />
                  <group name="Triple020_Turquoise002_0" />
                  <mesh
                    name="Triple020_Turquoise002_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Triple020_Turquoise002_0001.geometry}
                    material={materials['Turquoise.002']}
                  />
                </group>
                <group
                  name="Triple022"
                  position={[480.054, 399.918, -813.537]}
                  rotation={[Math.PI, -0.006, 0]}
                  scale={[-168.824, -73.911, -57.637]}>
                  <group name="Triple022_Black_0" />
                  <mesh
                    name="Triple022_Black_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Triple022_Black_0001.geometry}
                    material={materials.Black}
                  />
                  <group name="Triple022_Bordeux_0" />
                  <mesh
                    name="Triple022_Bordeux_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Triple022_Bordeux_0001.geometry}
                    material={materials.Stripey}
                  />
                  <group name="Triple022_lightbrpwn_0" />
                  <mesh
                    name="Triple022_lightbrpwn_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Triple022_lightbrpwn_0001.geometry}
                    material={materials.lightbrpwn}
                  />
                  <group name="Triple022_Wall_0" />
                  <mesh
                    name="Triple022_Wall_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Triple022_Wall_0001.geometry}
                    material={materials.Wall}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
        <group name="Decoration_Purble_0" />
        <group
          name="Spot003"
          position={[20.947, 0, 31.163]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={[-1.581, -7.334, -1.581]}>
          <group name="Object_26" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_27" />
          </group>
        </group>
        <group
          name="Spot008"
          position={[25.682, 0, 126.746]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={[-1.581, -7.334, -1.581]}>
          <group name="Object_41" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_42" />
          </group>
        </group>
        <group
          name="Spot009"
          position={[26.958, 0, -59.522]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={[-1.581, -7.334, -1.581]}>
          <group name="Object_44" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_45" />
          </group>
        </group>
        <group
          name="Spot012"
          position={[20.83, 0, 218.758]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={[-1.581, -7.334, -1.581]}>
          <group name="Object_53" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_54" />
          </group>
        </group>
        <group
          name="Spot013"
          position={[31.569, 0, 33.013]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={[-1.581, -7.334, -1.581]}>
          <group name="Object_56" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_57" />
          </group>
        </group>
        <group
          name="Spot014"
          position={[35.825, 0, -61.099]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={[-1.581, -7.334, -1.581]}>
          <group name="Object_59" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_60" />
          </group>
        </group>
        <group
          name="Spot015"
          position={[40.657, 0, 33.538]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={[-1.581, -7.334, -1.581]}>
          <group name="Object_62" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_63" />
          </group>
        </group>
        <group
          name="Spot023"
          position={[35.984, 0, -169.677]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={[-1.581, -7.334, -1.581]}>
          <group name="Object_86" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_87" />
          </group>
        </group>
        <group
          name="Spot024"
          position={[49.438, 0, -154.561]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={[-1.581, -7.334, -1.581]}>
          <group name="Object_89" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_90" />
          </group>
        </group>
        <group
          name="Spot027"
          position={[49.009, 1.321, 33.932]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={[-1.581, -7.334, -1.581]}>
          <group name="Object_98" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_99" />
          </group>
        </group>
        <group name="Triple013_Wall_0" />
        <group name="Triple013_Black_0" />
        <group name="Triple013_Bordeux_0" />
        <group name="Triple014_Wall_0" />
        <group name="Triple014_Black_0" />
        <group name="Triple014_Books_0" />
        <group name="Triple018_Arcade_0" />
        <group name="Triple018_Glass002_0" />
        <group name="Decoration008_Glowy_0" />
        <group name="Decoration009_Glowy_0" />
        <group name="Decoration010_Glowy_0" />
        <group name="Decoration011_Glowy_0" />
        <group name="Decoration012_Glowy_0" />
        <group name="Triple024_Wall_0" />
        <group name="Triple024_Black_0" />
        <group name="Triple024_Books_0" />
        <group name="Cube134_DarkPurble_0" />
        <group name="Cube134_Magenta_0" />
        <group name="Cube134_GlowyRange_0" />
        <group name="Cube134_Black_0" />
        <group name="Cube134_Silver_0" />
        <group name="Cube135_DarkPurble_0" />
        <group name="Cube135_LightBlue_0" />
        <group name="Cube135_GlowyRange_0" />
        <group name="Cube135_Black_0" />
        <group name="Cube135_Silver_0" />
        <group name="Cube136_DarkPurble_0" />
        <group name="Cube136_Material_0" />
        <group name="Cube136_GlowyRange_0" />
        <group name="Cube136_Black_0" />
        <group name="Cube136_Silver_0" />
        <group name="Cylinder053_Silver_0" />
        <group name="Cylinder053_Black_0" />
        <group name="Cylinder053_DarkPurble_0" />
        <group name="Cylinder053_Bordeux_0" />
        <group name="Cylinder053_Glowy_0" />
        <group name="Cylinder050_Silver_0" />
        <group name="Cylinder050_Black_0" />
        <group name="Cylinder050_LightBlue_0" />
        <group name="Cylinder050_Books_0" />
        <group name="Cylinder050_Glowy_0" />
        <group name="Cylinder052_Silver_0" />
        <group name="Cylinder052_Black_0" />
        <group name="Cylinder052_Material008_0" />
        <group name="Cylinder052_Yellow_0" />
        <group name="Cylinder052_Glowy_0" />
        <group name="Text_Glowy_0" />
        <group name="Text001_Glowy_0" />
        <group name="Plane002_Turquoise_0" />
        <group name="Stool018_Brown_0" />
        <group name="Stool018_Magenta_0" />
        <group name="Stool019_Brown_0" />
        <group name="Stool019_Magenta_0" />
        <group name="Cube004_Brown_0" />
        <group name="Cube004_Gold_0" />
        <group name="Books001_Turquoise_0" />
        <group name="Books001_Material024_0" />
        <group name="Books001_Green_0" />
        <group name="Books001_Blue_0" />
        <group name="Books001_Yellow_0" />
        <group name="Books001_Material008_0" />
        <group name="Books001_Magenta_0" />
        <group name="Cube012_GreenPattern001_0" />
        <group name="Cube012_Blue001_0" />
        <group name="Books005_Green_0" />
        <group name="Books005_Material024_0" />
        <group name="Books005_DarkBrown_0" />
        <group name="Books005_Brown001_0" />
        <group name="Books005_Greenish_0" />
        <group name="Books005_Glass_0" />
        <group name="Books005_Grey_0" />
        <group name="Books005_Wax_0" />
        <group name="Books005_BrownGlaze_0" />
        <group name="Books005_Black_0" />
        <group name="Books005_Turquoise001_0" />
        <group name="Books005_LightBlue_0" />
        <group name="Books005_Blue_0" />
        <group name="Books005_Magenta_0" />
        <group name="Books005_Material008_0" />
        <group name="Books005_Pink_0" />
        <group name="Books005_Purble_0" />
        <group name="Books005_lightbrpwn_0" />
        <group name="Books005_Green001_0" />
        <group name="Books005_Gloden001_0" />
        <group name="Books005_Material_0" />
        <group name="Books005_PurbleExtra_0" />
        <group name="Books005_Gold_0" />
        <group name="Books005_HoneyComb_0" />
        <group name="Books005_Silver_0" />
        <group name="Books006_PurbleExtra_0" />
        <group name="Books006_Material024_0" />
        <group name="Books006_Green_0" />
        <group name="Books006_GreenPattern_0" />
        <group name="Books006_Yellow_0" />
        <group name="Books006_Silver_0" />
        <group name="Books006_Magenta_0" />
        <group name="Table002_Brown_0" />
        <group name="Table002_Gloden_0" />
        <group name="Scales_Silver_0" />
        <group name="Original002_Pages_0" />
        <group name="Plane007_Turquoise003_0" />
        <group name="Plane007_DarkPurble_0" />
        <group name="Cylinder030_Silver_0" />
        <group name="Table009_Brown_0" />
        <group name="Table009_Gloden_0" />
        <group name="Cabinet009_Brown_0" />
        <group name="Cabinet009_Gloden_0" />
        <group name="Cube180_Magenta_0" />
        <group name="Cube180_Bordeux_0" />
        <group name="Cube180_Wax_0" />
        <group name="Cube180_LightBlue_0" />
        <group name="Cube180_Grey_0" />
        <group name="Cube180_Turquoise001_0" />
        <group name="Cube180_Turquoise003_0" />
        <group name="Cube179_Magenta_0" />
        <group name="Cube179_Grey_0" />
        <group name="Cube179_Wax_0" />
        <group name="Cube179_Greenish_0" />
        <group name="Cube179_Turquoise001_0" />
        <group name="Cube179_Turquoise003_0" />
        <group name="Cube181_Grey_0" />
        <group name="Stool016_Brown_0" />
        <group name="Stool016_Material_0" />
        <group name="Cube123_Pages001_0" />
        <group name="Cube123_Brown_0" />
        <group name="Plane072_Gold_0" />
        <group name="Plane072_God_0" />
        <group name="Plane078_Walnut_0" />
        <group name="Plane078_WIP_0" />
        <group name="Plane074_Bordeux_0" />
        <group name="Plane074_Gold_0" />
        <group name="Icosphere022_Magenta_0" />
        <group name="Icosphere022_Glowy_0" />
        <group name="Icosphere022_White_0" />
        <group name="Icosphere022_Grey_0" />
        <group name="Icosphere022_water_0" />
        <group name="Original019_Brown_0" />
        <group name="Original019_Gloden_0" />
        <group name="Original019_Turquoise002_0" />
        <group name="Original026_GlowyRange_0" />
        <group name="Original026_Brown_0" />
        <group name="Original026_Gloden_0" />
        <group name="Original026_RockMoss_0" />
        <group name="Cube165_Grey_0" />
        <group name="Cube165_Gloden_0" />
        <group name="Original031_Glowy_0" />
        <group name="Cube172_Grey_0" />
        <group name="Cube172_Wax_0" />
        <group name="Cube172_Black_0" />
        <group name="Cube173_Grey_0" />
        <group name="Circle087_Purble_0" />
        <group name="Cylinder077_Brown_0" />
        <group name="Original028_GlowyRange_0" />
        <group name="Original028_Brown_0" />
        <group name="Original028_Walnut_0" />
        <group name="Original028_Gloden_0" />
        <group name="Original028_LightBlue_0" />
        <group name="Cube176_Brown001_0" />
        <group name="Cube174_Brown001_0" />
        <group name="Plane077__0" />
        <group name="Original030_Glowy_0" />
        <group name="Triple015_Turquoise001_0" />
        <group name="Triple015_Black_0" />
        <group name="Triple015_Gold_0" />
        <group name="Decoration004_PurbleExtra_0" />
        <group name="Decoration004_Magenta_0" />
        <group name="Decoration004_Pink_0" />
        <group name="Decoration004_Turquoise_0" />
        <group name="Decoration004_Yellow_0" />
        <group name="Table006_Brown_0" />
        <group name="Table006_Gloden_0" />
        <group name="HoneyPotL009_BrownGlaze_0" />
        <group name="HoneyPotL009_Brown_0" />
        <group name="HoneyPotL009_Material_0" />
        <group name="HoneyPotL010_BrownGlaze_0" />
        <group name="HoneyPotL010_Brown_0" />
        <group name="HoneyPotL010_Material_0" />
        <group name="Cube101_Yellow_0" />
        <group name="Cube101_White_0" />
        <group name="Cube101_DarkBrown_0" />
        <group name="Cube101_Bordeux_0" />
        <group name="Cube101_Gloden_0" />
        <group name="Cube104_DarkBrown_0" />
        <group name="Cube104_Gold_0" />
        <group name="Bowl007_BrownGlaze_0" />
        <group name="Bowl007_LightBlue_0" />
        <group name="Original018_GlowyRange_0" />
        <group name="Original018_Brown_0" />
        <group name="Original018_Gloden_0" />
        <group name="Books028_Books_0" />
        <group name="Books028_Material024_0" />
        <group name="Books028_Turquoise003_0" />
        <group name="Books028_Material008_0" />
        <group name="Books028_Purble_0" />
        <group name="Books028_Magenta_0" />
        <group name="Books028_Blue_0" />
        <group name="Books028_Yellow_0" />
        <group name="Books030_Wall_0" />
        <group name="Books030_Wax_0" />
        <group name="Books030_Magenta_0" />
        <group name="Books030_Turquoise_0" />
        <group name="Books030_Pink_0" />
        <group name="Books030_PurbleExtra_0" />
        <group name="Books030_Brown_0" />
        <group name="Books030_Yellow_0" />
        <group name="Books030_Material008_0" />
        <group name="Books031_Wax_0" />
        <group name="Books031_Black_0" />
        <group name="Books031_Gold_0" />
        <group name="Cube098_Popcorn_0" />
        <group name="Cube098_Stripey_0" />
        <group name="Cube105_Glass_0" />
        <group name="Cube106_Glass_0" />
        <group name="Bee006_bee_0" />
        <group name="Icosphere012_Black001_0" />
        <group name="Icosphere012_LightBlue_0" />
        <group name="Icosphere012_Black_0" />
        <group name="Icosphere012_Books_0" />
        <group name="Stool013_Brown_0" />
        <group name="Stool013_Magenta_0" />
        <group name="Books025_Green001_0" />
        <group name="Books025_Material024_0" />
        <group name="Books025_LightBlue_0" />
        <group name="Books025_Blue_0" />
        <group name="Books025_Magenta_0" />
        <group name="Original017_GlowyRange_0" />
        <group name="Original017_Brown_0" />
        <group name="Original017_Gloden_0" />
        <group name="Circle075_Gold_0" />
        <group name="Circle075_Green001_0" />
        <group name="Circle078_Gold_0" />
        <group name="Circle078_Wall_0" />
        <group name="Plane033_Black_0" />
        <group name="Plane033_Material009_0" />
        <group name="Plane034_Black_0" />
        <group name="Plane034_Material013_0" />
        <group name="Plane035_Black_0" />
        <group name="Plane035_Material014_0" />
        <group name="Cube084_beest_0" />
        <group name="Cube084_Material006_0" />
        <group name="Cube084_Black_0" />
        <group name="Cube087_Glass_0" />
        <group name="Cube086_Wall_0" />
        <group name="Cube088_Glass_0" />
        <group name="Cube089_Glass_0" />
        <group name="Cylinder035_Grey002_0" />
        <group name="Cylinder035_Glass002_0" />
        <group name="Cylinder035_Material007_0" />
        <group name="Plane027_Walnut_0" />
        <group name="Plane027_Silver_0" />
        <group name="Circle076_Bordeux_0" />
        <group name="Cube090_Silver001_0" />
        <group name="Cube090_Material010_0" />
        <group name="Cube092_Walnut_0" />
        <group name="Cube092_Silver_0" />
        <group name="Cube092_Popcorn_0" />
        <group name="Cube092_Stripey_0" />
        <group name="Cube094_Black_0" />
        <group name="Cube094_Light_0" />
        <group name="Cube085_Glass_0" />
        <group name="Cube093_Popcorn_0" />
        <group name="Cube093_Stripey_0" />
        <group name="Cube095_Popcorn_0" />
        <group name="Cube095_Stripey_0" />
        <group name="Cube096_Popcorn_0" />
        <group name="Cube096_Stripey_0" />
        <group name="Cube097_Popcorn_0" />
        <group name="Cube097_Stripey_0" />
        <group name="Cube099_Silver_0" />
        <group name="Cube099_Material003_0" />
        <group name="Cube099_Gray_0" />
        <group name="Cylinder042_Wax_0" />
        <group name="Cylinder042_Stripey_0" />
        <group name="Cylinder043_Wax_0" />
        <group name="Cylinder043_Stripey_0" />
        <group name="Cylinder043_Dirt001_0" />
        <group name="Cube137_Popcorn_0" />
        <group name="Cube137_Stripey_0" />
        <group name="Cube138_Popcorn_0" />
        <group name="Cube138_Stripey_0" />
        <group name="Cylinder054_Wax_0" />
        <group name="Cylinder054_Stripey_0" />
        <group name="Cylinder054_Dirt001_0" />
        <group name="Cylinder055_Wax_0" />
        <group name="Cylinder055_Stripey_0" />
        <group name="Cylinder055_Dirt001_0" />
        <group name="Cube139_Popcorn_0" />
        <group name="Cube139_Stripey_0" />
        <group name="Cube140_PurbleExtra_0" />
        <group name="Cube140_Brown_0" />
        <group name="Decoration007_Pink_0" />
        <group name="Decoration005_Yellow_0" />
        <group name="Icosphere016_Greenish_0" />
        <group name="Icosphere016_Bordeux_0" />
        <group name="Icosphere016_Pink_0" />
        <group name="Icosphere016_Brown_0" />
        <group name="Icosphere016_Books_0" />
        <group name="Icosphere016_LightBlue_0" />
        <group name="Icosphere016_BrownGlaze_0" />
        <group name="Icosphere016_Wax_0" />
        <group name="Icosphere016_Green_0" />
        <group name="Icosphere016_PurbleExtra_0" />
        <group name="Icosphere016_White_0" />
        <group name="Icosphere016_Yellow_0" />
        <group name="Icosphere016_Magenta_0" />
        <group name="Icosphere016_Material008_0" />
        <group name="Circle079_Brown_0" />
        <group name="Circle079_Walnut_0" />
        <group name="Circle080_Brown_0" />
        <group name="Circle080_Walnut_0" />
        <group name="Cube107_White_0" />
        <group name="Cube107_Turquoise_0" />
        <group name="Plane_Green_0" />
        <group name="Plane037_Green_0" />
        <group name="Icosphere010_Greenish_0" />
        <group name="Icosphere010_Bordeux_0" />
        <group name="Icosphere010_PurbleExtra_0" />
        <group name="Icosphere010_Brown_0" />
        <group name="Icosphere010_White_0" />
        <group name="Icosphere010_Magenta_0" />
        <group name="Icosphere010_Material008_0" />
        <group name="Icosphere010_LightBlue_0" />
        <group name="Circle081_White_0" />
        <group name="Circle081_LightBlue001_0" />
        <group name="Circle082_Blue_0" />
        <group name="Circle082_White_0" />
        <group name="Table007_Brown_0" />
        <group name="Table007_Gloden_0" />
        <group name="Table008_Brown_0" />
        <group name="Table008_Gloden_0" />
        <group name="Cylinder048_Glass_0" />
        <group name="Cylinder048_Brown001_0" />
        <group name="Cylinder048_White_0" />
        <group name="Cylinder048|Cylinder045|Dupli|1_Material008_0" />
        <group name="Cylinder048|Cylinder046|Dupli|2_LightBlue_0" />
        <group name="Cylinder048|Cylinder040|Dupli|3_Magenta_0" />
        <group name="Cylinder048|Cylinder045|Dupli|4_Material008_0" />
        <group name="Cylinder048|Cylinder046|Dupli|5_LightBlue_0" />
        <group name="Cylinder048|Cylinder040|Dupli|6_Magenta_0" />
        <group name="Cylinder048|Cylinder045|Dupli|7_Material008_0" />
        <group name="Cylinder047_Glass_0" />
        <group name="Cylinder047_Brown001_0" />
        <group name="Cylinder047_White_0" />
        <group name="Cylinder047|Cylinder040|Dupli|_Magenta_0" />
        <group name="Cylinder047|Cylinder045|Dupli|1_Material008_0" />
        <group name="Cylinder047|Cylinder046|Dupli|2_LightBlue_0" />
        <group name="Cylinder047|Cylinder040|Dupli|3_Magenta_0" />
        <group name="Cylinder047|Cylinder045|Dupli|4_Material008_0" />
        <group name="Cylinder047|Cylinder046|Dupli|5_LightBlue_0" />
        <group name="Cylinder047|Cylinder040|Dupli|6_Magenta_0" />
        <group name="Cylinder047|Cylinder045|Dupli|7_Material008_0" />
        <group name="Cylinder044_Silver_0" />
        <group name="Cylinder044_Brown_0" />
        <group name="Cylinder044_Gold_0" />
        <group name="Cylinder039_Gold_0" />
        <group name="Cylinder039_Wax_0" />
        <group name="Cylinder039_Black_0" />
        <group name="Cylinder039_Fire_0" />
        <group name="Triple016_Wall_0" />
        <group name="Triple016_Black_0" />
        <group name="Triple016_Bordeux_0" />
        <group name="Cube108_Material_0" />
        <group name="Cube109_Purble_0" />
        <group name="Bee008_bee_0" />
        <group name="Icosphere015_Black001_0" />
        <group name="Icosphere015_LightBlue_0" />
        <group name="Icosphere015_Black_0" />
        <group name="Croissant_Material012_0" />
        <group name="Croissant001_Material012_0" />
        <group name="Decoration006_GlowyPink001_0" />
        <group name="Bee012_bee_0" />
        <group name="Icosphere023_Black001_0" />
        <group name="Icosphere023_LightBlue_0" />
        <group name="Icosphere023_Black_0" />
        <group name="Cube175_White_0" />
        <group name="Cube175_PurbleExtra_0" />
        <group name="Icosphere024_Greenish_0" />
        <group name="Icosphere024_Bordeux_0" />
        <group name="Cylinder049_BrownGlaze_0" />
        <group name="Cylinder049_Brown001_0" />
        <group name="Cube110_Brown_0" />
        <group name="Cube111_Brown_0" />
        <group name="Cube113_Green_0" />
        <group name="Cube113_Magenta_0" />
        <group name="Cube112_Green002_0" />
        <group name="Cube112_LightBlue_0" />
        <group name="Plane043_Green_0" />
        <group name="Plane043_Green002_0" />
        <group name="Plane039_Pages001_0" />
        <group name="Plane039_Green002_0" />
        <group name="Cube114_Green002_0" />
        <group name="Cube114_Material003_0" />
        <group name="Cube114_BrownGlaze_0" />
        <group name="Cube114_Brown001_0" />
        <group name="Schn��rpseGro��_Green001_0" />
        <group name="Schn��rpse_Green_0" />
        <group name="Cube115_schn��rpse_0" />
        <group name="Cube116_schn��rpse_0" />
        <group name="Cube117_schn��rpse_0" />
        <group name="Cube118_schn��rpse_0" />
        <group name="Cube119_schn��rpse_0" />
        <group name="Cube120_schn��rpse_0" />
        <group name="Cube121_schn��rpse_0" />
        <group name="Cube122_schn��rpse_0" />
        <group name="Icosphere017_Bordeux_0" />
        <group name="Icosphere017_schn��rpse_0" />
        <group name="Icosphere017_Green_0" />
        <group name="Plane040_Green_0" />
        <group name="Plane040_Green002_0" />
        <group name="Circle083_Silver_0" />
        <group name="Circle083_water_0" />
        <group name="Cube124_Green002_0" />
        <group name="Cube124_Magenta_0" />
        <group name="Cube124_BrownGlaze_0" />
        <group name="Cube124_Brown001_0" />
        <group name="Plane041_Green_0" />
        <group name="Plane041_Green002_0" />
        <group name="Plane041_BrownGlaze_0" />
        <group name="Plane041_Brown001_0" />
        <group name="Plane042_Green002_0" />
        <group name="Plane042_Greenish_0" />
        <group name="Plane042_BrownGlaze_0" />
        <group name="Plane042_Brown001_0" />
        <group name="Cube125_Green002_0" />
        <group name="Cube125_Magenta_0" />
        <group name="Cube125_BrownGlaze_0" />
        <group name="Cube125_Brown001_0" />
        <group name="Cube126_Green002_0" />
        <group name="Cube126_Material003_0" />
        <group name="Cube126_BrownGlaze_0" />
        <group name="Cube126_Brown001_0" />
        <group name="Plane048_Green002_0" />
        <group name="Plane048_Green_0" />
        <group name="Plane048_Greenish_0" />
        <group name="Plane048_White_0" />
        <group name="Plane048_LightBlue_0" />
        <group name="Plane048_Brown001_0" />
        <group name="Plane044_Green002_0" />
        <group name="Plane044_Green_0" />
        <group name="Plane044_Greenish_0" />
        <group name="Plane044_White_0" />
        <group name="Plane044_LightBlue_0" />
        <group name="Plane044_Brown001_0" />
        <group name="Plane047_Brown_0" />
        <group name="Plane045_Brown_0" />
        <group name="Plane046_Brown_0" />
        <group name="Plane049_Brown_0" />
        <group name="Triple017_RockMoss001_0" />
        <group name="Triple017_Black_0" />
        <group name="Bee011_Purble_0" />
        <group name="Bee011_Books_0" />
        <group name="Cylinder051_lightbrpwn_0" />
        <group name="Cylinder051_Silver_0" />
        <group name="Cylinder051_LightBlue_0" />
        <group name="Plane038_Silver_0" />
        <group name="Plane038_Brown001_0" />
        <group name="Bee010_bee_0" />
        <group name="Icosphere018_Black001_0" />
        <group name="Icosphere018_LightBlue_0" />
        <group name="Icosphere018_Black_0" />
        <group name="Cube158_schn��rpse_0" />
        <group name="Plane065_Green002_0" />
        <group name="Plane065_Greenish_0" />
        <group name="Plane065_BrownGlaze_0" />
        <group name="Plane065_Brown001_0" />
        <group name="Triple023_RockMoss001_0" />
        <group name="Triple023_Black_0" />
        <group name="Plane075_Green_0" />
        <group name="Plane075_Green002_0" />
        <group name="Plane075_White_0" />
        <group name="Plane075_LightBlue_0" />
        <group name="Plane075_Brown001_0" />
        <group name="Plane076_Green_0" />
        <group name="Plane076_Green002_0" />
        <group name="Plane076_White_0" />
        <group name="Plane076_LightBlue_0" />
        <group name="Plane076_Brown001_0" />
        <group name="Plane079_Green_0" />
        <group name="Plane079_Green002_0" />
        <group name="Plane079_BrownGlaze_0" />
        <group name="Plane079_Brown001_0" />
        <group name="Plane102_Green_0" />
        <group name="Plane102_Green002_0" />
        <group name="Plane102_White_0" />
        <group name="Plane102_LightBlue_0" />
        <group name="Plane102_Brown001_0" />
        <group name="Cube133_Wax_0" />
        <group name="Cube133_Brown_0" />
        <group name="Cube133_Black_0" />
        <group name="Icosphere019_Green_0" />
        <group name="Icosphere019_Greenish_0" />
        <group name="Icosphere019_Bordeux_0" />
        <group name="Icosphere019_Pink_0" />
        <group name="Icosphere019_Brown_0" />
        <group name="Icosphere019_White_0" />
        <group name="Icosphere019_Yellow_0" />
        <group name="Icosphere019_PurbleExtra_0" />
        <group name="Icosphere019_Magenta_0" />
        <group name="Icosphere019_Material008_0" />
        <group name="Icosphere019_LightBlue_0" />
        <group name="Cube130_Green001_0" />
        <group name="Cube132_Brown_0" />
        <group name="Cube132_Gold_0" />
        <group name="Plane050_Gold_0" />
        <group name="Plane050_Material015_0" />
        <group name="Books033_Gold_0" />
        <group name="Books033_Wax_0" />
        <group name="Books033_Turquoise_0" />
        <group name="Books033_Wall_0" />
        <group name="Books033_Material024_0" />
        <group name="Books033_DarkBrown_0" />
        <group name="Books033_Brown001_0" />
        <group name="Books033_Magenta_0" />
        <group name="Books033_Glass_0" />
        <group name="Books033_Grey_0" />
        <group name="Books033_Material008_0" />
        <group name="Books033_Pink_0" />
        <group name="Books033_Gloden001_0" />
        <group name="Books033_Material_0" />
        <group name="Books033_PurbleExtra_0" />
        <group name="Books033_HoneyComb_0" />
        <group name="Books033_Silver_0" />
        <group name="Books032_Gold_0" />
        <group name="Books032_Wax_0" />
        <group name="Books032_PurbleExtra_0" />
        <group name="Books032_BrownGlaze_0" />
        <group name="Books032_Material024_0" />
        <group name="Books032_DarkBrown_0" />
        <group name="Books032_Brown001_0" />
        <group name="Books032_Glass_0" />
        <group name="Books032_Grey_0" />
        <group name="Books032_Material008_0" />
        <group name="Books032_Magenta_0" />
        <group name="Books032_Gloden001_0" />
        <group name="Books032_Material_0" />
        <group name="Books032_HoneyComb_0" />
        <group name="Books032_Silver_0" />
        <group name="Cube127_Material_0" />
        <group name="Cube128_Purble_0" />
        <group name="Cube129_Magenta_0" />
        <group name="Cube131_LightBlue_0" />
        <group name="Books029_Wall_0" />
        <group name="Books029_Wax_0" />
        <group name="Books029_Magenta_0" />
        <group name="Books029_Turquoise_0" />
        <group name="Books029_Pink_0" />
        <group name="Books029_PurbleExtra_0" />
        <group name="Books029_Brown_0" />
        <group name="Books029_Yellow_0" />
        <group name="Books029_Material008_0" />
        <group name="Books034_Wax_0" />
        <group name="Books034_Black_0" />
        <group name="Books034_Gold_0" />
        <group name="Books035_Wax_0" />
        <group name="Books035_Black_0" />
        <group name="Books035_Gold_0" />
        <group name="Original003_GlowyRange_0" />
        <group name="Original003_Brown_0" />
        <group name="Original003_Walnut_0" />
        <group name="Original003_Gloden_0" />
        <group name="Original003_Magenta_0" />
        <group name="Original003_RockMoss_0" />
        <group name="Cube177_Brown_0" />
        <group name="Cube177_Gold_0" />
        <group name="Cube178_Brown_0" />
        <group name="Cube178_Gold_0" />
        <group name="Table011_Brown_0" />
        <group name="Table011_Gloden_0" />
        <group name="Cylinder084_Glowy_0" />
        <group name="Cube184_Brown_0" />
        <group name="Cube184_Magenta_0" />
        <group name="Cabinet010_Brown_0" />
        <group name="Cabinet010_Gloden_0" />
        <group name="Cylinder079_Gray_0" />
        <group name="Cylinder079_Brown001_0" />
        <group name="Cylinder079_Black_0" />
        <group name="Cube185_DarkBrown_0" />
        <group name="Cube187_Brown_0" />
        <group name="Plane100_Gray_0" />
        <group name="Plane100_Brown_0" />
        <group name="Bowl012_BrownGlaze_0" />
        <group name="Bowl013_BrownGlaze_0" />
        <group name="Plane101_Gray_0" />
        <group name="Stool020_Brown_0" />
        <group name="Stool020_Material_0" />
        <group name="Cube188_DarkBrown_0" />
        <group name="Cube188_Brown001_0" />
        <group name="Original027_GlowyRange_0" />
        <group name="Original027_Brown_0" />
        <group name="Original027_Walnut_0" />
        <group name="Original027_Gloden_0" />
        <group name="Original027_Blue_0" />
        <group name="Cube182_Brown001_0" />
        <group name="Cube182_Gloden_0" />
        <group name="Cube183_Brown001_0" />
        <group name="Cube189_Pages_0" />
        <group name="Cube189_Bordeux_0" />
        <group name="Cube190_Pages_0" />
        <group name="Cube190_Bordeux_0" />
        <group name="Books042_Wax_0" />
        <group name="Books042_Black_0" />
        <group name="Books042_Gold_0" />
        <group name="Cube193_Brown001_0" />
        <group name="Cube194_Brown001_0" />
        <group name="Cube195_Brown_0" />
        <group name="Cube196_Brown002_0" />
        <group name="Books047_Blue_0" />
        <group name="Books047_Material024_0" />
        <group name="Books047_Purble_0" />
        <group name="Cube191_Green002_0" />
        <group name="Cube191_Material003_0" />
        <group name="Cube191_BrownGlaze_0" />
        <group name="Cube191_Brown001_0" />
        <group name="Cube192_Brown_0" />
        <group name="Cube186_Brown001_0" />
        <group
          name="Sketchfab_model002"
          position={[0.918, 0.987, -1.002]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.011}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="����������001_3">
                <mesh
                  name="Object_9"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_9.geometry}
                  material={materials['.004']}
                />
              </group>
              <group name="����������002_4">
                <mesh
                  name="Object_11"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_11.geometry}
                  material={materials['.005']}
                />
                <mesh
                  name="Object_12"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_12.geometry}
                  material={materials['.005']}
                />
                <mesh
                  name="Object_13"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_13.geometry}
                  material={materials['.005']}
                />
                <mesh
                  name="Object_14"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_14.geometry}
                  material={materials['.005']}
                />
                <mesh
                  name="Object_15"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_15.geometry}
                  material={materials['.005']}
                />
              </group>
              <group name="����������003_5">
                <mesh
                  name="Object_17"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_17.geometry}
                  material={materials['.005']}
                />
                <mesh
                  name="Object_18"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_18.geometry}
                  material={materials['.005']}
                />
                <mesh
                  name="Object_19"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_19.geometry}
                  material={materials['.005']}
                />
                <mesh
                  name="Object_20"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_20.geometry}
                  material={materials['.005']}
                />
                <mesh
                  name="Object_21"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_21.geometry}
                  material={materials['.005']}
                />
              </group>
              <group name="����������004_6">
                <mesh
                  name="Object_23"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_23.geometry}
                  material={materials['.006']}
                />
                <mesh
                  name="Object_24"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_24.geometry}
                  material={materials['.006']}
                />
              </group>
              <group name="����������005_7">
                <mesh
                  name="Object_26001"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_26001.geometry}
                  material={materials['.006']}
                />
                <mesh
                  name="Object_27001"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_27001.geometry}
                  material={materials['.006']}
                />
              </group>
              <group name="����������006_8">
                <mesh
                  name="Object_29"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_29.geometry}
                  material={materials['.008']}
                />
              </group>
              <group name="����������_2">
                <mesh
                  name="bulb"
                  castShadow
                  receiveShadow
                  geometry={nodes.bulb.geometry}
                  material={materials.light}
                />
                <mesh
                  name="Object_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4.geometry}
                  material={materials['material.001']}
                />
                <mesh
                  name="Object_6"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_6.geometry}
                  material={materials['.002']}
                />
                <mesh
                  name="Object_7"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_7.geometry}
                  material={materials['.003']}
                />
              </group>
            </group>
          </group>
        </group>
        <mesh
          name="Text002"
          castShadow
          receiveShadow
          geometry={nodes.Text002.geometry}
          material={materials['Material.009']}
          position={[0.509, 1.117, -1.072]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.053}
        />
        <mesh
          name="Text003"
          castShadow
          receiveShadow
          geometry={nodes.Text003.geometry}
          material={materials['Material.010']}
          position={[0.509, 1.077, -1.072]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.045}
        />
        <group name="Sketchfab_model001" rotation={[-Math.PI / 2, 0, 0]} scale={0.123}>
          <group
            name="d310ac88f5b04201988b0b6f9be0a790fbx001"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}>
            <group name="Object_2001">
              <group name="RootNode001">
                <group
                  name="Lamps001"
                  position={[481.065, 672.01, -814.734]}
                  rotation={[-Math.PI / 2, 0, -Math.PI]}
                  scale={[-19.393, -19.393, -1.635]}>
                  <mesh
                    name="Lamps005_Light_0002"
                    castShadow
                    receiveShadow
                    geometry={nodes.Lamps005_Light_0002.geometry}
                    material={materials['Light.003']}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
        <group
          name="Curve014"
          position={[0.591, 1.153, -1.076]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.402}>
          <mesh
            name="Curve139"
            castShadow
            receiveShadow
            geometry={nodes.Curve139.geometry}
            material={materials['Material.003']}
          />
          <mesh
            name="Curve139_1"
            castShadow
            receiveShadow
            geometry={nodes.Curve139_1.geometry}
            material={materials['SVGMat.124']}
          />
          <mesh
            name="Curve139_2"
            castShadow
            receiveShadow
            geometry={nodes.Curve139_2.geometry}
            material={materials['SVGMat.139']}
          />
          <mesh
            name="Curve139_3"
            castShadow
            receiveShadow
            geometry={nodes.Curve139_3.geometry}
            material={materials['Material.002']}
          />
          <mesh
            name="Curve139_4"
            castShadow
            receiveShadow
            geometry={nodes.Curve139_4.geometry}
            material={materials['SVGMat.168']}
          />
          <mesh
            name="Curve139_5"
            castShadow
            receiveShadow
            geometry={nodes.Curve139_5.geometry}
            material={materials['SVGMat.169']}
          />
          <mesh
            name="Curve139_6"
            castShadow
            receiveShadow
            geometry={nodes.Curve139_6.geometry}
            material={materials['SVGMat.171']}
          />
          <mesh
            name="Curve139_7"
            castShadow
            receiveShadow
            geometry={nodes.Curve139_7.geometry}
            material={materials['SVGMat.172']}
          />
        </group>
        <mesh
          name="Curve040"
          castShadow
          receiveShadow
          geometry={nodes.Curve040.geometry}
          material={materials['SVGMat.163']}
        />
        <mesh
          name="Curve059"
          castShadow
          receiveShadow
          geometry={nodes.Curve059.geometry}
          material={materials['SVGMat.182']}
        />
        <group
          name="Curve001"
          position={[0.591, 1.153, -1.076]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.402}>
          <mesh
            name="Curve001_1"
            castShadow
            receiveShadow
            geometry={nodes.Curve001_1.geometry}
            material={materials['SVGMat.171']}
          />
          <mesh
            name="Curve001_2"
            castShadow
            receiveShadow
            geometry={nodes.Curve001_2.geometry}
            material={materials['SVGMat.178']}
          />
        </group>
      </group>
    </a.group>
  )
}

export default HQ_2;
