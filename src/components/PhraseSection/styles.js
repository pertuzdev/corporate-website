import styled from 'styled-components'
import { Colors } from '../../styles/globalStyles'

export const PhraseSectionRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 64px;
  @media screen and (max-width: 640px) {
    margin-bottom: 40px;
  }
`
export const PhraseSectionTitle = styled.h2`
  font-family: 'Inter',serif;
  line-height: 1.1;
  font-size: 48px;
  text-align: center;
  font-weight: bold;
  color: ${Colors['secondary-blue']};
  @media screen and (max-width: 640px) {
    font-size: 32px;
  }
`
export const PhraseSectionDescription = styled.p`
  text-align: center;
  font-size: 1.7rem;
  font-weight: 500;
  @media screen and (max-width: 640px) {
    font-size: 1.1rem;  
  }
`
export const Img = styled.img`
  max-width: 400px;
  @media screen and (max-width: 1024px) {
    max-width: 320px;
  }
  @media screen and (max-width: 640px) {
    max-width: 220px;
  }
`
