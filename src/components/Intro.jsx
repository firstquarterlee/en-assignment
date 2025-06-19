import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '../App.css';

const slides = [
  {
    image: '/src/assets/images/main.jpg',
    title: 'Lorem ipsum\ndolor sit amet,',
    desc: 'Lorem ipsum dolor sit amet, consectetur\nsed do eiusmod tempor incididunt ut\nabore et dolore magna aliqua.'
  },
  {
    image: '/src/assets/images/img2.jpg',
    title: 'Lorem ipsum\ndolor sit amet,',
    desc: 'Lorem ipsum dolor sit amet, consectetur\nsed do eiusmod tempor incididunt ut\nabore et dolore magna aliqua.'
  },
  {
    image: '/src/assets/images/img3.jpg',
    title: 'Lorem ipsum\ndolor sit amet,',
    desc: 'Lorem ipsum dolor sit amet, consectetur\nsed do eiusmod tempor incididunt ut\nabore et dolore magna aliqua.'
  },
  {
    image: '/src/assets/images/img4.jpg',
    title: 'Lorem ipsum\ndolor sit amet,',
    desc: 'Lorem ipsum dolor sit amet, consectetur\nsed do eiusmod tempor incididunt ut\nabore et dolore magna aliqua.'
  },
];

const Intro = () => {
  return (
    <section className="w-full bg-transparent relative">
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        loop={true}
        className="w-full h-[350px] sm:h-[380px] md:h-[400px] lg:h-[420px] xl:h-[450px] max-h-[450px]"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative w-full h-[350px] sm:h-[380px] md:h-[400px] lg:h-[420px] xl:h-[450px] max-h-[450px]">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-[350px] sm:h-[380px] md:h-[400px] lg:h-[420px] xl:h-[450px] max-h-[450px] object-cover object-center"
              />
              {/* 텍스트 오버레이 */}
              <div className="absolute top-1/2 left-0 w-full -translate-y-1/2">
                <div className="section-container">
                  <h2 className="section-title leading-tight !text-white whitespace-pre-line">{slide.title}</h2>
                  <p className="section-desc !text-white mb-0 whitespace-pre-line">{slide.desc}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        {/* 좌우 슬라이드 < > 버튼 */}
        <button className="swiper-button-prev absolute top-1/2 left-4 md:left-8 lg:left-16 z-10 -translate-y-1/2 w-12 h-12 flex items-center justify-center transition">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
        </button>
        <button className="swiper-button-next absolute top-1/2 right-4 md:right-8 lg:right-16 z-10 -translate-y-1/2 w-12 h-12 flex items-center justify-center transition">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 6 15 12 9 18" /></svg>
        </button>
      </Swiper>
    </section>
  );
};

export default Intro;