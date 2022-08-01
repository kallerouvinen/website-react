import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Makoisat.com",
    description:
      "Platform for finding diet-friendly restaurants. Design + front-end implementation by yours truly. Currently available only in Finnish.",
    demos: {
      laptop: "makoisat-preview-laptop.mp4",
      mobile: "makoisat-preview-mobile.mp4",
    },
    livePath: "https://www.makoisat.com",
  },
  {
    id: 3,
    title: "Your project?",
    description:
      "Contact me with your ideas and let's see if we can build something awesome together.",
    demos: {
      laptop: "yourproject-preview-laptop.mp4",
      mobile: "yourproject-preview-mobile.mp4",
    },
  },
];
