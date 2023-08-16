import ellipseList from "../assets/ellipseList.svg";

export function BulletPoints() {
    return <div className="z-10 relative shadow-md md:mx-32 2xl:mx-52 mx-8  mt-14 bg-customWhite flex flex-col items-center" style={{ "box-shadow": "5px 8px 6px rgba(0, 0, 0, 0.25);" }}>
        <div className="flex flex-col sm:w-[45%] w-3/4">
            <p className="mt-7 text-4xl sm:text-7xl leading-[105%] font-Italiana">
                Do you
            </p>
            <p className="sm:text-[3.75rem] text-4xl text-right md:-mt-4 -mt-1 leading-[85%] text-beigePrimary font-Rockness">
                ever feel like...
            </p>
        </div>
        <ul className="md:my-5 sm:my-8">
            <ListItem text="Your current online assets do not represent how powerful you are" />
            <ListItem text="Your web presence is lacking and could be losing you money" />
            <ListItem text="It is difficult to convey your message and what you do" />
            <ListItem text="You want expert support that you can really trust and rely on" />
        </ul>
        <div className="w-full flex sm:justify-end justify-center mb-6 sm:mr-10 2xl:text-[4rem] md:text-5xl text-3xl">
            <p className="text-[#603300] font-Rockness">
                I got you..
            </p>
        </div>
    </div>;
}
function ListItem(props) {
    return (
        <li className="2xl:text-3xl md:text-2xl text-[16px] sm:px-6 px-6 sm:my-0 my-4 sm:tracking-normal tracking-wider text-blackText leading-[155%] flex font-Italiana items-start">
            <img src={ellipseList} alt="ellipse" className="sm:w-8 w-5 sm:mr-6 mr-[9.5px]" />
            {props.text}
        </li>
    );
}
