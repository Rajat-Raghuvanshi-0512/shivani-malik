import gradImage from "../assets/gradImage.webp";
import gradImageMobile from "../assets/gradImageMobile.webp";
import ellipseStories from "../assets/ellipseStories.svg";
import ellipseMobileStories from "../assets/ellipseStoriesMobile.svg";

function Content() {
    if (window.innerWidth < 768) {
        return <p className="2xl:text-[32px] md:text-2xl text-[18px] tracking-[8.5%] text-white text-center leading-[155%] font-Questrial">
            Lorem ipsum dolor sit amet consectetur. <br />Vulputate risus risus amet a et tincidunt
        </p>
    }
    else {
        return <p className="2xl:text-[32px] md:text-2xl text-[18px]  text-white text-center leading-[155%] font-Questrial font-light">
            Lorem ipsum dolor sit amet consectetur. Vulputate risus risus amet a et tincidunt
        </p>
    }
}

export function SuccessStories() {
    var ellipseimg = ellipseStories;
    var gradimg = gradImage;
    var content = ""
    if (window.innerWidth < 768) {
        ellipseimg = ellipseMobileStories;
        gradimg = gradImageMobile;
        content = "Lorem ipsum dolor sit amet consectetur. Vulputate risus risus amet a et tincidunt"
    }

    return <div className="w-full bg-cover z-20 relative h-auto flex justify-center" style={{ backgroundImage: `url(${gradimg})` }}>
        <img src={gradimg} alt="gradImage" className="w-full h-full invisible" />
        <div className="w-full h-full absolute flex justify-center items-end sm:pt-0 sm:pb-16 pb-0">
            <div className="flex flex-col sm:w-3/5 ">
                <div className="flex relative sm:justify-center w-full">
                    <img src={ellipseimg} alt="ellipseList" className="w-1/4 absolute 2xl:left-36 md:left-24 left-4 2xl:mt-0 md:mt-4 -mt-8" />
                    <p className="sm:text-[72px] text-4xl sm:ml-20 text-center sm:mx-0 mx-auto leading-[105%] text-white sm:mt-28 font-Italiana">
                        Success Stories
                    </p>
                </div>
                <div className="flex justify-center w-full sm:mt-10 mt-3 pb-2">
                    <Content />
                </div>
            </div>

        </div>
    </div>;
}
