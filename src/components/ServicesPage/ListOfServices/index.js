import React, { useEffect, useState } from "react";

import ServiceItem from "components/ServicesPage/ServiceItem";

import {
  ServicesList,
  ServicesSectionWrapper,
  ServiceName,
  ServicesSectionContainer,
} from "./styles";
import { SectionContainer } from "../../../styles/globalStyles";

export default function ListOfServices({ services, getActualService }) {
  const handleServiceClick = ({ name, description, icon, worktype, tools }) => {
    getActualService({ name, description, icon, worktype, tools });
  };
  return (
    <ServicesSectionContainer>
      <ServicesSectionWrapper>
        <ServicesList>
          {services.map(
            ({
              name = "",
              description = "",
              icon = "",
              tools = [],
              stepsToFollow = [],
            }) => (
              <ServiceItem
                key={name}
                name={name}
                icon={icon}
                description={description}
                tools={tools}
                onServiceClick={getActualService}
                stepsToFollow={stepsToFollow}
              />
            )
          )}
        </ServicesList>
      </ServicesSectionWrapper>
    </ServicesSectionContainer>
  );
}
