import React from "react";
import Image from "components/common/Image";
import { ClientItemContainer } from "./styles";

export default function ClientItem({ logo }) {
  return (
    <ClientItemContainer>
      <Image
        width="220px"
        height="206.75px"
        src={logo}
        alt="Logo of CATECH client"
      />
    </ClientItemContainer>
  );
}
