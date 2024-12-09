import React from "react";
import FaishonShop from "../assests/fashionShop.png";
import BurgerHunt from "../assests/burgerPic.png";
import WeatherApp from "../assests/weather-app.png";

const Projects = () => {
  const projects = [
    {
      name: "E-commerce Platform -",
      img: FaishonShop,
      title: "Project Overview :",
      desc: "Designed and developed a responsive e-commerce website using HTML, CSS, and JavaScript, focusing on delivering a seamless user experience and intuitive interface.",
      live: "https://shivam520p.github.io/Fashion_shop/",
      code: "https://github.com/shivam520p/Fashion_shop",
    },
    {
      name: "BurgerHunt -",
      img: BurgerHunt,
      title: "Project Overview :",
      desc: "Designed and developed a responsive e-commerce website using HTML, CSS, and JavaScript, focusing on delivering a seamless user experience and intuitive interface.",
      live: "https://shivam520p.github.io/Burger-Hunt-Website/",
      code: "https://github.com/shivam520p/Burger-Hunt-Website",
    },
    {
      name: "Weather Monitoring System -",
      img: WeatherApp,
      title: "Project Overview :",
      desc: "Designed and developed a real-time weather monitoring web application using JavaScript and OpenWeatherMapAPI. The app tracks and displays current weather conditions, temperature, and data update times.",
      live: "https://shivam520p.github.io/weather-app/",
      code: "https://github.com/shivam520p/weather-app",
    },
  ];

  return (
    <section className="bg-secondery text-white px-5 py-14" id="projects">
      <div className="container mx-auto flex items-center justify-center md:justify-between lg:p-5">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[140px] border-indigo-600 pb-2">
            Projects
          </h2>
          <p>
            Welcome to my Projects section! Here, I showcase a selection of web
            development projects that highlight my skills in Web Technologies.
            Each project demonstrates my ability to design, develop, and
            leveraging modern frameworks and best practices. Explore my work to
            see how I turn ideas into functional, user-friendly solutions.
          </p>
        </div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-3 gap-10 p-5 pt-0">
        {projects.map((project, i) => {
          return (
            <div className="relative" key={i}>
              <h2 className="text-xl pb-3">{project.name}</h2>
              <img src={project.img} alt={project.title} />
              <p className="py-3"><strong>{project.title}</strong> {project.desc}</p>
              <div className="flex items-center justify-between">
             <a href={project.live} className="bg-green-500 px-3 py-1">Live</a>
             <a href={project.code} className="bg-green-500 px-3 py-1">Code</a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
