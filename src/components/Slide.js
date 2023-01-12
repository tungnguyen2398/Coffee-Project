import React from "react"
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Slide(){
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
      };

    return (
        <div className="w-screen h-[100vh]">
        <Slider {...settings}>
          <div>
            <img
                    src="https://coffee-point.astemplatedesigns.com/assets/images/Home-Slider/Home-1.png"
                    className="block w-full h-[100vh]"
                    alt="..."
                />
          </div>
          <div>
            <img
                    src="https://coffee-point.astemplatedesigns.com/assets/images/Home-Slider/Home-2.png"
                    className="block w-full h-[100vh]"
                    alt="..."
                />
          </div>
          <div>
            <img
                    src="https://coffee-point.astemplatedesigns.com/assets/images/Home-Slider/Home-3.png"
                    className="block w-full h-[100vh]"
                    alt="..."
                />
          </div>         
        </Slider>       
</div>
    )
}