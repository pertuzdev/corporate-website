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

import toolFacebook from "assets/img/tool-facebook.png";
import toolInstagram from "assets/img/tool-instagram.png";
import toolMessenger from "assets/img/tool-messenger.png";
import toolWhatsApp from "assets/img/tool-whatsapp.png";
import toolGoogleAds from "assets/img/tool-google-ads.png";
import toolGoogleAnalytics from "assets/img/tool-google-analytics.png";
import toolSlack from "assets/img/tool-slack.png";

const webDevelopment = {
  name: "Desarrollo Web",
  icon: webIcon,
  description:
    "El mercado cada vez está más globalizado y la competencia es más fuerte. Seguramente, esa competencia ya tiene su página web profesional " +
    "Tu imagen corporativa y tu página web son la cara visible de tu marca, por eso tienen que ser actuales y potentes. " +
    "Con un buen trabajo con la web, y aplicando algunas técnicas de marketing online, verás como comienzan a contactarte nuevos clientes.",
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
      title: "Establecer objetivos",
      desc:
        "Intentamos comprender todos los requisitos del cliente en detalle para asegurarnos de entregar un proyecto que se adapte a todas sus necesidades. Con los conocimientos de los clientes, ayudamos a alinear los supuestos del proyecto con las expectativas reales del usuario y sugerimos diferentes opciones para construir el proyecto.",
      icon: stepMeeting,
      altText: "icon for meetign step",
    },
    {
      title: "UX & UI Wireframing",
      desc:
        "Los expertos en UX y UI de Catech están altamente calificados y dispuestos a hacer un diseño increíble para su proyecto. Durante esta etapa, nuestro equipo sugiere algunos bocetos con ideas de diseño preliminares (wireframes) para visualizar estructuras de datos y representar características de la interfaz de usuario.",
      icon: stepUIUX,
      altText: "icon for UI&UX step",
    },
    {
      title: "Web Development",
      desc:
        "Con el diagrama de flujo aprobado, es hora de que nuestros desarrolladores web hagan su magia. El proceso de desarrollo comienza con todos los elementos gráficos, contenido y diseño discutidos anteriormente. Nuestro equipo se comunica durante todo el proceso con nuestros clientes, haciendo entregas iterativas de producto con valor.",
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
      title: "Establecer objetivos",
      desc:
        "Intentamos comprender todos los requisitos del cliente en detalle para asegurarnos de entregar un proyecto que se adapte a todas sus necesidades. Con los conocimientos de los clientes, ayudamos a alinear los supuestos del proyecto con las expectativas reales del usuario y sugerimos diferentes opciones para construir el proyecto.",
      icon: stepMeeting,
      altText: "icon for meetign step",
    },
    {
      title: "UX & UI Wireframing",
      desc:
        "Los expertos en UX y UI de Catech están altamente calificados y dispuestos a hacer un diseño increíble para su proyecto. Durante esta etapa, nuestro equipo sugiere algunos bocetos con ideas de diseño preliminares (wireframes) para visualizar estructuras de datos y representar características de la interfaz de usuario.",
      icon: stepUIUX,
      altText: "icon for UI&UX step",
    },
    {
      title: "Web Development",
      desc:
        "Con el diagrama de flujo aprobado, es hora de que nuestros desarrolladores web hagan su magia. El proceso de desarrollo comienza con todos los elementos gráficos, contenido y diseño discutidos anteriormente. Nuestro equipo se comunica durante todo el proceso con nuestros clientes, haciendo entregas iterativas de producto con valor.",
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
      title: "Inbound Marketing",
      desc:
        "Creamos estrategias de alta calidad con las últimas tendencias tecnológicas, impulsando su marca con campañas atractivas con una Metodología de Inbound Marketing. Nuestro equipo organiza el desempeño comercial estableciendo KPI (o desarrollando medidas o métricas de desempeño) para garantizar los mejores resultados.",
      icon: stepMeeting,
      altText: "icon for meetign step",
    },
    {
      title: "Presupuesto de marketing",
      desc:
        "Brindamos un Plan de Presupuesto de Marketing enfocado en las plataformas de redes sociales que el cliente previamente seleccionó. Una vez aprobada la estrategia, configuramos un equipo de estrategas, administradores de contenido y diseñadores para tomar el control de la creación de contenido, el diseño y la atención al cliente de sus canales de redes sociales.",
      icon: stepUIUX,
      altText: "icon for UI&UX step",
    },
    {
      title: "Seguimiento de KPI",
      desc:
        "Para demostrar la eficacia con la que nuestra empresa está logrando resultados medibles, establecemos diferentes indicadores de desempeño (KPI). Nuestros clientes hacen un seguimiento de estos indicadores y se actualizan constantemente sobre el desempeño de las campañas.",
      icon: stepDev,
      altText: "icon for dev step",
    },
  ],
  tools: [
    toolFacebook,
    toolInstagram,
    toolMessenger,
    toolWhatsApp,
    toolGoogleAds,
    toolGoogleAnalytics,
    toolSlack,
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
