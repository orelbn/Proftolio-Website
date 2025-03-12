export interface ProjectData {
  title: string;
  info: string;
  date: string;
  link: string;
  bulletPoints: string[];
  technologies: string[];
}

const AWSBookingSystem: ProjectData = {
  title: "AWS Room Booking System",
  info: "(AWS Course Sponsored Project)",
  date: "Jan 2024 - Apr 2024",
  link: "https://www.youtube.com/watch?v=fr-xWYn6R74",
  bulletPoints: [
    `A Room Booking System, that books and recommends rooms based on a users requirements.`,
    `Technical Lead of a team of 8 individuals and worked on all parts of the project (Frontend, Backend, and Infrastructure).`,
    `Implemented a portable infrastructure using AWS CDK.`,
    `Built the manual override workflow for the booking system.`,
  ],
  technologies: [
    "AWS CDK",
    "AWS Cognito",
    "AWS APIGateway(REST)",
    "AWS Lambda",
    "AWS RDS",
    "AWS VPC",
    "TypeScript",
    "React",
    "MySQL",
  ],
};

const PortfolioWebsite: ProjectData = {
  title: "Portfolio Website",
  info: "(Personal)",
  date: "Dec 2021 - Present",
  link: "https://github.com/orelbn/Proftolio-Website",
  bulletPoints: [
    `Showcases different projects and provides details about me. Implemented for both mobile and desktop users.`,
    `Incorporated routing for smoother navigation and implemented animations for improved UX.`,
  ],
  technologies: ["React", "React-Router", "HTML", "CSS", "JavaScript"],
};

const EasyWriting: ProjectData = {
  title: "easyWriting",
  info: "(Personal)",
  date: "May 2022",
  link: "https://github.com/orelbn/easyWriting",
  bulletPoints: [
    ` Leveraged OpenAI's completion API to allow users to submit prompts,
   to which AI-generated responses will be displayed. A user can choose
   between 1 of 4 AI engines that generate a response, and the
   responses are persisted between sessions using DOM storage.`,
  ],
  technologies: [
    "React",
    "HTML",
    "Tailwind CSS",
    "TypeScript",
    "OpenAI's GPT-3 API",
  ],
};

const YogaVision: ProjectData = {
  title: "YogaVision",
  info: "(Hackathon – BCS HACKS – 1st place)",
  date: "Mar 2022",
  link: "https://github.com/orelbn/yogavision",
  bulletPoints: [
    `Utilized MediaPipe's Pose API, a machine-learning body tracker, to build a website that features a yoga pose analyzer that compares the
      user's pose with our model and provides a score.`,
  ],
  technologies: [
    "React",
    "React Webcam",
    "CSS",
    "JavaScript",
    "MaterialUI",
    "Google's MediaPipe Pose API",
  ],
};

const SpeechScript: ProjectData = {
  title: "SpeechScript",
  info: "(Hackathon – nwHacks)",
  date: "Jan 2022",
  link: "https://github.com/orelbn/speechscript",
  bulletPoints: [
    `Combined Microsoft Azure's speech-to-text API with OpenAI's codex API to enable a user to generate JavaScript code through speech.`,
  ],
  technologies: [
    "React",
    "HTML",
    "SASS",
    "CSS",
    "JavaScript",
    "Microsoft Azure's speech-to-text API",
    "OpenAI's codex API",
  ],
};

export const CodeBank: ProjectData = {
  title: "CodeBank",
  info: "(Academic)",
  date: "Sep - Dec 2021",
  link: "https://github.com/orelbn/CodeBank",
  bulletPoints: [
    `Created a code snippet storage application using Java by applying object-oriented programming principles and design patterns.`,
    `Designed and implemented a GUI using Java Swing library and tested the program using JUnit.`,
  ],
  technologies: ["Java"],
};

export const projects: ProjectData[] = [
  AWSBookingSystem,
  PortfolioWebsite,
  EasyWriting,
  YogaVision,
  SpeechScript,
  CodeBank,
];
