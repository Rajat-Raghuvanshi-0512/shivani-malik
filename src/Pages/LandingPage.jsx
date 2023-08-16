import Navbar from "../components/Navbar";
import texture1 from "../assets/texture-1.webp";
import WhatsThis from "../components/WhatsThis";
import Footer from "../components/Footer";

import { HeroComponent } from "../components/HeroComponent";
import { Introduction } from "../components/Introduction";
import { SuccessStories } from "../components/SuccessStories";
import { Testimonials } from "../components/Testimonials";
import { WaysContainer } from "../components/WaysContainer";
import { Form } from "../components/Form";
import { BulletPoints } from "../components/BulletPoints";
import { Brands } from "../components/Brands";
import { PastHistory } from "../components/PastHistory";
import { useRef } from "react";

export default function LandingPage(props) {

    const aboutRef = useRef();
    const servicesRef = useRef();
    const testimonialsRef = useRef();
    const myStoryRef = useRef();
    return (
        <div className="">
            <Navbar aboutRef={aboutRef} servicesRef={servicesRef} testimonialsRef={testimonialsRef} myStoryRef={myStoryRef} />
            <HeroComponent />
            <BulletPoints />
            <div className="bg-cover sm:px-[7%] px-[28px] bg-bottom  w-full -z-10 sm:-mt-40 -mt-48 pt-60"
                style={{ backgroundImage: `url(${texture1})`, }}>
                <Introduction aboutref={aboutRef}/>
                <div className="2xl:w-1/2 md:w-[55%] w-full 2xl:pb-16 pb-12 flex justify-center flex-col sm:items-center sm:mx-auto md:mt-10" ref={servicesRef}>
                    <div className="w-full">
                        <p className='2xl:text-[80px] md:text-6xl text-4xl font-Italiana text-left leading-[104%] sm:ml-10'>Ways  you can</p>
                    </div>
                    <div className="w-full">
                        <p className='2xl:text-[60px] md:text-5xl md:text-right text-4xl text-right font-Rockness text-beigePrimary'>Level Up With Me...</p>
                    </div>
                </div>
                <WaysContainer />
            </div>
            <SuccessStories />
            <PastHistory myStoryRef={myStoryRef} />
            <div className=' pb-40' style={{ "background-image": `url(${texture1})` }}>
                <div className="w-full bg-gradient-to-b from-white to-transparent sm:px-[7%] px-[28px] sm:pt-16 sm:mt-0 sm:mb-0 mt-16 mb-8">
                    <div className="2xl:w-1/3 md:w-[45%] w-full">
                        <div className="w-full">
                            <p className='2xl:text-[80px] md:text-6xl text-5xl font-Italiana'>What this</p>
                        </div>
                        <div className="w-full">
                            <p className='2xl:text-[60px] md:text-5xl text-4xl text-right font-Rockness text-beigePrimary'>Industry leaders say</p>
                        </div>
                    </div>
                </div>
                <WhatsThis />
                <div className="2xl:w-1/3 md:w-[38%] w-4/5 pb-16 flex flex-col sm:items-center sm:mx-auto -10" ref={testimonialsRef}>
                    <div className="w-full">
                        <p className='2xl:text-[80px] md:text-6xl text-4xl font-Italiana text-left leading-[104%] ml-10'>Real Clients</p>
                    </div>

                    <div className="w-full">
                        <p className='2xl:text-[60px] md:text-5xl sm:mr-0 mr-10 text-right text-4xl font-Rockness text-beigePrimary'>Real Results</p>
                    </div>
                </div>
                <Testimonials />

                <Form openModal={props.openModal} />
            </div>
            <Brands />
            <Footer />
        </div >
    );
}