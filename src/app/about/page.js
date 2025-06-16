import React from 'react';
import Image from 'next/image';
const page = () => {
  return (
    // Hero Section
    <div className='about-hero-section py-[60px]'>
      <div className='top-tag-section max-w-[185px] mx-auto flex items-center gap-x-[7px] py-[4px] px-[12px] mb-[32px]'>
        Backed by<Image src={'/about/y_logo.png'} width={16} height={16} alt='text' /> Combinator (W23)
      </div>
      <div className='middle-section mb-[32px]'>
        <div className='middle-section-inner max-w-[800px] text-center flex justify-center flex-wrap mx-auto gap-y-[32px]'>
          <h1>We are more than just a platform</h1>
          <p>JustPaid brings clarity to your finances — from spend management to payments to real-time analytics — all in one system built for speed and scale.</p>
          <div className='middle-bottom-btn flex gap-x-[12px]'>
            <div className='middle-bottom-btn-left'>
              <button>Get started • Schedule demo</button>
              <p>No credit card required.</p>
            </div>
            <div className='middle-bottom-btn-right'>
              <button>Talk to Founders</button>
            </div>
          </div>
        </div>
      </div>
      <div className='bottom-section flex justify-center'>
        <Image src={'/about/about-banner-img.png'} width={798} height={547} alt='text' />
      </div>
    </div>
  )
}

export default page