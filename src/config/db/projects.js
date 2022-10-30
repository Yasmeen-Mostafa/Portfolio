import happyPaws from "../../assets/Images/projects/Happy Paws.png";
import noiceland from "../../assets/Images/projects/NOICELAND.png";
import personal from "../../assets/Images/projects/Personal Landing Page.png";
import yummyTaste from "../../assets/Images/projects/Yummy Taste.png";
import html from "../../assets/Images/skills/html5.png";
import css from "../../assets/Images/skills/css3.png";
import javascript from "../../assets/Images/skills/javascript.png";
import reactjs from "../../assets/Images/skills/reactjs.png";
import bootstrap from "../../assets/Images/skills/bootstrap.png";
import sass from "../../assets/Images/skills/sass.png";
import typescript from "../../assets/Images/skills/typescript.png";
import primeng from "../../assets/Images/skills/primeng.png";
import firebase from "../../assets/Images/skills/firebase.png";
import ngrx from "../../assets/Images/skills/ngrx.svg";
import pwa from "../../assets/Images/skills/pwa.png";
import angular from "../../assets/Images/skills/angular.png";
const projectsData = [
  {
    img: happyPaws,
    title: "Happy Paws",
    description:
      "Angular pet platform application with all services and supplies for all pet owners.",
    link: "https://karim-mamdouh.github.io/Happy-Paws/",
    repo: "https://github.com/Yasmeen-Mostafa/Happy-Paws",
    technologies: [
      angular,
      typescript,
      sass,
      bootstrap,
      html,
      pwa,
      ngrx,
      primeng,
      firebase,
    ],
  },
  {
    img: yummyTaste,
    title: "Yummy Taste",
    description:
      "Angular application that has food recipes categorized where the user can view and save favoured recipes.",
    link: "https://karim-mamdouh.github.io/Yummy-Taste-Angular/",
    repo: "https://github.com/Yasmeen-Mostafa/Yummy-Taste-Angular",
    technologies: [
      angular,
      typescript,
      sass,
      bootstrap,
      html,
      pwa,
      ngrx,
      primeng,
    ],
  },
  {
    img: noiceland,
    title: "NOICELAND",
    description: "Simple landing page.",
    link: "https://yasmeen-mostafa.github.io/NOICELAND-BLOG-TEMPLATE/",
    repo: "https://github.com/Yasmeen-Mostafa/NOICELAND-BLOG-TEMPLATE",
    technologies: [html, css, bootstrap],
  },
  {
    img: personal,
    title: "Personal",
    description: "Simple landing page.",
    link: "https://yasmeen-mostafa.github.io/Portifolio-Landing-Page/",
    repo: "https://github.com/Yasmeen-Mostafa/Portifolio-Landing-Page",
    technologies: [html, css, bootstrap],
  },
];

export default projectsData;
