import React from "react";

import webIcon from "assets/img/services-icons/web-icon.svg";
import appIcon from "assets/img/services-icons/app-icon.svg";
import brandingIcon from "assets/img/services-icons/branding-icon.svg";
import marketingIcon from "assets/img/services-icons/marketing-icon.svg";

import stepMeeting from "assets/img/servicespage/steps-empathize.svg";
import stepUIUX from "assets/img/servicespage/step-2.svg";
import stepDev from "assets/img/servicespage/execution.svg";

import toolCss from "assets/img/tools/tool-css.png";
import toolFigma from "assets/img/tools/tool-figma.png";
import toolFirebase from "assets/img/tools/tool-firebase.png";
import toolHTML from "assets/img/tools/tool-html.png";
import toolJava from "assets/img/tools/tool-java.png";
import toolJS from "assets/img/tools/tool-js.png";
import toolMysql from "assets/img/tools/tool-mysql.png";
import toolNodejs from "assets/img/tools/tool-nodejs.png";
import toolPython from "assets/img/tools/tool-python.png";
import toolReactjs from "assets/img/tools/tool-reactjs.png";
import toolVue from "assets/img/tools/tool-vue.png";
import toolWordpress from "assets/img/tools/tool-wordpress.png";

import toolFacebook from "assets/img/tools/tool-facebook.png";
import toolInstagram from "assets/img/tools/tool-instagram.png";
import toolMessenger from "assets/img/tools/tool-messenger.png";
import toolWhatsApp from "assets/img/tools/tool-whatsapp.png";
import toolGoogleAds from "assets/img/tools/tool-google-ads.png";
import toolGoogleAnalytics from "assets/img/tools/tool-google-analytics.png";

const webDevelopment = {
  id: 1,
  name: "Desarrollo Web",
  icon: webIcon,
  altText: "Icono de servicio de desarrollo web",
  long_description:
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
      desc: "Intentamos comprender todos los requisitos del cliente en detalle para asegurarnos de entregar un proyecto que se adapte a todas sus necesidades. Con los conocimientos de los clientes, ayudamos a alinear los supuestos del proyecto con las expectativas reales del usuario y sugerimos diferentes opciones para construir el proyecto.",
      icon: stepMeeting,
      altText: "icon for meetign step",
    },
    {
      title: "UX & UI Wireframing",
      desc: "Los expertos en UX y UI de Catech están altamente calificados y dispuestos a hacer un diseño increíble para su proyecto. Durante esta etapa, nuestro equipo sugiere algunos bocetos con ideas de diseño preliminares (wireframes) para visualizar estructuras de datos y representar características de la interfaz de usuario.",
      icon: stepUIUX,
      altText: "icon for UI&UX step",
    },
    {
      title: "Web Development",
      desc: "Con el diagrama de flujo aprobado, es hora de que nuestros desarrolladores hagan su magia. El proceso de desarrollo comienza con todos los elementos gráficos, contenido y diseño discutidos anteriormente. Nuestro equipo se comunica durante todo el proceso con nuestros clientes, haciendo entregas iterativas de producto con valor.",
      icon: stepDev,
      altText: "icon for dev step",
    },
  ],
};

const appDevelopment = {
  id: 2,
  name: "Desarrollo de Apps",
  icon: appIcon,
  altText: "Icono de servicio de desarrollo móvil",
  long_description:
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
      desc: "Intentamos comprender todos los requisitos del cliente en detalle para asegurarnos de entregar un proyecto que se adapte a todas sus necesidades. Con los conocimientos de los clientes, ayudamos a alinear los supuestos del proyecto con las expectativas reales del usuario y sugerimos diferentes opciones para construir el proyecto.",
      icon: stepMeeting,
      altText: "icon for meetign step",
    },
    {
      title: "UX & UI Wireframing",
      desc: "Los expertos en UX y UI de Catech están altamente calificados y dispuestos a hacer un diseño increíble para su proyecto. Durante esta etapa, nuestro equipo sugiere algunos bocetos con ideas de diseño preliminares (wireframes) para visualizar estructuras de datos y representar características de la interfaz de usuario.",
      icon: stepUIUX,
      altText: "icon for UI&UX step",
    },
    {
      title: "Web Development",
      desc: "Con el diagrama de flujo aprobado, es hora de que nuestros desarrolladores hagan su magia. El proceso de desarrollo comienza con todos los elementos gráficos, contenido y diseño discutidos anteriormente. Nuestro equipo se comunica durante todo el proceso con nuestros clientes, haciendo entregas iterativas de producto con valor.",
      icon: stepDev,
      altText: "icon for dev step",
    },
  ],
};

const digitalMarketing = {
  id: 3,
  name: "Marketing Digital",
  icon: marketingIcon,
  long_description:
    "Construimos modernas y efectivas campañas con nuestro amplio conocimiento de tecnología, " +
    "cultura y marketing. Implementamos estrategias de Inbound Marketing, remarketing, procesos de seguimiento " +
    "y análisis de métricas.",
  worktype: [],
  stepsToFollow: [
    {
      title: "Inbound Marketing",
      desc: "Creamos estrategias de alta calidad con las últimas tendencias tecnológicas, impulsando su marca con campañas atractivas con una Metodología de Inbound Marketing. Nuestro equipo organiza el desempeño comercial estableciendo KPI (o desarrollando medidas o métricas de desempeño) para garantizar los mejores resultados.",
      icon: stepMeeting,
      altText: "icon for meetign step",
    },
    {
      title: "Presupuesto de marketing",
      desc: "Brindamos un Plan de Presupuesto de Marketing enfocado en las plataformas de redes sociales que el cliente previamente seleccionó. Una vez aprobada la estrategia, configuramos un equipo de estrategas, administradores de contenido y diseñadores para tomar el control de la creación de contenido, el diseño y la atención al cliente de sus canales de redes sociales.",
      icon: stepUIUX,
      altText: "icon for UI&UX step",
    },
    {
      title: "Seguimiento de KPI",
      desc: "Para demostrar la eficacia con la que nuestra empresa está logrando resultados medibles, establecemos diferentes indicadores de desempeño (KPI). Nuestros clientes hacen un seguimiento de estos indicadores y se actualizan constantemente sobre el desempeño de las campañas.",
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
  ],
};

const branding = {
  id: 4,
  name: "Branding",
  icon: brandingIcon,
  long_description:
    "En CATECH creamos la personalidad que tu empresa necesita para conectar con tu público. " +
    "Nuestra meta es verte crecer y que tú marca sea única.",
  worktype: [],
  stepsToFollow: [
    {
      title: "Establecer objetivos",
      desc: "Intentamos comprender todos los requisitos del cliente en detalle para asegurarnos de entregar un proyecto que se adapte a todas sus necesidades. Con las percepciones de los clientes, procedemos a la conceptualización del branding: valores, fortalezas, pasiones, estilo, personalidad y experiencia de la marca.",
      icon: stepMeeting,
      altText: "icon for meetign step",
    },
    {
      title: "Creación del concepto",
      desc: "Los expertos en branding de CATECH mejoran y ayudan a definir lo que su empresa hace mejor, de una manera que lo hace irresistible para sus clientes. Trabajamos codo a codo con nuestros clientes para desarrollar y evaluar ideas juntos.",
      icon: stepUIUX,
      altText: "icon for UI&UX step",
    },
    {
      title: "Branding Efectivo",
      desc: "Una vez aprobado el concepto, el equipo procede a la creación del sistema de identidad de marca. Ofrecemos una marca coherente, significativa, que se puede adquirir y que se puede recordar.",
      icon: stepDev,
      altText: "icon for dev step",
    },
  ],
  tools: [],
};

export const data = [
  webDevelopment,
  appDevelopment,
  digitalMarketing,
  branding,
];
