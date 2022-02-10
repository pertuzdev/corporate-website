import React from "react";

import { ContactSC, ContactSW, Column } from "./styles";

import SEO from "components/seo";
import Layout from "components/Layout/layout";
import Form from "components/Form";
import ContactIntro from "./ContactIntro/index";
import ContactInfo from "./ContactInfo";
import { onSubmit, validations } from "./ContactForm/formConfig";

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
