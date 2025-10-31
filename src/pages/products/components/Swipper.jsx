import React from 'react'
import 'swiper/css';
import 'swiper/css/pagination';

import './Swipper.css';

// import required modules
import { Pagination } from 'swiper/modules';

function Swipper() {
    // JS
    return (
        <>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
        </>
    )
}

export default Swipper