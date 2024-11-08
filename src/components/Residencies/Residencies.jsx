import React from "react";
import "./Residencies.css";
import { Swiper, SwiperSlide, useSwiper } from "Swiper/react";
import 'swiper/swiper-bundle.css';
import data from "../../utils/slider.json";
// import { color } from "framer-motion";
import { sliderSettings } from "../../utils/common";

const Residencies = () => {
  return (
    <section className="r-wrapeer">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Residencies</span>
        </div>
        
        <Swiper {...sliderSettings} >
        <SliderButtons/>
           {data.map((card, i) => (
           <SwiperSlide key={i}>
              <div className="flexColStart r-card ">
                <img src={card.image} alt="home" />

                <span className="secondaryText r-price">
                  <span style={{ color: "orange" }}>$</span>
                  <span>{card.price}</span>
                </span>
                <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.detail}</span>
              </div>
           </SwiperSlide>
          ))}
        </Swiper>
        
      </div>
    </section>
  );
};

export default Residencies;


const SliderButtons =()=>{
  const swiper = useSwiper();
  return(
    <div className=" r-buttons">
      <button className="bt-pre"style={{backgroundColor: "#eeeeff"}} onClick={()=> swiper.slidePrev()}>&lt;</button>
      <button className="bt-next"style={{boxShadow:"0px 0px 5px 1px rgba(0,0,0,0.25)"}} onClick={()=> swiper.slideNext()}>&gt;</button>
    </div>
  )
}