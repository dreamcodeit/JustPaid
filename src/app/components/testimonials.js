'use client';
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from 'next/image';


const Testimonials = () => {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className="testimonialSwiper"
      spaceBetween={20}
      slidesPerView={1}
      loop={true}
    >
      <SwiperSlide>
          <div className="testimonials-inner flex gap-x-[46px] items-center">
            <div className="testimonials-img max-w-[198px] h-[198px] overflow-hidden rounded-[100px]">
              <Image src={'/about/testimonial-img.png'} width={384} height={273} alt='Growth' className="h-[100%] w-[100%] object-cover object-center" />
            </div>
            <div className="testimonials-content max-w-[560px]">
              <h2 className="text-[36px] font-[400] leading-[43.2px] tracking-[-1.44px] text-[#161616] mb-[20px]">Quill</h2>
              <p className="text-[16px] font-[400] leading-[23.36px] text-[#6B6B6B] mb-[20px]">We are focused on building new technology for developers, the easiest way to charge customers is through JustPaid, simply drag and drop contracts and the AI does the rest to send out invoices.</p>
              <p className="text-[16px] font-[400] leading-[23.36px] text-[#161616]">Rishi Raman<br></br> Co-founder, Quill</p>
            </div>
          </div>
      </SwiperSlide>

      <SwiperSlide>
          <div className="testimonials-inner flex gap-x-[46px] items-center">
            <div className="testimonials-img max-w-[198px] h-[198px] overflow-hidden rounded-[100px]">
              <Image src={'/about/testimonial-img.png'} width={384} height={273} alt='Growth' className="h-[100%] w-[100%] object-cover object-center" />
            </div>
            <div className="testimonials-content max-w-[560px]">
              <h2 className="text-[36px] font-[400] leading-[43.2px] tracking-[-1.44px] text-[#161616] mb-[20px]">Quill</h2>
              <p className="text-[16px] font-[400] leading-[23.36px] text-[#6B6B6B] mb-[20px]">We are focused on building new technology for developers, the easiest way to charge customers is through JustPaid, simply drag and drop contracts and the AI does the rest to send out invoices.</p>
              <p className="text-[16px] font-[400] leading-[23.36px] text-[#161616]">Rishi Raman<br></br> Co-founder, Quill</p>
            </div>
          </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Testimonials;
