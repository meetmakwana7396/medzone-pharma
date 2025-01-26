import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "./ui/card";
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";

const Testimonials = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          What Our Clients Say
        </h2>
        <Swiper
          modules={[Navigation, Pagination, EffectFade]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={30}
          className="max-w-4xl mx-auto"
        >
          {[
            {
              text: "PharmaCare has consistently delivered exceptional service and quality products. Their commitment to healthcare excellence is truly remarkable.",
              author: "Dr. Sarah Johnson",
              role: "Medical Director",
            },
            {
              text: "The research and development team at PharmaCare is innovative and forward-thinking. They've been instrumental in advancing our medical capabilities.",
              author: "Prof. Michael Chen",
              role: "Research Scientist",
            },
            {
              text: "Outstanding customer service and professional support. PharmaCare has been a reliable partner in our healthcare journey.",
              author: "Emma Thompson",
              role: "Hospital Administrator",
            },
          ].map((testimonial, index) => (
            <SwiperSlide key={index}>
              <Card className="p-8 text-center">
                <p className="text-lg text-gray-600 mb-6">
                  "{testimonial.text}"
                </p>
                <h4 className="font-semibold">{testimonial.author}</h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
