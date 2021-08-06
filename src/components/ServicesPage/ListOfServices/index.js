import React, { useEffect, useState } from "react";

import ServiceItem from "components/ServicesPage/ServiceItem";

import { ServicesList, ServicesSectionWrapper, ServiceName } from "./styles";
import { data } from "./ServicesData";
import { OnContainer } from "../../../styles/globalStyles";

export default function ListOfServices({ getActualService }) {
  const handleServiceClick = ({ name, description, icon, worktype, tools }) => {
    getActualService({ name, description, icon, worktype, tools });
  };
  return (
    <OnContainer>
      <ServicesSectionWrapper>
        <ServicesList>
          {data.map(({ name, description, icon, worktype, tools }) => (
            <ServiceItem
              key={name}
              name={name}
              icon={icon}
              description={description}
              worktype={worktype}
              tools={tools}
              onServiceClick={getActualService}
            />
          ))}
        </ServicesList>
      </ServicesSectionWrapper>
    </OnContainer>
  );
}
