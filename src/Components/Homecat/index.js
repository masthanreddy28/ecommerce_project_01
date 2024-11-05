import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


// Import Swiper styles
import 'swiper/css';
const Homecat=()=>{
return(
    <section className="homecat">
        <div className="container">
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
                    <div className='item text-center'>
                     <img style={{width:"100px",height:"100px"}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqEQd3OG7RLQQ3ao90zM13zlcyqS8KGcB_Ag&s'></img>
                     <h6>Red Apple</h6>
                    </div>
                  </SwiperSlide>
                  </Swiper>

        </div>

    </section>
)
}
export default Homecat;