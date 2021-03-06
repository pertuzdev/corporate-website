import webIcon from "assets/img/services-icons/web-icon.svg";
import appIcon from "assets/img/services-icons/app-icon.svg";
import brandingIcon from "assets/img/services-icons/branding-icon.svg";
import marketingIcon from "assets/img/services-icons/marketing-icon.svg";
import socialMediaIcon from "assets/img/services-icons/social-media-icon.svg";
import consultingIcon from "assets/img/services-icons/consultoria-icon.svg";

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

import firstProjectImg from "assets/img/clients/almacen_alex.png";
import secondProjectImg from "assets/img/clients/variedades_enrique.jpg";
import thirdProjectImg from "assets/img/homepage/bienes_raices.png";

import client1 from "assets/img/clients/logo-clipart-1.png";
import client2 from "assets/img/clients/logo-clipart-2.png";
import client3 from "assets/img/clients/logo-clipart-3.png";

import { colors } from "styles/colors";

const data = {
  services: [
    {
      id: 1,
      trans_key: "webDevelopment",
      name: "Desarrollo Web",
      icon: webIcon,
      altText: "Icono de servicio de desarrollo web",
      short_description:
        "Una p??gina web es la carta de presentaci??n de tu " +
        "empresa en internet, por eso desarrollamos sitios web que te diferencien, " +
        "que sean r??pidos, ??ptimos y atractivos.",
      long_description:
        "El mercado cada vez est?? m??s globalizado y la competencia es m??s fuerte. Seguramente, esa competencia ya tiene su p??gina web profesional " +
        "Tu imagen corporativa y tu p??gina web son la cara visible de tu marca, por eso tienen que ser actuales y potentes. " +
        "Con un buen trabajo con la web, y aplicando algunas t??cnicas de marketing online, ver??s como comienzan a contactarte nuevos clientes.",
      worktype: [
        {
          name: "Full Project",
          description:
            "Focused on creating projects from the start. Elaniin???s developers manage the " +
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
          id: 1,
          title: "Establecer objetivos",
          desc: "Intentamos comprender todos los requisitos del cliente en detalle para asegurarnos de entregar un proyecto que se adapte a todas sus necesidades. Con los conocimientos de los clientes, ayudamos a alinear los supuestos del proyecto con las expectativas reales del usuario y sugerimos diferentes opciones para construir el proyecto.",
          icon: stepMeeting,
          altText: "icon for meetign step",
        },
        {
          id: 2,
          title: "UX & UI Wireframing",
          desc: "Los expertos en UX y UI de Catech est??n altamente calificados y dispuestos a hacer un dise??o incre??ble para su proyecto. Durante esta etapa, nuestro equipo sugiere algunos bocetos con ideas de dise??o preliminares (wireframes) para visualizar estructuras de datos y representar caracter??sticas de la interfaz de usuario.",
          icon: stepUIUX,
          altText: "icon for UI&UX step",
        },
        {
          id: 3,
          title: "Web Development",
          desc: "Con el diagrama de flujo aprobado, es hora de que nuestros desarrolladores hagan su magia. El proceso de desarrollo comienza con todos los elementos gr??ficos, contenido y dise??o discutidos anteriormente. Nuestro equipo se comunica durante todo el proceso con nuestros clientes, haciendo entregas iterativas de producto con valor.",
          icon: stepDev,
          altText: "icon for dev step",
        },
      ],
    },
    {
      id: 2,
      trans_key: "appDevelopment",
      name: "Desarrollo de Apps",
      icon: appIcon,
      altText: "Icono de servicio de desarrollo m??vil",
      short_description:
        "Contamos con un equipo especializado en el desarrollo nativo de aplicaciones " +
        "para plataformas iOS y Android.",
      long_description:
        "Contamos con un equipo especializado en el desarrollo nativo de aplicaciones para " +
        "plataformas iOS y Android. Integramos la tecnolog??a y el dise??o para crear una app que satisfaga " +
        "tus objetivos y te represente.",
      worktype: [
        {
          name: "Full Project",
          description:
            "Focused on creating projects from the start. Elaniin???s developers manage the " +
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
          id: 1,
          title: "Establecer objetivos",
          desc: "Intentamos comprender todos los requisitos del cliente en detalle para asegurarnos de entregar un proyecto que se adapte a todas sus necesidades. Con los conocimientos de los clientes, ayudamos a alinear los supuestos del proyecto con las expectativas reales del usuario y sugerimos diferentes opciones para construir el proyecto.",
          icon: stepMeeting,
          altText: "icon for meetign step",
        },
        {
          id: 2,
          title: "UX & UI Wireframing",
          desc: "Los expertos en UX y UI de Catech est??n altamente calificados y dispuestos a hacer un dise??o incre??ble para su proyecto. Durante esta etapa, nuestro equipo sugiere algunos bocetos con ideas de dise??o preliminares (wireframes) para visualizar estructuras de datos y representar caracter??sticas de la interfaz de usuario.",
          icon: stepUIUX,
          altText: "icon for UI&UX step",
        },
        {
          id: 3,
          title: "App Development",
          desc: "Con el diagrama de flujo aprobado, es hora de que nuestros desarrolladores hagan su magia. El proceso de desarrollo comienza con todos los elementos gr??ficos, contenido y dise??o discutidos anteriormente. Nuestro equipo se comunica durante todo el proceso con nuestros clientes, haciendo entregas iterativas de producto con valor.",
          icon: stepDev,
          altText: "icon for dev step",
        },
      ],
    },
    {
      id: 3,
      trans_key: "digitalMarketing",
      name: "Marketing Digital",
      icon: marketingIcon,
      altText: "Icono de servicio de marketing",
      short_description:
        "Construimos campa??as implementamos estrategias de Inbound Marketing," +
        " remarketing, procesos de seguimiento y an??lisis de m??tricas.",
      long_description:
        "Construimos modernas y efectivas campa??as con nuestro amplio conocimiento de tecnolog??a, " +
        "cultura y marketing. Implementamos estrategias de Inbound Marketing, remarketing, procesos de seguimiento " +
        "y an??lisis de m??tricas.",
      worktype: [],
      stepsToFollow: [
        {
          id: 1,
          title: "Inbound Marketing",
          desc: "Creamos estrategias de alta calidad con las ??ltimas tendencias tecnol??gicas, impulsando su marca con campa??as atractivas con una Metodolog??a de Inbound Marketing. Nuestro equipo organiza el desempe??o comercial estableciendo KPI (o desarrollando medidas o m??tricas de desempe??o) para garantizar los mejores resultados.",
          icon: stepMeeting,
          altText: "icon for meetign step",
        },
        {
          id: 2,
          title: "Presupuesto de marketing",
          desc: "Brindamos un Plan de Presupuesto de Marketing enfocado en las plataformas de redes sociales que el cliente previamente seleccion??. Una vez aprobada la estrategia, configuramos un equipo de estrategas, administradores de contenido y dise??adores para tomar el control de la creaci??n de contenido, el dise??o y la atenci??n al cliente de sus canales de redes sociales.",
          icon: stepUIUX,
          altText: "icon for UI&UX step",
        },
        {
          id: 3,
          title: "Seguimiento de KPI",
          desc: "Para demostrar la eficacia con la que nuestra empresa est?? logrando resultados medibles, establecemos diferentes indicadores de desempe??o (KPI). Nuestros clientes hacen un seguimiento de estos indicadores y se actualizan constantemente sobre el desempe??o de las campa??as.",
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
    },
    {
      id: 4,
      trans_key: "branding",
      name: "Branding",
      icon: brandingIcon,
      altText: "Icono de servicio de branding",
      short_description:
        "Creamos la personalidad que tu empresa necesita para conectar con tu p??blico. " +
        "Nuestra meta es verte crecer y que t?? marca sea ??nica.",
      long_description:
        "En CATECH creamos la personalidad que tu empresa necesita para conectar con tu p??blico. " +
        "Nuestra meta es verte crecer y que t?? marca sea ??nica.",
      worktype: [],
      stepsToFollow: [
        {
          id: 1,
          title: "Establecer objetivos",
          desc: "Intentamos comprender todos los requisitos del cliente en detalle para asegurarnos de entregar un proyecto que se adapte a todas sus necesidades. Con las percepciones de los clientes, procedemos a la conceptualizaci??n del branding: valores, fortalezas, pasiones, estilo, personalidad y experiencia de la marca.",
          icon: stepMeeting,
          altText: "icon for meetign step",
        },
        {
          id: 2,
          title: "Creaci??n del concepto",
          desc: "Los expertos en branding de CATECH mejoran y ayudan a definir lo que su empresa hace mejor, de una manera que lo hace irresistible para sus clientes. Trabajamos codo a codo con nuestros clientes para desarrollar y evaluar ideas juntos.",
          icon: stepUIUX,
          altText: "icon for UI&UX step",
        },
        {
          id: 3,
          title: "Branding Efectivo",
          desc: "Una vez aprobado el concepto, el equipo procede a la creaci??n del sistema de identidad de marca. Ofrecemos una marca coherente, significativa, que se puede adquirir y que se puede recordar.",
          icon: stepDev,
          altText: "icon for dev step",
        },
      ],
      tools: [],
    },
    {
      id: 5,
      trans_key: "socialMedia",
      name: "Social Media",
      icon: socialMediaIcon,
      altText: "Icono de servicio de social media",
      short_description:
        "Nos encargamos de crear contenido de calidad para tus redes sociales potenciando" +
        " tu negocio y aumentando su visibilidad en la red.",
      long_description:
        "Nos encargamos de crear contenido de calidad para tus redes sociales potenciando" +
        " tu negocio y aumentando su visibilidad en la red.",
      worktype: [],
      stepsToFollow: [
        {
          id: 1,
          title: "Establecer objetivos",
          desc: "Intentamos comprender todos los requisitos del cliente en detalle para asegurarnos de entregar un proyecto que se adapte a todas sus necesidades. Con las percepciones de los clientes, procedemos a la conceptualizaci??n del branding: valores, fortalezas, pasiones, estilo, personalidad y experiencia de la marca.",
          icon: stepMeeting,
          altText: "icon for meetign step",
        },
        {
          id: 2,
          title: "Creaci??n del concepto",
          desc: "Los expertos en branding de CATECH mejoran y ayudan a definir lo que su empresa hace mejor, de una manera que lo hace irresistible para sus clientes. Trabajamos codo a codo con nuestros clientes para desarrollar y evaluar ideas juntos.",
          icon: stepUIUX,
          altText: "icon for UI&UX step",
        },
        {
          id: 3,
          title: "Branding Efectivo",
          desc: "Una vez aprobado el concepto, el equipo procede a la creaci??n del sistema de identidad de marca. Ofrecemos una marca coherente, significativa, que se puede adquirir y que se puede recordar.",
          icon: stepDev,
          altText: "icon for dev step",
        },
      ],
      tools: [],
    },
    {
      id: 6,
      trans_key: "consultancy",
      name: "Consultancy",
      icon: consultingIcon,
      altText: "Icono de servicio de consultoria",
      short_description:
        "Brindamos asesor??a en nuestras ??reas de experiencia: tecnolog??a, marketing, " +
        "dise??o, innovaci??n y presencia digital.",

      long_description:
        "Brindamos asesor??a en nuestras ??reas de experiencia: tecnolog??a, marketing, " +
        "dise??o, innovaci??n y presencia digital.",
      worktype: [],
      stepsToFollow: [],
      tools: [],
    },
  ],
  projects: [
    {
      id: 1,
      trans_key: "almacenalex",
      color: colors["blue-light"],
      image: firstProjectImg,
      title: "Almac??n Alex",
      description:
        "Tienda mayorista de calzado que quizo un concepto diferente, juvenil y fresco.",
    },
    {
      id: 2,
      trans_key: "variedadesenrique",
      color: "black",
      image: secondProjectImg,
      title: "Variedades Enrique",
      description:
        "Identidad visual renovada a un tono m??s moderno pero elegante.",
    },
    {
      id: 3,
      trans_key: "propapp",
      color: "#4dad58",
      image: thirdProjectImg,
      title: "PropApp",
      description:
        "Una aplicaci??n para Android y iOS para la compra y venta de casas.",
    },
  ],
  clients: [
    { id: 1, img: client1 },
    { id: 2, img: client2 },
    { id: 3, img: client3 },
  ],
};

export default data;
