import React, { useRef } from 'react';
import "./Nav.css";
import { Link } from "react-scroll";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function Nav() {
  let menu = useRef();
  let mobile = useRef();
useGSAP(()=>{
let t1 = gsap.timeline()
t1.from("nav h1",{
  y:-100,
  duration:1,
  opacity:0
})
t1.from("nav ul li ",{
  y:-100,
  duration:1,
  opacity:0,
  stagger:1
})
})
  return (
    <nav>
      <h1>PORTFOLIO</h1>

      <ul className='desktopmenu'>
        <li><Link to="Home" activeClass='active' spy={true} smooth={true} duration={500}>Home</Link></li>
        <li><Link to="About" activeClass='active' spy={true} smooth={true} duration={500}>About</Link></li>
        <li><Link to="Projects" activeClass='active' spy={true} smooth={true} duration={500}>Projects</Link></li>
        <li><Link to="Contact" activeClass='active' spy={true} smooth={true} duration={500}>Contact</Link></li>
      </ul>

      <div className='hamburger' ref={menu} onClick={() => {
        mobile.current.classList.toggle("activemobile");
        menu.current.classList.toggle("activeham");
      }}>
        <div className="ham"></div>
        <div className="ham"></div>
        <div className="ham"></div>
      </div>

      <ul className='mobilemenu' ref={mobile}>
        <li><Link to="Home" activeClass='active' spy={true} smooth={true} duration={500}>Home</Link></li>
        <li><Link to="About" activeClass='active' spy={true} smooth={true} duration={500}>About</Link></li>
        <li><Link to="Projects" activeClass='active' spy={true} smooth={true} duration={500}>Projects</Link></li>
        <li><Link to="Contact" activeClass='active' spy={true} smooth={true} duration={500}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
