import projectGlass from "../assets/projects/projectGlass.jpg";
import projectGourmet from "../assets/projects/projectGourmet.jpg";


export const HERO_CONTENT = "I'm a developer Junior front-end with a knack for creating robust and scalable web applications. With 1 year of practical experience, I have honed my skills in front-end technologies like html, css, JavaScript, React and Next.js, as well as back-end technologies like Node.js, My goal is to leverage my experience to create innovative solutions that drive business growth and deliver exceptional user experiences.";

export const ABOUT_TEXT = `With 1 year of professional experience, I worked with various technologies. My journey in web development began with a deep curiosity about how things work and has evolved into a career where I continually strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of programming, I like to stay active and explore new technologies.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Junior developer",
    company: "Personal Projects",
    description: `To improve my hard skills in Frontend, I have been studying and putting into practice several projects since January.
     On them, I increasingly improve my skills in HTML, CSS, JavaScript,
      frameworks like Bootstrap, JQuery, and React.js, using tools like Vite. 
      Additionally, I am developing skills in Backend technologies such as Node.js with Express.js,
       and PHP with Laravel. I also work with databases including SQLite, PostgreSQL, and MySQL,
        which are essential for any Backend development. For versioning and environment management, 
        I use Docker, and I follow Git and GitHub best practices, including Conventional Commits.`,
    technologies: ["Javascript", "React.js", "Next.js", "CSS",
      "HTML", "Node", "Express", "PHP"],
  },

];

export const PROJECTS = [
  {
    title: "Project using glass effect",
    link: "https://crcami.github.io/glass-card-project/",
    image: projectGlass,
    description:
      "This project demonstrates the use of HTML and CSS to create visually appealing cards with a glass effect.The cards contain a heading, subheading, descriptive text, and a link for further reading.",
    technologies: ["HTML", "CSS", "JavaScript" ],
  },
  {
    title: "Landing Page of a project aimed at a Goumet restaurant",
    link: "https://crcami.github.io/gourmet-backyard/",
    image: projectGourmet,
    description:
      "This project consists of a landing page for a restaurant that stands out for offering a gourmet culinary experience with a focus on healthy eating.",
    technologies: ["HTML", "CSS", "JavaScript", "React.js"],
  },
  
];

export const CONTACT = {
  address: " Rua Hildebrando de Araújo, Jardim Botanico ",
  phoneNo: "41991738017 ",
  email: "camilaafonsolemes@gmail.com",
};