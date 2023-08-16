import hire from "../assets/hire.svg";
import texture2 from "../assets/texture-2.webp";
import cardEllipse from "../assets/cardEllipse.webp";

export function WaysContainer({servicesRef}) {
    return (
        <div id="ways_cards" className="flex 2xl:px-16 md:px-0 flex-col w-full items-center justify-center">

            <div className="w-full flex sm:flex-row flex-col justify-between items-center sm:px-0 px-4 mb-20 sm:space-x-16 sm:space-y-0 space-y-20">
                <Card title="1:1 Coaching Personal" description="Lorem ipsum dolor sit amet consectetur. Vulputate risus risus amet a et tincidunt. Eget eget penatibus at ac semper leo cursus. Metus maecenas consequat at arcu sit pretium a " />
                <Card title="Group Coaching" description="Lorem ipsum dolor sit amet consectetur. Vulputate risus risus amet a et tincidunt. Eget eget penatibus at ac semper leo cursus. Metus maecenas consequat at arcu sit pretium a " />
                <Card title="Virtual Coaching" description="Lorem ipsum dolor sit amet consectetur. Vulputate risus risus amet a et tincidunt. Eget eget penatibus at ac semper leo cursus. Metus maecenas consequat at arcu sit pretium a " />
            </div>
        </div>
    );
}
function Card({ title, description, button }) {
    return (
        <div className="aspect-square ways-card-shadow sm:rounded-none rounded-lg 2xl:px-4 2xl:py-12 md:px-2 md:py-4 px-4 py-12 w-full bg-[#FFF9F0] flex items-center md:justify-evenly sm:space-y-0 space-y-4 sm:mx-0 mx-20 justify-start flex-col relative"
            style={{ "box-shadow": "6.23849px 7.27824px 4.159px rgba(0, 0, 0, 0.25);" }}
        >
            <img className="absolute top-0 w-full h-full rounded-lg" src={texture2} alt="" />
            
            <div className="relative sm:pt-4 md:pt-10 pt-0">
                <img className="2xl:h-24 md:h-20 sm:w-auto w-16 absolute md:-top-4 -top-10 -left-8" src={cardEllipse} alt="" />
                <h3 className="text-black sm:text-3xl md:text-2xl text-xl z-10 flex -mt-5 items-center justify-center font-Italiana">
                    <p className=" ">{title}</p>
                </h3>
            </div>

            <p className="text-justify  sm:px-5 sm:py-5 px-6 text-black 2xl:text-2xl md:text-base font-Questrial leading-[155%] z-10 2xl:mt-8 md:mt-4 mt-0">{description} </p>


            <button class={`btn2 -bottom-4 absolute sm:px-10 px-6 py-2 bg-black tracking-wider leading-none overflow-hidden text-white btn-card`} type="button" style={{ "box-shadow": "9.90698px 10.7326px 3.30233px rgba(0, 0, 0, 0.25);" }}>
                <span class="absolute inset-0" style={{ "background": "linear-gradient(86.58deg, #B67D3B 0.53%, #DBA159 28.13%, #B67D3B 65.88%)", "box-shadow": "9.90698px 10.7326px 3.30233px rgba(0, 0, 0, 0.25);" }}></span>
                <span class="absolute inset-0 flex justify-center items-center">
                    <div className="flex space-x-2 items-center">
                        <p className=" font-Questrial text-xs">Get Started</p>
                        <img src={hire} alt="hire" className="w-8 h-6" />
                    </div>
                </span>
                <div className="flex space-x-2 items-center">
                    <p className=" font-Questrial text-xs">Get Started</p>
                    <img src={hire} alt="hire" className="w-8 h-6" />
                </div>
            </button>
        </div>
    );
}
