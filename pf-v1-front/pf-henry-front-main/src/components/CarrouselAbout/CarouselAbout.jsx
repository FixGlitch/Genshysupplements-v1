import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'
import { EffectCoverflow,Autoplay, Navigation, Pagination} from 'swiper/modules';
import slide_image_1 from '../../assets/Perfiles/maxi.png';
import slide_image_2 from '../../assets/Perfiles/juli.png';
import slide_image_3 from '../../assets/Perfiles/willy.png';
import slide_image_4 from '../../assets/Perfiles/leo.png';
import slide_image_5 from '../../assets/Perfiles/lucas.png';
import slide_image_6 from '../../assets/Perfiles/sofi.png';
import slide_image_7 from '../../assets/Perfiles/juan.png';
import slide_image_8 from '../../assets/Perfiles/mateo.png';

export default function CarouselAbout() {
  return (
    <div className='ml-[-100px] mt-[50px] mb-[200px] rounded-full'>
        <h1>OUR TEAM</h1>
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
      </Swiper>
    </div>
  );
}
