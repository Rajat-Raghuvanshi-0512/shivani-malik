import git2 from "../assets/getInTouch2.webp";
import PrimaryButton from "../components/PrimaryButton";
import formbg from "../assets/form-bg.webp";

export function Form(props) {
    return <div className=" shadow-xl mx-auto bg-cover bg-bottom sm:flex space-x-0 sm:mx-[108px] absolute lg:-mt-32 md:-mt-32 2xl:-mt-40 z-10 -mt-0" style={{ "box-shadow": "-5px 0px 8px rgba(0, 0, 0, 0.25), 3px 6px 7px rgba(0, 0, 0, 0.25);", "background-image": `url(${formbg})` }}>
        <div className="2xl:w-1/2 md:w-3/5 w-full flex flex-col items-center justify-center h-full">
            <div className="flex md:w-full w-4/5 flex-col self-start 2xl:p-12 md:mb-8 md:p-8 p-6">
                <div className="w-full">
                    <p className='2xl:text-[80px] md:text-6xl text-4xl w-full font-Italiana text-left leading-[104%]'>It’s easy!</p>
                </div>
                <div className="w-full mt-2">
                    <p className='2xl:text-[48px] md:text-6xl text-3xl text-right font-Rockness text-beigePrimary'> Get in Touch with us</p>
                </div>
            </div>
            <div className="grid grid-cols-2 grid-rows-3 w-full sm:px-12 px-6 gap-x-6">
                <div className="flex flex-col justify-start">
                    <label className="sm:text-[16px] text-xs font-Questrial">First Name</label>
                    <input type="text" className="sm:border-b-2 border-b border-black w-full bg-transparent mx-auto" />
                </div>
                <div className="flex flex-col justify-start">
                    <label className="sm:text-[16px] text-xs font-Questrial">Email Address</label>
                    <input type="text" className="sm:border-b-2 border-b border-black w-full  bg-transparent mx-auto" />
                </div>
                <div className="flex flex-col justify-start col-span-2">
                    <label className="sm:text-[16px] text-xs font-Questrial">Request Type</label>
                    <input type="text" className="sm:border-b-2 border-b border-black w-full  bg-transparent mx-auto" />
                </div>
                <div className="flex flex-col justify-start col-span-2">
                    <label className="sm:text-[16px] text-xs font-Questrial">Briefly tell us about your sore points..</label>
                    <textarea className="sm:border-b-2 border-b border-black w-full  bg-transparent mx-auto" />
                </div>
            </div>
            <div className="w-full justify-start flex sm:px-12 px-6 sm:mt-10 sm:mb-20 my-9">
                <PrimaryButton text="Send Us" haveShadow={false} className=" form-btn" onClick={props.openModal} />
            </div>
        </div>
        <div className="w-1/2 sm:flex hidden flex-col items-center justify-end">
            <img src={git2} alt="git2" className="w-" />
        </div>
    </div>;
}
