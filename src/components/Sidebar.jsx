import React, {useEffect } from "react";
import { IoCloseOutline} from "react-icons/io5";
import Nav from "./Nav";
import DarkMode from "./DarkMode";
const Sidebar = ({bg,isOpen,setOpen,Dark,setDark}) => {
   useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const handleResize = () => {
        if(mediaQuery.matches){
            setOpen(false)
        }
    };
    handleResize();
    mediaQuery.addEventListener("change",handleResize);
    return () => mediaQuery.removeEventListener("change",handleResize);
   },[])
  return (
   
    <div className={`${bg} fixed top-0 left-0 z-50 transition-transform duration-300 h-full rounded-lg shadow-lg md:w-72 w-48 ${isOpen? "translate-x-0":"-translate-x-full"} `}>
       <div className="py-6 border-b border-black/40 relative">
         <button onClick={() => setOpen(false)}>
            <IoCloseOutline className={`${Dark? "text-white": "text-black"} text-5xl cursor-pointer absolute right-0 bottom-3`}/>
        </button>
       </div>

     <div className="p-5 space-y-12">
          <DarkMode Dark={Dark} setDark={setDark}/>
        <Nav display={""} gap={"space-y-6"} />

     </div>
   </div>
  )
}

export default Sidebar