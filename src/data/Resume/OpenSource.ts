export interface OpenSourceContribution {
  title: string;
  date: string;
  link: string;
  bulletPoints: string[];
  technologies: string[];
}

export const openSourceContributions: OpenSourceContribution[] = [
  {
    title: "mathjs",
    date: "Ongoing",
    link: "https://github.com/josdejong/mathjs",
    bulletPoints: [
      "Updated TypeScript definitions to include generics, drastically improving type safety and inference",
      "Enhanced the developer experience for TypeScript users of the library",
      "Fixed bugs in the library's core functionality",
      "Updated library documentation to improve clarity and usability",
    ],
    technologies: ["JavaScript", "TypeScript", "Node.js"],
  },
];
