import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The Name's Alejandro Marcano",
      "AllWithLoveC#.cs",
      "select * from Life where dreams='Peace and Love'",
      "creative-with-passion.tsx",
      "Patch() => 200; always learning/growing ",
      "<h1 className='cor-16:14'>Do everything in Love</h1>",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div
      className="h-screen flex flex-col space-y-8 
    items-center justify-center text-center overflow-hidden"
    >
      <BackgroundCircles />
      <img
        className="relative rounded-full h-36 w-36 mx-auto object-fill"
        //src="https://alejandro-marcano.web.app/assets/man2.png"
        src="img/hero-photo.png"
        alt=""
      />

      <div className="z-20">
        <h2 className="text-sm uppercase pb-2 tracking-[15px] text-gray-500">
          Software Engineer
        </h2>
        <h1 className="text-4xl lg:text-6xl font-semibold px-10">
          <span>{text}</span>
          <Cursor cursorColor="#f4dc1c" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skill">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
