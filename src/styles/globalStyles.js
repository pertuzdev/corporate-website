import styled, { createGlobalStyle } from 'styled-components'

export const Colors = {
  'primary-purple': '#59358B',
  'secondary-blue': '#1900FF',
  'gray-background': '#E5E5E5',
  'light-white': '#F7F7F7',
  'lighter-white': '#fafaff',
  'light-blue': '#2ebbff'
}
console.log(Colors['primary-purple']);
const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Source Sans Pro', sans-serif;
 } 
`

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;
  @media screen and (max-width: 991px) {
      padding-right: 30px;
      padding-left: 30px;
  }
`

export const OnContainer = styled.section`
  background-color: ${({ color }) => color || 'unset'};
  padding: 140px 0;
  @media screen and (max-width: 768px) {
    padding: 80px 0;
  }
`
export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
export const Title = styled.h2`
  font-family: 'Inter', serif;
  line-height: 1.1;
  font-size: 48px;
  text-align: center;
  font-weight: bold;
  color: ${({ color }) => color || 'unset'};
  margin-bottom: ${({ marginBottom }) => marginBottom ? '64px' : 'unset'};
  @media screen and (max-width: 640px) {
    font-size: 32px;
    margin-bottom: ${({ marginBottom }) => marginBottom ? '40px' : 'unset'};
  }
`

export const Button = styled.button`
  border-radius: 6px;
  background: ${({ primary }) => (primary ? Colors['primary-purple'] : '#fff')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  color: ${({ primary }) => (primary ? '#fff' : Colors['primary-purple'])};
  font-weight: 500;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  &:hover {
       transition: all 0.3s ease-out;
       background: #fff;
       background-color: ${({ primary }) => (primary ? '#3C235D' : '#4B59F7')};
}
@media screen and (max-width: 768px) {
    width: 100%;
}
`
