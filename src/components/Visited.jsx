import React from "react";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/lib/styles.css";
import "react-owl-carousel2/src/owl.theme.default.css";
import "../styles/visited.css";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";
import img5 from "../assets/images/img5.jpg";
import img6 from "../assets/images/img6.jpg";

function Visited() {
  const options = {
    items: 3,
    nav: false,
    dots: false,
    autoplay: true,
    loop: true,
    autoplayTimeout: 3000,
    margin: 20,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
    },
  };

  return (
    <section className="owlprod" id="visited">
      <div className="overlay">
        <div className="max-width">
          <div className="head">
            Some of our most visited places.
          </div>
          <div className="container">
            <OwlCarousel options={options}>
              <div className="contenu-img">
                <img src={img1} alt="" />
                <div className="domaine">
                  A big fancy kitchen.
                </div>
              </div>
              <div className="contenu-img">
                <img src={img2} alt="" />
                <div className="domaine">
                  A bedroom for two person with a TV and a desk.
                </div>
              </div>
              <div className="contenu-img">
                <img src={img3} alt="" />
                <div className="domaine">
                  Nice view with a large Lake.
                </div>
              </div>
              <div className="contenu-img">
                <img src={img4} alt="" />
                <div className="domaine">
                  A bedroom for your children with a TV.
                </div>
              </div>
              <div className="contenu-img">
                <img src={img5} alt="" />
                <div className="domaine">Nice Kitchen. </div>
              </div>
              <div className="contenu-img">
                <img src={img6} alt="" />
                <div className="domaine">
                  A big nice room.
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Visited;
