import React from 'react'

import {
  InfoContainer,
  InfoImgWrapper,
  InfoImg, InfoIntro, InfoDescription, InfoTitle
} from './styles'

import { Colors, SectionWrapper, Title } from 'styles/globalStyles'
import image from 'assets/img/workin-persons.jpg'

export default function InfoSection () {
  return (
    <InfoContainer color={Colors['primary-purple']}>
      <SectionWrapper>
        <InfoIntro>
          <InfoTitle color='white' marginBottom>Misión</InfoTitle>
          <InfoDescription>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus deleniti dolor impedit,
            incidunt laborum nisi nobis quas sequi. At id, iure nihil quod recusandae similique suscipit.
            Beatae consequatur corporis soluta.
          </InfoDescription>
        </InfoIntro>
        <InfoIntro>
          <InfoTitle color='white' marginBottom>Visión</InfoTitle>
          <InfoDescription>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus deleniti dolor impedit,
            incidunt laborum nisi nobis quas sequi. At id, iure nihil quod recusandae similique suscipit.
            Beatae consequatur corporis soluta.
          </InfoDescription>
        </InfoIntro>
      </SectionWrapper>
    </InfoContainer>
  )
}
