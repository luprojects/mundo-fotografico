import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../components/galery/assets/1a.jpg";
import img2 from "../../components/galery/assets/2a.jpg";
import img3 from "../../components/galery/assets/3a.jpg";
import img4 from "../../components/galery/assets/4a.jpg";
import img5 from "../../components/galery/assets/5a.jpg";
import img6 from "../../components/galery/assets/6a.jpg";
import img7 from "../../components/galery/assets/7a.jpg";
import img8 from "../../components/galery/assets/8a.jpg";
import img9 from "../../components/galery/assets/9a.jpg";
import img10 from "../../components/galery/assets/10a.jpg";
import img11 from "../../components/galery/assets/11a.jpg";
import img12 from "../../components/galery/assets/12a.jpg";
import img13 from "../../components/galery/assets/13a.jpg";
import img14 from "../../components/galery/assets/14a.jpg";
import img15 from "../../components/galery/assets/15a.jpg";
import img16 from "../../components/galery/assets/16a.jpg";
import img17 from "../../components/galery/assets/17a.jpg";
import img18 from "../../components/galery/assets/18a.jpg";
import img19 from "../../components/galery/assets/19a.jpg";
import img20 from "../../components/galery/assets/20a.jpg";
import img21 from "../../components/galery/assets/21a.jpg";
import img22 from "../../components/galery/assets/22a.jpg";
import img23 from "../../components/galery/assets/23a.jpg";
import img24 from "../../components/galery/assets/24a.jpg";
import img25 from "../../components/galery/assets/25a.jpg";
import img26 from "../../components/galery/assets/26a.jpg";
import img27 from "../../components/galery/assets/27a.jpg";
import img28 from "../../components/galery/assets/28a.jpg";
import img29 from "../../components/galery/assets/29a.jpg";
import img30 from "../../components/galery/assets/30a.jpg";
import img31 from "../../components/galery/assets/31a.jpg";
import img32 from "../../components/galery/assets/32a.jpg";
import img33 from "../../components/galery/assets/33a.jpg";
import img34 from "../../components/galery/assets/34a.jpg";
import img35 from "../../components/galery/assets/35a.jpg";
import img36 from "../../components/galery/assets/36a.jpg";
import img37 from "../../components/galery/assets/37a.jpg";
import img38 from "../../components/galery/assets/38a.jpg";
import img39 from "../../components/galery/assets/39a.jpg";
import img40 from "../../components/galery/assets/40a.jpg";
import img41 from "../../components/galery/assets/41a.jpg";
import img42 from "../../components/galery/assets/42a.jpg";
import img43 from "../../components/galery/assets/43a.jpg";
import img44 from "../../components/galery/assets/44a.jpg";
import img45 from "../../components/galery/assets/45a.jpg";
import img46 from "../../components/galery/assets/46a.jpg";
import img47 from "../../components/galery/assets/47a.jpg";
import img48 from "../../components/galery/assets/48a.jpg";
import img49 from "../../components/galery/assets/49a.jpg";
import img50 from "../../components/galery/assets/50a.jpg";
import img51 from "../../components/galery/assets/51a.jpg";
import img52 from "../../components/galery/assets/52a.jpg";
import img53 from "../../components/galery/assets/53a.jpg";
import img54 from "../../components/galery/assets/54a.jpg";
import img55 from "../../components/galery/assets/55a.jpg";
import img56 from "../../components/galery/assets/56a.jpg";

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
  img56,
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
    speed: 3500,
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
                <img src={imagen} alt="fotos" className=" slider-imagen" />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default GaleriaCode;
