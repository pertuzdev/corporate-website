import React from "react";
import { Image } from "components/shared/Image";
import { ClientItemContainer } from "./styles";

export default function ClientItem({ logo }) {
  return (
    <ClientItemContainer>
      <Image width="200px" src={logo} alt="Logo of CATECH client" />
    </ClientItemContainer>
  );
}
