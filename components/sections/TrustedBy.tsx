"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const partnerSlides = [
  "/partners/Photo-1.png",
  "/partners/Photo-2.png",
  "/partners/Photo-3.png",
  "/partners/Photo-4.png",
  "/partners/Photo-5.png",
];

export default function TrustedBy() {
  return (
    <section className="bg-white py-14 md:py-16">
      <div className="container-custom">

        <p className="text-center text-sm font-semibold uppercase tracking-[0.35em] text-[#2563eb]">
          Trusted by 1,000+ Organizations Since 2010
        </p>

        <h2 className="mt-3 text-center text-3xl font-bold text-slate-900">
          Trusted by Industry Leaders
        </h2>

        <div className="mt-12 overflow-hidden rounded-[32px] border border-blue-900/20 bg-gradient-to-r from-[#081c3a] via-[#102a54] to-[#081c3a] p-8 shadow-[0_15px_60px_rgba(37,99,235,0.15)]">

          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            speed={1000}
            className="trusted-swiper"
          >
            {partnerSlides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center justify-center">

                  <Image
                    src={slide}
                    alt={`Partner Slide ${index + 1}`}
                    width={2200}
                    height={944}
                    priority={index === 0}
                    className="h-auto w-full rounded-xl bg-white object-contain"
                  />

                </div>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </div>
    </section>
  );
}