import React from 'react'

const CalltoAction = () => {
  return (
    <div className='mt-20 ' >
     <button onClick={()=>alert("Operations are going on please wait!")} className='bg-black w-full text-white 
     p-2.5 text-xl rounded sm:hidden
    active:text-gray-300
  '  >Call to Action</button>

    <div className="call-to-action my-10 hidden sm:block  ">
    <h1 className=' max-w-[90%]  mx-auto text-2xl my-10 md:text-3xl  font-bold'> 
    Call to Action </h1>
    
    <div className="call-card bg-gray-200 rounded-xl p-8 border max-w-[95%] mx-auto">
   <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias placeat numquam totam saepe rem tempora. Officia ipsa temporibus amet aut.
    Lorem ipsum dolor asd sit, amet consectetur adipisicing elit. Ea, repellendus. 
  </p>
    </div>

    </div>

    </div>
  )
}

export default CalltoAction