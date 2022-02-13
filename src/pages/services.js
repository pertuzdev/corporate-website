import React, { useEffect, useState } from "react";

import data from "data/data";

import Select from "react-select";

import {
  ServicesSectionContainer,
  ServicesSectionWrapper,
  selectStyles,
} from "components/servicesPageComponents/styles";

import Layout from "components/shared/Layout/layout";
import Section from "components/shared/Section";
import ServiceDescription from "components/servicesPageComponents/ServiceDescription";

export default function Services() {
  const { services } = data;
  const intro =
    "Todo lo que necesitas para llevar tu negocio al siguiente nivel";

  const [options, setOptions] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);

  const renderDescription = () => {
    if (selectedOption) {
      const selectedService = services.find(
        (s) => s.id === selectedOption.value
      );
      const { name, long_description, icon, worktype, tools, stepsToFollow } =
        selectedService;

      return (
        <ServiceDescription
          name={name}
          description={long_description}
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
