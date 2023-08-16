import texture2 from "../assets/texture-2.webp";
import Slider from "react-slick";
import slide from "../assets/slide.webp";
import { useState } from "react";

export function PastHistory({ myStoryRef }) {
    const history = [
        {
            year: "1982",
            text: "I was born in Delhi, India",
            desc: "Lorem ipsum dolor sit amet consectetur. Vulputate risus risus amet a et tincidunt. Eget eget penatibus at ac semper leo cursus. Metus maecenas consequat at arcu sit pretium a nibh dictum."
        },
        {
            year: "2000",
            text: "I graduated ",
            desc: "Vulputate risus risus ametLorem ipsum dolor sit amet consectetur.  a et tincidunt. Eget eget penatibus at ac semper leo cursus. Metus maecenas consequat at arcu sit pretium a nibh dictum."
        },
        {
            year: "2002",
            text: "I moved to the United States",
            desc: "tate risus risus amet a et tincidunt. Eget eget penatibus at ac semper leo cursus. Metus maecenas consequat at arcu Lorem ipsum dolor sit amet consectetur. Vulpusit pretium a nibh dictum."
        },
    ];
    const [current, setCurrent] = useState(history[0]);
    const settings = {
        className: "sm:mx-8 mx-auto sm:w-2/3 w-full",
        centerMode: true,
        infinite: true,
        centerPadding: 0,
        slidesToShow: 3,
        draggable: true,
        focusOnSelect: true,
        swipeToSlide: true,
        speed: 500,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 2000,
        beforeChange: (current, next) => {
            setCardIndex(next);
            setCurrent(history[next % 3]);

        },
    };
    const [cardIndex, setCardIndex] = useState(0);
    return <div className="w-full relative bg-white " ref={myStoryRef}>
        <img src={texture2} alt="texture2" className="w-full h-full absolute z-0 top-0" />
        <div className="w-full h-full z-10 flex flex-col items-start sm:px-[7%] px-[28px] pt-6 md:pt-16 xl:pt-24 justify-between">
            <div className=" w-11/12 mx-auto z-40">
                <p className="sm:text-[16px] text-xs  leading-[155%] font-Questrial  border-l border-black pl-3 ">
                    Hundreds of students have graduated from my online programs and went on to create massive results in their lives. Those who work with me end up gaining clarity around their purpose, becoming the happiest version of themselves, creating deeper connection, getting paid for their gifts, living a purpose-driven fulfilled life that they love, and so much more.
                    <span className=" font-Rockness text-beigePrimary text-2xl sm:text-[32px] ml-40 block">
                        - Shivani Malik
                    </span>
                </p>
            </div>
        </div>
        <div className="w-full flex justify-center my-10">
            <Slider {...settings}>
                {[1, 2, 3, 4, 5].map((comic, index) => {
                    return (
                        <div className={`transform transition-transform duration-300 w-1/3 h-full ${index === cardIndex ? " scale-110 opacity-100" : " scale-75 opacity-50"}`}>
                            <img src={slide} alt="cover" className=" h-full w-full mx-0 my-auto" />
                        </div>

                    );
                })}

            </Slider>
        </div>
        <div className="sm:w-1/2 mx-auto z-50 relative sm:mb-0 xl:pb-10 md:pb-4">
            <p className="sm:text-[28px] text-xl font-Questrial z-50 text-center">{current.text}
                <span className=" ml-4 text-beigePrimary z-50 font-Rockness text-center text-[28px]">
                    {current.year}...
                </span>
            </p>
        </div>
        <div className="w-2/3 text-center mx-auto font-Questrial z-50 relative sm:block hidden">
            {current.desc}
        </div>
    </div>;
}
