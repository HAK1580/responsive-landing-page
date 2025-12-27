import React from 'react'
import { useState,useEffect } from 'react'
import Hamburger from './Hamburger.jsx'


const Navbar = () => {

const [isOpen, setIsOpen] = useState(false);

useEffect(()=>{
if(isOpen){
  document.body.style.overflow = 'hidden';
}
else{
  document.body.style.overflow = 'auto'; 
}


},[isOpen])

const handleOutsideClick = (e) => {
  if (isOpen && !e.target.closest('.ham-area')) {
    setIsOpen(false);
  }
};
useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [isOpen]);


  return (
    <div className='nav mx-2   md:w-[98%] md:mx-auto  p-3 my-3'>
      <div className="flex   justify-between">
       <a href="/"> <img   width={70} className='sm:w-20 md:w-25 cursor-pointer ' src="nike.png" alt="not found" />   </a>
         <img onClick={()=>setIsOpen(!isOpen)}  width={30} className={`sm:hidden ham-area `} src={` ${isOpen ? 'cross.svg' : 'hamburger.svg'}  `} alt="not found" />
         {/* Make hamburger functionality for smaller screens  */}
         <div className="nav-links hidden sm:block">
          <ul>
            <li className='flex   my-3  mx-4  gap-6'>
              <a className='sm:text-base md:text-xl ' href="">Home</a>
              <a className='sm:text-base md:text-xl ' href="">About</a>
              <a className='sm:text-base md:text-xl ' href="">Features </a>
              <a className='sm:text-base md:text-xl ' href="">Contacts</a>
            </li>
          </ul>
         </div>

      </div>
         <div className={`ham-menue sm:hidden ${isOpen ? 'block' : 'hidden' } `} >
           <Hamburger /> 
 
         </div>
    </div>
  )
}

export default Navbar