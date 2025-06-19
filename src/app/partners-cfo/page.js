import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const page = () => {
  return (
    <>
      <div className='bg-[#faf9f5]'>
        <div className='container py-[80px]'>
          <div className='flex justify-between'>
            <div className='w-[55%] py-[50px]'>
              <h1 className='font-[300] leading-[53px] tracking-[-1.92px] mt-[32px] text-[48px]'>Partner with us</h1>
              <h6 className=' font-[400] leading-[30px] tracking-[-0.2px] mt-[32px]  text-[20px] text-[#787878] max-w-[540px] '>Join a community of innovative partners, and together, let’s create seamless experiences that transform what’s possible. Whether you're a developer or accountant, our platform is designed to help you grow, build, and thrive
              </h6>
              <div className='flex justify-start gap-[12px] mt-[32px]'>
                <a className='cursur-pointer' href='#'> <button className="secondary-btn focus:outline-none">Get started • Schedule demo</button></a>
                <a href='#'> <button className="third-btn focus:outline-none">Talk to Founders</button></a>
              </div>
              <p className='pt-[5px] ps-[40px] font-[400] text-[12px] text-[#61615e]'>No credit card required.</p>
            </div>
            <div className="w-[43%] min-h-[500px] bg-[url(/home/banner-right.webp)] flex flex-col justify-center items-center py-4">
            </div>
          </div>
        </div>
      </div>


      {/* A Platform  */}

      <section className='bg-[#1E202E] py-[72px]'>


        <div className='container'>

          <div className='text'>
            <h2 className='text-center font-[500] text-[36px] text-[#fff] theme-sub-heading'>A Platform Built By Accountants, For Accountants</h2>
            <p className='text-center text-[16px] bg-primary theme-peregraph text-[#AFAFAF] mt-[20px] w-[45%] mx-auto'>With a focus on efficiency, growth, and collaboration, we’re committed to helping you succeed every step of the way.</p>
          </div>

          <div className='row flex flex-wrap gap-6 mt-[80px]'>

            <div className="bg-[#363947] rounded-[8px] shadow-md py-[30px] px-[30px] w-full sm:w-[calc(50%-12px)] md:w-[calc(33.33%-16px)] ">
              <img
                src={'/partners-cfo/a1.png'}
                alt={'img'}
                className="max-w-[324px] h-[188px] object-cover rounded-md mt-[20px]"
              />
              <p className="text-[14px] text-[#969BA6] mt-[60px]">
               <span className='font-[500] text-white'>Built for finance, not just tech.</span>  We speak your language — cash flow, compliance, DSO, not just features and roadmaps. Everything we build is designed to move your numbers, not just add noise.
              </p>
            </div>

 <div className="bg-[#363947] rounded-[8px]  shadow-md py-[30px] px-[30px] w-full sm:w-[calc(50%-12px)] md:w-[calc(33.33%-16px)]">
              <img
                src={'/partners-cfo/a2.png'}
                alt={'img'}
                className="max-w-[100%] h-[178px] object-cover rounded-md mt-[20px]"
              />
              <p className="text-[14px] text-[#969BA6] mt-[70px]">
             <span className='font-[500] text-white'>Aligned with your growth.</span>  We scale with your business, not against it. No over-complication, no surprise costs — just a platform that flexes with your needs and stays out of your way.
              </p>
            </div>

             <div className="bg-[#363947] rounded-[8px] shadow-md py-[30px] px-[30px] w-full sm:w-[calc(50%-12px)] md:w-[calc(33.33%-16px)]">
              <img
                src={'/partners-cfo/a3.png'}
                alt={'img'} 
                className="max-w-[100%] mx-auto h-[274px] object-cover rounded-md "
              />
              <p className="text-[14px] text-[#969BA6] mt-[34px]">
               <span className='font-[500] text-white'>Grow your offering.</span> Give your clients more without building it all yourself. JustPaid adds automation, intelligence, and billing power that fits seamlessly into your stack.
              </p>
            </div>


          </div>
        </div>

      </section>


      {/* A Platform  */}



{/* Accounting  */}

<section className='bg-[#FAF9F5] py-[60px]'>
<div className='container'>

  <div className='row bg-[#F0EEE6] flex justify-between rounded-[8px] overflow-hidden'>
<div className='col-one max-w-[48%] px-[30px] py-[40px]'>
<h2 className=' font-[500] text-[36px] text-[#161616] theme-sub-heading'>Accounting partners</h2>
 <p className=' text-[16px] bg-primary theme-peregraph text-[#6B6B6B] mt-[20px] w-[100%] '>Gain exclusive tools, priority support, and revenue-sharing opportunities tailored for accountants, all on a platform built by accountants for accountants</p>
   <a className='pointer relative ' href='#'> <button className="mt-[20px] fourth-btn focus:outline-none bg-[#161616]">Learn More</button></a>
</div>
<div className='col-one min-h-[475px] w-[48%] max-w-[48%] bg-[url(/partners-cfo/stwo.png)] bg-center bg-cover'>
</div>
</div>

  <div className='row bg-[#F0EEE6] flex justify-between rounded-[8px] overflow-hidden mt-[32px]'>
<div className='col-one max-w-[48%] px-[30px] py-[40px]'>
<h2 className=' font-[500] text-[36px] text-[#161616] theme-sub-heading'>Developer partners</h2>
 <p className=' text-[16px] bg-primary theme-peregraph text-[#6B6B6B] mt-[20px] w-[100%] '>Gain exclusive tools, priority support, and revenue-sharing opportunities tailored for accountants, all on a platform built by accountants for accountants</p>
   <a className='pointer relative ' href='#'> <button className="mt-[20px] fourth-btn focus:outline-none bg-[#161616]">Learn More</button></a>
</div>
<div className='col-one min-h-[475px] w-[48%] max-w-[48%] bg-[url(/partners-cfo/sthree.png)] bg-center bg-cover'>
</div>
</div>


</div>
</section>


{/* Accounting  */}





 {/* A Platform  */}

      <section className='bg-[#F0EEE6] py-[96px]'>


        <div className='container'>

          <div className='text'>
            <h2 className='text-center font-[500] text-[36px] text-[#161616] theme-sub-heading'>Discover other partnership opportunities</h2>
        
            <p className='text-center text-[16px] bg-primary theme-peregraph text-[#AFAFAF] mt-[20px] w-[50%] mx-auto'>Explore diverse partnership opportunities—whether you're integrating software, providing hands-on support, or expanding reach as a reseller, there’s a path for you</p>
          </div>

          <div className='row flex flex-wrap gap-6 mt-[64px]'>

            <div className="  w-full sm:w-[calc(50%-12px)] md:w-[calc(33.33%-16px)] ">
              <img
                src={'/partners-cfo/plan.png'}
                alt={'img'}
                className="max-w-[100%] h-[273px] object-cover rounded-md "
              />
                  <p className='text-center text-[16px] bg-primary  text-[#1B2843] w-[45%] mx-auto mt-[20px] font-[500]'> Technology Partners</p>
              <p className="text-[14px] text-center text-[#1B2843] mt-[10px]">
             Collaborate with us to integrate cutting-edge solutions that enhance your software and deliver more value to your customers.
              </p>
            </div>

   <div className="  w-full sm:w-[calc(50%-12px)] md:w-[calc(33.33%-16px)] ">
            <img
                src={'/partners-cfo/plan.png'}
                alt={'img'}
                className="max-w-[100%] h-[273px] object-cover rounded-md "
              />
                  <p className='text-center text-[16px] bg-primary font-[500] text-[#1B2843] w-[45%] mx-auto mt-[20px] '> Service partners</p>
              <p className="text-[14px] text-center text-[#1B2843] mt-[10px]">
            Provide on-site expertise and support, helping businesses maximize their use of our platform while earning for your skills.
              </p>
            </div>

            <div className="  w-full sm:w-[calc(50%-12px)] md:w-[calc(33.33%-16px)] ">
           <img
                src={'/partners-cfo/plan.png'}
                alt={'img'}
                className="max-w-[100%] h-[273px] object-cover rounded-md ]"
              />
                   <p className='text-center text-[16px] bg-primary font-[500] text-[#1B2843] w-[45%] mx-auto mt-[20px] '> Retail Partners</p>
              <p className="text-[14px] text-center text-[#1B2843] mt-[10px]">
            Expand your offerings and earn more by bringing our platform to new markets as an official reseller.
              </p>
            </div>


          </div>

<div className='mt-[64px] py-[20px] flex justify-center items-center gap-[20px] row bg-[#E3E0D3]'> <p>Got questions?</p>  <a className='pointer relative' href='#'> <button className="secondary-btn focus:outline-none">Contact us</button>
           
            </a></div>

        </div>

      </section>


      {/* A Platform  */}


      {/* Schedule a personalized */}

      <section className='bg-[#1E252E] py-[60px]'>
        <div className='container-lg py-[60px] pb-[90px] bg-[#363E47] rounded-[8px]'>
          <h2 className='text-center font-[500] text-[11px] text-[#fff] theme-sub-heading'>Become a partner
          </h2>
          <p className='text-center text-primary bg-primary theme-peregraph text-[#AFAFAF] mt-[20px] w-[45%] mx-auto'>Are you a financial advisor, accounting firm, or technology provider interested in joining our partner ecosystem? We're continuously expanding our network of strategic alliances to better serve our clients and support custom systems with our autonomous AI billing agent.</p>
          <div className='flex justify-center gap-[12px] mt-[32px]'>
            <a className='pointer relative' href='#'> <button className="secondary-btn focus:outline-none">Become a partner</button>
           
            </a>
           
          </div>

        </div>

      </section>


      {/* Schedule a personalized */}



    </>
  )
}

export default page