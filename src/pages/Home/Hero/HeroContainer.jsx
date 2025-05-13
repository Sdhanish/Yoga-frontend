import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import { EffectCreative, Autoplay } from "swiper"; // <-- Import Autoplay module

import Hero from './Hero';
import Hero2 from './Hero2';
import Hero3 from './Hero3';
import Hero4 from './Hero4';

const HeroContainer = () => {
    return (
        <section>
            <Swiper
                grabCursor={true}
                loop={true}
               effect="creative"
                speed={1500} // <-- Smooth transition (1.5 seconds)
                autoplay={{
                    delay: 6000, // <-- Longer delay (6 seconds)
                    disableOnInteraction: false,
                }}
                creativeEffect={{
                    prev: {
                        shadow: true,
                        translate: ["-120%", 0, -500],
                    },
                    next: {
                        shadow: true,
                        translate: ["120%", 0, -500],
                    },
                }}
                modules={[EffectCreative, Autoplay]} // <-- Register Autoplay here
                className="mySwiper5"
            >
                <SwiperSlide>
                    <Hero />
                </SwiperSlide>
                <SwiperSlide>
                    <Hero2 />
                </SwiperSlide>
                <SwiperSlide>
                    <Hero3 />
                </SwiperSlide>
                <SwiperSlide>
                    <Hero4 />
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default HeroContainer;
