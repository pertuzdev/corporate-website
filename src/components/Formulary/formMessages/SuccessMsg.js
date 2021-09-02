import React, { useEffect, useState } from "react";

import { IconContext } from "react-icons/lib";
import { FaCheckCircle } from "react-icons/fa";
import { Text } from "components/common/texts.styles";

import { SuccessMsgCont, SuccessMsgTxt } from "./styles";

export default function SuccessMsg() {
  const [show, setShow] = useState(true);

  setTimeout(() => {
    setShow(false);
  }, 3000);

  if (show) {
    return (
      <IconContext.Provider value={{ color: "#270" }}>
        <SuccessMsgCont>
          <FaCheckCircle color={"#270"} />
          <SuccessMsgTxt fontSize="14px" color="#270">
            ¡Información enviada! En breve nos comunicaremos contigo.
          </SuccessMsgTxt>
        </SuccessMsgCont>
      </IconContext.Provider>
    );
  } else {
    return <></>;
  }
}
