import { FaSearch, FaBell } from "react-icons/fa";
import Image from "next/image";
const Navbar = () => {
  return (
    <nav className="bg-white p-4 flex justify-between items-center shadow-md">
      <div className="flex items-center space-x-3">
        <Image
          src={"/note.svg"}
          width={24}
          height={24}
          alt="Icon"
        />
        
        <span className="text-black text-lg font-bold">NotePro</span>
      </div>

      <div className="flex items-center space-x-4">
        <FaSearch size={20} className="text-[#4B5563]" />

        <FaBell size={24} className="text-[#4B5563] cursor-pointer" />
        <Image
          src={"/user.png"}
          width={24}
          height={24}
          alt="user"
        />      </div>
    </nav>
  );
};

export default Navbar;
