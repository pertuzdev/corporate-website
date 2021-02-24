import styled from 'styled-components'
import { FaMagento } from 'react-icons/fa'
import { Link } from 'gatsby'
import { Container } from '../../styles/globalStyles'

export const Nav = styled.nav`
  background: #59358B;
  border-radius: 0 0 20px 20px;
  /*height: 80px;*/
  padding: 12px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  /*height: 80px;*/
  ${Container}
`

export const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  font-family: Quicksand;
  display: flex;
  align-items: center;
`

export const BoldSpan = styled.span`
  font-weight: 700;
`

export const NavIcon = styled.img`
  margin-right: 0.5rem;
  width: 26px;
  height: 34.67px;
`

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: block;
    /*position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);*/
    align-self: center;
    font-size: 2rem;
    cursor: pointer;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 96%;
    height: 86vh;
    position: absolute;
    top: 67px;
    left: ${({ click }) => (click ? '2%' : '-100%')};
    border-radius: 20px;
    box-shadow: 0px 0px 17px 2px rgb(0 0 0 / 92%);
    opacity: 1;
    transition: all 0.5s ease;
    background: #59358B;
  }
`

export const NavItem = styled.li`
  height: 60px;
  border-bottom: 2px solid transparent;
  &:hover {
    border-bottom: 2px solid #4b59f7;
  }
  @media screen and (max-width: 960px) {
    width: 100%;
    &:hover {
      border: none;
    }
  }
`

export const NavItemBtn = styled.li`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`

export const NavLinks = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    &:hover {
      color: #4b59f7;
      transition: all 0.3s ease;
    }
  }
`

export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`