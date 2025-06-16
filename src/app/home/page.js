import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <>
      <div className='bg-[#faf9f5]'>
        <div className='container py-[80px]'>
          <div className='flex justify-between'>
            <div className='w-[48%] py-[50px]'>

                <span className='rounded-[4px] gap-[4px] px-[12] py-[5] logo-section flex  bg-[#EAE6DC]'> <span>Backed by</span> <Image src={'/images/y-log.svg'} height={20} width={20} alt='img'></Image> <span>Combinator (W23)</span> </span>

              <h1 className='mt-[32px] text-[48px]'>Your autonomous <b>AI billing agent </b>for complex financial operations</h1>

              <h6 className='mt-[32px] text-[20px] color-[#787878]'>Built from the ground up to handle complexity,
                not stitched together like the rest.
              </h6>
            </div>
            <div className='w-[48%] bg-[url(/home/banner-right.webp)]'>
              
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default page