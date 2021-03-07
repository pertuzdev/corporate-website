import React from 'react'
import { ServicesItemContainer, Img, ServiceDescription, ServiceItemTitle } from './styles'

export default function ServicesItem ({img, altText, title, description}) {
  return (
    <ServicesItemContainer>
      <Img src={img} alt={altText} />
      <ServiceItemTitle>{title}</ServiceItemTitle>
      <ServiceDescription>
        {description}
      </ServiceDescription>
    </ServicesItemContainer>
  )
}
