import { Button } from "components/common/buttons.styles";
import React from "react";

import {
  Form,
  InputContainer,
  TextAreaContainer,
  Input,
  Label,
  InputButton,
  TextArea,
  ButtonContainer,
} from "./styles";

export default function Formulary() {
  return (
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
      <ButtonContainer>
        <Button type="submit" primary big>
          Enviar
        </Button>
      </ButtonContainer>
    </Form>
  );
}
