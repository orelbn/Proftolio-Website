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
            Showcases different projects and provides details about me.
            Implemented for both mobile and desktop users.
          </li>
          <li>
            Incorporated routing for smoother navigation and implemented
            animations for improved UX.
          </li>
          <li>
            <em>React, React-Router, HTML, CSS, and JavaScript.</em>
          </li>
        </ul>
      </div>

      <div>
        <ResumeSubheader
          title="easyWriting "
          info="(Personal)"
          date="May 2022"
        />
        <ul>
          <li>
            Leveraged OpenAI’s completion API to allow users to submit prompts,
            to which AI-generated responses will be displayed. A user can choose
            between 1 of 4 AI engines that generate a response, and the
            responses are persisted between sessions using DOM storage.
          </li>
          <li>
            <em>
              React, HTML, Tailwind CSS, TypeScript, and OpenAI’s GPT-3 API.
            </em>
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
            Utilized MediaPipe’s Pose API, a machine learning body tracker, to
            build a website that features a yoga pose analyzer that compares the
            user’s pose with our model and provides a score.
          </li>
          <li>
            <em>
              React, React Webcam, CSS, JavaScript, MaterialUI, and Google’s
              MediaPipe Pose API
            </em>
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
            Combined Microsoft Azure’s speech-to-text API with OpenAI’s codex
            API to enable a user to generate JavaScript code through speech.
          </li>
          <li>
            <em>
              React, HTML, SASS, CSS, JavaScript, Microsoft Azure’s
              speech-to-text API and OpenAI’s codex API.
            </em>
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
            Created a code snippet storage application using Java by applying
            OOD principles including design patterns.
          </li>
          <li>
            Designed and implemented a GUI using Java Swing library and tested
            the program using JUnit.
          </li>
          <li>
            <em>Java.</em>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProjectsContent;
