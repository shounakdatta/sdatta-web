import React from "react";

interface Image {
  src: string;
  alt: string;
}

interface Experience {
  floatingPaperCss: Object | undefined;
  img: Image;
  imgContainerCss: Object | undefined;
  paperHeader: string;
  paperSubHeader: string;
  expText: string[];
}

const ExperienceConfig: Experience[] = [
  {
    floatingPaperCss: { minWidth: 300, height: 150, width: "100%" },
    img: {
      src: "/assets/bmo-cm.svg",
      alt: "BMO Captial Markets Logo",
    },
    imgContainerCss: {},
    paperHeader: "Software Developer",
    paperSubHeader: "Sept. - Dec. 2020",
    expText: [
      `Architected a multi-threaded Reactor engine using Flask, SocketIO and Redis to process real-time equity and
      fixed-income transactions valuing over $100 billion weekly`,
      `Implemented a trade analytics and visualization platform adopted by the equity desk, deployed with Docker and
      hosted internally, with a 78% performance improvement over an existing solution`,
      `Deployed a portfolio management cloud-service using C# and ASP.NET, designed to centralize and streamline
      trading workflows to reduce operational risk`,
    ],
  },
  {
    floatingPaperCss: { minWidth: 300, height: 150, width: "100%" },
    img: {
      src: "/assets/bmo-cm.svg",
      alt: "BMO Captial Markets Logo",
    },
    imgContainerCss: {},
    paperHeader: "Software Developer",
    paperSubHeader: "Jan. - Apr. 2020",
    expText: [
      `Overhauled the Bloomberg data aggregator system to support a 20% increase in traffic using the Task Parallel
      Library`,
      `Implemented a query caching service using a MongoDB instance, reducing SQL query times by up to 90 seconds`,
      `Revamped data scraping services using Selenium to support auction bidding, perform competitive analysis and
      forecast market share`,
    ],
  },
  {
    floatingPaperCss: { minWidth: 300, height: 150, width: "100%" },
    img: {
      src: "/assets/sms.png",
      alt: "Secret Mission Software Logo",
    },
    imgContainerCss: { backgroundColor: "#1D64AA", marginBottom: "5%" },
    paperHeader: "Full Stack Developer",
    paperSubHeader: "May. - Aug. 2019",
    expText: [
      `Used Python Django, Graphene and a MySQL database to develop the backend infrastructure of a commercial
      real-estate institution having assets over $6 billion`,
      `Reduced UAT deployment time by 3 hours by migrating a legacy mobile application with over 1 million users to
      Expo; integrated logging and crash reporting with Sentry`,
      `Developed a React Native mobile application designed for digital banking on the go; competitor to Wealthsimple`,
    ],
  },
  {
    floatingPaperCss: { minWidth: 300, height: 150, width: "100%" },
    img: {
      src: "/assets/innovasium.png",
      alt: "Innovasium Digital Logo",
    },
    imgContainerCss: { backgroundColor: "#444a52", marginBottom: "5%" },
    paperHeader: "Front End Developer",
    paperSubHeader: "Sept. - Dec. 2018",
    expText: [
      `Developed API and back-end services for retail and e-commerce businesses using PHP, MongoDB, and MS SQL`,
      `Built multi-purpose website management, analytics and reporting tools using React and Redux/Flux`,
      `Leveraged React Native for 20% improvement in application responsivity in mobile and tablet devices`,
    ],
  },
];

export { ExperienceConfig };
