
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import { Text } from '@react-three/drei'
import sakura from "../assets/sakura.mp3";
import { HomeInfo, Loader } from "../components";
import { soundoff, soundon } from "../assets/icons";
import {BeeGLTF, HQ_2} from "../models";
import { metodology } from "../constants";
import { projects } from "../constants";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const Home = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;
  const [info, setInfo] = useState({ show: false, index: 0, content: null });
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  
  return (
    <section className='w-full h-screen fixed overflow-hidden touch-none'>
      {/* <div className='flex justify-center items-center'>
      <video autoPlay loop muted className='w-screen h-screen'>
          <source src="../assets/HiveHueReveal.mp4" type="video/mp4" />
          Seu navegador não suporta vídeos MP4.
      </video>
      </div> */}
      {/* <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div> */}
    
      <Canvas
        className={'fixed w-full h-full bg-blue-200'}
        camera={{ near: 0.1, far: 1000 }}
      >
        
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight
            position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <hemisphereLight
            skyColor='#b1e1ff'
            groundColor='#000000'
            intensity={1}
          />

          <BeeGLTF 
            scale={[0.09,0.09,0.09]}
            position={[0, 0, 4.5]}
            setInfo={setInfo}
            />
          <HQ_2 
            sizescale={1}
            position={[-0.6, -0.95, 5.45]}
          />
        
        </Suspense>
      </Canvas>
      
      {
        
        info.show && (
        //<div className='mt-5 flex flex-col'> 
        <div className='info-box' style={{ position: 'absolute', top: '15%', left: '60%', transform: 'translateX(-50%)'}}> 
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
          <p className='mt-2 text-slate-500'>{metodology[Number(info.index)].description}</p>
      
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
