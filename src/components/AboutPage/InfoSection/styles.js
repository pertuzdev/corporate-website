import styled from 'styled-components'
import { OnContainer, SectionWrapper, Title } from 'styles/globalStyles'

export const InfoContainer = styled(OnContainer)`
  width: 90%;
  border-top-right-radius: 100px;
  border-bottom-left-radius: 100px;
  margin: 140px auto;
  padding: 100px 0;
  @media screen and (max-width: 1280px) {
    max-width: 100%;
    padding: 0 0 48px 0;
  }
  @media (max-width: 640px) {
    max-width: 100%;
    border-bottom-left-radius: 50px;
  }
`
export const InfoWrapper = styled(SectionWrapper)``
export const InfoImgWrapper = styled.div`
  display: flex;
  justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
  border-top-right-radius: 100px;
  margin-bottom: 62px;
  @media screen and (max-width: 768px) {
    margin-top: 20px;
    margin-bottom: 32px;
  }
  @media (max-width: 640px) {
    border-top-right-radius: 50px;
  }
`
export const InfoImg = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 90%;
  max-height: 500px;
  vertical-align: middle;
  display: inline-block;
  /*max-height: 555px;*/
  border-top-right-radius: 100px;
  @media screen and (max-width: 1024px) {
    max-height: 800px;
  }
  @media (max-width: 640px) {
    border-top-right-radius: 50px;
    max-width: 100%;
  }
`
export const InfoIntro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 32px;
  margin-bottom: 32px;
  padding: 0 30px;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-self: unset;
  }
`
export const InfoTitle = styled(Title)`
  line-height: 1.1;
  font-weight: bold;
  /*margin-bottom: ${({ marginBottom }) => marginBottom ? '64px' : 'unset'};*/
  @media screen and (max-width: 1024px) {
    font-size: 38px;
    margin-bottom: 34px;
  }
  @media screen and (max-width: 640px) {
    font-size: 32px;
    margin-bottom: 20px;
  }
`
export const InfoDescription = styled.p`
  text-align: center;
  color: white;
  line-height: 1.89;
  font-size: 1.3rem;
  font-weight: 400;
  max-width: 730px;
  @media screen and (max-width: 1024px) {
    margin-left: 0;
  }
  @media screen and (max-width: 768px) {
    font-size: 1rem;
    font-weight: 500;
  }
`
