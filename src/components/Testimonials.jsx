import texture2 from "../assets/texture-2.webp";
import testimonial1 from "../assets/testimonial1.webp";
import commas from "../assets/commas.svg";
import Slider from "react-slick";
import left from "../assets/left.svg";
import right from "../assets/right.svg";
import { useState } from "react";

export function Testimonials() {
    const [cardIndex, setCardIndex] = useState(0);
    const settings = {
        className: "w-full flex sm:flex-row flex-col justify-between items-center ",
        centerMode: true,
        infinite: true,
        centerPadding: window.innerWidth <= 768 ? "60px" : window.innerWidth > 1024 ? "0" : "0px",
        slidesToShow: window.innerWidth < 768 ? 1 : 3,
        draggable: true,
        focusOnSelect: true,
        swipeToSlide: true,
        arrows: false,
        autoplaySpeed: 2000,
        beforeChange: (current, next) => setCardIndex(next),
    };

    const [slider, setSlider] = useState(null);
    return <div className="w-full sm:px-[7%] px-0 pb-10 sm:mb-60">
        <Slider {...settings} ref={c => setSlider(c)}>
            {Array.from(Array(6).keys()).map((item, index) => {
                return (
                    <div className={`2xl:px-10 md:px-6 px-3` + (cardIndex === index ? "" : " sm:scale-100 scale-90")}>
                        <TestimonialCard name="Ligula Condimentum" designation="CEO, XYZ" description="ligula condimentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam facilisis dolor vel lacus rhoncus, eget consequat sapien scelerisque. Praesent volutpat blandit nisi vitae luctus.”" image={testimonial1} />
                    </div>
                );
            })
            }
        </Slider>
        <div className="flex mx-auto w-full justify-center md:mt-12 2xl:mt-12 mt-10 sm:space-x-8 space-x-4">
            <button onClick={() => { slider.slickPrev() }}>
                <img src={left} alt="left" className="sm:w-10 w-7" />
            </button>
            <button onClick={() => { slider.slickNext() }}>
                <img src={right} alt="right" className="sm:w-10 w-7" />
            </button>
        </div>
    </div>

}
function TestimonialCard({ name, designation, description, image }) {
    return (
        <div className=" aspect-square transition-all duration-200 w-full  relative flex flex-col bg-customWhite items-center justify-center 2xl:pb-10 pb-0">
            <img src={texture2} className="w-full h-full absolute bg-customWhite top-0 testimonial-shadow" alt="sdkj" />
            <div className="w-full h-full z-10 flex flex-col items-center justify-center">
                <div className="w-full 2xl:px-6 px-3 2xl:pt-4 2xl:pb-4 pb-2 pt-2">
                    <img src={commas} alt="commas" className="2xl:w-1/4 md:w-1/5 w-9 h-7" />
                </div>
                <div className="custom-scroll lg:text-base md:text-sm text-xs sm:h-40 h-24 overflow-y-scroll 2xl:mx-8 md:mx-6 mx-5 text-justify sm:pr-4 pr-3 2xl:mb-6 mb-3 font-Questrial">
                    {description}
                </div>
                <div className="w-full flex 2xl:px-6 px-4 items-center justify-between sm:space-x-5 space-x-2">
                    <img src={image} alt="" className="2xl:w-1/4 md:w-1/5 w-14" />
                    <div className="flex flex-col items-start justify-center w-3/4">
                        <div className="text-[16px] text-xs 2xl:leading-[155%] font-Questrial">ligula condimentum. <p>Vestibulum ante</p> </div>
                        <div className="2xl:text-[24px] md:text-base text-sm font-Italiana">{name}</div>
                    </div>
                </div>
            </div>

        </div>
    );
}
