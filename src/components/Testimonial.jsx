import React from 'react'

const Testimonial = () => {
  return (
    <div className='my-20  '>
    <h1 className=' max-w-[90%]  mx-auto text-2xl my-10 md:text-3xl  font-bold'>   Testimonials  </h1>
     
     <div className="names-box flex gap-4 justify-evenly max-w-[95%]
     mx-auto md:max-w-[90%]">

        <div className="card1 bg-gray-200 rounded-xl  border flex flex-col gap-4 lg:h-70 p-10 lg:p-16 lg:max-w-[40%]   max-w-[50%]">
            <div className="name-circle  flex justify-center gap-4 items-center ">
            <div className="circle bg-gray-400 rounded-full p-5  sm:p-7 border">    
            </div>
            <h1 className='sm:text-xl text-[3.5vw] font-semibold text-center'>Vito Carleone</h1>
           </div>
            <p className='sm:text-base text-center text-[2.9vw]  '> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut distinctio alias dignissimos fuga nisi eos, assumenda non molestias accusamus cumque.  </p>

        </div>
        <div className="card2  bg-gray-200 rounded-xl      border flex flex-col gap-4 lg:h-70 p-10 lg:p-16 lg:max-w-[40%]   max-w-[50%]">
           <div className="name-circle  flex justify-center gap-4 items-center ">
            <div className="circle bg-gray-400 rounded-full p-5 sm:p-7 border">    
            </div>
            <h1 className='sm:text-xl text-[3.5vw] font-semibold text-center'>Jofra Archer</h1>
           </div>
            <p className='sm:text-base text-center text-[2.9vw]  '> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut distinctio alias dignissimos fuga nisi eos, assumenda non molestias accusamus cumque.  </p>

        </div>
        

     </div>

    </div>
  )
}

export default Testimonial