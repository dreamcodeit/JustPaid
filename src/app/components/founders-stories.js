'use client';
import { useState } from 'react';
import { Swiper, SwiperSlide, useRef } from 'swiper/react';
import { Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/thumbs';
import Image from 'next/image';

const FoundersStories = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div className="founders-stories-main">
            <div className="foundersThumbsSwiper max-w-[530px] mx-auto mt-[20px] mb-[64px]">
                {/* Thumbnail Swiper */}
                <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={16}
                    slidesPerView={3}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[Thumbs]}
                    className="thumbSwiper"
                >
                    <SwiperSlide>
                        <div className='founders-thum-box flex py-[12px] px-[16px] items-center gap-[16px] cursor-pointer'>
                            <div className='founders-thum'>
                                <Image src={'/about/Daniel.png'} width={72} height={72} alt='Daniel CEO' className='rounded-[100px] mx-auto border-[3px]' />
                            </div>
                            <div className='founders-name'>
                                <h3 className='text-[16px] font-[400] leading-[25px] text-[#969BA6]'>Daniel<br></br>CEO</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='founders-thum-box flex py-[12px] px-[16px] items-center gap-[16px] cursor-pointer'>
                            <div className='founders-thum'>
                                <Image src={'/about/Anelya.png'} width={72} height={72} alt='Anelya CPO' className='rounded-[100px] mx-auto border-[3px]' />
                            </div>
                            <div className='founders-name'>
                                <h3 className='text-[16px] font-[400] leading-[25px] text-[#969BA6]'>Anelya<br></br>CPO</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='founders-thum-box flex py-[12px] px-[16px] items-center gap-[16px] cursor-pointer'>
                            <div className='founders-thum'>
                                <Image src={'/about/Vinay.png'} width={72} height={72} alt='Vinay CTO' className='rounded-[100px] mx-auto border-[3px]' />
                            </div>
                            <div className='founders-name'>
                                <h3 className='text-[16px] font-[400] leading-[25px] text-[#969BA6]'>Vinay <br></br>CTO</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='founders-thum-box flex py-[12px] px-[16px] items-center gap-[16px] cursor-pointer'>
                            <div className='founders-thum'>
                                <Image src={'/about/Daniel.png'} width={72} height={72} alt='Daniel CEO' className='rounded-[100px] mx-auto border-[3px]' />
                            </div>
                            <div className='founders-name'>
                                <h3 className='text-[16px] font-[400] leading-[25px] text-[#969BA6]'>Daniel<br></br>CEO</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            {/* Main Swiper */}
            <Swiper
                modules={[Thumbs]}
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={2} // small peek of left/right
                loop={true}
                spaceBetween={20}
                thumbs={{ swiper: thumbsSwiper }}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2,
                    slideShadows: false,
                }}
                className="mainSwiper"
            >
                <SwiperSlide>
                    <div className='founders-bottom-description p-[30px] bg-[#363947] rounded-[8px] text-left'>
                        <h2 className='text-[32px] font-[600] leading-[38.4px] text-[#fff] mb-[32px]'>Founders should have real-time visibility into revenue</h2>
                        <p className='text-[16px] font-[500] leading-[25px] text-[#969BA6] mb-[8px]'>Many founders run their businesses on instinct without much financial support. My biggest frustration is seeing all of the inefficiencies founders have to deal with when running their company.</p>
                        <p className='text-[16px] font-[500] leading-[25px] text-[#969BA6] mb-[32px]'>We envisioned changing that. Imagine if ChatGPT had a baby with Quickbooks; that is what we are building, also offering an AI accounts receivable agent to make sure you're collecting revenue on time.</p>
                        <div className='founders-designation'>
                            <h3 className='text-[16px] font-[600] leading-[25px] text-[#969BA6]'>Daniel, CEO</h3>
                            <p className='text-[16px] font-[400] leading-[25px] text-[#969BA6]'>Cofounder & Former COO of DrChrono, YC W11</p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='founders-bottom-description p-[30px] bg-[#363947] rounded-[8px] text-left'>
                        <h2 className='text-[32px] font-[600] leading-[38.4px] text-[#fff] mb-[32px]'>In my accounting life, I struggled with the lack of workflow.</h2>
                        <p className='text-[16px] font-[500] leading-[25px] text-[#969BA6] mb-[8px]'>There are so many software options in accounting I often found that I had to piece data together, relying on third-party integration tools, hoping that data is correct when connecting all of the software together.</p>
                        <p className='text-[16px] font-[500] leading-[25px] text-[#969BA6] mb-[32px]'>I wasted hours of billable time working on revenue recognition. I sent endless emails to collect payments along with so many other repetitive tasks. Hours that could have been spent on productive work.</p>
                        <div className='founders-designation'>
                            <h3 className='text-[16px] font-[600] leading-[25px] text-[#969BA6]'>Anelya, CPO</h3>
                            <p className='text-[16px] font-[400] leading-[25px] text-[#969BA6]'>Accounting and Bookkeeping Firm Owner</p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='founders-bottom-description p-[30px] bg-[#363947] rounded-[8px] text-left'>
                        <h2 className='text-[32px] font-[600] leading-[38.4px] text-[#fff] mb-[32px]'>I want startups to make insightful business decisions.</h2>
                        <p className='text-[16px] font-[500] leading-[25px] text-[#969BA6] mb-[8px]'>My background is in building scalable web and billing apps. With a Bachelor's and a Master’s in Computer Science, my passion for creating an AI Financial platform is driven by experience in startups.</p>
                        <p className='text-[16px] font-[500] leading-[25px] text-[#969BA6] mb-[32px]'>I saw startups make uninformed financial decisions and I wanted to help change this. Startups now can get real-time metrics and revenue insights unlike ever before.</p>
                        <div className='founders-designation'>
                            <h3 className='text-[16px] font-[600] leading-[25px] text-[#969BA6]'>Vinay, CTO</h3>
                            <p className='text-[16px] font-[400] leading-[25px] text-[#969BA6]'>10 years in Financial Engineering</p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='founders-bottom-description p-[30px] bg-[#363947] rounded-[8px] text-left'>
                        <h2 className='text-[32px] font-[600] leading-[38.4px] text-[#fff] mb-[32px]'>Founders should have real-time visibility into revenue</h2>
                        <p className='text-[16px] font-[500] leading-[25px] text-[#969BA6] mb-[8px]'>Many founders run their businesses on instinct without much financial support. My biggest frustration is seeing all of the inefficiencies founders have to deal with when running their company.</p>
                        <p className='text-[16px] font-[500] leading-[25px] text-[#969BA6] mb-[32px]'>We envisioned changing that. Imagine if ChatGPT had a baby with Quickbooks; that is what we are building, also offering an AI accounts receivable agent to make sure you're collecting revenue on time.</p>
                        <div className='founders-designation'>
                            <h3 className='text-[16px] font-[600] leading-[25px] text-[#969BA6]'>Daniel, CEO</h3>
                            <p className='text-[16px] font-[400] leading-[25px] text-[#969BA6]'>Cofounder & Former COO of DrChrono, YC W11</p>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>

        </div>
    );
};

export default FoundersStories;
