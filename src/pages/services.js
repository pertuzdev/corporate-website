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

export default function Services() {
  const { t } = useTranslation();

  const { services } = data;
  const intro = t("servicesPage.intro");

  const [options, setOptions] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);

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
    if (selectedOption) {
      const selectedService = services.find(
        (s) => s.id === selectedOption.value
      );
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
