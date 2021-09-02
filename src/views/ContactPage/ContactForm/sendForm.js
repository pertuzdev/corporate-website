import { send } from "emailjs-com";

import {
  SERVICE_ID,
  TEMPLATE_ID,
  USER_ID,
} from "utils/constants/emailjs.constants";

export const sendForm = (toSend) => {
  send(SERVICE_ID, TEMPLATE_ID, toSend, USER_ID)
    .then((response) => {
      console.log("SUCCESS!", response.status, response.text);
      return response;
    })
    .catch((err) => {
      console.log("FAILED...", err);
    });
};
