const AWSBookingSystem = {
  title: "AWS Room Booking System",
  info: "(AWS Course Sponsored Project)",
  date: "Jan 2024 - Apr 2024",
  bulletPoints: [
    `A Room Booking System, that books and recommends rooms based on a users requirements.`,
    `Technical Lead of a team of 8 individuals and worked on all parts of the project (Frontend, Backend, and Infrastructure).`,
    `Implemented a portable infrastructure using AWS CDK.`,
    `Built the manual override workflow for the booking system.`,
  ],
  technologies:
    "AWS CDK, AWS Cognito, AWS APIGateway(REST), AWS Lambda, AWS RDS, AWS VPC, TypeScript, React, and MySQL",
};

const PortfolioWebsite = {
  title: "Portfolio Website",
  info: "(Personal)",
  date: "Dec 2021 - Present",
  link: "https://github.com/orelbn/Proftolio-Website",
  bulletPoints: [
    `Showcases different projects and provides details about me. Implemented for both mobile and desktop users.`,
    `Incorporated routing for smoother navigation and implemented animations for improved UX.`,
  ],
  technologies: "React, React-Router, HTML, CSS, and JavaScript",
};

const EasyWriting = {
  title: "easyWriting",
  info: "(Personal)",
  date: "May 2022",
  link: "https://github.com/orelbn/easyWriting",
  bulletPoints: [
    ` Leveraged OpenAI’s completion API to allow users to submit prompts,
   to which AI-generated responses will be displayed. A user can choose
   between 1 of 4 AI engines that generate a response, and the
   responses are persisted between sessions using DOM storage.`,
  ],
  technologies: "React, HTML, Tailwind CSS, TypeScript, and OpenAI’s GPT-3 API",
};

const YogaVision = {
  title: "YogaVision",
  info: "(Hackathon – BCS HACKS – 1st place)",
  date: "Mar 2022",
  link: "https://github.com/orelbn/yogavision",
  bulletPoints: [
    `Utilized MediaPipe’s Pose API, a machine-learning body tracker, to build a website that features a yoga pose analyzer that compares the
      user’s pose with our model and provides a score.`,
  ],
  technologies:
    "React, React Webcam, CSS, JavaScript, MaterialUI, and Google’s MediaPipe Pose API",
};

const SpeechScript = {
  title: "SpeechScript",
  info: "(Hackathon – nwHacks)",
  date: "Jan 2022",
  link: "https://github.com/orelbn/speechscript",
  bulletPoints: [
    `Combined Microsoft Azure’s speech-to-text API with OpenAI’s codex API to enable a user to generate JavaScript code through speech.`,
  ],
  technologies:
    "React, HTML, SASS, CSS, JavaScript, Microsoft Azure’s speech-to-text API and OpenAI’s codex API",
};

export const CodeBank = {
  title: "CodeBank",
  info: "(Academic)",
  date: "Sep - Dec 2021",
  link: "https://github.com/orelbn/CodeBank",
  bulletPoints: [
    `Created a code snippet storage application using Java by applying object-oriented programming principles and design patterns.`,
    `Designed and implemented a GUI using Java Swing library and tested the program using JUnit.`,
  ],
  technologies: "Java",
};

export const projects = [
  AWSBookingSystem,
  PortfolioWebsite,
  EasyWriting,
  YogaVision,
  SpeechScript,
  CodeBank,
];
