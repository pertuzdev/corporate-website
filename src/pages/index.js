import React from "react";

import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";

import { colors } from "styles/colors";

import Layout from "components/shared/Layout/layout";
import SEO from "components/seo";
import PhraseSection from "components/homePageComponents/PhraseSection";
import Cover from "components/homePageComponents/Cover";
import ProjectsSection from "components/homePageComponents/ProjectsSection";
import ClientsSection from "components/homePageComponents/ClientsSection";
import Services from "components/homePageComponents/ServicesSection";

import { Fade } from "components/animations/Fade";

const IndexPage = ({ data }) => {
  const { t } = useTranslation();
  console.log(data, "data");
  return (
    <Layout footerColor={colors["primary-purple"]}>
      <SEO title="Home" />
      <Cover />
      <Fade in={true} />
      <Services />
      <PhraseSection />
      <ProjectsSection />
      <ClientsSection />
    </Layout>
  );
};

export default IndexPage;

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
