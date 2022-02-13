import React from "react";

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

export default function About() {
  return (
    <Layout>
      <SEO title="Contact" />
      <ContactSC>
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
