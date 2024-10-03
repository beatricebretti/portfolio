import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    nodejs,
    mongodb,
    git,
    docker,
    komatsu,
    ocilabs,
    usm,
    ninas,
    usp,
    uba,
    mit,
    threejs,
    platetopptimer,
    programabea
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
      title: "Programming Tutor",
      icon: web,
    },
    {
      title: "Data Science",
      icon: mobile,
    },
    {
      title: "Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
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
      name: "React JS",
      icon: reactjs,
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Courses Tutor",
      company_name: "Universidad Técnica Federico Santa María",
      icon: usm,
      iconBg: "white",
      date: "Mar 2021 - Jun 2024",
      points: [
        "Participating as a course tutor and asistant either working on the lab, marking exams or reviewing material.",
        "Courses: Electromagnetism, Data Structures, Information Systems, Programming, Introduction to Physics."
      ],
    },
    {
      title: "Frontiers in Production Engineering",
      company_name: "Universidade de São Paulo",
      icon: usp,
      iconBg: "white",
      date: "Apr 2021 - Jul 2021",
      points: [
        "Studied topics related to technologies for Industry 4.0, Agile Supply Chain, Multicriteria Decision-Making (MCDM), Techniques applied to Operations Management, Circular Economy applied to Operations Management, and Change Management in Operations Management."
      ],
    },
    {
      title: "OCI Labs Programming Workshop Tutor",
      company_name: "Sociedad Chilena de Ciencia de la Computación",
      icon: ocilabs,
      iconBg: "#79b41e",
      date: "Apr 2022 - Present",
      points: [
        "Tutoring computational thinking to secondary education students.",
        "Participating in weekly active sessions, teaching Scratch.",
        "Helping students with tasks and learning process." 
      ],
    },
    {
      title: "Escuela de Ciencias Informáticas ECI",
      company_name: "Universidad de Buenos Aires",
      icon: uba,
      iconBg: "white",
      date: "Jul 2022 & Jul 2023",
      points: [
        "Participated in the 2022 and 2023 version of ECI taking different intensive courses.",
        "Couses taken: Introduction to APIs, UI/UX, Modeling and Simulation, AI."
      ],
    },
    {
      title: "Data Science Intern",
      company_name: "Komatsu Cummins Chile",
      icon: komatsu,
      iconBg: "white",
      date: "Jan 2023 - Feb 2023",
      points: [
        "Data analysis and development of a learning algorithm.",
        "Collaborating with different teams including engineers of all areas.",
        "Participating in work reviews."
      ],
    },
    {
      title: "MIT-Chile Research Workshop in Human-Centered AI & Visualization",
      company_name: "MIT Media Lab",
      icon: mit,
      iconBg: "black",
      date: "Jan 2023",
      points: [
        "Part of the studen cohort of the workshop",
        "Started developing a research-focused approach to machine learning and visualization.",
        "Developed data viz to explore and communicate findings with data storytelling.",
        "Built on scholarly work in HCAI and Social Technologies & Visualization."
      ],
    },
    {
      title: "SheHacks Workshop Tutor",
      company_name: "Niñas Pro",
      icon: ninas,
      iconBg: "white",
      date: "Oct 2024 - Present",
      points: [
        "Teaching cybersecurity to high school girls."
      ],
    },
  ];
  
  const projects = [
    {
      name: "PlateToppTimer",
      description:
        "This is a kitchen timer app built using Expo and JavaScript. It allows users to set timers for different kitchen plates and keeps track of the countdowns on a kitchen counter interface. The app provides a user-friendly interface to control multiple timers simultaneously.",
      tags: [
        {
          name: "ReactNative",
          color: "pink-text-gradient",
        },
        {
          name: "Expo",
          color: "green-text-gradient",
        },
      ],
      image: platetopptimer,
      source_code_link: "https://github.com/beatricebretti/PlateToppTimer",
    },
    {
      name: "ProgramaConBea",
      description:
        "Educational space for kids and teenagers in Chile to learn programming using games and reduce the breach in technological abilities in the country.",
      tags: [
        {
          name: "Python",
          color: "pink-text-gradient",
        },
      ],
      image: programabea,
      source_code_link: "https://www.tiktok.com/@programaconbea",
    },
  ];
  
  export { services, technologies, experiences, projects };