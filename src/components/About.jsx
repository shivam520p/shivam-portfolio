import React from "react";
import HeroImg from "../assests/Shivam.jpg";

const About = () => {
  return (
    <section className="bg-secondery text-white px-5 py-20" id="about">
      <div className="container mx-auto lg:p-5 flex flex-col-reverse lg:flex-row w-full items-start justify-center md:justify-between">
        <div className="about-img lg:w-[35%] flex justify-start items-center">
          <img
            src={HeroImg}
            alt="coding illustration"
            className="bg-cover bg-center w-full rounded-md transform transition-all duration-300 hover:scale-105 hover:opacity-130"
          />
        </div>

        <div className="about-info lg:w-[60%]">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            About Me
          </h2>

          <p className="pb-5">
            Hello! I'm Shivam Pandey, a passionate and dedicated developer with
            a strong focus on creating user-friendly, responsive, and visually
            appealing websites.I specialize in both front-end technologies to bring ideas to life on the web. Ability to learn new software???s and 
            technologies quickly. Capability to work in teams by providing valuable support.
          </p>
          <div class="container mx-auto">
            <div>
              <ul>
              <li><i className="fa-solid fa-cake-candles text-indigo-600"></i><strong className="pl-2">Birthday :</strong> 15 April 2002</li>
              <li><i className="fa-solid fa-location-dot text-indigo-600"></i><strong className="pl-2">Address :</strong> Jaunpur,Uttar Pradesh</li>
              <li><i className="fa-solid fa-phone text-indigo-600"></i><strong className="pl-2">Phone :</strong> +91 9555804662</li>
              <li><i className="fa-solid fa-envelope text-indigo-600"></i><strong className="pl-2">Email :</strong> shivam520p@gmail.com</li>
              </ul>
            </div>
          </div>

          <div className="conatiner mx-auto">
            <h3 className="text-xl pt-4 w-[100px] border-b-2 border-indigo-600">Education :</h3>
            <div className="px-5 py-3">
              <h2 className="font-semibold">Master of Computer Application (MCA)</h2>
              <q>October 2022 - July 2024</q>
              <p>KASHI INSTITUTE OF TECHNOLOGY, VARANASI</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
