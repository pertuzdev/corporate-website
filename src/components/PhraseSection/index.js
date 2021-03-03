import React from 'react'

import rocket from '../../assets/img/rocket.png'
import { PhraseSectionRow, PhraseSectionTitle, Img, PhraseSectionDescription } from './styles'
import { OnContainer, SectionWrapper, Colors } from '../../styles/globalStyles'

export default function PhraseSection () {
  return (
    <OnContainer color={Colors['light-white']}>
      <SectionWrapper>
        <PhraseSectionRow marginBottom>
          <PhraseSectionTitle>IMPULSAMOS TU MARCA</PhraseSectionTitle>
        </PhraseSectionRow>
        <PhraseSectionRow marginBottom>
          <PhraseSectionDescription>
            Creamos contenido digital que impacte a tus clientes para que no dejen de hablar de
            tu marca.
          </PhraseSectionDescription>
        </PhraseSectionRow>
        <PhraseSectionRow>
          <Img src={rocket} alt='figure_impulsamos_tu_negocio'/>
        </PhraseSectionRow>
      </SectionWrapper>
    </OnContainer>
  )
}
