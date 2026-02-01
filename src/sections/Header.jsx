import DarkMode from "../components/DarkMode";
import Nav from "../components/Nav";
const Header = ({ Dark, setDark,setOpen }) => {
  return (
    <div
      className={`py-5 sticky top-0 shadow-lg ${
        Dark ? "bg-gray-800" : "bg-gray-100 "
      }`}
    >
      <div className="flex justify-between items-center mx-4">
           <button
          className={`flex cursor-pointer md:hidden  text-2xl ${Dark? "text-white":"text-black"}`}
            onClick={() => setOpen(true)}
        >
          ☰
        </button>
        <h1
          className={`Logo font-sans font-semibold text-3xl md:flex hidden ${
            Dark ? " text-text-primary" : " text-black"
          }`}
        >
          Portfolio
        </h1>
         
        
        <div className="flex gap-10 justify-center  items-center  md:flex hidden ">
       
            <Nav display={"flex"} gap={"space-x-10"} setOpen={setOpen}/>
      
           <DarkMode Dark={Dark} setDark={setDark}/>
          
        </div>
       
      </div>
    </div>
  );
};

export default Header;
