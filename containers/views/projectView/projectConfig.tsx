interface Image {
  src: string;
  alt: string;
}

interface Project {
  floatingPaperCss: Object | undefined;
  img: Image;
  imgContainerCss: Object | undefined;
  paperHeader: string;
  paperSubHeader: string;
  tools: string[];
  description: string[];
}

const ProjectConfig: Project[] = [
  {
    floatingPaperCss: { minWidth: 300, height: 300, width: "100%" },
    img: {
      src: "/assets/docd.png",
      alt: "DoCD Logo",
    },
    imgContainerCss: { height: "30%", marginTop: "5%", marginBottom: "10%" },
    paperHeader: "2020",
    paperSubHeader: `An alternative to application dockerization with built-in CD, replacing the need for a VM with system relevant package managers.`,
    tools: ["Go (Goroutine, Cobra, iShell)", "Electron", "Chocolatey"],
    description: [
      `DoCD (pronounced 'Docked') is a containerization alternative to Docker. DoCD uses system relevant package managers for dependency management and has built-in continuous-deployment support with git webhooks.`,
      `DoCD is ideal for projects with multiple service dependencies in the same repo (i.e. React + Flask + MongoDB etc.), developed in machines not powerful enough to run a dedicated VM.`,
    ],
  },
  {
    floatingPaperCss: { minWidth: 300, height: 300, width: "100%" },
    img: {
      src: "/assets/realitics.png",
      alt: "Realitics Logo",
    },
    imgContainerCss: { height: "30%", marginTop: "5%", marginBottom: "10%" },
    paperHeader: "2019 - Pres.",
    paperSubHeader: `Web App for tracking product prices over time across multiple online stores.
    Equipped with a stylish dashboard and email notifications.`,
    tools: [
      "React",
      "NodeJS",
      "Firebase (Authentication, Firestore, Web Functions)",
    ],
    description: [
      `Welcome to Realitics. An universal price tracking web platform. This repo is the React frontend for an app that handles price fetching for products on online stores such as Amazon and Walmart. Geared for consumers, this app allows users to identify when the product is actually on sale, not when the seller tells you it is.`,
    ],
  },
  {
    floatingPaperCss: { minWidth: 300, height: 300, width: "100%" },
    img: {
      src: "/assets/foodsnap.png",
      alt: "FoodSnap Logo",
    },
    imgContainerCss: { height: "30%", marginTop: "5%", marginBottom: "10%" },
    paperHeader: "2019",
    paperSubHeader: `A React Native Expo app that integrates with an STDLib API for food-sharing and distribution applications.`,
    tools: ["Go (Goroutine, Cobra, iShell)", "Electron", "Chocolatey"],
    description: [
      `Had an event? Have tons of leftovers? Don't know who to call, what to say, what to do? Easy!`,
      `FoodSnap is an integrated mobile app that uses image recognition and
       mobile location data to detect what food you have left over and where it
        can be picked up. All you have to do is take a picture and hit submit. Your post will be
          all over local food distribution channels.`,
    ],
  },
];

export { ProjectConfig };
