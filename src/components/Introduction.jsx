import mainPerson from "../assets/mainPerson.webp";
import hire from "../assets/hire.svg";

export function Introduction({aboutref}) {
    
    return <div className="relative flex sm:flex-row flex-col items-center justify-between" ref={aboutref}>
        <div className="flex  relative items-center sm:w-2/5 2xl:mr-0 mr-6 w-full sm:mt-10 justify-between">

            <img src={mainPerson} alt="Imag2" className="" />
        </div>
        <div className="2xl:w-1/2 md:w-3/5 justify-center ">
            <div className="flex flex-col w-full md:w-3/4">
                <p className="sm:mt-8 mt-4 text-5xl 2xl:text-[80px] md:text-6xl leading-[105%] font-Italiana">
                    Hey there,
                </p>
                <p className="2xl:text-[60px] md:text-5xl text-4xl text-right leading-[85%] text-beigePrimary font-Rockness">
                    I am Shivani Malik
                </p>
            </div>
            <div className="w-full mt-10">
                <p className="2xl:text-xl md:text-[18px] text-blackText leading-[155%] font-Questrial text-justify">
                    Lorem ipsum dolor sit amet consectetur. Vulputate risus risus amet a et tincidunt. Eget eget penatibus at ac semper leo cursus. Metus maecenas consequat at arcu sit pretium a nibh dictum. Neque aliquam amet curabitur pretium. Fermentum diam urna neque in interdum amet magna euismod. Fermentum bibendum ullamcorper tortor quis risus arcu sit lorem. Quam odio arcu turpis nisi cursus egestas blandit elementum blandit. Gravida vitae justo lacus mi. Elit vestibulum elementum morbi
                </p>
                <p className="2xl:text-[36px] md:text-4xl text-xl sm:text-left text-center mt-4 leading-[104%] font-Italiana">
                    Entrepreneur, Author, Speaker
                </p>
                <div className="w-full flex sm:justify-start justify-center my-8">
                    <div className="sm:px-10 px-6 py-2 relative intro-btn tracking-wider leading-none overflow-hidden text-white">
                        <div className="flex space-x-2 items-center justify-between">
                            <p className=" font-Questrial text-sm">Get Started</p>
                            <img src={hire} alt="hire" className="w-8 h-6" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>;
}
