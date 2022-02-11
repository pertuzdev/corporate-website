import React, { useEffect, useState } from "react";

import Select from "react-select";

import { data } from "./data/ServicesData";

import {
  ServicesSectionContainer,
  ServicesSectionWrapper,
  selectStyles,
} from "./styles";

import Layout from "components/Layout/layout";
import Section from "components/Section";
import ServiceDescription from "./ServiceDescription";

export default function Services() {
  const intro =
    "Todo lo que necesitas para llevar tu negocio al siguiente nivel";

  const [options, setOptions] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);

  console.log(selectedOption, "selectedOption");

  const renderDescription = () => {
    if (selectedOption) {
      const selectedService = data.find((d) => d.id === selectedOption.value);
      const { name, description, icon, worktype, tools, stepsToFollow } =
        selectedService;

      return (
        <ServiceDescription
          name={name}
          description={description}
          icon={icon}
          worktype={worktype}
          tools={tools}
          stepsToFollow={stepsToFollow}
        />
      );
    } else {
      return null;
    }
  };

  useEffect(() => {
    const services = data;

    const opts = services.map(({ name, id }) => {
      return { value: id, label: name };
    });
    setOptions(opts);
    setSelectedOption(opts[0]);
  }, []);

  return (
    <Layout>
      <Section title={intro} titleMarginBottom={false} />
      {options ? (
        <ServicesSectionContainer>
          <ServicesSectionWrapper>
            <Select
              styles={selectStyles}
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
              isSearchable={false}
            />
          </ServicesSectionWrapper>
        </ServicesSectionContainer>
      ) : null}
      {renderDescription()}
    </Layout>
  );
}
