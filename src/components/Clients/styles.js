import styled from 'styled-components'
import { OnContainer, Title } from '../../styles/globalStyles'

export const ClientsContainer = styled(OnContainer)`
  width: 100%;
  border-top-left-radius: 100px;
  margin-left: auto;
  @media screen and (max-width: 1280px) {
    max-width: 100%;
  }
  @media (max-width: 640px) {
    max-width: 100%;
    border-top-left-radius: 50px;
  }
`
export const ClientsContainer2 = styled.div`
  width: 100%;
  background-color: #6937ff;
  padding: 4rem 24px 2rem 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 100px;
  max-width: calc(100% - 40px);
  margin-left: auto;

  @media screen and (max-width: 1439px) {
    max-width: calc(100% - 50px);
  }

  @media screen and (max-width: 1299px) {
    max-width: 100%;
  }

  @media screen and (min-width: 768px) {
    padding: 4rem 4rem 2rem 0;
  }

  @media screen and (min-width: 640px) and (max-width: 768px) {
    padding: 4rem 3rem 2rem 3rem;
  }

  @media (max-width: 575.98px) {
    max-width: 100%;
    border-top-left-radius: 50px;
  }
`
export const ClientsIntro = styled.div`
  display: flex;
  flex-direction: row;
  align-self: stretch;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-self: unset;
  }
`
export const ClientsTitle = styled(Title)`
  @media screen and (min-width: 1024px) {
    margin-bottom: 0;
  }
`
export const ClientsDescription = styled.p`
  text-align: center;
  color: white;
  line-height: 1.89;
  font-size: 1.3rem;
  font-weight: 400;
  max-width: 730px;
  margin-left: 55px;
  @media screen and (max-width: 1024px) {
    margin-left: 0;
  }
  @media screen and (max-width: 768px) {
    font-size: 1rem;
    font-weight: 500;
  }
`
export const ClientsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 100px;
  @media screen and (max-width: 768px) {
    margin-top: 60px;
  }
`
export const ClientItemContainer = styled.div`
  display: flex;
  width: 50%;
  /*justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};*/
  border-right: 1px solid #784bff;
  border-bottom: 1px solid #784bff;
  :nth-of-type(even) {
    border-right: none;
  }
`
export const ClientImg = styled.img`
  padding-right: 0;
  border: 0;
  vertical-align: middle;
  display: inline-block;
  max-width: 55%;
  @media screen and (max-width: 768px) {
    max-width: 85%;
  }
`
export const ClientLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 220px;
  padding: 20px;
  @media (max-width: 575.98px) {
    height: 90px;
  }
`
