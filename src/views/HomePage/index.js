import React from "react";

import Layout from "components/Layout/layout";
import SEO from "components/seo";
import Cover from "views/HomePage/Cover";
import Services from "views/HomePage/ServicesSection";
import PhraseSection from "views/HomePage/PhraseSection";
import ProjectsSection from "views/HomePage/ProjectsSection";
import ClientsSection from "views/HomePage/ClientsSection";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Cover />
    <Services />
    <PhraseSection />
    <ProjectsSection />
    <ClientsSection />
  </Layout>
);

export default IndexPage;
