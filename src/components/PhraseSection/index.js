import React from 'react'

import rocket from '../../assets/img/rocket.png'
import { PhraseSectionContainer, PhraseSectionWrapper, PhraseSectionRow, PhraseSectionTitle, Img, PhraseSectionDescription } from './styles'

export default function PhraseSection () {
  return (
    <PhraseSectionContainer>
      <PhraseSectionWrapper>
        <PhraseSectionRow marginBottom='64px'>
          <PhraseSectionTitle>IMPULSAMOS TU MARCA</PhraseSectionTitle>
        </PhraseSectionRow>
        <PhraseSectionRow>
          <PhraseSectionDescription>Creamos contenido digital que impacte a tus clientes para que no dejen de hablar de tu marca.</PhraseSectionDescription>
        </PhraseSectionRow>
        <PhraseSectionRow marginBotton='30px'>
          <Img src={rocket} alt='figure_impulsamos_tu_negocio'/>
        </PhraseSectionRow>
      </PhraseSectionWrapper>
    </PhraseSectionContainer>
  )
}
