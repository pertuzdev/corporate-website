import React from "react";
import SEO from "components/seo";

import Layout from "components/Layout/layout";
import { SectionContainer } from "styles/globalStyles";
import {
  ContactSC,
  ContactSW,
  Column,
  Title,
  Text,
  List,
  ItemList,
  Form,
  InputContainer,
  TextAreaContainer,
  Input,
  Label,
  InputButton,
  TextArea,
} from "./contact.styles";

export default function About() {
  return (
    <Layout>
      <SEO title="Contact" />
      <ContactSC>
        <ContactSW>
          <Column maxWidth="35%">
            <Title>Hablanos de tu proyecto, nosotros hacemos el resto</Title>
            <Text>Protip — touch on these things:</Text>
            <List>
              <ItemList>- Your idea</ItemList>
              <ItemList>- Your timeline</ItemList>
              <ItemList>- Your budget</ItemList>
            </List>
          </Column>
          <Column maxWidth="55%">
            <Form action="" class="form">
              <InputContainer class="form__div">
                <Input type="text" class="form__input" placeholder=" " />
                <Label for="" class="form__label">
                  Nombre
                </Label>
              </InputContainer>
              <InputContainer class="form__div">
                <Input type="text" class="form__input" placeholder=" " />
                <Label for="" class="form__label">
                  Correo
                </Label>
              </InputContainer>
              <TextAreaContainer class="form__div">
                <TextArea
                  maxLength="500"
                  rows="5"
                  class="form__input"
                  placeholder=" "
                />
                <Label for="" class="form__label">
                  Mensaje
                </Label>
              </TextAreaContainer>
              <InputButton type="submit" class="form__button" value="Enviar" />
            </Form>
          </Column>
        </ContactSW>
      </ContactSC>
    </Layout>
  );
}
