import styled from 'styled-components'
import { Colors, Container } from '../../styles/globalStyles'

export const PhraseSectionContainer = styled.section`
  background-color: ${Colors['light-white']};
  padding: 140px 0;
  @media screen and (max-width: 768px) {
    padding: 80px 0;
  }
`
export const PhraseSectionWrapper = styled(Container)`
  padding-right: 120px;
  padding-left: 120px;
  @media screen and (max-width: 1280px) {
    padding-right: 80px;
    padding-left: 80px;
  }
  @media screen and (max-width: 640px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`
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
