import React from "react";

import { colors } from "styles/colors";

import Layout from "components/shared/Layout/layout";
import SEO from "components/seo";
import PhraseSection from "components/homePageComponents/PhraseSection";
import Cover from "components/homePageComponents/Cover";
import ProjectsSection from "components/homePageComponents/ProjectsSection";
import ClientsSection from "components/homePageComponents/ClientsSection";
import Services from "components/homePageComponents/ServicesSection";

const IndexPage = () => (
  <Layout footerColor={colors["primary-purple"]}>
    <SEO title="Home" />
    <Cover />
    <Services />
    <PhraseSection />
    <ProjectsSection />
    <ClientsSection />
  </Layout>
);

export default IndexPage;
