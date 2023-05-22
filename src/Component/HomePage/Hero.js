import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "../Assest/Hero.css";
import { CiDeliveryTruck } from "react-icons/ci";
import { BiMoneyWithdraw, BiPhoneCall } from "react-icons/bi";
import { MdOutlinePayment } from "react-icons/md";

import { Autoplay, Pagination, Navigation } from "swiper";

import banner1 from '../../Assets/img/book banner1.jpg';
import banner2 from '../../Assets/img/book banner 3.jpg'
import banner3 from '../../Assets/img/book banner 2.jpg'

const Hero = () => {
  return (
    <div className="HeroSec">
      <Swiper
        className="mySwiper"
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
          <img src={banner1} alt="banner 1" />

        </SwiperSlide>

        <SwiperSlide>
          <img src={banner3} alt={'banner 2'} />

        </SwiperSlide>
        <SwiperSlide>
          <img src={banner1} alt="banner 3" />

        </SwiperSlide>


      </Swiper>

      <div className="secdesk mx-[100px] mb-[30px]">
        <div className="flex flex-wrap justify-center bg-white boxShadow">
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 px-4 py-4">
            <div className="bg-white  offer p-6  justify-center  ">
              <i className="icons">
                <CiDeliveryTruck className="icon-hover" size={50} />
              </i>

              <h3 className="text-lg py-3 font-semibold items-center ">Free Shipping</h3>
              <p className="text-[#777777] text-[14px]">Free Shipping Only Bangladesh</p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 px-4 py-4">
            <div className="bg-white  p-6 justify-center offer ">
              <i className="icons">
                <BiMoneyWithdraw className="icon-hover" size={50} />
              </i>

              <h3 className="text-lg py-3 font-semibold items-center">Money Back Guarantee</h3>
              <p className="text-[#777777] text-[14px]">100% Money Back Guarante</p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 px-4 py-4">
            <div className="bg-white  p-6 justify-center offer">
              <i className="icons">
                <BiPhoneCall className="icon-hover" size={50} />
              </i>

              <h3 className="text-lg py-3 font-semibold items-center">Help & Support</h3>
              <p className="text-[#777777] text-[14px]">Call Us : + 0123 456 789</p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 px-4 py-4">
            <div className="bg-white  p-6 justify-center offer">
              <i className="icons">
                <MdOutlinePayment className="icon-hover" size={50} />
              </i>

              <h3 className="text-lg py-3 font-semibold items-center">Online Payment</h3>
              <p className="text-[#777777] text-[14px]">Contry To Popular Belief.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
