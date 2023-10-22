import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../components/galery/assets/1.jpg";
import img2 from "../../components/galery/assets/1.jpg";
import img3 from "../../components/galery/assets/1.jpg";
import "./1.css";

const fotos = [
  img1,
  img2,
  img3
 

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
