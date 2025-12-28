import React from 'react'
const Hamburger = () => {
  return (
    <div className='border border-gray-500 -mt-1 p-1  bg-gray-200 fixed right-0 mx-auto h-full  w-[75%] ' >
          <ul className='flex flex-col ml-5 mt-5 gap-6'>
            <li><a className='text-[1.15rem] ham-a' href="/">Home</a></li>
            <li><a className='text-[1.15rem] ham-a' href="/about">About</a></li>
            <li><a className='text-[1.15rem] ham-a' href="/skills">Features</a></li>
            <li><a className='text-[1.15rem] ham-a' href="/projects">Contacts</a></li>
        </ul>
         <div className="social-media mt-18 m-6">
            <h1 className='uppercase   tracking-wide  soge text-[1.3rem]'>Social </h1>
           <div className="icons py-12 gap-4 flex justify-center">
           <a target='_blank' href="https://github.com/HAK1580"> <img  className='w-10' src="github.svg" alt="" /> </a>
           <a target='_blank' href="https://www.tiktok.com/@codewithme._.01"> <img className='w-10' src="tiktok.svg" alt="" />  </a>
           <a target='_blank' href="https://www.linkedin.com/in/muhammad-hassan-ali-khan-49a965281/ "> <img className='w-10' src="linkedin.svg" alt="" /> </a>
           </div>
        </div>

    </div>
 
      
  )
}

export default Hamburger