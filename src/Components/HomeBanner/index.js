
import React from "react";
import Slider from "react-slick";
const HomeBanner = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
        autoplay:true
      };
  return (
   <>
         <div className="homeBannerSection">
         <Slider {...settings}>
            <div className="item">
              <img src="https://cmsimages.shoppersstop.com/mian_gift_of_love_web_0716d71fdf/mian_gift_of_love_web_0716d71fdf.png" className="w-100"></img>
            </div>
            <div className="item">
              <img src="https://cmsimages.shoppersstop.com/festive_homes_web_7efa7a74e1/festive_homes_web_7efa7a74e1.png" className="w-100"></img>
            </div>
            <div className="item">
              <img src="https://cmsimages.shoppersstop.com/mian_gift_of_love_web_0716d71fdf/mian_gift_of_love_web_0716d71fdf.png" className="w-100"></img>
            </div>
            <div className="item">
              <img src="https://cmsimages.shoppersstop.com/mian_gift_of_love_web_0716d71fdf/mian_gift_of_love_web_0716d71fdf.png" className="w-100"></img>
            </div>
            </Slider>
        </div>
   </>
  )
}

export default HomeBanner