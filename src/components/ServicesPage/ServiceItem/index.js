import React from "react";
import { ServiceItemWrapper, ServiceItemName } from "./styles";

export default function ServiceItem({
  onServiceClick,
  name,
  description,
  icon,
  tools,
  stepsToFollow,
}) {
  return (
    <ServiceItemWrapper
      onClick={(e) =>
        onServiceClick({
          name,
          description,
          icon,
          tools,
          stepsToFollow,
        })
      }
    >
      <ServiceItemName>{name}</ServiceItemName>
    </ServiceItemWrapper>
  );
}
