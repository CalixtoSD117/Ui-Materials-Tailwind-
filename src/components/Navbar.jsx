import { Link } from "react-router-dom"
import { Tail, adidas, aple } from "../assets"
import { RiMenuFill, RiCloseFill, RiHome4Line, RiCodepenLine, RiStarSmileFill, RiDropboxFill, RiSearch2Line } from "react-icons/ri";
import { useState } from "react";


const Navbar = () => {

    const [Openmenu, setOpenmenu] = useState(false);

    const menutoogle = () => {
        setOpenmenu(!Openmenu)
    };
  return (
    <>
    <nav className="bg-white w-full lg:flex items-center justify-between p-4 z-50 shadow-md ">

        <div className="flex items-center gap-2 uppercase lg:text-xl font-bold">
        <img className="w-8 h-8 lg:w-10 lg:h-10" src={Tail} alt="" />
        <h1>UI Materials Tailwind</h1>

        <button onClick={menutoogle} className="items-center right-4 absolute lg:hidden hover:bg-slate-200 rounded-full p-2 ">
        {Openmenu ? <RiCloseFill/> : <RiMenuFill/> }
        </button>

        </div>

       
           
      
        
        <ul className={`lg:flex md:text-xl lg:text-base md:w-1/3 lg:gap-4 top-0 w-2/4 justify-between h-full absolute lg:static
         lg:bg-white bg-slate-50 lg:z-auto z-50 lg:w-auto lg:pl-0 pl-0  lg:opacity-100 transition-all duration-300
         ${Openmenu ? 'left-0' : '-left-full'}`}>
            <li>
                <Link to="/" className="flex font-semibold items-center gap-2 hover:text-blue-500 hover:bg-slate-200 rounded-full py-2 px-4 transition-all duration-200 ease-in-out">
                    <RiHome4Line/>
                    Inicio
                </Link>
            </li>

            <li>
                <Link to="/componentes " className="flex font-semibold items-center gap-2 hover:text-blue-500 hover:bg-slate-200 rounded-full py-2 px-4 transition-all duration-200 ease-in-out">
                    <RiCodepenLine/>
                    Componentes
                </Link>
            </li>

            <li>
                <Link to="/freamworks" className="flex font-semibold items-center gap-2 hover:text-blue-500 hover:bg-slate-200 rounded-full py-2 px-4 transition-all duration-200 ease-in-out">
                    <RiStarSmileFill/>
                    Freamworks
                </Link>
            </li>

            <li>
                <Link to="/recursos" className="flex font-semibold items-center gap-2 hover:text-blue-500 hover:bg-slate-200 rounded-full py-2 px-4 transition-all duration-200 ease-in-out">
                    <RiDropboxFill/>
                    Recursos 
                </Link>
            </li>
        </ul>
    </nav>
    </>
  )
}

export default Navbar