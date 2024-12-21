import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-white p-4 flex justify-between items-center shadow-md">
      <div className="flex items-center space-x-3">
        <Image src={"/book.svg"} width={24} height={24} alt="Icon" />
        <span className="text-black text-lg font-bold">NotePro</span>
      </div>
     </nav>
  );
};

export default Navbar;
