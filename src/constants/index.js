import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "AI/ML Engineer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Data Scientist",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Python",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "TensorFlow",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Unreal Engine",
    icon: figma,
  },
  {
    name: "Unity3D",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Senior Data Scientist - Marketing team",
    company_name: "Instinctools",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2019 - April 2021",
    points: [
      "Turned data into actionable insigths, providing C-suite stakeholders with insightful recommendation to streamline business operations and improve customer experience.",
      "Generated statistical reports and visualizations, providing key insights for more than 20 marketing campaigns and initivatives, including R, Matlab, KNIME, SAS, Statistical Analysis, customer retention, brand awareness, and global expansion.",
      "Worked with senior leadership to develop and implement digital marketing strategy, identifying and implementing new tactics to improve campaign performance by 50%, resulting in 250% increase in revenue from search marketing campaigns",
    ],
  },
  {
    title: "Data Scientist and Web development",
    company_name: "BrentGMATPrepNowShopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2021 - Jan 2023",
    points: [
      "Collaborated closely with Business Analysts to comprehend the technical aspects of each project. Developed use cases for various functionalities and designs to address project requirements.",
      "Collaborated intensely with more than 20 internal and external clients, along with over 10 teams, to formulate strategies that encompass product content and overall user experience design.",
      "Designed, built and automated data flows to save 10+ hours of tedious work per week.",
      "Constructed and developed a new AI application for the company using technologies such as Keras, GPT, OPENAI, Numpy, Scikit-learn, OCR, Scipy, Python and Django.",
      "Engineered the backend that incorporated an AI application using node.js, next.js, GPT, OPENAI, MongoDB, tailwind CSS, TypeScript, React.js and Git.",
      "Led a team of five to successfully complete a project, utiliing Git for version management and facilitating team collaboration.",
      "Contributed to the redesign of a company's website, leading to a 35% surge in traffic.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "ML",
        color: "white-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "AI",
        color: "white-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
