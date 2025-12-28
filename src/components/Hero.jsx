import React from 'react'

const Hero = () => {
  return (
    <div className='w-[90%]  mx-auto  my-10'>

        <div className="hero-section">
        <h1 className='text-4xl md:text-5xl lg:text-6xl  font-bold'>Hero Title</h1>
        <div className="hero-desc-img   flex justify-between gap-[8vw] "> 
           <div className="hero-desc    flex flex-col  gap-8 mt-2">
        <p className='sm:w-50 w-40 mt-4 mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet.</p> 
         <a href="">
           <button  className='bg-black cursor-pointer w-35 sm:w-full text-white  px-4 py-2 rounded
          active:text-gray-300 '>Get Started</button>
          </a>

            </div>
    

      <div className="img">
        <img className='h-45 cursor-pointer md:h-60 lg:h-80' src='img_here.png' alt="Hero" />
      </div>
        </div>
      </div>
    
    </div>
  )
}

export default Hero