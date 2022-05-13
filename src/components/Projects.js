import SpeechScriptImg from "../img/speechScript.svg";
import YogaVisionImg from "../img/yogaVision.svg";
import NavigtarImg from "../img/navigatr.svg";
import CodeBankImg from "../img/CodeBank.svg";
import Project from "./Project.js";

const Projects = () => {
  const projectYogaVision = ["React", "CSS", "HTML", "JavaScript"];
  const projectTechSpeechScript = ["React", "CSS", "HTML", "JavaScript"];
  const projectTechNavigtar = ["CSS", "HTML", "JavaScript"];
  const projectTechCodeBank = ["Java"];

  return (
    <div className="section-dkcyan">
      <section id={"projects"}>
        <h2> Projects I'm proud of </h2>

        <Project
          type=""
          identifier="Lastest Project"
          title="YogaVision"
          description="The Yoga Vision project was created during a short hackathon of only about 10 hours. 
          I worked with a team of 5 other individuals. In this project, 
          we utilized the Media Pipe Post API to analyze an individual's yoga pose 
          and created a website to contain this core feature. 
          The central portion of the project was setting up the API correctly to 
          receive live input of the individual limb coordinates and then run calculations 
          and output a score based on alignment with our demo poses. 
          My main contribution was identifying how to hook into the API 
          and identify the mathematical calculations necessary for collecting the score. 
          The score was calculated based on observing an individual's angular distance from 
          three points and comparing that angle with our demo. 
          The project won first place in the hackathon!"
          link="https://github.com/orelbn/yogavision"
          technologies={projectYogaVision}
          img={YogaVisionImg}
          imgAlt="Screenshot of YogaVision Project."
        />

        <Project
          type="reverse"
          identifier="Hackathon Project"
          title="speechScript"
          description="I worked with some amazing teammates on this project for
          nwHacks2022; it enables a person to use their voice to write code
          by combing a speech-recognition API, With a Code Generating API.
          This project was challenging as I am relatively new to React and
          Web design. Overall it was a fantastic learning experience!"
          link="https://github.com/orelbn/speechscript"
          technologies={projectTechSpeechScript}
          img={SpeechScriptImg}
          imgAlt="Screenshot of speechScript Project."
        />

        <Project
          type=""
          identifier="Hackathon Project"
          title="navigatr"
          description=" This is a project I completed in a beginner-friendly hackathon,
          known as HackCamp. I worked with one other individual, and we only
          had 11 hours or so to complete the project. We were able to
          complete a demo in that time. The theme of the hackathon was
          diversity, inclusivity, and accessibility. The project itself is
          used to assist individuals to navigate the web using only their
          keyboard."
          link="https://devpost.com/software/navigatr"
          technologies={projectTechNavigtar}
          img={NavigtarImg}
          imgAlt="Screenshot of navigatr Project."
        />

        <Project
          type="reverse"
          identifier="Fun School Project"
          title="CodeBank"
          description=" This Project I completed for a course in my university.
          It demonstrates the starting of my development career. The project
          is fully written in java, and its main purpose is to save Code
          Snippets. The project was mainly focused on learning
          object-oriented design. It has a console user-interface, as well
          as a simple graphical user-interface."
          link="https://github.com/orelbn/CodeBank"
          technologies={projectTechCodeBank}
          img={CodeBankImg}
          imgAlt="Screenshot of CodeBank Project."
        />
      </section>
    </div>
  );
};

export default Projects;
