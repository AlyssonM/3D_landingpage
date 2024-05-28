// import { Html } from "@react-three/drei";
// import videoSrc from "../assets/HiveHueReveal.mp4"; // Importa o vídeo como módulo

// const Loader = () => {
//   return (
//     <Html fullscreen>
//       <div className='w-screen h-screen'> 
//         <video autoPlay loop muted className="item-center w-screen h-screen object-cover">
//             <source src={videoSrc} type="video/mp4" />
//               Seu navegador não suporta vídeos MP4.
//         </video>
      
//         {/* <div className='w-20 h-20 border-2 border-opacity-20 border-blue-500 border-t-blue-500 rounded-full animate-spin'></div> */}
//       </div>
//     </Html>
//   );
// };

// export default Loader;

import { Html } from "@react-three/drei";
import videoSrc from "../assets/HiveHueReveal.mp4";
import React, { useState, useEffect } from 'react';

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const minLoadingTime = setTimeout(() => {
      setLoading(false); // Desativa o loader após 4 segundos
    }, 4000); // Define o tempo mínimo de exibição do loader

    // Simule o carregamento de outros recursos aqui
    // Exemplo: Carregar dados da API ou imagens grandes
    // Você pode colocar essa lógica em outra função `setTimeout` ou diretamente em chamadas de API

    return () => clearTimeout(minLoadingTime); // Limpeza do setTimeout
  }, []);

  return (
    <Html fullscreen>
      <div >
        {loading ? (
          <video autoPlay loop muted style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute' }}>
            <source src={videoSrc} type="video/mp4" />
            Seu navegador não suporta vídeos MP4.
          </video>
        ) : (
          <div>Conteúdo da página carregado!</div>  // Aqui você incluiria o restante do conteúdo da página
        )}
      </div>
    </Html>
  );
};

export default Loader;

