//import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/effect-coverflow";
// @ts-ignore
import "swiper/css/pagination";

import "../App.css";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

interface Movie {
  original_title: string;
  poster_path: string;
}

interface CarouselProps {
  movies: Movie[];
}

function Carousel({ movies }: CarouselProps) {
  return (
    <>
      <h1 style={{textAlign: "center", color: "black"}}>Now Playing</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={4}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 15,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={false}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {movies.map((movie) => (
          <SwiperSlide>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} // Add the base URL for the poster image
              className="d-block w-100"
              alt={movie.original_title}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Carousel;
