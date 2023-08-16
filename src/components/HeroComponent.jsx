import smiling from "../assets/smiling.webp";
import ellipse from "../assets/ellipse.svg";
import ellipseMobile from "../assets/ellipse-mobile.svg";
import PrimaryButton from "../components/PrimaryButton";

export function HeroComponent() {
    var ellipseimg = ellipse;
    if (window.innerWidth < 768) {
        ellipseimg = ellipseMobile;
    }
    return <div className="flex sm:flex-row flex-col-reverse  sm:px-[7%] px-[28px] items-start justify-between font-Questrial">
        <div className="flex relative 2xl:w-3/5 md:w-[52%] 2xl:mr-40">
            <img src={ellipseimg} alt="ellipse" className="2xl:w-1/4 w-[28%] md:w-1/4 absolute sm:top-0 -top-[80px] sm:-left-0 -left-5" />
            <div className="md:mt-20 -mt-12 sm:ml-20">
                <p className="2xl:text-7xl md:text-6xl text-5xl sm:text-left text-center tracking-wider leading-[114.5%]  font-Italiana"><span className="sm:text-black text-white">Sell with  ease</span> and scale with simplicity</p>
                <p className="text-beigePrimary 2xl:text-5xl text-5xl sm:text-left  text-center leading-[155%] font-Rockness">
                    I will show you how.
                </p>
                {/* black button with white text */}
                <div className="flex w-full sm:justify-start my-2 justify-center">
                    <PrimaryButton text="Hire Me" />
                </div>
            </div>
        </div>
        <img src={smiling} alt="smiling" className="sm:w-2/5" />
    </div>;
}
