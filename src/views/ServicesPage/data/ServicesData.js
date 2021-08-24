import React from "react";

import webIcon from "assets/img/web-icon.svg";
import appIcon from "assets/img/app-icon.svg";
import brandingIcon from "assets/img/branding-icon.svg";
import marketingIcon from "assets/img/marketing-icon.svg";

import stepMeeting from "assets/img/steps-empathize.svg";
import stepUIUX from "assets/img/step-2.svg";
import stepDev from "assets/img/execution.svg";

import toolCss from "assets/img/tool-css.png";
import toolFigma from "assets/img/tool-figma.png";
import toolFirebase from "assets/img/tool-firebase.png";
import toolHTML from "assets/img/tool-html.png";
import toolJava from "assets/img/tool-java.png";
import toolJS from "assets/img/tool-js.png";
import toolMysql from "assets/img/tool-mysql.png";
import toolNodejs from "assets/img/tool-nodejs.png";
import toolPython from "assets/img/tool-python.png";
import toolReactjs from "assets/img/tool-reactjs.png";
import toolVue from "assets/img/tool-vue.png";
import toolWordpress from "assets/img/tool-wordpress.png";

const webDevelopment = {
  name: "Desarrollo Web",
  icon: webIcon,
  description:
    "We create a web presence that engages the users and converts your visitors to loyal and paying customers. Organizing your thoughts in strategy, sitemaps, and wireframes that our backend and frontend team will bring to life. We know that performance and security are critical to your success.",
  worktype: [
    {
      name: "Full Project",
      description:
        "Focused on creating projects from the start. Elaniin’s developers manage the " +
        "full execution from the beginning till the project is completely done.",
    },
    {
      name: "On Demand",
      description:
        "A service created for you! Let our team of developers follow your direction but " +
        "with the flexibility your company requires, pay only for the time your project needs and get " +
        "the best out of a highly skilled professional team while you focus on what matters the most: your business!",
    },
    {
      name: "Staff Augmentation",
      description:
        "You get a specialized team to work side by side with your team, following your " +
        "key directions and working as one to achieve your monthly and weekly targets and objectives.",
    },
  ],
  tools: [
    toolCss,
    toolFigma,
    toolFirebase,
    toolHTML,
    toolJava,
    toolJS,
    toolMysql,
    toolNodejs,
    toolPython,
    toolReactjs,
    toolVue,
    toolWordpress,
  ],
  stepsToFollow: [
    {
      title: "Meeting with the client - setting objectives and goals",
      desc:
        "We try to understand all of the client’s requirements in detail to make sure we deliver a project that fits all their needs. With the insights of the customers, we help to align the project assumptions with real user expectations and suggest different options to build the project.",
      icon: stepMeeting,
      altText: "icon for meetign step",
    },
    {
      title: "UX & UI Wireframing",
      desc:
        "Elaniin’s UX & UI Experts are highly qualified and willing to make an awesome design for your project. During this stage, our team suggests a few sketches with preliminary design ideas (wireframes) to visualize data structures and represent UI features.",
      icon: stepUIUX,
      altText: "icon for UI&UX step",
    },
    {
      title: "Web Development",
      desc:
        "With the approved flowchart, it’s time for our web developers to make their magic! The development process starts with all the previously discussed graphic elements, content and design. Our team sets a deadline for the project delivery.",
      icon: stepDev,
      altText: "icon for dev step",
    },
  ],
};

const appDevelopment = {
  name: "Desarrollo de Apps",
  icon: appIcon,
  description:
    "Contamos con un equipo especializado en el desarrollo nativo de aplicaciones para " +
    "plataformas iOS y Android. Integramos la tecnología y el diseño para crear una app que satisfaga " +
    "tus objetivos y te represente.",
  worktype: [
    {
      name: "Full Project",
      description:
        "Focused on creating projects from the start. Elaniin’s developers manage the " +
        "full execution from the beginning till the project is completely done.",
    },
    {
      name: "On Demand",
      description:
        "A service created for you! Let our team of developers follow your direction but " +
        "with the flexibility your company requires, pay only for the time your project needs and get " +
        "the best out of a highly skilled professional team while you focus on what matters the most: your business!",
    },
    {
      name: "Staff Augmentation",
      description:
        "You get a specialized team to work side by side with your team, following your " +
        "key directions and working as one to achieve your monthly and weekly targets and objectives.",
    },
  ],
  tools: [
    toolCss,
    toolFigma,
    toolFirebase,
    toolHTML,
    toolJava,
    toolJS,
    toolMysql,
    toolNodejs,
    toolPython,
    toolReactjs,
    toolVue,
    toolWordpress,
  ],
  stepsToFollow: [
    {
      title: "Meeting with the client - setting objectives and goals",
      desc:
        "We try to understand all of the client’s requirements in detail to make sure we deliver a project that fits all their needs. With the insights of the customers, we help to align the project assumptions with real user expectations and suggest different options to build the project.",
      icon: stepMeeting,
      altText: "icon for meetign step",
    },
    {
      title: "UX & UI Wireframing",
      desc:
        "Elaniin’s UX & UI Experts are highly qualified and willing to make an awesome design for your project. During this stage, our team suggests a few sketches with preliminary design ideas (wireframes) to visualize data structures and represent UI features.",
      icon: stepUIUX,
      altText: "icon for UI&UX step",
    },
    {
      title: "Web Development",
      desc:
        "With the approved flowchart, it’s time for our web developers to make their magic! The development process starts with all the previously discussed graphic elements, content and design. Our team sets a deadline for the project delivery.",
      icon: stepDev,
      altText: "icon for dev step",
    },
  ],
};

const digitalMarketing = {
  name: "Marketing Digital",
  icon: marketingIcon,
  description:
    "Construimos modernas y efectivas campañas con nuestro amplio conocimiento de tecnología, " +
    "cultura y marketing. Implementamos estrategias de Inbound Marketing, remarketing, procesos de seguimiento " +
    "y análisis de métricas.",
  worktype: [],
  stepsToFollow: [
    {
      title: "Meeting with the client - setting objectives and goals",
      desc:
        "We try to understand all of the client’s requirements in detail to make sure we deliver a project that fits all their needs. With the insights of the customers, we help to align the project assumptions with real user expectations and suggest different options to build the project.",
      icon: stepMeeting,
      altText: "icon for meetign step",
    },
    {
      title: "UX & UI Wireframing",
      desc:
        "Elaniin’s UX & UI Experts are highly qualified and willing to make an awesome design for your project. During this stage, our team suggests a few sketches with preliminary design ideas (wireframes) to visualize data structures and represent UI features.",
      icon: stepUIUX,
      altText: "icon for UI&UX step",
    },
    {
      title: "Web Development",
      desc:
        "With the approved flowchart, it’s time for our web developers to make their magic! The development process starts with all the previously discussed graphic elements, content and design. Our team sets a deadline for the project delivery.",
      icon: stepDev,
      altText: "icon for dev step",
    },
  ],
  tools: [
    toolCss,
    toolFigma,
    toolFirebase,
    toolHTML,
    toolJava,
    toolJS,
    toolMysql,
    toolNodejs,
    toolPython,
    toolReactjs,
    toolVue,
    toolWordpress,
  ],
};

const branding = {
  name: "Branding",
  icon: brandingIcon,
  description:
    "En CATECH creamos la personalidad que tu empresa necesita para conectar con tu público. " +
    "Nuestra meta es verte crecer y que tú marca sea única.",
  worktype: [],
  stepsToFollow: [
    {
      title: "Meeting with the client - setting objectives and goals",
      desc:
        "We try to understand all of the client’s requirements in detail to make sure we deliver a project that fits all their needs. With the insights of the customers, we help to align the project assumptions with real user expectations and suggest different options to build the project.",
      icon: stepMeeting,
      altText: "icon for meetign step",
    },
    {
      title: "UX & UI Wireframing",
      desc:
        "Elaniin’s UX & UI Experts are highly qualified and willing to make an awesome design for your project. During this stage, our team suggests a few sketches with preliminary design ideas (wireframes) to visualize data structures and represent UI features.",
      icon: stepUIUX,
      altText: "icon for UI&UX step",
    },
    {
      title: "Web Development",
      desc:
        "With the approved flowchart, it’s time for our web developers to make their magic! The development process starts with all the previously discussed graphic elements, content and design. Our team sets a deadline for the project delivery.",
      icon: stepDev,
      altText: "icon for dev step",
    },
  ],
  tools: [
    toolCss,
    toolFigma,
    toolFirebase,
    toolHTML,
    toolJava,
    toolJS,
    toolMysql,
    toolNodejs,
    toolPython,
    toolReactjs,
    toolVue,
    toolWordpress,
  ],
};

export const data = [
  webDevelopment,
  appDevelopment,
  digitalMarketing,
  branding,
];
