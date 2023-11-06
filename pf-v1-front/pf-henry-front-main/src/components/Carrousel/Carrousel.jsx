import slide_image_1 from '../../assets/carousel/img (1).png';
import slide_image_2 from '../../assets/carousel/img (2).png';
import slide_image_3 from '../../assets/carousel/img (3).png';
import slide_image_4 from '../../assets/carousel/img (4).png';
import slide_image_5 from '../../assets/carousel/img (5).png';
import slide_image_6 from '../../assets/carousel/img (6).png';
import slide_image_7 from '../../assets/carousel/img (7).png';
import slide_image_8 from '../../assets/carousel/img (8).png';
import slide_image_9 from '../../assets/carousel/img (9).png';
import slide_image_10 from '../../assets/carousel/img (10).png';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'
import { EffectCoverflow,Autoplay, Navigation, Pagination} from 'swiper/modules';

export default function Carousel() {
  return (
    <div className='sm:hidden md:hidden mx-auto flex flex-row bg-blackFred-300 w-[auto] py-[200px] h-[700px] bg-red'>
      <Swiper
        // className='w-[600px] h-[600px]'
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'3'}
        loading="lazy"
        loop={true}
        navigation={false}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 600,
          modifier: 1,
          slideShadows: false,
        }}
        spaceBetween={220}
        autoplay={{
          delay: 1700,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slide_image_1} alt="slide_image" className='w-[600px] h-[600px]'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_2} alt="slide_image" className='w-[600px] h-[600px]'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_3} alt="slide_image" className='w-[600px] h-[600px]'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_4} alt="slide_image" className='w-[600px] h-[600px]'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_5} alt="slide_image" className='w-[600px] h-[600px]'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_6} alt="slide_image" className='w-[600px] h-[600px]'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_7} alt="slide_image" className='w-[600px] h-[600px]'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_8} alt="slide_image" className='w-[600px] h-[600px]'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_9} alt="slide_image" className='w-[600px] h-[600px]'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_10} alt="slide_image" className='w-[600px] h-[600px]'/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}