import { Colors } from 'styles/globalStyles'

import firstProjectImg from 'assets/img/almacen_alex.png'
import secondProjectImg from 'assets/img/variedades_enrique.jpg'
import thirdProjectImg from 'assets/img/bienes_raices.png'

const firstProject = {
  color: Colors['light-blue'],
  image: firstProjectImg,
  title: 'Almacén Alex',
  description: 'Tienda mayorista de calzado que quizo un concepto diferente, juvenil y fresco.'
}

const secondProject = {
  color: 'black',
  image: secondProjectImg,
  title: 'Variedades Enrique',
  description: 'Identidad visual renovada a un tono más moderno pero elegante.'
}

const thirdProject = {
  color: '#4dad58',
  image: thirdProjectImg,
  title: 'PropApp',
  description: 'Una aplicación para Android y iOS para la compra y venta de casas.'
}

const fourthProject = {
  color: '#fcb737',
  image: 'fourthImg',
  title: 'Branding',
  description: 'Creamos la personalidad que tu empresa necesita para conectar con tu público. ' +
  'Nuestra meta es verte crecer y que tú marca sea única.'
}

const fifthProject = {
  color: '#3a3c70',
  image: 'fifthImg',
  title: 'Marketing Digital',
  description: 'Construimos campañas implementamos estrategias de Inbound Marketing,' +
    ' remarketing, procesos de seguimiento y análisis de métricas.'
}

const sixthProject = {
  color: '#3a3c70',
  image: 'sixImg',
  title: 'Social Media',
  description: 'Nos encargamos de crear contenido de calidad para tus redes sociales potenciando' +
    ' tu negocio y aumentando su visibilidad en la red.'
}

export const projects = [firstProject, secondProject, thirdProject]
