import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';
import 'swiper/scss/effect-coverflow';


import './workExamples.scss';

const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('../../assets/images/work-examples', false, /\.(png|jpe?g|svg)$/));




const WorkExamples = () => {

  return (
    <section className="section work-examples">
      <h2 className="title section__title work-examples__title">Mats in interior
      </h2>
      <Swiper
        modules={[Navigation, Pagination, EffectCoverflow]}
        className="work-examples-swiper"
        slidesPerView={1}
        centeredSlides
        loop
        grabCursor
        effect="coverflow"
        coverflowEffect={{
          rotate: 25,
          stretch: 0,
          depth: 100,
          modifier: 1,
        }}
        spaceBetween={20}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          540: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}>
        {images.map((image, index) => (
          <SwiperSlide key={index} className='work-example-slide'>
            <img src={image} alt={`Example ${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section >
  )
}

export default WorkExamples;