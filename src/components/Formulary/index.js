import React, { useEffect, useState } from "react";

import { send } from "emailjs-com";

import {
  SERVICE_ID,
  TEMPLATE_ID,
  USER_ID,
} from "utils/constants/emailjs.constants";

import { Button } from "components/common/buttons.styles";

import {
  Form,
  InputContainer,
  TextAreaContainer,
  Input,
  Label,
  TextArea,
  ButtonContainer,
  Error,
} from "./styles";

export default function Formulary() {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "CATECH",
    message: "",
    reply_to: "",
  });

  const [errors, setErrors] = useState({});
  const [validForm, setValidForm] = useState(false);

  console.log(errors, "errors");

  useEffect(() => {
    console.log(errors, "analisis");
  }, [errors]);

  const from_nameFieldValidation = (errs) => {
    const { from_name } = toSend;
    let formIsValid = true;

    if (!from_name) {
      console.log("ENTRO_HOLA");
      //setValidForm(false);
      formIsValid = false;
      errs["from_name"] = "Este campo es requerido";
      /* setErrors({
        ...errors,
        from_name: "Este campo es requerido",
      }); */
    }

    if (from_name !== "") {
      if (!from_name.match(/^[a-zA-Z][a-zA-Z\s]*$/)) {
        //setValidForm(false);
        formIsValid = false;
        errs["from_name"] = "Solo se permiten letras para el nombre";
        /*  setErrors({
          ...errors,
          from_name: "Solo se permiten letras para el nombre",
        }); */
      }
    }
    return formIsValid;
  };

  const reply_toFieldValidation = (errs) => {
    const { reply_to } = toSend;
    let formIsValid = true;
    console.log(reply_to, "reply_to");
    //Email
    if (!reply_to) {
      //console.log(":v");
      formIsValid = false;
      //setValidForm(false);
      errs["reply_to"] = "Este campo es requerido";
      //setErrors({ ...errors, reply_to: "Este campo es requerido" });
    }

    if (reply_to !== "") {
      let lastAtPos = reply_to.lastIndexOf("@");
      let lastDotPos = reply_to.lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          reply_to.indexOf("@@") == -1 &&
          lastDotPos > 2 &&
          reply_to.length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        //setValidForm(false);
        errs["reply_to"] = "El formato de correo no es válido";
        //setErrors({ ...errors, reply_to: "El formato de correo no es válido" });
      }
    }
    return formIsValid;
  };

  const messageValidation = (errs) => {
    const { message } = toSend;
    let formIsValid = true;
    //Email
    if (!message) {
      //console.log(":v");
      formIsValid = false;
      //setValidForm(false);
      errs["message"] = "Este campo es requerido";
      //setErrors({ ...errors, reply_to: "Este campo es requerido" });
    }
  };

  const handleOnBlur = (e) => {
    const { name } = e.target;

    const errs = {};

    switch (name) {
      case "from_name":
        let from_nameVal = from_nameFieldValidation(errs);
        from_nameVal
          ? setErrors({ from_nameVal: "" })
          : setErrors({ ...errors, ...errs });
        break;
      case "reply_to":
        let reply_toVal = reply_toFieldValidation(errs);
        reply_toVal
          ? setErrors({ reply_to: "" })
          : setErrors({ ...errors, ...errs });
        break;
      case "message":
        let messageVal = messageValidation(errs);
        messageVal
          ? setErrors({ message: "" })
          : setErrors({ ...errors, ...errs });
        break;
    }
  };

  const handleValidation = () => {
    const errs = {};

    let from_nameVal = from_nameFieldValidation(errs);
    let reply_toVal = reply_toFieldValidation(errs);
    let messageVal = messageValidation(errs);

    setErrors(errs);

    return from_nameVal && reply_toVal && messageVal;
  };

  const sendForm = () => {
    send(SERVICE_ID, TEMPLATE_ID, toSend, USER_ID)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setToSend({
          from_name: "",
          to_name: "CATECH",
          message: "",
          reply_to: "",
        });
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      sendForm();
    }
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <Form className="form" onSubmit={handleSubmit}>
      <InputContainer className="form__div">
        <Input
          type="text"
          name="from_name"
          className="form__input"
          placeholder=" "
          value={toSend.from_name}
          onChange={handleChange}
          onBlur={handleOnBlur}
        />
        <Label htmlFor="from_name" className="form__label">
          Nombre
        </Label>
        {errors["from_name"] ? <Error>{errors["from_name"]}</Error> : <></>}
      </InputContainer>
      <InputContainer className="form__div">
        <Input
          type="text"
          name="reply_to"
          className="form__input"
          placeholder=" "
          value={toSend.reply_to}
          onChange={handleChange}
          onBlur={handleOnBlur}
        />
        <Label htmlFor="reply_to" className="form__label">
          Correo
        </Label>
        {errors["reply_to"] ? <Error>{errors["reply_to"]}</Error> : <></>}
      </InputContainer>
      <TextAreaContainer className="form__div">
        <TextArea
          name="message"
          maxLength="500"
          rows="5"
          className="form__input"
          placeholder=" "
          value={toSend.message}
          onChange={handleChange}
        />
        <Label htmlFor="message" className="form__label">
          Mensaje
        </Label>
        {errors["message"] ? <Error>{errors["message"]}</Error> : <></>}
      </TextAreaContainer>
      <ButtonContainer>
        <Button type="submit" primary big>
          Enviar
        </Button>
      </ButtonContainer>
    </Form>
  );
}
