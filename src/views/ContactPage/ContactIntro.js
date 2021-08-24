import React from "react";

import { Title, Text, List, ItemList } from "./styles";

const ContactIntro = () => {
  return (
    <>
      <Title>Hablanos de tu proyecto, nosotros hacemos el resto</Title>
      <Text>Protip — touch on these things:</Text>
      <List>
        <ItemList>- Your idea</ItemList>
        <ItemList>- Your timeline</ItemList>
        <ItemList>- Your budget</ItemList>
      </List>
    </>
  );
};

export default ContactIntro;
