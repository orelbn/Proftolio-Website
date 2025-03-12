import React from "react";

const Intro: React.FC = () => {
  return (
    <section id="intro">
      <p className="name">
        Hi, my name is <span>Orel.</span>
      </p>
      <h2> I am a software developer</h2>

      <p>
        Currently working at{" "}
        <a href="https://www.get-stride.com/" target="_blank" rel="noreferrer">
          <b>Stride</b>
        </a>
      </p>
      <p>Where we build modern, documentation and calculation software</p>
    </section>
  );
};

export default Intro;
