import React from "react";

import { graphql } from "gatsby";

import {
  ContactSC,
  ContactSW,
  Column,
} from "../components/contactPageComponents/styles";

import SEO from "components/seo";
import Layout from "components/shared/Layout/layout";
import Form from "components/shared/Form";
import ContactIntro from "components/contactPageComponents/ContactIntro";
import ContactInfo from "components/contactPageComponents/ContactInfo";
import {
  onSubmit,
  validations,
} from "components/contactPageComponents/ContactForm/formConfig";

export default function Contact() {
  return (
    <Layout>
      <SEO title="Contact" />
      <ContactSC animated>
        <ContactIntro />
        <ContactSW>
          <Column maxWidth="35%">
            <ContactInfo />
          </Column>
          <Column maxWidth="55%">
            <Form validations={validations} onSubmit={onSubmit} />
          </Column>
        </ContactSW>
      </ContactSC>
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
