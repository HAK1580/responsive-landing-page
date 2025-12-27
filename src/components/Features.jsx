import React from 'react'

const Features = () => {
  return (
    <div className='my-20'>
        <h1 className=' max-w-[90%]  mx-auto text-2xl my-10 md:text-3xl  font-bold'>Features </h1>
        <div className="feature-box max-w-[95%] mx-auto grid gap-8 grid-cols-3 
        sm:grid-cols-2  sm:gap-12  sm:grid-rows-6 sm:max-w-[95%] 
        md:grid-cols-3 md:grid-rows-1 md:max-w-[90%]
        ">

            <div className="feature-card1 row-start-1 col-start-1 col-end-2 row-end-3  border flex justify-center items-center w-28
            sm:w-full  sm:row-start-1 sm:row-end-5 sm:h-full sm:col-start-1 sm:col-end-2
           md:row-start-1 md:row-end-8
        ">     
              <div className="text-box flex flex-col gap-4 max-w-[90%] mx-auto p-4">
              <h1 className='text-xl text-center  '  >Feature 1 </h1>
              <p className='text-[2.8vw]  sm:text-base' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, excepturi.</p>

              </div>
              
            
            </div>
            
            <div className="feature-card2 col-start-2 col-end-4   border flex justify-center  h-35 items-center
             sm:h-full  sm:row-start-1 sm:row-end-5 
             md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-8 
              
             ">
              <div className="text-box flex flex-col gap-4 max-w-[75%] mx-auto p-4">
              <h1 className='text-xl text-center  '  >Feature 2 </h1>
              <p className=" text-[2.5vw]  sm:text-base"  >Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, excepturi.</p>

              </div>
              
            </div>
            <div className="feature-card3 col-start-2 col-end-4   border flex justify-center  h-35 items-center
            sm:h-full sm:row-start-5 sm:row-end-9 
            md:col-start-3 md:col-end-4 md:row-start-1 md:row-end-8
            ">
               <div className="text-box flex flex-col gap-4 max-w-[75%] mx-auto p-4">
              <h1 className='text-xl text-center  '  >Feature 3 </h1>
              <p className=" text-[2.5vw]  sm:text-base"  >Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, excepturi.</p>

              </div>
              

            </div>
            <div className="feature-card4 hidden    border sm:flex justify-center   items-center
            h-full sm:col-start-1 sm:col-end-2 sm:row-start-5 sm:row-end-9 md:hidden
            ">
                <div className="text-box flex flex-col gap-4 max-w-[75%] mx-auto p-4">
              <h1 className='text-xl text-center  '  >Feature 4 </h1>
              <p  className=" text-[2vw]  sm:text-base"  >Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, excepturi.</p>

              </div>
              
            </div>

          {/* now make the features for the md screen size */}
             
        </div>
    </div>
  )
}

export default Features