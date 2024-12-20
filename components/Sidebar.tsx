import { useState } from "react";
import { FaHome, FaBook, FaHeart, FaUsers, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaSearch, FaBell } from "react-icons/fa";
import Image from "next/image";

// Navbar componente
const Navbar = () => {
  return (
    <nav className="bg-white p-4 flex justify-between items-center shadow-md">
      <div className="flex items-center space-x-3">
        <Image src={"/note.svg"} width={24} height={24} alt="Icon" />
        <span className="text-black text-lg font-bold">NotePro</span>
      </div>

      <div className="flex items-center space-x-4">
        <FaSearch size={20} className="text-[#4B5563]" />
        <FaBell size={24} className="text-[#4B5563] cursor-pointer" />
        <Image src={"/user.png"} width={24} height={24} alt="user" />
      </div>
    </nav>
  );
};

// SliderBar componente
const SliderBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="flex h-screen overflow-hidden">
      <aside
        className={`relative bg-[#FFFFFF] text-white transition-all duration-300 ${
          isOpen ? "w-64" : "w-16"
        } flex flex-col h-full`}
      >
        <button
          onClick={toggleSidebar}
          className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-[#374151] text-white rounded-full p-2 shadow-md hover:bg-[#4B5563] focus:outline-none hidden md:block"
        >
          {isOpen ? <FaChevronLeft size={20} /> : <FaChevronRight size={20} />}
        </button>

        <nav className="flex flex-col mt-4 space-y-2">
          <a
            href="#"
            className="flex items-center justify-center space-x-3 text-[#2563EB] hover:bg-[#EFF6FF] hover:text-[#2563EB] p-2 rounded transition-all duration-200"
          >
            <FaHome size={20} />
            <span
              className={`whitespace-nowrap overflow-hidden transition-all duration-200 ${
                isOpen ? "opacity-100" : "opacity-0 hidden"
              }`}
            >
              Dashboard
            </span>
          </a>
          <a
            href="#"
            className="flex items-center justify-center space-x-3 text-[#4B5563] hover:bg-[#EFF6FF] hover:text-[#2563EB] p-2 rounded transition-all duration-200"
          >
            <FaBook size={20} />
            <span
              className={`whitespace-nowrap overflow-hidden transition-all duration-200 ${
                isOpen ? "opacity-100" : "opacity-0 hidden"
              }`}
            >
              Notebooks
            </span>
          </a>
          <a
            href="#"
            className="flex items-center justify-center space-x-3 text-[#4B5563] hover:bg-[#EFF6FF] hover:text-[#2563EB] p-2 rounded transition-all duration-200"
          >
            <FaHeart size={20} />
            <span
              className={`whitespace-nowrap overflow-hidden transition-all duration-200 ${
                isOpen ? "opacity-100" : "opacity-0 hidden"
              }`}
            >
              Favorites
            </span>
          </a>
          <a
            href="#"
            className="flex items-center justify-center space-x-3  text-[#4B5563] hover:bg-[#EFF6FF] hover:text-[#2563EB] p-2 rounded transition-all duration-200"
          >
            <FaUsers size={20} />
            <span
              className={`whitespace-nowrap overflow-hidden  transition-all duration-200 ${
                isOpen ? "opacity-100" : "opacity-0 hidden"
              }`}
            >
              Team
            </span>
          </a>
        </nav>
      </aside>

      <div className="flex-1 bg-gray-100 p-6">
        <h1 className="text-2xl font-bold">Welcome to NotePro</h1>
        <p className="text-gray-600 mt-2">Select an option from the sidebar.</p>
      </div>
    </div>
  );
};

// Layout componente para juntar Navbar y SliderBar
const Layout = () => {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <SliderBar />
    </div>
  );
};

export default Layout;
