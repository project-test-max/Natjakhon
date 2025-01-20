import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
// import required modules
import { Pagination, Autoplay, Navigation } from "swiper/modules";



const ContentCarousel = () => {
  // Javascript
  const [data, setData] = useState([]);
  return (
    <div>
      
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        pagination={true}
        navigation={true}
        modules={[Pagination, Autoplay,Navigation]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper object-cover rounded-md"
      >
        {data?.map((item, i) => (
          <SwiperSlide>
            <img 
            className="rounded-md"
            src={item.download_url} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ContentCarousel;
