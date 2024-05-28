import { NavLink } from "react-router-dom";

import {logo} from "../assets/images";

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/3D_landingpage'>
        <img src={logo} alt='logo' className='w-20 h-20 object-contain' />
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
      <NavLink to='/3D_landingpage/AI' className={({ isActive }) => isActive ? "text-black bg-gray-100 px-4 py-2 rounded-full" : "text-blue-600 px-4 py-2 rounded-full hover:bg-blue-200" }>
          Hive AI
        </NavLink>
        <NavLink to='/3D_landingpage/about' className={({ isActive }) => isActive ? "text-black bg-gray-100 px-4 py-2 rounded-full" : "text-blue-600 px-4 py-2 rounded-full hover:bg-blue-200" }>
          Sobre
        </NavLink>
        <NavLink to='/3D_landingpage/projects' className={({ isActive }) => isActive ? "text-black bg-gray-100 px-4 py-2 rounded-full" : "text-blue-600 px-4 py-2 rounded-full hover:bg-blue-200"}>
          Projetos
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
