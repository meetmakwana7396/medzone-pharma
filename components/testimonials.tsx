import React from "react";

const Testimonials = () => {
  return (
    <section className="py-20 relative bg-[url('/images/testimonial.jpg')] bg-center bg-cover">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          What Clients Say About MedZone Pharma
        </h2>
        {/* <Swiper
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
        </Swiper> */}
        <section className="pb-12 mx-auto md:pb-20 max-w-7xl ">
          <div className="gap-8 space-y-8 md:columns-2 lg:columns-3 z-10">
            <div className="p-8 bg-white border border-gray-100 shadow-2xl aspect-auto shadow-gray-600/10">
              <div className="flex gap-4 items-start">
                <img
                  className="w-12 h-12 rounded-full"
                  src="https://randomuser.me/api/portraits/men/12.jpg"
                  alt="user avatar"
                  width="400"
                  height="400"
                  loading="lazy"
                />
                <div className="flex-1 flex justify-between items-start">
                  <div>
                    <h6 className="text-lg font-medium text-gray-700">
                      Ravi Kumar
                    </h6>
                    <p className="text-sm text-gray-500">Car Enthusiast</p>
                  </div>
                  <a
                    href="https://twitter.com/ravikumar/status/1234567890"
                    className="text-blue-500 hover:text-blue-600 ml-4"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
              <p className="mt-8">
                The quality of these seat covers is outstanding. They fit
                perfectly and add a touch of luxury to my car's interior. Highly
                recommend!
              </p>
            </div>

            <div className="p-8 bg-white border border-gray-100 shadow-2xl aspect-auto shadow-gray-600/10">
              <div className="flex gap-4 items-start">
                <img
                  className="w-12 h-12 rounded-full"
                  src="https://randomuser.me/api/portraits/women/14.jpg"
                  alt="user avatar"
                  width="200"
                  height="200"
                  loading="lazy"
                />
                <div className="flex-1 flex justify-between items-start">
                  <div>
                    <h6 className="text-lg font-medium text-gray-700">
                      Anjali Sharma
                    </h6>
                    <p className="text-sm text-gray-500">
                      Marketing Professional
                    </p>
                  </div>
                  <a
                    href="https://www.instagram.com/p/1234567890"
                    className="text-blue-500 hover:text-blue-600 ml-4"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
              <p className="mt-8">
                I love the customizable designs! I was able to choose the
                perfect color to match my car's interior. The material feels
                very durable.
              </p>
            </div>

            <div className="p-8 bg-white border border-gray-100 shadow-2xl aspect-auto shadow-gray-600/10">
              <div className="flex gap-4 items-start">
                <img
                  className="w-12 h-12 rounded-full"
                  src="https://randomuser.me/api/portraits/men/18.jpg"
                  alt="user avatar"
                  width="200"
                  height="200"
                  loading="lazy"
                />
                <div className="flex-1 flex justify-between items-start">
                  <div>
                    <h6 className="text-lg font-medium text-gray-700">
                      Vijay Singh
                    </h6>
                    <p className="text-sm text-gray-500">Software Developer</p>
                  </div>
                  <a
                    href="https://www.facebook.com/vijaysingh/posts/1234567890"
                    className="text-blue-500 hover:text-blue-600 ml-4"
                  >
                    <i className="fab fa-facebook"></i>
                  </a>
                </div>
              </div>
              <p className="mt-8">
                These seat covers are a game-changer for long drives. The added
                padding and ergonomic design make a huge difference in comfort.
              </p>
            </div>

            <div className="p-8 bg-white border border-gray-100 shadow-2xl aspect-auto shadow-gray-600/10">
              <div className="flex gap-4 items-start">
                <img
                  className="w-12 h-12 rounded-full"
                  src="https://randomuser.me/api/portraits/women/2.jpg"
                  alt="user avatar"
                  width="200"
                  height="200"
                  loading="lazy"
                />
                <div className="flex-1 flex justify-between items-start">
                  <div>
                    <h6 className="text-lg font-medium text-gray-700">
                      Priya Patel
                    </h6>
                    <p className="text-sm text-gray-500">Mobile Developer</p>
                  </div>
                  <a
                    href="https://twitter.com/priyapatel/status/1234567890"
                    className="text-blue-500 hover:text-blue-600 ml-4"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
              <p className="mt-8">
                The installation was super easy, and the instructions were
                clear. My car looks and feels much more upscale now.
              </p>
            </div>

            <div className="p-8 bg-white border border-gray-100 shadow-2xl aspect-auto shadow-gray-600/10">
              <div className="flex gap-4 items-start">
                <img
                  className="w-12 h-12 rounded-full"
                  src="https://randomuser.me/api/portraits/men/62.jpg"
                  alt="user avatar"
                  width="200"
                  height="200"
                  loading="lazy"
                />
                <div className="flex-1 flex justify-between items-start">
                  <div>
                    <h6 className="text-lg font-medium text-gray-700">
                      Arjun Mehta
                    </h6>
                    <p className="text-sm text-gray-500">Manager</p>
                  </div>
                  <a
                    href="https://www.instagram.com/p/1234567890"
                    className="text-blue-500 hover:text-blue-600 ml-4"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
              <p className="mt-8">
                Great value for money. The seat covers have a premium feel and
                have significantly improved the look of my car's interior.
              </p>
            </div>

            <div className="p-8 bg-white border border-gray-100 shadow-2xl aspect-auto shadow-gray-600/10">
              <div className="flex gap-4 items-start">
                <img
                  className="w-12 h-12 rounded-full"
                  src="https://randomuser.me/api/portraits/women/19.jpg"
                  alt="user avatar"
                  width="400"
                  height="400"
                  loading="lazy"
                />
                <div className="flex-1 flex justify-between items-start">
                  <div>
                    <h6 className="text-lg font-medium text-gray-700">
                      Sneha Rao
                    </h6>
                    <p className="text-sm text-gray-500">Product Designer</p>
                  </div>
                  <a
                    href="https://www.facebook.com/sneharao/posts/1234567890"
                    className="text-blue-500 hover:text-blue-600 ml-4"
                  >
                    <i className="fab fa-facebook"></i>
                  </a>
                </div>
              </div>
              <p className="mt-8">
                Absolutely love these seat covers. They're stylish, comfortable,
                and were really easy to install. My car interior looks brand
                new!
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Testimonials;
