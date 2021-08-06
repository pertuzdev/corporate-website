import React from 'react'
import { OnContainer, SectionWrapper, Title, Colors } from 'styles/globalStyles'
import { WhyUsImg, WhyUsImgWrapper, WhyUsList, WhyUsItem, WhyUsItemTitle, WhyUsDescription, WhyUsRow } from './styles'
import img from 'assets/img/why-us-image.png'
import { IconContext } from 'react-icons'
import { FaRegStar, FaRegLightbulb, FaPalette } from 'react-icons/fa'

export default function WhyUs () {
  return (
    <OnContainer>
      <SectionWrapper>
        <Title>Valores</Title>
        <WhyUsList>
          <IconContext.Provider value={{ color: Colors['primary-purple'] }}>
            <WhyUsRow>
              <WhyUsItem>
                <FaRegStar/>
                <WhyUsItemTitle>Excelencia</WhyUsItemTitle>
                <WhyUsDescription>
                  Nuestro equipo no solo desarrolla. Resuelve con soluciones de alto nivel.
                </WhyUsDescription>
              </WhyUsItem>
              <WhyUsImgWrapper>
                <WhyUsImg src={img} alt='CoverImage'/>
              </WhyUsImgWrapper>
              <WhyUsItem>
                <FaRegLightbulb/>
                <WhyUsItemTitle>Innovación</WhyUsItemTitle>
                <WhyUsDescription>
                  Queremos ir un paso más allá, creando productos que hagan una diferencia, que innoven.
                </WhyUsDescription>
              </WhyUsItem>
            </WhyUsRow>
            <WhyUsItem>
              <FaPalette/>
              <WhyUsItemTitle>Creatividad</WhyUsItemTitle>
              <WhyUsDescription>
                Somos un equipo creativo que busca que tu idea sea única.
              </WhyUsDescription>
            </WhyUsItem>
          </IconContext.Provider>
        </WhyUsList>
      </SectionWrapper>
    </OnContainer>
  )
}
