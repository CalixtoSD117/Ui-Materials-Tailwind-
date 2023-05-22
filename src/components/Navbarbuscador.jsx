import { RiFileCopy2Line, RiCodeView, RiMenuLine, RiSearch2Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Navbarbuscador = () => {
  return (
    <>
        <div className='bg-transparent w-full'>
                <div className='p-10'>
                    {/* apartado de nombre de componente y copyado de codigo o ver  */}
                    <div className='flex justify-between items-center   '>
                        <h1 className='text-sm font-bold'>
                            Navbar
                        </h1>
                        <div className='flex gap-4 text-gray-600'>
                            <RiCodeView className='cursor-pointer h-8 w-8 px-1 py-1 hover:text-blue-400 hover:bg-slate-300 rounded-md' />
                            <RiFileCopy2Line className='cursor-pointer h-8 w-8 px-1 py-1 hover:text-blue-400 hover:bg-slate-300 rounded-md ' />
                        </div>
                    </div>
                    {/* Aqui empieza la barra de navegacion */}
                    <div className='flex p-4 justify-between items-center bg-white rounded-lg shadow-lg'>
                        
                    <div className="lg:flex items-center gap-4 uppercase ">

                    <div className='flex items-center gap-4 justify-between'>
                    <h1 className='text-lg font-bold'>Tu logo</h1>

                    <button className='lg:hidden  px-2 py-2 hover:bg-slate-300 rounded-full '>
                            <RiMenuLine/>
                    </button>
                    </div>
                    

                    <div className='flex items-center text-center '>
                    <RiSearch2Line className='absolute pl-1 h-10 w-10 px-3 py-3 text-slate-400 focus:ring-8'/>
                    <input type="text" className='ring-1 rounded-lg w-full bg-slate-100 pl-8 ring-slate-500 outline-none' placeholder='Buscar' />
                    </div>

                    </div>

                        

                        

                        <ul className='lg:flex gap-8 pr-2 hidden font-semibold'>
                            <li>
                                <Link>Inicio</Link>
                            </li>
                            <li>
                                <Link>Nosotros</Link>
                            </li>
                            <li>
                                <Link>Servicio</Link>
                            </li>
                            <li>
                                <Link>Blog</Link>
                            </li>
                            <li>
                                <Link>Contacto</Link>
                            </li>

                        </ul>

                    </div>
                    {/*  */}
                </div>
            </div>
    </>
  )
}

export default Navbarbuscador