import React from 'react'
import Image from 'next/image'
import Accordion from '../components/Accordion'
import HomeSlider from '../components/homeSlider'
import TestimonialSection from '../components/OurClientsHome'

const page = () => {
  return (
    <>
      <div className='bg-[#faf9f5]'>
        <div className='container py-[80px]'>
          <div className='flex justify-between'>
            <div className='w-[55%] py-[50px]'>

              <span className='font-[500] text-[10px] max-w-[185px] items-center rounded-[4px] gap-[4px] px-[12] py-[4] logo-section flex  bg-[#EAE6DC]'> <span>Backed by</span> <Image src={'/y-log.svg'} height={15} width={15} alt='img'></Image> <span>Combinator (W23)</span> </span>
              <h1 className='font-[300] leading-[53px] tracking-[-1.92px] mt-[32px] text-[48px]'>Your autonomous <br /> <b className='font-[500]' >AI billing agent </b>for complex financial operations</h1>

              <h6 className=' font-[400] leading-[30px] tracking-[-0.2px] mt-[32px]  mt-[32px] text-[20px] text-[#787878] max-w-[412px] '>Built from the ground up to handle complexity,
                not stitched together like the  rest.
              </h6>

              <div className='flex justify-start gap-[12px] mt-[32px]'>
                <a className='cursur-pointer' href='#'> <button className="secondary-btn focus:outline-none">Get started • Schedule demo</button></a>
                <a href='#'> <button className="third-btn focus:outline-none">Talk to Founders</button></a>
              </div>
              <p className='pt-[5px] ps-[40px] font-[400] text-[12px] text-[#61615e]'>No credit card required.</p>
            </div>

            <div className="w-[42%] bg-[url(/home/banner-right.webp)] flex flex-col justify-center items-center gap-[10px] py-4">

              <div className="hero-setion-box-outer flex bg-white px-[18px] py-[15px] gap-[15px] rounded-[4px] h-[73px] max-w-[336px]">
                <div className="inner-hero-right">
                  <Image src="/color-one.svg" height={44} width={44} alt="color" />
                </div>
                <div className="inner-hero-left">
                  <p className='font-[500] text-[11px] text-[#000]'>CFOs waste valuable time on billing, contracts, and collections.</p>
                </div>
              </div>

              <div className="hero-setion-box-outer flex bg-white px-[18px] py-[15px] gap-[15px] rounded-[4px] h-[73px] max-w-[336px]">
                <div className="inner-hero-right">
                  <Image src="/color-one.svg" height={44} width={44} alt="color" />
                </div>
                <div className="inner-hero-left">
                  <p className='font-[500] text-[11px] text-[#000]'>JustPaid.ai automates everything. It reads
                    contracts, sends invoices, and more</p>
                </div>
              </div>

              <div className="hero-setion-box-outer flex bg-white px-[18px] py-[15px] gap-[15px] rounded-[4px] h-[73px] max-w-[336px]">
                <div className="inner-hero-right">
                  <Image src="/color-one.svg" height={44} width={44} alt="color" />
                </div>
                <div className="inner-hero-left">
                  <p className='font-[500] text-[11px] text-[#000]'>No more spreadsheet chaos. You get paid faster, with less work.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>


      {/* Automate complex decisions Start */}

      <section className='bg-[#1E202E] py-[60px]'>
        <div className='main-box-automate container'>
          <h2 className='text-center font-[500] text-[11px] text-[#fff] theme-sub-heading'>Automate complex decisions</h2>
          <p className='text-center text-primary bg-primary theme-peregraph text-[#AFAFAF] mt-[8px]'>AI collaboration enhances your creativity</p>

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

      {/* Automate complex decisions End*/}


      {/* Designed for the modern  */}

      <section className='bg-[#fff] py-[96px]'>
        <div className='main-box-designed container'>

          <h2 className='text-center font-[500] text-[11px] text-[#161616] theme-sub-heading'>Designed for the modern CFO <br />
            and finance leader</h2>
          <p className='text-center text-primary bg-primary theme-peregraph text-[#6B6B6B] mt-[20px] w-[48%] mx-auto'>As a financial decision-maker, you're balancing operational efficiency with strategic growth initiatives. JustPaid eliminates the manual workload that keeps your team from focusing on what matters:</p>


          <div className='inner-box-designed flex flex-wrap gap-[24px] justify-betweeen mt-[64px]'>

            <div className='max-w-[31%]'>
              <Image src={'/home/designed-one.png'} width={384} height={273} alt='img' />
              <p className='text-center text-primary bg-primary theme-peregraph-b text-[#1B2843] mt-[20px] font-[500]  mx-auto'>􀐕  Full workflow automation</p>
              <p className='text-center text-primary bg-primary theme-peregraph text-[#6B6B6B]  mx-auto'>From generating invoices to chasing payments, our AI handles it all—no human babysitting required.</p>
            </div>

            <div className='max-w-[31%]'>
              <Image src={'/home/designed-one.png'} width={384} height={273} alt='img' />
              <p className='text-center text-primary bg-primary theme-peregraph-b text-[#1B2843] mt-[20px] font-[500] mx-auto'>Skip the tedious</p>
              <p className='text-center text-primary bg-primary theme-peregraph text-[#6B6B6B]  mx-auto'>Let our AI handle contract analysis, invoice generation, and payment tracking</p>
            </div>

            <div className='max-w-[31%]'>
              <Image src={'/home/designed-one.png'} width={384} height={273} alt='img' />
              <p className='text-center text-primary bg-primary theme-peregraph-b text-[#1B2843] mt-[20px] font-[500]  mx-auto'> Cash in faster</p>
              <p className='text-center text-primary bg-primary theme-peregraph text-[#6B6B6B]  mx-auto'>Accelerate collections with intelligent workflows and automated follow-ups</p>
            </div>
          </div>
          <div className='inner-box-designed flex flex-wrap gap-[24px] justify-betweeen mt-[64px]'>

            <div className='max-w-[31%]'>
              <Image src={'/home/designed-one.png'} width={384} height={273} alt='img' />
              <p className='text-center text-primary bg-primary theme-peregraph-b text-[#1B2843] mt-[20px] font-[500]  mx-auto'> Gain control</p>
              <p className='text-center text-primary bg-primary theme-peregraph text-[#6B6B6B]  mx-auto'>Access comprehensive financial dashboards that provide the insights you need, when you need them</p>
            </div>

            <div className='max-w-[31%]'>
              <Image src={'/home/designed-one.png'} width={384} height={273} alt='img' />
              <p className='text-center text-primary bg-primary theme-peregraph-b text-[#1B2843] mt-[20px] font-[500] mx-auto'>Scale confidently</p>
              <p className='text-center text-primary bg-primary theme-peregraph text-[#6B6B6B]  mx-auto'>Our platform grows with you, handling increasing complexity without adding headcount</p>
            </div>

            <div className='max-w-[31%]'>
              <Image src={'/home/designed-one.png'} width={384} height={273} alt='img' />
              <p className='text-center text-primary bg-primary theme-peregraph-b text-[#1B2843] mt-[20px] font-[500]  mx-auto'> Real-time data analytics</p>
              <p className='text-center text-primary bg-primary theme-peregraph text-[#6B6B6B]  mx-auto'>Gain instant insights into your financial performance with live updates</p>
            </div>
          </div>

        </div>

      </section>

      {/* Designed for the modern  */}






      {/* Built for modern*/}

      <section className='bg-[#1E202E]'>
        <div className='container-full py-[72px]'>

          <div className='row-one max-w-[664px] mx-auto '>
            <h2 className=' text-center font-[500] text-[11px] text-[#FFFFFF] theme-sub-heading'>Built for modern finance teams that demand more</h2>
            <p className='max-w-[570px]   text-center text-primary bg-primary theme-peregraph text-[#AFAFAF] mt-[20px] mx-auto'>From startups to established enterprises, finance leaders trust JustPaid to transform their billing operations into a strategic advantage. Our autonomous AI billing agent supports your custom systems and complex pricing models without compromise.
            </p>
          </div>

          <div className='home-slider mt-[80px]'>
            <HomeSlider />
          </div>
        </div>

      </section>

      {/* Built for modern*/}




      {/* Don’t take  */}

      <section className='bg-[#FAF9F5]'>
        <div className='container py-[60px]'>
          <div className='flex justify-between'>
            <div className='max-w-[48%]'> <h2 className=' text-left font-[500] text-[11px] text-[#161616] theme-sub-heading'>Don’t take our word for it. See what our clients say</h2>
             <p className='text-left text-primary bg-primary theme-peregraph text-[#6B6B6B] mx-auto py-[20px]'>Tell us your most pressing billing challenge—Whether it’s collections, accuracy,  or improving financial reporting—and we’ll show you how JustPaid streamlines the entire flow.</p>
               <a className='pointer relative ' href='#'> <button className=" fourth-btn focus:outline-none bg-[#161616]">Get started • Schedule demo</button>

              </a>
            </div>
            <div className='max-w-[48%]'>
              <TestimonialSection/>
            </div>
          </div>
        </div>
      </section>

      {/* Don’t take  */}



      {/* Questions and answers */}

      <section className='bg-[#F0EEE6] py-[60px]'>
        <div className='container-lg   rounded-[8px]'>

          <div className='flex max-w-[100%]'>
            <div className='max-w-[50%] w-[50%] bg-[#fff] py-[30px] px-[40px] rounded-l-lg'>
              <h2 className='text-start font-[500] text-[11px] text-[#161616] theme-sub-heading'>Questions and answers</h2>
              <p className='text-left text-primary bg-primary theme-peregraph text-[#AFAFAF] mt-[20px] mx-auto'>Tell us your most pressing billing challenge—whether it's getting paid on time, ensuring accurate and timely billing, or improving financial reporting—and we'll show you exactly how Justpaid.ai can solve it.
              </p>
              <a className='pointer relative ' href='#'> <button className="mt-[20px] fourth-btn focus:outline-none bg-[#161616]">Get started • Schedule demo</button>

              </a>
            </div>
            <div className='max-w-[50%] w-[50%] bg-[#363E47] py-[30px] px-[40px] rounded-r-lg'>
              <Accordion title="Is there a free trial available?">
                Yes, you can try us for free for 30 days. We’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.
              </Accordion>

              <Accordion title="Can I change my plan later?">
                It uses React state to toggle visibility and Tailwind for styling.
              </Accordion>

              <Accordion title="What is your cancellation policy?">
                Yes! Tailwind’s utility classes ensure responsive behavior out of the box.
              </Accordion>

              <Accordion title="Can other info be added to an invoice?">
                Yes! Tailwind’s utility classes ensure responsive behavior out of the box.
              </Accordion>

              <Accordion title="How does billing work?">
                Yes! Tailwind’s utility classes ensure responsive behavior out of the box.
              </Accordion>

              <Accordion title="How do I change my account email?">
                Yes! Tailwind’s utility classes ensure responsive behavior out of the box.
              </Accordion>
            </div>
          </div>

        </div>
      </section>

      {/* Questions and answers */}




      {/* Schedule a personalized */}

      <section className='bg-[#1E252E] py-[60px]'>
        <div className='container-lg py-[60px] pb-[90px] bg-[#363E47] rounded-[8px]'>
          <h2 className='text-center font-[500] text-[11px] text-[#fff] theme-sub-heading'>Schedule a personalized demo today
          </h2>
          <p className='text-center text-primary bg-primary theme-peregraph text-[#AFAFAF] mt-[20px] w-[45%] mx-auto'>Join the U.S. businesses scaling smarter with JustPaid. In just 3-7 days, our AI Billing Agent can transform how you manage invoicing, payments, and growth. Let’s talk about what it can do for you.</p>
          <div className='flex justify-center gap-[12px] mt-[32px]'>
            <a className='pointer relative' href='#'> <button className="secondary-btn focus:outline-none">Get started • Schedule demo</button>
              <span className='below-btn pt-[5px]  font-[400] text-[12px] text-[#ffffffa4] text-center'>No credit card required.</span>
            </a>
            <a href='#'> <button className="third-btn focus:outline-none">Talk to Founders</button></a>
          </div>

        </div>

      </section>


      {/* Schedule a personalized */}


    </>
  )
}

export default page