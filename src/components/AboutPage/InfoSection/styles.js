import styled from 'styled-components'
import { OnContainer, Title } from 'styles/globalStyles'

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
    width: 100%;
    margin: 70px auto;
    border-bottom-left-radius: 50px;
    border-top-right-radius: 50px;
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
  @media screen and (max-width: 640px) {
    padding: 0;
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
