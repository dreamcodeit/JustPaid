import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <>
      {/* Hero Section */}
      <div className='bg-[#faf9f5]'>
        <div className='container py-[80px]'>
          <div className='flex justify-between'>
            <div className='w-[50%] py-[50px]'>
              <h1 className='font-[300] leading-[53px] tracking-[-1.92px] mt-[32px] text-[48px]'>AI Financial Copilot: The <br></br>GPT App</h1>

              <h6 className=' font-[400] leading-[30px] tracking-[-0.2px] mt-[32px] mt-[32px] text-[20px] text-[#787878] max-w-[412px'> Your company’s new best friend for business finance operations insights
              </h6>

              <div className='flex justify-start gap-[12px] mt-[32px]'>
                <a className='cursur-pointer' href='#'> <button className="secondary-btn focus:outline-none">Get started • Schedule demo</button></a>
                <a href='#'> <button className="third-btn focus:outline-none">Talk to Founders</button></a>
              </div>
              <p className='pt-[5px] ps-[40px] font-[400] text-[12px] text-[#61615e]'>No credit card required.</p>
            </div>

            <div className="w-[45%] flex justify-end">
              <Image src="/platform-gpt/gpt-hero-img.png" height={500} width={500} alt="color" />
            </div>
          </div>
        </div>
      </div>

      {/* Revolutionizing business finance */}
      <section className='bg-[#1E202E] py-[60px]'>
        <div className='main-box-automate container'>
          <h2 className='text-center font-[500] text-[11px] text-[#fff] theme-sub-heading'>Revolutionizing business finance</h2>
          <p className='text-center text-primary bg-primary theme-peregraph text-[#AFAFAF] mt-[8px]'>with our AI-powered tools</p>

          <div className='inner-box-automate-main flex flex-wrap gap-[18px] mt-[64px]'>

            <div className='inner-box-automate max-w-[43%]'>
              <Image src={'/home/card-one.png'} width={296} height={236} alt='img' />
              <p className='automate mt-[71]'><span className='text-[#fff]'>Complexity made simple.</span> Your cash flow takes a hit when payments are delayed by 30+ days. Simplifying invoicing ensures quick payment and financial stability.</p>
            </div>

            <div className='inner-box-automate max-w-[55%]'>
              <Image src={'/home/card-two.png'} width={350} height={234} alt='img' />
              <p className='automate  mt-[52]'> <span className='text-[#fff]'>􀧘  Modern architecture, modern results.</span> Built for today's startups and growing businesses, our platform integrates seamlessly with your existing tech stack while providing the flexibility to scale as you evolve. </p>
            </div>

            <div className='inner-box-automate max-w-[55%]'>
              <Image src={'/home/card-three.png'} width={352} height={210} alt='img' />
              <p className='automate mt-[65]'> <span className='text-[#fff]'>􁖆  AI-powered precision.</span> Say goodbye to billing errors and revenue leakage. Our autonomous agent continuously learns from your data, ensuring accurate invoicing every time while identifying opportunities to optimize your revenue streams.</p>
            </div>

            <div className='inner-box-automate max-w-[43%]'>
              <Image src={'/home/card-four.png'} width={285} height={210} alt='img' />
              <p className='automate mt-[30]'> <span className='text-[#fff]'>􀖗  Strategic Financial Insights.</span> Transform billing data into actionable intelligence. See real-time cash flow, customer behavior, and revenue trends in real-time for faster decisions.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default page