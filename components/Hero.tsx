import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
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
    <div>
      <h1>
        <span>{text}</span>
        <Cursor cursorColor="#f4dc1c" />
      </h1>
    </div>
  );
};

export default Hero;
