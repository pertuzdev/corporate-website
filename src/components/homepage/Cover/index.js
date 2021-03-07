import React from 'react'

import {
  CoverContainer,
  CoverWrapper,
  CoverRow,
  CoverSocialMedia,
  SocialIconLink,
  TextWrapper,
  CoverTitle,
  Highlight,
  CoverSubTitle,
  CoverButton,
  CoverImgWrapper,
  CoverImg
} from './styles'

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin
} from 'react-icons/fa'

import img from 'assets/img/cover-image.png'

export default function Cover () {
  return (
    <CoverContainer>
      <CoverWrapper>
        <CoverRow maxWidth550 maxWidth450 center coverHeading flexStart>
          <TextWrapper>
            <CoverTitle>
              DE LA <Highlight>IDEA</Highlight> A LA REALIDAD<Highlight>.</Highlight>
            </CoverTitle>
            <CoverSubTitle>
              Creamos asombrosas estrategias de marketing digital y excelentes productos de software.
            </CoverSubTitle>
          </TextWrapper>
          <CoverButton primary big>
            Contáctanos
          </CoverButton>
        </CoverRow>
        <CoverRow maxWidth550 center flexEnd>
          <CoverImgWrapper>
            <CoverImg src={img} alt='CoverImage' />
          </CoverImgWrapper>
        </CoverRow>
      </CoverWrapper>
      <CoverSocialMedia>
        <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
          <FaFacebook/>
        </SocialIconLink>
        <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
          <FaInstagram/>
        </SocialIconLink>
        <SocialIconLink href='/' target='_blank' aria-label='LinkedIn'>
          <FaLinkedin/>
        </SocialIconLink>
      </CoverSocialMedia>
    </CoverContainer>
  )
}
