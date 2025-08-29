import React from 'react';
import "./About.css";
import Card from "../Card/Card"; 
import web from "../../assets/img1.jpg";
import java from "../../assets/img2.jpg";
import dsa from "../../assets/img3.jpg";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

function About() {
  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from(".circle", {
        x: -100,
        duration: 1,
        opacity: 0,
        stagger: 1,
        scrollTrigger: {
          trigger: ".circle",
          scrub: 2,
          start: "top 60%",
          end: "top 30%",
        },
      });

      gsap.from(".aboutdetails h1", {
        x: -100,
        duration: 1,
        opacity: 0,
        stagger: 1,
        scrollTrigger: {
          trigger: ".aboutdetails h1",
          scrub: 2,
          start: "top 60%",
          end: "top 30%",
        },
      });
      gsap.from(".aboutdetails ul", {
        y: 100,
        duration: 1,
        opacity: 0,
        stagger: 1,
        scrollTrigger: {
          trigger: ".aboutdetails ul",
          scrub: 2,
          start: "top 60%",
          end: "top 30%",
        },
      });
      gsap.from(".rightabout ", {
        y: 100,
        duration: 1,
        opacity: 0,
        stagger: 1,
        scrollTrigger: {
          trigger: ".rightabout",
          scrub: 2,
          start: "top 60%",
          end: "top 30%",
        },
      });

      gsap.from(".line", {
        x: -100,
        duration: 1,
        opacity: 0,
        stagger: 1,
        scrollTrigger: {
          trigger: ".line",
          scrub: 2,
          start: "top 60%",
          end: "top 30%",
        },
      });
    });

    return () => ctx.revert(); // Cleanup GSAP animations
  }, []);

  return (
    <div id="About">
      <div className="leftabout">
        <div className="circle-line">
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
        </div>

        <div className="aboutdetails">
          <div className="personalinfo">
            <h1>Personal Info</h1>
            <ul>
              <li><span>NAME</span>: RESHAM GUPTA</li>
              <li><span>AGE</span>: 20 YEARS</li>
              <li><span>GENDER</span>: FEMALE</li>
              <li><span>LANGUAGE KNOWN</span>: ENGLISH & HINDI</li>
            </ul>
          </div>

          <div className="EDUCATION">
            <h1>EDUCATION</h1>
            <ul>
              <li><span>DEGREE</span>: B.TECH</li>
              <li><span>BRANCH</span>: COMPUTER SCIENCE & ENGINEERING</li>
              <li><span>SGPA</span>: 7.88</li>
            </ul>
          </div>

          <div className="Skills">
            <h1>Skills</h1>
            <ul>
              <li>WEB DEVELOPER</li>
              <li>JAVA</li>
              <li>DSA</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="rightabout">
        <Card title='WEB DEVELOPER' image={web} />
        <Card title='JAVA' image={java} />
        <Card title='DSA' image={dsa} />
      </div>
    </div>
  );
}

export default About;
