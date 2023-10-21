import Slider from "react-slick";
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
import img11 from "../../components/galery/assets/11.jpg";
import img12 from "../../components/galery/assets/12.jpg";
import img13 from "../../components/galery/assets/13.jpg";
import img14 from "../../components/galery/assets/14.jpg";
import img15 from "../../components/galery/assets/15.jpg";
import img16 from "../../components/galery/assets/16.jpg";
import img17 from "../../components/galery/assets/17.jpg";
import img18 from "../../components/galery/assets/18.jpg";
import img19 from "../../components/galery/assets/19.jpg";
import img20 from "../../components/galery/assets/20.jpg";
import img21 from "../../components/galery/assets/21.jpg";
import img22 from "../../components/galery/assets/22.jpg";
import img23 from "../../components/galery/assets/23.jpg";
import img24 from "../../components/galery/assets/24.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
  img23,
  img24,
 
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
