import hire from "../assets/hire.svg";

export default function PrimaryButton(props) {
    var haveShadow = false;
    if (props.haveShadow) {
        haveShadow = true;
    }
    return (
        <button className={`btn2 sm:px-10 px-6 py-2 relative bg-black tracking-wider leading-none overflow-hidden text-white ${haveShadow ? " btn-shadow": ""} ${props.className}`} type="button" style={{"box-shadow": "9.90698px 10.7326px 3.30233px rgba(0, 0, 0, 0.25);"}} onClick={props.onClick ? props.onClick : () => {}}>
            <span className="absolute inset-0" style={{ "background": "linear-gradient(86.58deg, #B67D3B 0.53%, #DBA159 28.13%, #B67D3B 65.88%)", "box-shadow": "9.90698px 10.7326px 3.30233px rgba(0, 0, 0, 0.25);" }}></span>
            <span className="absolute inset-0 flex justify-center items-center">
                <div className="flex space-x-2 items-center">
                    <p className=" font-Questrial text-xs">{props.text}</p>
                    <img src={hire} alt="hire" className="w-8 h-6" />
                </div>
            </span>
            <div className="flex space-x-2 items-center">
                <p className=" font-Questrial text-xs">{props.text}</p>
                <img src={hire} alt="hire" className="w-8 h-6" />
            </div>
        </button>
    );
}