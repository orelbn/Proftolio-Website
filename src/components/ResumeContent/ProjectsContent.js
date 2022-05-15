import ResumeSubheader from "./ResumeSubHeader";
const ProjectsContent = () => {
  return (
    <div>
      <div>
        <ResumeSubheader
          title="Portfolio Website "
          info="(Personal)"
          date="Dec 2021 - Present"
        />
        <ul>
          <li>
            Created a static portfolio website using HTML, CSS, JavaScript and
            the React library following basic website layout, implementing a
            pleasing colour scheme, allowing for simplistic and easy navigation.
          </li>
        </ul>
      </div>

      <div>
        <ResumeSubheader
          title="YogaVision "
          info="(Hackathon – BCS HACKS – 1st place)"
          date="Mar 2022"
        />
        <ul>
          <li>
            Utilized MediaPipe's Pose API, a machine learning body tracker, to
            build a website that features a yoga pose analyzer that compares the
            user's pose with that of our model and provides a score.
          </li>
          <li>
            The Project was built with four other individuals, utilizing
            JavaScript, React.js, React Webcam API, Google's MediaPipe API,
            Material UI, and was deployed using firebase.
          </li>
        </ul>
      </div>

      <div>
        <ResumeSubheader
          title="SpeechScript "
          info="(Hackathon – nwHacks)"
          date="Jan 2022"
        />
        <ul>
          <li>
            Worked in a team of 4 to Combine Microsoft Azure's speech-to-text
            API with OpenAI's codex API to enable a user to generate code by
            speaking{" "}
          </li>
          <li>
            Utilized JavaScript with the REACT framework to layout and implement
            the functional components
          </li>
          <li>Implemented the design of the website using HTML and CSS</li>
        </ul>
      </div>

      <div>
        <ResumeSubheader
          title="navigtar "
          info="(Hackathon – HackCamp – 3rd place)"
          date="Nov 2021"
        />
        <ul>
          <li>
            Created a Google Chrome extension that helps users navigate a
            website using the arrow keys; figured out how to map a webpage using
            the focusable items to allow users to navigate through the webpage
          </li>
        </ul>
      </div>

      <div>
        <ResumeSubheader
          title="CodeBank  "
          info="(Academic)"
          date="Sep - Dec 2021"
        />
        <ul>
          <li>
            Created a code snippet storage app using Java by applying OOD
            principles including design patterns
          </li>
          <li>Designed and implemented a GUI using Java Swing library</li>
          <li>
            Tested the program using JUnit and debugged and fixed bugs using
            IntelliJ to create an error-free application{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProjectsContent;
