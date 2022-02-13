import React from "react";

import { ServicesSectionWrapper, ServicesSectionContainer } from "./styles";

import List from "components/shared/List";
import ServicesItem from "./ServicesItem";

export default function ServicesList({ services, handleServiceClick }) {
  const renderItem = ({ item }) => {
    const { id, name } = item;
    return (
      <ServicesItem
        key={id}
        id={id}
        name={name}
        handleServiceClick={handleServiceClick}
      />
    );
  };

  return (
    <>
      <ServicesSectionContainer>
        <ServicesSectionWrapper>
          <List items={services} renderItem={renderItem} />
        </ServicesSectionWrapper>
      </ServicesSectionContainer>
    </>
  );
}
