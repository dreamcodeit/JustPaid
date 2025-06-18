import React from 'react'
import Image from 'next/image'
import Blogs from '../components/Blogs'
import Link from 'next/link'

const page = () => {
  return (
   <>
   
   <div className='bg-[#faf9f5]'>
    
           <div className='container py-[80px]'>
           <h1 className='font-[300] leading-[53px] tracking-[-1.92px] mt-[32px] text-[48px]'>Blog and resources</h1> 
             <div className='flex justify-between'>
               <div className='w-[55%] py-[50px]'>
   
                
                 <h2  className='font-[300] leading-[53px] tracking-[-1.92px] mt-[32px] text-[48px]'>Building Startups from the Inside Out: Lessons on Culture, Growth, and Resilience</h2>
   
                 <h6 className=' font-[400] leading-[30px] tracking-[-0.2px] mt-[32px]  text-[20px] text-[#787878] max-w-[550px]'>When I first joined JustPaid, the sales team was pretty much non-existent. No playbooks. No systems.
                 </h6>
  
             
                 
               </div>
   
               <div className="bg-no-repeat cover w-[42%] bg-[url(/blog/blog.png)] flex flex-col justify-center items-center py-4">
   
        


   
               </div>
             </div>
           </div>
         </div>







{/* Blogs */}
<Blogs/>

{/* Blogs */}
   </>
  )
}

export default page