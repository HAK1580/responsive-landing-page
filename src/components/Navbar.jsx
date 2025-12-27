import React from 'react'


const Navbar = () => {
  return (
    <div className='nav mx-2   md:max-w-[98%] md:mx-auto  p-3 my-3'>
      <div className="flex justify-between">
       <a href="/"> <img   width={70} className='sm:w-20 md:w-25 cursor-pointer ' src="nike.png" alt="not found" />   </a>
         <img onClick={()=>alert("hamburger menue will be added soon! ")}  width={30} className='sm:hidden' src="hamburger.svg" alt="not found" />
         <div className="nav-links hidden sm:block">
          <ul>
            <li className='flex  my-3  mx-4  gap-6'>
              <a className='sm:text-base md:text-xl ' href="">Home</a>
              <a className='sm:text-base md:text-xl ' href="">About</a>
              <a className='sm:text-base md:text-xl ' href="">Features </a>
              <a className='sm:text-base md:text-xl ' href="">Contacts</a>
            </li>
          </ul>

         </div>
      </div>
    </div>
  )
}

export default Navbar