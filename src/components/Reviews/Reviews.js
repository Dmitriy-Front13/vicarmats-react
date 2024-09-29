import { useEffect } from "react";
import { Navigation } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import { Fancybox } from '@fancyapps/ui';

import "@fancyapps/ui/dist/fancybox/fancybox.css";
import 'swiper/scss';
import 'swiper/scss/navigation';

import './reviews.scss'

const importAll = (r) => r.keys().map(r);
const avatars = importAll(require.context('../../assets/images/reviews/avatars', false, /\.(png|jpe?g|svg)$/));
const images = importAll(require.context('../../assets/images/reviews', false, /\.(png|jpe?g|svg)$/));

const Reviews = () => {
  useEffect(() => {
    Fancybox.bind("[data-fancybox]", {
    });

    return () => {
      Fancybox.destroy(); 
    };
  }, []);

  const slides = [
    { name: "Emma", date: "20/06/2024", description: "Absolutely love these car mats! They fit my vehicle perfectly and the color options allowed me to match my interior just right. The customer service was exceptional, answering all my questions promptly. Delivery was quick, and I couldn't be happier with my purchase. I highly recommend EvaTech to anyone looking for high-quality car mats", ava: avatars[0], image: images[0] },
    { name: "Viktoriia", date: "29/05/2024", description: "EvaTech's mats are a game-changer for my car! The design and quality are top-notch, and they've held up beautifully even with daily use. The ordering process was smooth, and the customer service team was incredibly helpful. I'll definitely be purchasing more in the future.", ava: avatars[1], image: images[1] },
    { name: "Java", date: "16/05/2024", description: "I found EvaTech on Instagram and was intrigued by their custom mats. I decided to place an order. The mats arrived quickly and exceeded my expectations in terms of quality and fit. Their team was attentive to every detail, making the experience enjoyable. Highly recommend!", ava: avatars[2], image: images[2] },
    { name: "Jerry", date: "03/05/2024", description: "These mats are fantastic! Lightweight, durable, and they fit my car perfectly. The customer service was top-notch, ensuring that my order was processed and shipped quickly. I'm so pleased with my purchase that I'm planning to order another set for my husband's car.", ava: avatars[3], image: images[3] },
    { name: "Vitalii", date: "25/04/2024", description: "The mats from EvaTech are exactly what I was looking for. They fit my car perfectly and the material is both lightweight and durable. The customer service was very helpful and the shipping was fast. I'm very satisfied with my purchase.", ava: avatars[4], image: images[4] },
    { name: "Mike", date: "21/04/2024", description: "These car mats are top-notch! They fit my vehicle perfectly and the quality is evident. The mats arrived quickly and have held up well so far. I highly recommend EvaTech for their excellent products and service.", ava: avatars[5], image: images[5] },
  ];

  return (
    <section className="reviews">
      <div className="container">
        <h2 className="reviews__title">Reviews</h2>
        <Swiper
          className="reviews__swiper"
          modules={[Navigation]}
          navigation
          slidesPerView={1}>
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="slide__inner">
                <div className="reviews__item-headline">
                  <div className="headline__inner">
                    <img className="headline__inner-avatar"
                      src={slide.ava} alt="avatar" />
                    <div className="headline__inner-text">
                      <h5 className="headline__inner-user">{slide.name}</h5>
                      <p className="headline__inner-date">{slide.date}</p>
                    </div>
                  </div>
                  <img className="headline-photo"
                    src={slide.image} alt="reviews photo"
                    data-fancybox={slide.name} />
                </div>
                <p className="reviews__item-text">{slide.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}


export default Reviews;