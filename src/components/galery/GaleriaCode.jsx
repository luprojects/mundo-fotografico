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
import img25 from "../../components/galery/assets/25.jpg";
import img26 from "../../components/galery/assets/26.jpg";
import img27 from "../../components/galery/assets/27.jpg";
import img28 from "../../components/galery/assets/28.jpg";
import img29 from "../../components/galery/assets/29.jpg";
import img30 from "../../components/galery/assets/30.jpg";
import img31 from "../../components/galery/assets/31.jpg";
import img32 from "../../components/galery/assets/32.jpg";
import img33 from "../../components/galery/assets/33.jpg";
import img34 from "../../components/galery/assets/34.jpg";
import img35 from "../../components/galery/assets/35.jpg";
import img36 from "../../components/galery/assets/36.jpg";
import img37 from "../../components/galery/assets/37.jpg";
import img38 from "../../components/galery/assets/38.jpg";
import img39 from "../../components/galery/assets/39.jpg";
import img40 from "../../components/galery/assets/40.jpg";
import img41 from "../../components/galery/assets/41.jpg";
import img42 from "../../components/galery/assets/42.jpg";
import img43 from "../../components/galery/assets/43.jpg";
import img44 from "../../components/galery/assets/44.jpg";
import img45 from "../../components/galery/assets/45.jpg";
import img46 from "../../components/galery/assets/46.jpg";
import img47 from "../../components/galery/assets/47.jpg";
import img48 from "../../components/galery/assets/48.jpg";
import img49 from "../../components/galery/assets/49.jpg";
import img50 from "../../components/galery/assets/50.jpg";
import img51 from "../../components/galery/assets/51.jpg";
import img52 from "../../components/galery/assets/52.jpg";
import img53 from "../../components/galery/assets/53.jpg";
import img54 from "../../components/galery/assets/54.jpg";
import img55 from "../../components/galery/assets/55.jpg";
import img56 from "../../components/galery/assets/56.jpg";
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
  img25,
  img26,
  img27,
  img28,
  img29,
  img30,
  img31,
  img32,
  img33,
  img34,
  img35,
  img36,
  img37,
  img38,
  img39,
  img40,
  img41,
  img42,
  img43,
  img44,
  img45,
  img46,
  img47,
  img48,
  img49,
  img50,
  img51,
  img52,
  img53,
  img54,
  img55,
  img56
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
