import Project1 from "../../assets/project1.png";
import Project2 from "../../assets/project2.png";
import Project3 from "../../assets/project3.png";
import Project4 from "../../assets/project4.png";
import Project5 from "../../assets/project5.png";

export const projectsData = [
  {
    id: 1,
    image: Project1,
    title: "ntRoot",
    url: "https://eloquent-bonbon-b4a5f7.netlify.app",
    modal: {
      description: "Website for small bussnies.",
      tech: ["HTML5", "CSS3", "Javascript"],
    },
  },
  {
    id: 2,
    image: Project2,
    title: "Tenzies",
    url: "https://hilarious-semifreddo-72ccdd.netlify.app",
    modal: {
      description: "Small game made with ReactJS.",
      tech: ["ReactJS"],
    },
  },
  {
    id: 3,
    image: Project3,
    title: "Weather app",
    url: "https://peppy-platypus-d29492.netlify.app/",
    modal: {
      description:
        "Website uses weather APIs to display current weather and forecast.",
      tech: ["HTML5", "CSS3", "Javascript"],
    },
  },
  {
    id: 4,
    image: Project4,
    title: "Tip Calculator",
    url: "https://jade-macaron-5eeb28.netlify.app/",
    modal: {
      description:
        "Calculator with calculate a cost per person, based on bill size and chosen tip percentge.",
      tech: ["HTML5", "CSS3", "Javascript"],
    },
  },
  {
    id: 5,
    image: Project5,
    title: "TicTacToe",
    url: "https://inspiring-kelpie-c794ab.netlify.app/",
    modal: {
      description: "Simple TicTacToe game with names editor.",
      tech: ["HTML5", "CSS3", "Javascript"],
    },
  },
];
