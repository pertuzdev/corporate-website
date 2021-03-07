import styled from 'styled-components'

export const PhraseSectionRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${({ marginBottom }) => marginBottom && '64px'};
  @media screen and (max-width: 640px) {
    margin-bottom: ${({ marginBottom }) => marginBottom && '40px'};
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
