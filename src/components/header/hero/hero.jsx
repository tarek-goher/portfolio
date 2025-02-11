import React from "react";
import "./hero.css";
import developerAnimation from "../../../animation/Animation - 1737747113795.json";
import Lottie from "lottie-react";
import { useRef } from "react";
import { motion } from "framer-motion";
import logo from "../../../assets/455930d7-3a08-4071-bcbd-2deebacc0aa0.jpg";

export default function Hero() {
  const lottieRef = useRef();
  return (
    <section className="hero  flex">
      <div className="left-section  ">
        <div className="parent flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 8, type: "spring", stiffness: 100 }}
            className="avatar"
            src={logo}
            alt=""
          />
          <div className="icon-verified"></div>
        </div>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="title"
        >
          Tarek Abdelkarim - Front-End Developer | HTML, CSS, JavaScript,
          Bootstrap, react , Material UI
        </motion.h1>
        <p className="sup-title">
          I am Tarek Abdelkareem, a front-end developer specialized in HTML,
          CSS, JavaScript, Bootstrap, and react, Material UI. I design sleek, modern,
          and responsive web interfaces using Material Design principles.
          Explore my portfolio to see my work and projects."
        </p>
        <div className="icons flex">
          {/* <div className="icon-facebook2 icon ">
            {" "}
            <a href="" />
          </div> */}
          <a
            className="icon-linkedin  icon  "
            href="https://www.linkedin.com/in/tarek-abd-alkarim-148453260/"
          />
          <a
            className="icon-instagram  icon"
            href="https://www.instagram.com/taroka_45/?utm_source=ig_web_button_share_sheet"
          />
          <a
            className="icon-github  icon"
            href="https://github.com/tarek-goher"
          />
        </div>
      </div>
      <div className="lap">
        <Lottie
          className="contact-animation"
          loop={true}
          style={{ height: 355 }}
          lottieRef={lottieRef}
          onLoadedImages={() => {
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={developerAnimation}
        />
      </div>
    </section>
  );
}
