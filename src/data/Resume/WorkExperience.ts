interface Experience {
  title: string;
  info: string;
  date: string;
  link?: string;
  bulletPoints: string[];
  technologies: string[];
}

const BCRegistries: Experience = {
  title: "Application Developer Co-op,",
  info: "Service BC (BC Registries), Vancouver",
  date: "May 2023 – Aug 2023",
  link: "https://github.com/bcgov/ppr",
  bulletPoints: [
    "Improved the quality of the personal property registry and manufactured home registry by completing multiple feature releases, bug fixes, and code readability and reusability enhancements.",
    "Leveraged previous front-end experience to exceed expectations with 50+ pull requests, resulting in 8000+ lines of code added and 5000+ lines of code deleted in 4 months.",
    "Demonstrated strong teamwork skills, by being an active participant in meetings, helping address production issues, conducting multiple stakeholders' demos, participating in discussion towards improving code quality and developer experience, and commutating with other internal and external teams.",
  ],
  technologies: ["TypeScript", "Vue", "Jest"],
};

const Invoke: Experience = {
  title: "Web Developer Co-op,",
  info: "Invoke Co., Vancouver",
  date: "Sep 2022 – Dec 2022",
  link: "https://www.incrowd.live/",
  bulletPoints: [
    "Successfully delivered new and improved features for the live-streaming platform 'Incrowd,' resulting in a noticeable boost in its functionality. These features included upgrades to analytics tracking, seamlessly switching audio and video of multiple synchronized streams, and strengthened security measures.",
    "Promoted teamwork and efficient collaboration by actively identifying and addressing issues through effective communication, leading to the resolution of obstacles and the timely completion of tasks.",
    "Enhanced security by implementing AWS's Web Application Firewall and Cross-Origin Resource Sharing (CORS) for backend APIs, resulting in improved platform security.",
  ],
  technologies: [
    "TypeScript",
    "React",
    "GraphQL",
    "AWS API Gateway",
    "AppSync",
    "DynamoDB",
    "IAM",
    "Lambda",
    "S3",
    "WAF",
  ],
};

const Stride: Experience = {
  title: "Cofounder",
  info: "Stride Software INC., Vancouver",
  date: "May 2024 - Present",
  link: "https://get-stride.com/",
  bulletPoints: [
    "Founded Stride Software INC. with the goal of modernizing documentation and calculation software for Engineers",
    "Architected and launched Stride, an application with modern user interface that allows engineers write their documentation alongside their calculations",
    "Integrated complex algorithms for parsing and dynamically updating mathematical equations",
    "Conducted user testing an implemented many features based on user feedback",
  ],
  technologies: [
    "TypeScript",
    "ElectronJS",
    "NextJS",
    "SST",
    "DynamoDB",
    "Cognito",
    "S3",
    "SES",
  ],
};

export const ProfessionalExperience: Experience[] = [
  Stride,
  BCRegistries,
  Invoke,
];
