import { design, home } from "../assets"
import { RiCommandFill, RiFileList3Line, RiHeart2Line } from "react-icons/ri";

const Home = () => {
  return (
    <>
    <div className='lg:flex m-10 pt-5 justify-between'>
      
      <div className=''>
        <div className='md:absolute text-lg md:text-base md:px-1 text-center px-5'>
          <h3 className='bg-gray-200 rounded-full p-2 lg:p-3'>Version de Tailwind <span className='bg-blue-400 rounded-full p-1 text-white'>V3.3</span> </h3>
        </div>
        <div className='md:pt-14 break-words overflow-visible'>
        <h1 className='pt-1 md:text-6xl text-4xl font-extrabold '>Componentes UI</h1>
        <h2 className='pt-2 md:text-5xl text-5xl font-extrabold text-blue-500'>React JS y Tailwind CSS</h2>
        </div>
        <div className='pt-5 text-xl text-justify font-normal'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Repellat cupiditate soluta animi mollitia, in, iusto labore 
            numquam molestias distinctio voluptas, quas iste amet. Porro velit 
            culpa nesciunt, molestiae officiis hic.
          </p>
        </div>
        <div className="flex gap-4 items-center pt-5">
          <h2 className="flex items-center gap-2"> <RiCommandFill/> +100 componentes</h2>
          <h2 className="flex items-center gap-2"> <RiFileList3Line/> Licencia MIT</h2>
        </div>

        <div className="flex pt-5">
          <button className="bg-slate-100 hover:bg-slate-200 transition-colors duration-200 ease-in-out rounded-xl px-6 py-2 lg:mr-52 mr-12">
            Empezar
          </button>
          <button className="bg-blue-400 hover:bg-blue-500 transition-colors duration-200 ease-in-out rounded-xl px-6 py-2 gap-2 flex items-center justify-center">
            <RiHeart2Line/>
            Donacion
          </button>
        </div>
      </div>


      <div className=''>
      <img className='w-[2000px]' src={design} alt="" />
      </div>
    </div>
    </>
  )
}

export default Home