import React from "react";
import HeroImg from "../assests/Shivam.jpg";
import {
  AiOutlineTwitter,
  AiOutlineYoutube,
  AiOutlineFacebook,
} from "react-icons/ai";
const link="https://drive.google.com/file/d/1lQwq99E5q6H-5W41QqKO9yAHUvMa9Hwz/view?usp=sharing";
const Hero = () => {
  return (
    <section className="bg-primary px-5 text-white py-16" id="home">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-between md:justify-between lg:p-5">
        <div className="hero-info pb-5 md:pb-0">
          <h1 className="text-3xl lg:text-5xl">
            Hi, <br />I am <span className="text-accent">S</span>hivam <br />
            Frontend Developer
          </h1>

          <p className="py-5">
            I am proficient in JavaScript, React.js and Tailwind CSS.
          </p>

          <div className="flex py-5">
            <a
              href="https://twitter.com/CoderAmrin"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <AiOutlineTwitter size={40} />{" "}
            </a>
            <a
              href="https://www.youtube.com/@coderamrin"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <AiOutlineYoutube size={40} />{" "}
            </a>
            <a
              href="https://www.facebook.com/CoderAmrin/"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <AiOutlineFacebook size={40} />{" "}
            </a>
          </div>

          <a
            href={link}
            className="btn bg-accent  border-2 border-[#7477FF] text-white px-6 py-3 hover:bg-transparent"
          >
            Download Resume..!
          </a>
        </div>

        <div className="hero-img flex items-center justify-center lg:justify-end">
          <img
            src={HeroImg}
            alt="myImg"
            className="bg-cover bg-center lg:w-[70%] rounded-md transform transition-all duration-300 hover:scale-105 hover:opacity-130"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
