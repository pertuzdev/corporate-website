import React from "react";

import { StyledList } from "./styles";

export default function List({ items, renderItem, center }) {
  return (
    <StyledList center={center}>
      {items.map((item, index) => {
        return renderItem({ item, index });
      })}
    </StyledList>
  );
}
