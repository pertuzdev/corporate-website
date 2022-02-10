import { colors } from "styles/colors";

import webIcon from "assets/img/services-icons/web-icon.svg";
import appIcon from "assets/img/services-icons/app-icon.svg";
import consultingIcon from "assets/img/services-icons/consultoria-icon.svg";
import brandingIcon from "assets/img/services-icons/branding-icon.svg";
import marketingIcon from "assets/img/services-icons/marketing-icon.svg";
import socialMediaIcon from "assets/img/services-icons/social-media-icon.svg";

const webDev = {
  id: 1,
  color: colors["light-blue"],
  image: webIcon,
  altText: "Icono de servicio de desarrollo web",
  title: "Desarrollo Web",
  description:
    "Una página web es la carta de presentación de tu " +
    "empresa en internet, por eso desarrollamos sitios web que te diferencien, " +
    "que sean rápidos, óptimos y atractivos.",
};

const appDev = {
  id: 2,
  color: "black",
  image: appIcon,
  altText: "Icono de servicio de desarrollo móvil",
  title: "Desarrollo de apps",
  description:
    "Contamos con un equipo especializado en el desarrollo nativo de aplicaciones " +
    "para plataformas iOS y Android.",
};

const consultancy = {
  id: 3,
  color: "#4dad58",
  image: consultingIcon,
  altText: "Icono de servicio de consultoria",
  title: "Consultoría",
  description:
    "Brindamos asesoría en nuestras áreas de experiencia: tecnología, marketing, " +
    "diseño, innovación y presencia digital.",
};

const branding = {
  id: 4,
  color: "#fcb737",
  image: brandingIcon,
  altText: "Icono de servicio de branding",
  title: "Branding",
  description:
    "Creamos la personalidad que tu empresa necesita para conectar con tu público. " +
    "Nuestra meta es verte crecer y que tú marca sea única.",
};

export const services = [webDev, appDev, consultancy, branding];
