import { NavLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import {logo} from "../assets/images";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();
  const toggleMenu = () => setIsOpen(!isOpen);

  // Fechar menu ao clicar fora
  useEffect(() => {

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false); // Reseta o estado do menu quando a tela é expandida
      }
    };

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    // Adiciona o event listener para resize
    window.addEventListener('resize', handleResize);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('resize', handleResize);
    };
  }, [menuRef]);
  
  return (
    <header className='header flex justify-between items-center p-4 relative'>
      <NavLink to='/' className='shrink-0'>
        <img src={logo} alt='logo' className='w-20 h-auto min-w-[64px] min-h-[64px]' />
      </NavLink>
      <div ref={menuRef}>
        <nav className={`transition-all duration-300 ease-in-out ${isOpen ? "flex" : "hidden"} flex-col absolute md:relative top-full left-0 w-full md:w-auto md:bg-transparent bg-white/95 shadow-md md:shadow-none z-10 py-2 md:flex md:flex-row md:items-center`}>
          <NavLink to='/AI' onClick={toggleMenu} className={({ isActive }) => isActive ? "text-black bg-gray-00 px-2 py-1 rounded-full" : "text-blue-600 px-2 py-1 rounded-full hover:bg-blue-200" }> 
            Hive AI
          </NavLink>
          <NavLink to='/about' onClick={toggleMenu} className={({ isActive }) => isActive ? "text-black bg-gray-100 px-2 py-1 rounded-full" : "text-blue-600 px-2 py-1 rounded-full hover:bg-blue-200" }>
            Roadmap
          </NavLink>
          {/* <NavLink to='/3D_landingpage/projects' onClick={toggleMenu} className={({ isActive }) => isActive ? "text-black bg-gray-100 px-2 py-1 rounded-full" : "text-blue-600 px-2 py-1 rounded-full hover:bg-blue-200" }>
            Projetos
          </NavLink> */}
        </nav>
        <button onClick={toggleMenu} className={`md:hidden absolute top-3 right-3 ${isOpen ? 'block' : 'hidden'}`}>
          &times; {/* Botão de fechar */}
        </button>
      </div>
      <button onClick={toggleMenu} className='md:hidden text-xl'>☰</button>
    </header>
  );
};

export default Navbar;
