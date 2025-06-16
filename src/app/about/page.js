import React from 'react';
import Image from 'next/image';
import Testimonials from '../components/testimonials';

const page = () => {
  return (
    <>
      {/* Hero Section */}
      <div className='about-hero-section py-[60px]'>
        <div className='top-tag-section max-w-[186px] mx-auto flex items-center gap-x-[7px] py-[4px] px-[12px] mb-[32px] text-[10px] font-[500] rounded-[4px] leading-[normal] text-[#161616] bg-[#eae6dc]'>
          Backed by<Image src={'/about/y_logo.png'} width={16} height={16} alt='text' /> Combinator (W23)
        </div>
        <div className='middle-section mb-[32px]'>
          <div className='middle-section-inner max-w-[800px] text-center flex justify-center flex-wrap mx-auto gap-y-[32px]'>
            <h1 className='text-[48px] font-[300] tracking-[-1.92px] leading-[53px] text-[#161616]'>We are more than just a platform</h1>
            <p className='hero-sub-descripation max-w-[575px] text-[20px] font-[400] tracking-[-.2px] leading-[30px] text-[#787878]'>JustPaid brings clarity to your finances — from spend management to payments to real-time analytics — all in one system built for speed and scale.</p>
            <div className='middle-bottom-btn flex gap-x-[12px]'>
              <div className='middle-bottom-btn-left'>
                <button className='text-[12px] font-[500] leading-[20px] px-[24px] rounded-[4px] h-[40px] cursor-pointer text-[#161616] bg-[#facd2d]'>Get started • Schedule demo</button>
                <p className='text-[12px] font-[400] tracking-[-.12px] leading-[normal] opacity-[.7] mt-[4px] text-[#21211f]'>No credit card required.</p>
              </div>
              <div className='middle-bottom-btn-right'>
                <button className='text-[12px] font-[500] leading-[20px] px-[24px] rounded-[4px] h-[40px] cursor-pointer text-[#21211f] bg-[#fffefb] border-1 border-[#d9d9d9]'>Talk to Founders</button>
              </div>
            </div>
          </div>
        </div>
        <div className='bottom-section flex justify-center'>
          <Image src={'/about/about-banner-img.webp'} width={798} height={547} alt='text' className='rounded-[8px]' />
        </div>
      </div>

      {/* Our founders stories */}
      <div className='founders-stories-main py-[60px] bg-[#1e202e]'>
        <div className='founders-stories-title text-center container'>
          <h2 className='text-[36px] font-[400] leading-[43.2px] tracking-[-1.44px] text-[#fff]'>Our founders’ stories</h2>
          <p className='text-[16px] font-[400] leading-[19.2px] tracking-[-0.16px] text-[#AFAFAF] mt-[8px]'>AI collaboration enhances your creativity</p>
        </div>
      </div>

      {/* Our values */}
      <div className='our-values-main pt-[96px]'>
        <div className='our-values-title text-center mb-[64px]'>
          <h2 className='text-[36px] font-[400] leading-[43.2px] tracking-[-1.44px] text-[#161616] mb-[20px]'>Our values</h2>
          <p className='text-[16px] font-[400] leading-[23.36px] tracking-[-0.16px] text-[#6b6b6b]'>The values that drive everything we do</p>
        </div>
        <div className='our-values-grid container flex flex-wrap justify-between gap-y-[64px]'>
          <div className='our-values-list w-[32%]'>
            <div className='our-values-img'>
              <Image src={'/about/our-values-img1.png'} width={384} height={273} alt='Diversity' />
            </div>
            <div className='our-values-content text-center mt-[24px]'>
              <h3 className='text-[16px] font-[500] leading-[25px] text-[#1b2843]'>Diversity</h3>
              <p className='text-[16px] font-[400] leading-[25px] text-[#666d80]'>We celebrate our differences. As a diverse team we bring a wider range of perspectives, leading to more innovative solutions for our customers</p>
            </div>
          </div>

          <div className='our-values-list w-[32%]'>
            <div className='our-values-img'>
              <Image src={'/about/our-values-img2.png'} width={384} height={273} alt='Growth' />
            </div>
            <div className='our-values-content text-center mt-[24px]'>
              <h3 className='text-[16px] font-[500] leading-[25px] text-[#1b2843]'>Growth</h3>
              <p className='text-[16px] font-[400] leading-[25px] text-[#666d80]'>We're a fast-moving company, constantly pushing boundaries and iterating on ideas. We embrace a growth mindset, believing that anything is possible with hard work and dedication</p>
            </div>
          </div>

          <div className='our-values-list w-[32%]'>
            <div className='our-values-img'>
              <Image src={'/about/our-values-img3.png'} width={384} height={273} alt='Innovation' />
            </div>
            <div className='our-values-content text-center mt-[24px]'>
              <h3 className='text-[16px] font-[500] leading-[25px] text-[#1b2843]'>Innovation</h3>
              <p className='text-[16px] font-[400] leading-[25px] text-[#666d80]'>We push boundaries and embrace the cutting edge. We're not afraid to be the first to explore new technologies like Financial AI, because we believe in the power to create groundbreaking innovation</p>
            </div>
          </div>

          <div className='our-values-list w-[32%]'>
            <div className='our-values-img'>
              <Image src={'/about/our-values-img4.png'} width={384} height={273} alt='Empowerment' />
            </div>
            <div className='our-values-content text-center mt-[24px]'>
              <h3 className='text-[16px] font-[500] leading-[25px] text-[#1b2843]'>Empowerment</h3>
              <p className='text-[16px] font-[400] leading-[25px] text-[#666d80]'>We empower our people to continuously learn and develop. We provide opportunities for skill-building, mentorship, and taking on new challenges to stay at the top of the game</p>
            </div>
          </div>

          <div className='our-values-list w-[32%]'>
            <div className='our-values-img'>
              <Image src={'/about/our-values-img5.png'} width={384} height={273} alt='Simplicity' />
            </div>
            <div className='our-values-content text-center mt-[24px]'>
              <h3 className='text-[16px] font-[500] leading-[25px] text-[#1b2843]'>Simplicity</h3>
              <p className='text-[16px] font-[400] leading-[25px] text-[#666d80]'>We understand that finances can be overwhelming. That's why we design our products with simplicity at the core. We focus on clear interfaces, intuitive functionality, and streamlined experiences</p>
            </div>
          </div>

          <div className='our-values-list w-[32%]'>
            <div className='our-values-img'>
              <Image src={'/about/our-values-img6.png'} width={384} height={273} alt='Agility' />
            </div>
            <div className='our-values-content text-center mt-[24px]'>
              <h3 className='text-[16px] font-[500] leading-[25px] text-[#1b2843]'>Agility</h3>
              <p className='text-[16px] font-[400] leading-[25px] text-[#666d80]'>We move quickly and adapt to change. In a fast-paced world, we embrace flexibility, pivoting to seize new opportunities and tackle challenges. Our agility keeps us ahead, delivering the best solutions for our customers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Backed by leading investors */}
      <div className='leading-investors-main pt-[64px]'>
        <div className='leading-investors-title text-center container'>
          <h2 className='text-[36px] font-[400] leading-[43.2px] tracking-[-1.44px] text-[#161616] mb-[20px]'>Backed by leading investors</h2>
          <p className='text-[16px] font-[400] leading-[23.36px] tracking-[-0.16px] text-[#6b6b6b]'>The values that drive everything we do</p>
        </div>
        <div className='leading-investors-logo pt-[64px] container flex items-center justify-between'>
          <div className='leading-investors-logo-list'>
            <Image src={'/about/investors-logo1.png'} width={214} height={120} alt='text' />
          </div>
          <div className='leading-investors-logo-list'>
            <Image src={'/about/investors-logo2.png'} width={195} height={96} alt='text' />
          </div>
          <div className='leading-investors-logo-list'>
            <Image src={'/about/investors-logo3.png'} width={200} height={200} alt='text' />
          </div>
          <div className='leading-investors-logo-list'>
            <Image src={'/about/investors-logo4.png'} width={200} height={48} alt='text' />
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className='testimonial-section-main mt-[96px] bg-[#F0EEE6] py-[60px]'>
        <div className='testimonial-section-inner container bg-[#fff] p-[60px]'>
          <Testimonials/>
        </div>
      </div>

      {/* Schedule a personalized demo Today */}
      <div className='schedule-personalized-main bg-[#1E252E] py-[60px]'>
        <div className='schedule-personalized-inner text-center container bg-[#363E47] p-[60px]'>
          <h2 className='text-[36px] font-[400] leading-[43.2px] tracking-[-1.44px] text-[#fff] mb-[20px]'>Schedule a personalized demo Today</h2>
          <p className='max-w-[580px] mx-auto mb-[46px] text-[16px] font-[400] leading-[23.36px] text-[#AFAFAF]'>Join the U.S. businesses scaling smarter with JustPaid. In just 3-7 days, our AI Billing Agent can transform how you manage invoicing, payments, and growth. Let’s talk about what it can do for you.</p>
          <div className='middle-bottom-btn flex justify-center gap-x-[12px]'>
            <div className='middle-bottom-btn-left'>
              <button className='text-[12px] font-[500] leading-[20px] px-[24px] rounded-[4px] h-[40px] cursor-pointer text-[#161616] bg-[#facd2d]'>Get started • Schedule demo</button>
              <p className='text-[12px] font-[400] tracking-[-.12px] leading-[normal] opacity-[.7] mt-[4px] text-[#FFFFFF]'>No credit card required.</p>
            </div>
            <div className='middle-bottom-btn-right'>
              <button className='text-[12px] font-[500] leading-[20px] px-[24px] rounded-[4px] h-[40px] cursor-pointer text-[#21211f] bg-[#fffefb] border-1 border-[#d9d9d9]'>Talk to Founders</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default page