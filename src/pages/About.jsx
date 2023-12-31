import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import part1 from "../assets/ALG.png";
import part2 from "../assets/MCFSP.png";
import part3 from "../assets/ALA.jpeg";
import aboutImage from "../assets/AboutALU.png";


const About = () => {
  return (
    <div>
      <NavBar />
      <div className="flex flex-col items-center justify-center py-20">
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-blue-950 text-center">
          About us
        </h1>
        <p className="text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          <br /> Labore ipsum harum iusto at assumenda eveniet rerum dolor ab
          nemo iure?
        </p>
      </div>
      <section className="flex items-center bg-blue-950 lg:h-screen font-poppins">
        <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
          <div className="flex flex-wrap items-center">
            <div className="w-full px-4 mb-10 md:w-1/2 lg:mb-0 ">
              <h2 className="mb-4 text-2xl font-bold text-white">
                We help you stay connected to your Alumni community
              </h2>
              <p className="mb-4 text-base leading-7 text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
            </div>
            <div className="relative w-full px-4 mb-10 md:w-1/2 lg:mb-0">
              <img
                src={aboutImage}
                alt=""
                classNmae="relative z-40 object-cover w-full rounded-md md:h-96 h-44"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="pt-20 px-10">
        <div className="grid grid-cols-2 gap-4">
          <div className="">
            <div className="">
              <h1 className="text-3xl font-bold">Our partenaires</h1>
              <p className="pt-5">
                We partner with various organizations, most of which are part of
                the African leadership Groupe.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="pt-10">
              <img className="h-10 w-auto" src={part1} alt="" />
            </div>
            <div className="pt-10">
              <img className="h-10 w-auto" src={part2} alt="" />
            </div>
            <div className="pt-10">
              <img className="h-10 w-auto" src={part3} alt="" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
