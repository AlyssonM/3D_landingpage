import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import { Text } from '@react-three/drei'
import sakura from "../assets/ambient.mp3";
import { HomeInfo, Loader } from "../components";
import { soundoff, soundon } from "../assets/icons";
import {BeeGLTF, HQ_2, HQ_3, MineBee} from "../models";
import { metodology } from "../constants";
import { projects } from "../constants";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";
import { OrbitControls } from '@react-three/drei';

const Home = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;
  const [info, setInfo] = useState({ show: false, index: 0, content: null });
  const [hive, setHive] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [allowScroll, setAllowScroll] = useState(false);
  const [positionLeft, setPositionLeft] = useState('75%');
  const [transformValue, setTransformValue] = useState('-50%');

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }
    
    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic, allowScroll]);

  
  return (
    <section className={`w-full h-screen fixed touch-none ${allowScroll ? 'overflow-auto' : 'overflow-hidden'}`}>
      {/* <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div> */}
    
      <Canvas
        className={'fixed w-full h-full bg-blue-100'}
        camera={{ near: 0.01, far: 1000}}
      >
        
        <Suspense fallback={<Loader />}>
          <directionalLight position={[0, 1, 20]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight
            position={[0, 0, 10]}
            angle={0.15}
            penumbra={1}
            intensity={4}
          />
          <hemisphereLight
            skyColor='#b1e1ff'
            groundColor='#000000'
            intensity={1}
          />
          
          <MineBee 
            scale={[.3,.3,.3]}
            position={[-0.05, 0, 4.79]}
            rotation={[0.15,0.1,0]}
            setInfo={setInfo}
            setPositionLeft={setPositionLeft}
            setTransformValue={setTransformValue}
            Hive={hive}
            setHive={setHive}
          />

          {/* <BeeGLTF 
            scale={[0.09,0.09,0.09]}
            // position={[0, 0, 4.5]}
            position={[0, 0, 4.8]}
            setInfo={setInfo}
          /> */}

          <HQ_3 
            sizescale={1}
            position={[-0.6,-0.92,5]}
            hivestart={hive}
            setPositionLeft={setPositionLeft}
            setTransformValue={setTransformValue}
            setInfo={setInfo}
            setAllowScroll={setAllowScroll}
            // position={[-0.6, -0.95, 5.45]}
          />

          {
              <BeeGLTF
                scale={[0.09,0.09,0.09]}
                position={[0, 0, 9]}
                setInfo={setInfo}
                Hive={hive}
              />
          }
        
        </Suspense>
      </Canvas>
      
      {
        
        info.show && (
        //<div className='mt-5 flex flex-col'> 
        <div className='info-box' style={{ position: 'absolute', top: '15%', left: positionLeft, transform: `translateX(${transformValue})`}}> 
          <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${metodology[Number(info.index)].theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={metodology[Number(info.index)].iconUrl}
                  alt='threads'
                  className='w-10 h-10 object-contain'
                />
              </div>
            </div>
          <p className='text-2xl font-poppins font-semibold text-black text-center'>
            {metodology[Number(info.index)].name}    
          </p>
          <p className='mt-2 text-slate-700'>{metodology[Number(info.index)].description}</p>
      
        </div> 
        //</div>
      )};
  
      <div className='absolute bottom-2 left-2'>
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt='jukebox'
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className='w-10 h-10 cursor-pointer object-contain'
        />
      </div>
    </section>
  );
};

export default Home;
