import texture3 from '../assets/texture-3.webp';
import linkedin from '../assets/LinkedIn.svg';
import facebook from '../assets/Facebook.svg';
import instagram from '../assets/Instagram.svg';
import hire from '../assets/hire.svg';
import footerEllipse from '../assets/footerEllipse.svg';

export default function Footer() {
    if (window.innerWidth > 768) {
        return (
            <div className="w-full py-8 h-80 flex flex-col bg-contain justify-between px-7 sm:px-[7%] text-white" style={{ "backgroundImage": `url(${texture3})`, }}>
                <div className="flex w-full justify-between items-center">
                    <div className="sm:text-[64px] text-3xl font-Italiana">
                        Leaders Create Leaders.
                    </div>
                    <button className="px-6 py-1.5" style={{ "background": "linear-gradient(86.58deg, #B67D3B 0.53%, #DBA159 28.13%, #B67D3B 65.88%)", "box-shadow": "3px 2px 2.99897px rgba(0, 0, 0, 0.25);" }}>
                        <div className="flex space-x-2 items-center">
                            <p className=" font-Questrial">Talk to me..</p>
                            <img src={hire} alt="hire" className="w-8 h-6" />
                        </div>
                    </button>
                </div>
                <div className="flex w-full sm:flex-row flex-col justify-between sm:items-center text-sm">
                    <div className="sm:w-2/3 sm:my-0 my-8 flex">
                        <img src={footerEllipse} alt="footerEllipse" className="w-9" />
                        <p className=' mt-1'>Website Design and Development by PixySquare</p>
                    </div>
                    <div className="sm:w-1/3 flex sm:flex-row flex-row-reverse justify-between items-center ">
                        <a href="mailto:enquiry@shivanimalik.com" target="_blank" rel="noreferrer">
                            enquiry@shivanimalik.com
                        </a>
                        <a href="https://www.linkedin.com/in/shivani-mallik-1b1b3b1b/" target="_blank" rel="noreferrer">
                            <img src={linkedin} alt="linkedin" />
                        </a>
                        <a href="https://www.facebook.com/shivani.mallik.7" target="_blank" rel="noreferrer">
                            <img src={facebook} alt="facebook" />
                        </a>
                        <a href="https://www.instagram.com/shivani_mallik/" target="_blank" rel="noreferrer">
                            <img src={instagram} alt="instagram" />
                        </a>
                    </div>
                </div>
            </div>
        );
    }
    else {
        return <FooterMobile />
    }
}

function FooterMobile() {
    return (
        <div className="w-full pt-8 h-80 flex flex-col bg-contain justify-between px-7 sm:px-[7%] text-white" style={{ "backgroundImage": `url(${texture3})`, }}>
            <div className="flex w-full flex-col space-y-9 justify-between items-center">
                <div className="sm:text-[64px] sm:text-left text-justify tracking-wide text-3xl font-Italiana">
                    Leaders Create Leaders.
                </div>
                <div className="flex w-full justify-between px-3">
                    <div className="sm:w-1/3 flex sm:flex-row space-x-4 justify-between items-center ">

                        <a href="https://www.linkedin.com/in/shivani-mallik-1b1b3b1b/" target="_blank" rel="noreferrer">
                            <img src={linkedin} alt="linkedin" className=' sm:w-auto w-5 ' />
                        </a>
                        <a href="https://www.facebook.com/shivani.mallik.7" target="_blank" rel="noreferrer">
                            <img src={facebook} alt="facebook" className=' sm:w-auto w-5 ' />
                        </a>
                        <a href="https://www.instagram.com/shivani_mallik/" target="_blank" rel="noreferrer">
                            <img src={instagram} alt="instagram" className=' sm:w-auto w-5 ' />
                        </a>
                    </div>
                    <button className="px-3 py-1" style={{ "background": "linear-gradient(86.58deg, #B67D3B 0.53%, #DBA159 28.13%, #B67D3B 65.88%)", "box-shadow": "3px 2px 2.99897px rgba(0, 0, 0, 0.25);" }}>
                        <div className="flex space-x-2 items-center">
                            <p className=" font-Questrial text-[10px]">Talk to me..</p>
                            <img src={hire} alt="hire" className="sm:w-8 sm:h-6 w-6" />
                        </div>
                    </button>
                </div>
            </div>
            <div className="flex w-full flex-row justify-between items-center text-[10px] mb-4 leading-[80%] px-3 font-light">
                <div className="flex items-center -space-x-2">
                    <img src={footerEllipse} alt="footerEllipse" className="w-6" />

                    <p className="">
                        Website Design and Development by PixySquare
                    </p>
                </div>
                <p>
                    Privacy Policy
                </p>

            </div>
        </div>
    );
}