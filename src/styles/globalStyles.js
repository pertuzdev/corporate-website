import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
  'primary-purple': '#59358B',
  'secondary-blue': '#1900FF',
  'gray-background': '#E5E5E5',
  'light-white': '#F7F7F7',
  'light-blue': '#62C5E3'
}
console.log(colors['primary-purple']);
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

export const Button = styled.button`
  border-radius: 6px;
  background: ${({ primary }) => (primary ? colors['primary-purple'] : '#fff')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  color: ${({ primary }) => (primary ? '#fff' : colors['primary-purple'])};
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
