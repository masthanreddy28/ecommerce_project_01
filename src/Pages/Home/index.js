
import HomeBanner from "../../Components/HomeBanner"
import { Button } from '@mui/material'
import { FaArrowRight } from "react-icons/fa";
import React from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


// Import Swiper styles
import 'swiper/css';
import ProductItem from "../../Components/productItems";
import Homecat from "../../Components/Homecat";



const Home = () => {
  // var productSliderOptions = {
  //   dots: true,
  //   infinite: false,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 1
  // };
  return (
    <>
      <HomeBanner />
      <Homecat></Homecat>
      <section className="homeProducts">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              {/* banner section left */}
              <div className="banner">
                <img style={{ width: "450px", height: "370px" }} src="https://graphicsfamily.com/wp-content/uploads/edd/2023/04/Black-Friday-Ecommerce-Website-Banner-Design-scaled.jpg" className="cursor" />
                <img style={{ width: "450px", height: "370px" }} src="https://graphicsfamily.com/wp-content/uploads/edd/2023/04/Black-Friday-Ecommerce-Website-Banner-Design-scaled.jpg" className="cursor mt-3" />
              </div>
            </div>
            <div className="col-md-9">
              <div className="d-flex align-items-center">
                <div className="info w-75">
                  <h3 className="mb-0">Best Sellers</h3>
                  <p className="text-light text-sml mb-0">Do not miss the current offers until the end of march...</p>
                </div>
                <Button className="viewAllBtn ml-auto">View All <FaArrowRight /></Button>
              </div>

              {/* slider the produt list  */}
              <div className="product_row">
                <Swiper
                  slidesPerView={4}
                  spaceBetween={0}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <ProductItem></ProductItem>
                  </SwiperSlide>

                  <SwiperSlide>
                    <ProductItem></ProductItem>
                  </SwiperSlide>

                  <SwiperSlide>
                    <ProductItem></ProductItem>
                  </SwiperSlide>

                  <SwiperSlide>
                    <ProductItem></ProductItem>
                  </SwiperSlide>

                  <SwiperSlide>
                    <ProductItem></ProductItem>
                  </SwiperSlide>

                  <SwiperSlide>
                    <ProductItem></ProductItem>
                  </SwiperSlide>

                </Swiper>
              </div>

              <div className="d-flex align-items-center mt-5">
                <div className="info w-75">
                  <h3 className="mb-0">New Product</h3>
                  <p className="text-light text-sml mb-0">New Products with updated stocks..</p>
                </div>
                <Button className="viewAllBtn ml-auto">View All <FaArrowRight /></Button>
              </div>

              {/* slider the produt list  */}
              <div className="product_row">
                <Swiper
                  slidesPerView={4}
                  spaceBetween={0}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <ProductItem></ProductItem>
                  </SwiperSlide>

                  <SwiperSlide>
                    <ProductItem></ProductItem>
                  </SwiperSlide>

                  <SwiperSlide>
                    <ProductItem></ProductItem>
                  </SwiperSlide>

                  <SwiperSlide>
                    <ProductItem></ProductItem>
                  </SwiperSlide>

                  <SwiperSlide>
                    <ProductItem></ProductItem>
                  </SwiperSlide>

                  <SwiperSlide>
                    <ProductItem></ProductItem>
                  </SwiperSlide>

                </Swiper>
              </div>

            </div>
          </div>
        </div>

      </section>

    </>
  )
}

export default Home