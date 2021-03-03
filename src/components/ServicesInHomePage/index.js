import React from 'react'

import {
  ServicesTitle,
  ServicesItems,
  ServiceItem,
  Img,
  ServiceItemTitle,
  ServiceDescription,
} from './styles'

import { OnContainer, SectionWrapper } from '../../styles/globalStyles'

import appIcon from '../../assets/img/app-icon.svg'
import webIcon from '../../assets/img/web-icon.svg'
import marketingIcon from '../../assets/img/marketing-icon.svg'
import brandingIcon from '../../assets/img/branding-icon.svg'
import consultingIcon from '../../assets/img/consultoria-icon.svg'
import socialMediaIcon from '../../assets/img/social-media-icon.svg'

export default function ServicesInHomePage () {
  return (
    <OnContainer>
      <SectionWrapper>
        <ServicesTitle>
          SERVICIOS
        </ServicesTitle>
        <ServicesItems>
          <ServiceItem>
            <Img src={webIcon} alt='WebIcon' />
            <ServiceItemTitle>Desarrollo Web</ServiceItemTitle>
            <ServiceDescription>
              Una página web es la carta de presentación de tu
              empresa en internet, por eso desarrollamos sitios web que te diferencien,
              que sean rápidos, óptimos y atractivos.
            </ServiceDescription>
          </ServiceItem>
          <ServiceItem>
            <Img src={appIcon} alt='appIcon' />
            <ServiceItemTitle>Desarrollo de apps</ServiceItemTitle>
            <ServiceDescription>
              Contamos con un equipo especializado en el desarrollo nativo de aplicaciones
              para plataformas iOS y Android.
            </ServiceDescription>
          </ServiceItem>
          <ServiceItem>
            <Img src={consultingIcon} alt='consultingIcon' />
            <ServiceItemTitle>Consultoría</ServiceItemTitle>
            <ServiceDescription>
              Brindamos asesoría en nuestras áreas de experiencia: tecnología, marketing,
              diseño, innovación y presencia digital.
            </ServiceDescription>
          </ServiceItem>
          <ServiceItem>
            <Img src={brandingIcon} alt='brandingIcon' />
            <ServiceItemTitle>Branding</ServiceItemTitle>
            <ServiceDescription>
              Creamos la personalidad que tu empresa necesita para conectar con tu público.
              Nuestra meta es verte crecer y que tú marca sea única.
            </ServiceDescription>
          </ServiceItem>
          <ServiceItem>
            <Img src={marketingIcon} alt='marketingIcon' />
            <ServiceItemTitle>Marketing Digital</ServiceItemTitle>
            <ServiceDescription>
              Construimos campañas implementamos estrategias de Inbound Marketing,
              remarketing, procesos de seguimiento y análisis de métricas.
            </ServiceDescription>
          </ServiceItem>
          <ServiceItem>
            <Img src={socialMediaIcon} alt='socialMediaIcon' />
            <ServiceItemTitle>Social Media</ServiceItemTitle>
            <ServiceDescription>
              Nos encargamos de crear contenido de calidad para tus redes sociales potenciando
              tu negocio y aumentando su visibilidad en la red.
            </ServiceDescription>
          </ServiceItem>
        </ServicesItems>
      </SectionWrapper>
    </OnContainer>
  )
}
