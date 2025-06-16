import React from 'react'
import Image from 'next/image'
const footer = () => {
  return (
   <>
   <section className='bg-[#0E1116] px-[30] py-[40px]'> 
   <div className='container-sm '>

    <div className='flex justify-between mt-[40px]'>
        <div className='flex flex-col max-w-[20%]'>
         <a href='#' className='text-[#AFAFAF] font-[400] text-[18px] mb-[18px]'><span>Company</span></a>
         <a href='#' className='text-white font-[400] text-[14px] mb-[18px] '><span>Contact Us</span></a>
         <a href='#'  className='text-white font-[400] text-[14px] mb-[18px]'><span>Carrers Tips</span></a>
         <a href='#' className='text-white text-[14px] '><span>Careers</span></a>
        </div>

        <div className='flex flex-col max-w-[20%]'>
  <a className='text-[#AFAFAF] text-[18px] mb-[18px]'><span>Resources</span></a>
         <a className='text-white text-[14px] mb-[18px]'><span>Blog</span></a>
         <a href='#'  className='text-white text-[14px] mb-[18px]'><span>Carrers Tips</span></a>
         <a  href='#' className='text-white text-[14px] '><span>Careers</span></a>
        </div>

        

        <div className='flex flex-col max-w-[20%]'>
  <a className='text-[#AFAFAF] text-[18px] mb-[18px]'><span>Policies</span></a>
         <a className='text-white text-[14px] mb-[18px]'><span>Privacy Policy</span></a>
         <a href='#'  className='text-white text-[14px] mb-[18px]'><span>Terms and Conditions</span></a>
         <a  href='#' className='text-white text-[14px] mb-[18px]'><span>Legal</span></a>
         <a  href='#' className='text-white text-[14px] mb-[18px]'><span>Community Guidelines</span></a>
         <a  href='#' className='text-white text-[14px] '><span>Cookies</span></a>

        </div>

        
        <div className='flex flex-col max-w-[20%]'>
  <a className='text-[#AFAFAF] text-[18px] mb-[18px]'><span>Contact</span></a>
         <a className='text-white text-[14px] mb-[18px]'><span>+333 3333 3333</span></a>
         <a href='#'  className='text-white text-[14px] mb-[18px]'><span>justpaid@justpaid.ai</span></a>
         <a  href='#' className='text-white text-[14px] '><span>All systems operational</span></a>
        </div>

    </div>
   </div>

<div className='footer-img flex justify-center text-center mt-[50px]'>
   <Image src={'/footer.svg'} width={1400} height={221} alt='footer'/>
</div>

<div className='max-w-[1360px] mx-auto flex justify-between bg-[#1C242A] px-[120] py-[12px] '>
<p  className='text-[#A9A9A9] text-[14px] '>Copyright @2025 JustPaid. All rights reserved</p>
<p  className='text-[#A9A9A9] text-[14px] '>Site by Branding & Co.</p>
</div>

   </section>
   </>
  )
}

export default footer