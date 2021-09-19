import { WorkProps } from "./types";

export const Works: WorkProps[] = [
  {
    start: "May 17, 2021",
    end: "Aug 31, 2021",
    post: "Google Summer of code Student Developer at CDLI",

    description: [
      "Innovating and developing containerization of Transliterations editor and API to convert atf data to jtf format.",
      "Integrate web-app and library to existing docker-infrastructure and nginx.",
      "Implementation of crowd-sourcing functions within a framework to update and change jtf data of artifacts."
    ],
    url: ["https://summerofcode.withgoogle.com/projects/#4934990535589888"],
    logo: require("../../Shared/Assets/gsoc.png"),
  },
  {
    start: "May 11, 2020",
    end: "Sep 11, 2020",
    post: "Fronted Developer at Listnr",
    description: [
      "Built entire frontend using React with end-to-end Payment recurring service which led to $1100 revenue on a launch.",
      "Constructed complex components like SSML editor (for Google and Azure Text-to-Speech API) to convert plain text into SSML text and a Customizable Audio Player to play and share generated podcasts.",
      "Worked closely with CEO to Migrating and redesigning components to reduce cost by 18% and increase the platform's performance by 15%. ",
      "Built end-to-end CI/CD workflow and redesigned and implemented the release process to reduce engineering effort from days to seconds."
    ],
    url: ["https://www.listnr.tech"],
    logo: require("../../Shared/Assets/listnr.png"),
  },
  {
    start: "June 1, 2018",
    end: "May 1, 2019",
    post: "Software Engineer Intern at SilverWing Technologies Pvt Ltd",
    description: [
      "Developing and creating web applications as per the specifications utilizing WAMP stack - Windows with apache with Kohana 2, PHP, CSS, JavaScript/Jquery, and MySql.",
      "Writing, testing, and debugging code and help the websites operate flawlessly.",
      "Feature implementation for multiple different legacy platforms using web forms and Implement core features such as chat messaging, and payment systems with senior developers",
      "Streamlined the review and analysis of detailed program specifications and in program design to meet changes required in the work processes."
    ],
    url: ["https://www.silverwingtechnologies.com/"],
    logo: require("../../Shared/Assets/silverwing.jpg"),
  },
];
