import React from 'react';
import Card from '../Card/Card';
import pc from "../../assets/img3.jpg";
import pd from "../../assets/img2.jpg";
import pe from "../../assets/img1.jpg";
import pf from "../../assets/img2.jpg";
import pg from "../../assets/img1.jpg";
import "./Projects.css";
import gsap from 'gsap'; 
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);

function Projects() {
  useGSAP(() => {
    gsap.from("#para", {
      y: 100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: "#para", 
        scrub: 2,
        start: "top 80%",
        end: "top 30%",
      }
    });
    gsap.from(".slider", {
      y: 100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".slider", 
        scroll:"body",
        scrub: 2,
        start: "top 80%",
        end: "top 30%",
      }
    });
  }, []); 

  return (
    <div id="Projects">
      <h1 id="para">PROJECTS</h1>
      <div className="slider">
        <Card title="Ayodhya 'The Saryu Teere'" image={pc} />
        <Card title="College Recommendation" image={pd} />
        <Card title="Portfolio" image={pe} />
        <Card title="abcdef" image={pf} />
        <Card title="abcdefg" image={pg} />
      </div>
    </div>
  );
}

export default Projects;
