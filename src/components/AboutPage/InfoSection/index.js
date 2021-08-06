import React from 'react'

import {
  InfoContainer,
  InfoSectionWrapper,
  InfoIntro,
  InfoDescription,
  InfoTitle
} from './styles'

import { Colors } from 'styles/globalStyles'

export default function InfoSection () {
  return (
    <InfoContainer color={Colors['primary-purple']}>
      <InfoSectionWrapper>
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
      </InfoSectionWrapper>
    </InfoContainer>
  )
}
