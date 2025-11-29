"use client";

import { testimonials } from "@/data/testimonials";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  return (
    <section className="w-full text-white py-24 px-6">
      <h2 className="text-4xl font-bold text-center mb-16">
        Client Testimonials
      </h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3200 }}
        spaceBetween={40}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2.5 },
        }}
        className="max-w-6xl mx-auto"
      >
        {testimonials.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl shadow-lg hover:scale-[1.02] transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border border-white/20"
                />
                <div>
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-sm text-purple-300">{item.role}</p>
                </div>
              </div>

              <p className="text-white/80 text-[15px] leading-relaxed">
                {item.comment}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
