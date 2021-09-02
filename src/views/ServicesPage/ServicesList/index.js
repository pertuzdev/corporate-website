import React, { useEffect, useState } from "react";

import ServicesItem from "views/ServicesPage/ServicesList/ServicesItem";

import {
  List,
  ServicesSectionWrapper,
  ServicesSectionContainer,
} from "./styles";

export default function ServicesList({ services, getActualService }) {
  return (
    <>
      <ServicesSectionContainer>
        <ServicesSectionWrapper>
          <List>
            {services.map(
              ({
                name = "",
                description = "",
                icon = "",
                tools = [],
                stepsToFollow = [],
              }) => (
                <ServicesItem
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
          </List>
        </ServicesSectionWrapper>
      </ServicesSectionContainer>
    </>
  );
}
