import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../components/galery/assets/1.jpg";
import img2 from "../../components/galery/assets/2.jpg";
import img3 from "../../components/galery/assets/3.jpg";
import img4 from "../../components/galery/assets/4.jpg";
import img5 from "../../components/galery/assets/5.jpg";
import img6 from "../../components/galery/assets/6.jpg";
import img7 from "../../components/galery/assets/7.jpg";
import img8 from "../../components/galery/assets/8.jpg";
import img9 from "../../components/galery/assets/9.jpg";
import img10 from "../../components/galery/assets/10.jpg";

import "./1.css";

const fotos = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  
 
];

function GaleriaCode() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 0,
    adaptiveHeight: true,
    vertical: true,
    verticalSwiping: false,
    swipeToSlide: true,
    initialSlide: 0,
    rtl: true,
  };

  return (
    <div className="slider-container">
      <Slider {...settings} className="slider-z">
        {fotos.map((imagen, index) => (
          <div className="slider-item" key={index}>
            <div className="card">
            <div className="card-body">  
              <img
                src={imagen}
                alt='fotos'
                className=" slider-imagen"
                                         />
            </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default GaleriaCode;
