export interface OpenSourceContribution {
  title: string;
  date: string;
  info: string;
  link: string;
  bulletPoints: string[];
  technologies: string[];
}

export const openSourceContributions: OpenSourceContribution[] = [
  {
    title: "mathjs",
    date: "Ongoing",
    info: "Open source mathematics library for JavaScript and Node.js",
    link: "https://github.com/josdejong/mathjs",
    bulletPoints: [
      "Fixed bugs in the library's core functionality",
      "Updated TypeScript definitions to include generics, drastically improving type safety and inference",
      "Enhanced the developer experience for TypeScript users of the library",
    ],
    technologies: ["JavaScript", "TypeScript", "Node.js", "Mathematics"],
  },
];
