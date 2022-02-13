import React from "react";

import { Text } from "styles/globalStyles";

import {
  ContactIntroContainer,
  ContactInfoTitle,
  List,
  ItemList,
} from "./styles";

const ContactIntro = () => {
  return (
    <ContactIntroContainer>
      <ContactInfoTitle marginBottom>
        Hablanos de tu proyecto, nosotros hacemos el resto
      </ContactInfoTitle>
      <Text>Te sugerimos incluir los siguientes aspectos en tu mensaje:</Text>
      <List>
        <ItemList>- Descripción de tu proyecto o necesidad</ItemList>
        <ItemList>- ¿En cuánto tiempo lo necesitas?</ItemList>
        <ItemList>- Tu presupuesto</ItemList>
      </List>
    </ContactIntroContainer>
  );
};

export default ContactIntro;
