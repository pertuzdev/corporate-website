import { Colors } from 'styles/globalStyles'

import webIcon from 'assets/img/web-icon.svg'
import appIcon from 'assets/img/app-icon.svg'
import consultingIcon from 'assets/img/consultoria-icon.svg'
import brandingIcon from 'assets/img/branding-icon.svg'
import marketingIcon from 'assets/img/marketing-icon.svg'
import socialMediaIcon from 'assets/img/social-media-icon.svg'

const webDev = {
  color: Colors['light-blue'],
  image: webIcon,
  altText: 'Icono de servicio de desarrollo web',
  title: 'Desarrollo Web',
  description: 'Una página web es la carta de presentación de tu ' +
    'empresa en internet, por eso desarrollamos sitios web que te diferencien, ' +
    'que sean rápidos, óptimos y atractivos.'
}

const appDev = {
  color: 'black',
  image: appIcon,
  altText: 'Icono de servicio de desarrollo móvil',
  title: 'Desarrollo de apps',
  description: 'Contamos con un equipo especializado en el desarrollo nativo de aplicaciones ' +
    'para plataformas iOS y Android.'
}

const consultancy = {
  color: '#4dad58',
  image: consultingIcon,
  altText: 'Icono de servicio de consultoria',
  title: 'Consultoría',
  description: 'Brindamos asesoría en nuestras áreas de experiencia: tecnología, marketing, ' +
    'diseño, innovación y presencia digital.'
}

const branding = {
  color: '#fcb737',
  image: brandingIcon,
  altText: 'Icono de servicio de branding',
  title: 'Branding',
  description: 'Creamos la personalidad que tu empresa necesita para conectar con tu público. ' +
    'Nuestra meta es verte crecer y que tú marca sea única.'
}

const digitalMarketing = {
  color: '#3a3c70',
  image: marketingIcon,
  altText: 'Icono de servicio de marketing',
  title: 'Marketing Digital',
  description: 'Construimos campañas implementamos estrategias de Inbound Marketing,' +
    ' remarketing, procesos de seguimiento y análisis de métricas.'
}

const socialMedia = {
  color: '#3a3c70',
  image: socialMediaIcon,
  title: 'Social Media',
  altText: 'Icono de servicio de social media',
  description: 'Nos encargamos de crear contenido de calidad para tus redes sociales potenciando' +
    ' tu negocio y aumentando su visibilidad en la red.'
}

export const services = [webDev, appDev, consultancy, branding, digitalMarketing, socialMedia]
