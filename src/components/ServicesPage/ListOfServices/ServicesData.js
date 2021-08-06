import React from 'react'

import webIcon from 'assets/img/web-icon.svg'
import appIcon from 'assets/img/app-icon.svg'
import brandingIcon from 'assets/img/branding-icon.svg'
import marketingIcon from 'assets/img/marketing-icon.svg'

const webDevelopment = {
  name: 'Desarrollo Web',
  icon: webIcon,
  description: 'Una página web es más que solo eso... Es la carta de presentación de tu empresa en internet, ' +
    'por eso desarrollamos sitios web que te diferencien, que sean rápidos, óptimos y atractivos.',
  worktype: [
    {
      name: 'Full Project',
      description: 'Focused on creating projects from the start. Elaniin’s developers manage the ' +
        'full execution from the beginning till the project is completely done.'
    },
    {
      name: 'On Demand',
      description: 'A service created for you! Let our team of developers follow your direction but ' +
        'with the flexibility your company requires, pay only for the time your project needs and get ' +
        'the best out of a highly skilled professional team while you focus on what matters the most: your business!'
    },
    {
      name: 'Staff Augmentation',
      description: 'You get a specialized team to work side by side with your team, following your ' +
        'key directions and working as one to achieve your monthly and weekly targets and objectives.'
    }
  ],
  tools: [
    'vueLogo',
    'reactLogo',
    'nodeLogo',
    'phpLogo',
    'androidLogo',
    'pythonLogo',
    'kotlinLogo'
  ],
  stepsToFollow: []
}

const appDevelopment = {
  name: 'Desarrollo de Apps',
  icon: appIcon,
  description: 'Contamos con un equipo especializado en el desarrollo nativo de aplicaciones para ' +
    'plataformas iOS y Android. Integramos la tecnología y el diseño para crear una app que satisfaga ' +
    'tus objetivos y te represente.',
  worktype: [
    {
      name: 'Full Project',
      description: 'Focused on creating projects from the start. Elaniin’s developers manage the ' +
        'full execution from the beginning till the project is completely done.'
    },
    {
      name: 'On Demand',
      description: 'A service created for you! Let our team of developers follow your direction but ' +
        'with the flexibility your company requires, pay only for the time your project needs and get ' +
        'the best out of a highly skilled professional team while you focus on what matters the most: your business!'
    },
    {
      name: 'Staff Augmentation',
      description: 'You get a specialized team to work side by side with your team, following your ' +
        'key directions and working as one to achieve your monthly and weekly targets and objectives.'
    }
  ],
  tools: [
    'vueLogo',
    'reactLogo',
    'nodeLogo',
    'phpLogo',
    'androidLogo',
    'pythonLogo',
    'kotlinLogo'
  ],
  stepsToFollow: []
}

const digitalMarketing = {
  name: 'Marketing Digital',
  icon: marketingIcon,
  description: 'Construimos modernas y efectivas campañas con nuestro amplio conocimiento de tecnología, ' +
    'cultura y marketing. Implementamos estrategias de Inbound Marketing, remarketing, procesos de seguimiento ' +
    'y análisis de métricas.',
  worktype: [],
  stepsToFollow: [
    {
      name: 'Inbound Marketing Strategy',
      description: 'Focused on creating projects from the start. Elaniin’s developers manage the ' +
        'full execution from the beginning till the project is completely done.'
    },
    {
      name: 'KPI’s tracking\n',
      description: 'A service created for you! Let our team of developers follow your direction but ' +
        'with the flexibility your company requires, pay only for the time your project needs and get ' +
        'the best out of a highly skilled professional team while you focus on what matters the most: your business!'
    },
    {
      name: 'Marketing Budget Plan and Strategy Team\n',
      description: 'You get a specialized team to work side by side with your team, following your ' +
        'key directions and working as one to achieve your monthly and weekly targets and objectives.'
    }
  ],
  tools: [
    'vueLogo',
    'reactLogo',
    'nodeLogo',
    'phpLogo',
    'androidLogo',
    'pythonLogo',
    'kotlinLogo'
  ]
}

const branding = {
  name: 'Branding',
  icon: brandingIcon,
  description: 'En CATECH creamos la personalidad que tu empresa necesita para conectar con tu público. ' +
    'Nuestra meta es verte crecer y que tú marca sea única.',
  worktype: [],
  stepsToFollow: [
    {
      name: 'Inbound Marketing Strategy',
      description: 'Focused on creating projects from the start. Elaniin’s developers manage the ' +
        'full execution from the beginning till the project is completely done.'
    },
    {
      name: 'KPI’s tracking\n',
      description: 'A service created for you! Let our team of developers follow your direction but ' +
        'with the flexibility your company requires, pay only for the time your project needs and get ' +
        'the best out of a highly skilled professional team while you focus on what matters the most: your business!'
    },
    {
      name: 'Marketing Budget Plan and Strategy Team\n',
      description: 'You get a specialized team to work side by side with your team, following your ' +
        'key directions and working as one to achieve your monthly and weekly targets and objectives.'
    }
  ],
  tools: [
    'vueLogo',
    'reactLogo',
    'nodeLogo',
    'phpLogo',
    'androidLogo',
    'pythonLogo',
    'kotlinLogo'
  ]
}

export const data = [webDevelopment, appDevelopment, digitalMarketing, branding]
