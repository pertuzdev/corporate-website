import React, { useEffect, useState } from "react";

import Select from "react-select";

import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";

import data from "data/data";

import {
  ServicesSectionContainer,
  ServicesSectionWrapper,
} from "components/servicesPageComponents/styles";
import { selectStyles } from "styles/globalStyles";

import Layout from "components/shared/Layout/layout";
import Section from "components/shared/Section";
import ServiceDescription from "components/servicesPageComponents/ServiceDescription";

const { services } = data;

export default function Services({ location }) {
  const { t } = useTranslation();

  const intro = t("servicesPage.intro");

  const options = services.map(({ name, id }) => {
    return { value: id, label: name };
  });

  const serviceProp =
    location.state?.serviceID && location.state?.serviceName
      ? location.state
      : null;

  const [selectedOption, setSelectedOption] = useState(
    serviceProp
      ? { value: serviceProp.serviceID, label: serviceProp.serviceName }
      : options[0]
  );

  console.log(selectedOption, "yupi");

  const translate = (transKey, stepsToFollow) => {
    const methodologyTitle = t(`servicesPage.methodology.title`);
    const methodologyDescription = t(`servicesPage.methodology.description`);

    const name = t(`servicesPage.services.${transKey}.title`);
    const longDescription = t(`servicesPage.services.${transKey}.description`);

    const stepsToFollowTrans = stepsToFollow.map((step) => ({
      ...step,
      title: t(
        `servicesPage.services.${transKey}.stepsToFollow.${step.id}.title`
      ),
      desc: t(
        `servicesPage.services.${transKey}.stepsToFollow.${step.id}.description`
      ),
    }));

    return {
      methodologyTitle,
      methodologyDescription,
      name,
      longDescription,
      stepsToFollowTrans,
    };
  };

  const renderDescription = () => {
    console.log(selectedOption, "yay");
    if (selectedOption) {
      const selectedService = services.find(
        (s) => s.id === selectedOption.value
      );

      //console.log(services, "selectedService");
      const {
        trans_key: transKey,
        icon,
        tools,
        stepsToFollow,
      } = selectedService;

      const {
        methodologyTitle,
        methodologyDescription,
        name,
        longDescription,
        stepsToFollowTrans,
      } = translate(transKey, stepsToFollow);

      return (
        <ServiceDescription
          name={name}
          description={longDescription}
          icon={icon}
          tools={tools}
          stepsToFollow={stepsToFollowTrans}
          methodologyTitle={methodologyTitle}
          methodologyDescription={methodologyDescription}
        />
      );
    } else {
      return null;
    }
  };

  return (
    <Layout>
      <Section title={intro} titleMarginBottom={false} animated />
      {options ? (
        <ServicesSectionContainer id="serviceSelect">
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

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
