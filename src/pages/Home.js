import React, { useEffect } from "react";
import Layout from "./../components/Layout/Layout";
import abtech from "../images/abtech.mp4";
import { Link } from "react-router-dom";
import "../styles/HomeStyles.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Typed from "typed.js";
import airdraw1 from "../images/airdraw.jpeg"
import Homesection from "./Homesection";
import HomeSection2 from "./HomeSection2";
import Homesection3 from "./Homesection3";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
    // Initialize Typed.js
    const typed = new Typed("#typed-text", {
      strings: [
        "Specializing in disruptive technologies",
        "Artificial Intelligence (AI), Machine Learning, Robotic Process Automation (RPA)",
        "Block Chain and Internet of Things (IoT)",
        "Founders of InsightRiseLabs have deep expertise in cutting-edge technology",
        "Gained over a decade of experience in delivering smart city solutions for European Commission (EC) projects",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1000,
      startDelay: 500,
      loop: true,
    });

    return () => {
      // Clean up Typed.js on component unmount
      typed.destroy();
    };
  }, []);

  return (
    <>
    <Layout>
      <div className="home">
        <video autoPlay loop muted playsInline className="video-bg" data-aos="fade-in">
          <source src={abtech} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="headerContainer">
          <h1 data-aos="zoom-in-up">InsightRiseLabs Technologies</h1>
          <p id="typed-text" data-aos="fade-up"></p>
        </div>
      </div>
   
    <Homesection/>
    <HomeSection2/>
    <Homesection3 />
    </Layout>
    </>
  );
};

export default Home;
