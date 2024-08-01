import { AiOutlineCopyright } from "react-icons/ai"; 
import { AiOutlineGlobal } from "react-icons/ai"; 
import { AiFillLinkedin } from "react-icons/ai"; 
import { AiFillTwitterCircle } from "react-icons/ai"; 
import { BsFacebook } from "react-icons/bs"; 
import { RiFileChart2Fill } from "react-icons/ri";
export default function Child(){
return(
  <>
  <div className="container flex sm:flex-c justify-center align-middle items-center bg-gray-800 w-[100vw] max-w-full h-80">
<div className="row ">
<div className="grid grid-cols-1 md:grid-cols-3 justify-center">
  <div className="max-[1000px]:text-xs max-[1000px]:text-center firefox-text">
  <h1 className="text-white text-4xl uppercase pb-4 font-semibold">Location</h1>
  <p className="text-white">2215 John Daniel Drive</p>
  <p className="text-white">Clark, MO 65243</p>
  </div>
  <div className="max-[1000px]:text-xs max-[1000px]:text-center firefox-text">
  <h1 className="text-white text-4xl uppercase pb-4 font-semibold">AROUND THE WEB</h1>
  <div className="text-white flex text-4xl px-5 gap-7">
      <div className="p-2 bg-gray-800 border border-white rounded-full">
        <BsFacebook />
      </div>
      <div className="p-2 bg-gray-800 border border-white rounded-full">
        <AiFillTwitterCircle />
      </div>
      <div className="p-2 bg-gray-800 border border-white rounded-full">
        <AiFillLinkedin />
      </div>
      <div className="p-2 bg-gray-800 border border-white rounded-full">
        <AiOutlineGlobal />
      </div>
    </div>
  ;
  </div>
  <div className="max-[1000px]:text-xs max-[1000px]:text-center firefox-text">
  <h1 className="text-white text-4xl uppercase pb-4 font-semibold ps-7">ABOUT FREELANCER</h1>
  <p className="text-white max-w-96 ps ps-7">Freelance is a free to use, licensed Bootstrap theme created by Route</p>
  </div>

</div>

</div>



  </div>
  <div className="container bg-black w-[100vw] max-w-full h-20">
<p className="text-white flex justify-center align-middle items-center py-5 text-xl">Copyright <AiOutlineCopyright className="mx-1" /> Your Website 2024</p>
  </div>
  </>
)

}