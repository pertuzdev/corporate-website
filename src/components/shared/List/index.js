import React from "react";

import { StyledList } from "./styles";

export default function List({ items, renderItem, keyExtractor }) {
  console.log(items, renderItem, "shadow");
  return (
    <StyledList>
      {items.map((item, index) => {
        return renderItem({ item, index });
      })}
    </StyledList>
  );
}
