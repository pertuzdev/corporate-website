import React, { useEffect, useState } from "react";
import Select from "react-select";
import { Link, useI18next, useTranslation } from "gatsby-plugin-react-i18next";

import { BiMenuAltRight, BiX } from "react-icons/bi";
import { IconContext } from "react-icons/lib";

import { LNGS } from "utils/constants/languages";

import { Button } from "components/shared/Button";
import { SelectDoNotAutoselectFirstOption } from "components/shared/SelectDoNotAutoselectFirstOption";

import logo from "assets/img/brand-identity/catech-logo-black.svg";
import { selectStyles } from "styles/globalStyles";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavItemBtn,
  NavLink,
  BoldSpan,
  NavBtnLink,
  NavLng,
} from "./styles";

function NavBar() {
  const { languages, language, changeLanguage, navigate } = useI18next();
  const { t } = useTranslation();

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [options, setOptions] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);

  console.log(selectedOption, "selectedOption");

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth <= 960) {
        setButton(false);
      } else {
        setButton(true);
      }
    }
  };

  const handleChangeLanguage = (lng) => {
    //console.log(changeLanguage, "typeof");
    //setSelectedOption(lng);
    changeLanguage(lng.value);
  };

  useEffect(() => {
    if (!options) {
      setOptions(
        languages?.map((lng) => {
          return { value: lng, label: LNGS[lng] };
        })
      );
    }

    setSelectedOption({ value: language, label: LNGS[language] });
  }, [language]);

  console.log(languages, "originalPath");

  if (typeof window !== "undefined")
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
                <NavLink to="/" language={language} onClick={closeMobileMenu}>
                  {t("navbar.home")}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/about"
                  language={language}
                  onClick={closeMobileMenu}
                >
                  {t("navbar.about")}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/services"
                  language={language}
                  onClick={closeMobileMenu}
                >
                  {t("navbar.services")}
                </NavLink>
              </NavItem>
              <NavItemBtn>
                {button ? (
                  <NavBtnLink to="/contact" language={language}>
                    <Button primary>{t("buttons.contact")}</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to="/contact" language={language}>
                    <Button onClick={closeMobileMenu} fontBig primary>
                      {t("buttons.contact")}
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
              {options ? (
                <NavItem>
                  <NavLng>
                    <SelectDoNotAutoselectFirstOption
                      styles={selectStyles}
                      defaultValue={selectedOption}
                      onChange={handleChangeLanguage}
                      options={options}
                      isSearchable={false}
                    />
                  </NavLng>
                </NavItem>
              ) : null}
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default NavBar;
