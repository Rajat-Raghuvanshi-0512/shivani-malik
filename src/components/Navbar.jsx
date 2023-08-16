import React from 'react';
import { slide as Menu } from 'react-burger-menu'
import hire from "../assets/hire.svg";
import {  useState } from 'react';
const Navbar = ({ aboutRef, servicesRef, testimonialsRef, myStoryRef }) => {
  const refs = [aboutRef, servicesRef, testimonialsRef, myStoryRef];
  const links = ["About", "Services", "Testimonials", "My Story"];
  const [selected, setSelected] = useState(5);
  
  return (
    <nav className="sm:px-[7%] w-full px-7 sm:pt-[40px] sm:pb-[40px] pt-6 pb-[60px] flex items-center justify-between font-Questrial">
      <div className="sm:text-[36px] text-2xl font-Rockness text-[#4E3000] sm:w-1/3">Shivani Mallik</div>
      <div className="space-x-8 sm:flex right-0 uppercase items-center justify-end sm:w-2/3 hidden">
        {links.map((link, index) => <NavLinkDesktop link={link} linkRef={refs[index]} index={index} setSelected={setSelected} selected={selected} />)}
        
        <button class="btn3 xl:px-10 md:px-1 px-6 py-2 relative border bg-black tracking-wider leading-none overflow-hidden text-white" type="button" style={{ "box-shadow": "9.90698px 10.7326px 3.30233px rgba(0, 0, 0, 0.25);" }}>
          <span class="absolute inset-0" style={{ "background": "linear-gradient(86.58deg, #B67D3B 0.53%, #DBA159 28.13%, #B67D3B 65.88%)", "box-shadow": "9.90698px 10.7326px 3.30233px rgba(0, 0, 0, 0.25);" }}></span>
          <span class="absolute inset-0 flex justify-center items-center">
            <div className="flex space-x-2 items-center ">
              <p className=" font-Questrial text-xs ">Work with me</p>
              <img src={hire} alt="hire" className="w-8 h-6" />
            </div>
          </span>
          
          <div className="flex space-x-2 items-center ">
            <p className=" font-Questrial text-xs">Work with me</p>
            <img src={hire} alt="hire" className="w-8 h-6" />
          </div>
        </button>
      </div>
      <Menu right className="sm:hidden sm:w-0 text-black w-1/2 ">
        <a className="text-18" href='/'>About</a>
        <a className="text-18" href='/'>Services</a>
        <a className="text-18" href='/'>Testimonials</a>
        <a className="text-18" href='/'>Know More</a>
        <a className="text-18 bg-black text-white px-7 py-4" href='/'>
          Work with me
        </a>
      </Menu>
    </nav>
  );
};

export default Navbar;
function NavLinkDesktop({ link, linkRef, index, setSelected, selected}) {
  return <button className={`text-18 ${selected === index ? " border-b border-black" : ""}`}
  onClick={() => { linkRef.current.scrollIntoView({ behavior: 'smooth' }); setSelected(index); } }>{link}
  </button>;
}

