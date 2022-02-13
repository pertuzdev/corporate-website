import React from "react";

import { OutlineButton } from "components/Button/styles";
import { ServiceItemWrapper } from "./styles";

export default function ServicesItem({ id, name, handleServiceClick }) {
  const handleClick = (e) => {
    handleServiceClick({
      id,
    });
  };
  return (
    <ServiceItemWrapper>
      <OutlineButton onClick={handleClick} big>
        {name}
      </OutlineButton>
    </ServiceItemWrapper>
  );
}
