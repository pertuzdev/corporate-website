import { emailRegex, onlyLettersRegex } from "utils/constants/regex.constants";

import { sendForm } from "./sendForm";

console.log(onlyLettersRegex, "onlyLettersRegex");
const validationsJSON = {
  validations: {
    from_name: {
      pattern: {
        value: onlyLettersRegex,
        message:
          "You're not allowed to use special characters or numbers in your name.",
      },
      required: { value: true, message: "Este campo es requerido" },
    },
    message: {
      required: {
        value: true,
        message: "Este campo es requerido",
      },
    },
    reply_to: {
      pattern: {
        value: emailRegex,
        message: "El formato de correo no es válido",
      },
      required: {
        value: true,
        message: "Este campo es requerido",
      },
    },
  },
  onSubmit: sendForm,
};

const { validations, onSubmit } = validationsJSON;

export { validations, onSubmit };
