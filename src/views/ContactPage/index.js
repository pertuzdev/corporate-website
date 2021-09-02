import React from "react";
import SEO from "components/seo";

import Layout from "components/Layout/layout";
import Formulary from "components/Formulary";

import { ContactSC, ContactSW, Column } from "./styles";
import ContactIntro from "./ContactIntro/index";
import Social from "./Social";
import ContactInfo from "./ContactInfo";

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
            <Formulary />
          </Column>
        </ContactSW>
      </ContactSC>
    </Layout>
  );
}
