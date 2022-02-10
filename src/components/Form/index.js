import React, { useEffect, useState } from "react";

import {
  FormContainer,
  InputContainer,
  TextAreaContainer,
  Input,
  Label,
  TextArea,
  ButtonContainer,
  Error,
} from "./styles";

import { useForm } from "hooks/useForm";

import { Button } from "components/Button";
import SuccessMsg from "./formMessages/SuccessMsg";

export default function Form({ onSubmit, validations }) {
  const { handleSubmit, handleChange, handleOnBlur, data, submit, errors } =
    useForm({
      validations,
      onSubmit,
    });

  return (
    <FormContainer className="form" onSubmit={handleSubmit}>
      <InputContainer className="form__div">
        <Input
          type="text"
          name="from_name"
          className="form__input"
          placeholder=" "
          value={data.from_name || ""}
          onChange={handleChange}
          onBlur={handleOnBlur}
        />
        <Label htmlFor="from_name" className="form__label">
          Nombre
        </Label>
        {errors["from_name"] && <Error>{errors["from_name"]}</Error>}
      </InputContainer>
      <InputContainer className="form__div">
        <Input
          type="text"
          name="reply_to"
          className="form__input"
          placeholder=" "
          value={data.reply_to || ""}
          onChange={handleChange}
          onBlur={handleOnBlur}
        />
        <Label htmlFor="reply_to" className="form__label">
          Correo
        </Label>
        {errors["reply_to"] && <Error>{errors["reply_to"]}</Error>}
      </InputContainer>
      <TextAreaContainer className="form__div">
        <TextArea
          name="message"
          maxLength="1500"
          rows="5"
          className="form__input"
          placeholder=" "
          value={data.message || ""}
          onChange={handleChange}
          onBlur={handleOnBlur}
        />
        <Label htmlFor="message" className="form__label">
          Mensaje
        </Label>
        {errors["message"] && <Error>{errors["message"]}</Error>}
      </TextAreaContainer>
      <ButtonContainer>
        <Button type="submit" primary big>
          Enviar
        </Button>
      </ButtonContainer>
      {submit && <SuccessMsg />}
    </FormContainer>
  );
}
