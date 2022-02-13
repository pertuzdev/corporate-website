import React, { useEffect, useState } from "react";
import { BiMenuAltRight, BiX } from "react-icons/bi";
import { IconContext } from "react-icons/lib";
import { Button } from "components/shared/Button";
import logo from "assets/img/brand-identity/catech-logo-black.svg";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavItemBtn,
  NavLinks,
  BoldSpan,
  NavBtnLink,
} from "./styles";

function NavBar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  return (
    <>
      <IconContext.Provider value={{ color: "#FFDE11" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/" onClick={closeMobileMenu}>
              <NavIcon src={logo} alt="catech_logo" />
              CA<BoldSpan>TECH</BoldSpan>
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <BiX color="#FFDE11" /> : <BiMenuAltRight />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to="/" onClick={closeMobileMenu}>
                  Inicio
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/about" onClick={closeMobileMenu}>
                  Nosotros
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/services" onClick={closeMobileMenu}>
                  Servicios
                </NavLinks>
              </NavItem>
              <NavItemBtn>
                {button ? (
                  <NavBtnLink to="/contact">
                    <Button primary>Contáctanos</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to="/contact">
                    <Button onClick={closeMobileMenu} fontBig primary>
                      Contáctanos
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default NavBar;
