import React from "react";

import { colors } from "styles/colors";

import Layout from "components/Layout/layout";
import SEO from "components/seo";
import PhraseSection from "./home/PhraseSection";
import ProjectsSection from "./home/ProjectsSection";
import ClientsSection from "./home/ClientsSection";
import Cover from "./home/Cover";
import Services from "./home/ServicesSection";

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
