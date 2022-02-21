import React from "react";

import { graphql } from "gatsby";

import SEO from "components/seo";
import Layout from "components/shared/Layout/layout";
import ProfileSection from "components/aboutPageComponents/ProfileSection";
import GoalsSection from "components/aboutPageComponents/GoalsSection";
import WhyUsSection from "components/aboutPageComponents/WhyUsSection";

export default function About() {
  return (
    <Layout>
      <SEO title="Home" />
      <ProfileSection />
      <GoalsSection />
      <WhyUsSection />
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
