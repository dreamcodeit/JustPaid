'use client';
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const sliderData = [
  {
    bgImage: "/home/one.png",
    title: "Accountants",
    description: "Monitor burn rate, revenue, and runway across systems with live updates and no manual work. Combine multiple billing systems into one revenue dashboard.",
    logo: "/y-log.svg",
  },
   {
    bgImage: "/home/three.png",
    title: " Financial experts",
    description: "Centralize billing, speed up workflows, and eliminate costly delays. Manage your entire workflow from a single platform.",
   
  },
  {
    bgImage: "/home/two.png",
    title: "Entrepreneurs & business owners",
    description: "Track prepaid expenses, sync amortization, and let JustPaid AI manage collections and follow-ups so your team doesn’t have to.",
    
  },
    {
    bgImage: "/home/one.png",
    title: "Accountants",
    description: "Monitor burn rate, revenue, and runway across systems with live updates and no manual work. Combine multiple billing systems into one revenue dashboard.",
    logo: "/y-log.svg",
  },
  {
    bgImage: "/home/three.png",
    title: " Financial experts",
    description: "Centralize billing, speed up workflows, and eliminate costly delays. Manage your entire workflow from a single platform.",
   
  },
   {
    bgImage: "/home/two.png",
    title: "Entrepreneurs & business owners",
    description: "Track prepaid expenses, sync amortization, and let JustPaid AI manage collections and follow-ups so your team doesn’t have to.",
    
  },
];

const HomeSlider = () => {
  return (
    <Swiper
      loop={true}
      centeredSlides={true}
      modules={[Navigation]}
      className="mySwiper"
      spaceBetween={40}
      slidesPerView={2.2}
    >
      {sliderData.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className="h-[278px] bg-cover bg-center relative flex items-center justify-baseline text-white px-6"
            style={{ backgroundImage: `url(${slide.bgImage})` }}
          >
            <div className="p-6 rounded-lg text-left ">
           <p className="text-[16px] max-w-[250px]">{slide.description}</p>
            </div>

          </div>
          <div className="flex justify-center">  <h2 className="text-[16px]  mt-[16px] mb-2 text-white">{slide.title}</h2></div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HomeSlider;
