import React from "react";
import { ServiceItemWrapper, ServiceItemName } from "./styles";

export default function ServiceItem({
  onServiceClick,
  name,
  description,
  icon,
  worktype,
  tools,
}) {
  return (
    <ServiceItemWrapper
      onClick={(e) =>
        onServiceClick({ name, description, icon, worktype, tools })
      }
    >
      <ServiceItemName>{name}</ServiceItemName>
    </ServiceItemWrapper>
  );
}
