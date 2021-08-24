import React from "react";
import SEO from "components/seo";

import Layout from "components/Layout/layout";
import Formulary from "components/Formulary";

import { ContactSC, ContactSW, Column } from "./styles";
import ContactIntro from "./ContactIntro";

export default function About() {
  return (
    <Layout>
      <SEO title="Contact" />
      <ContactSC>
        <ContactSW>
          <Column maxWidth="35%">
            <ContactIntro />
          </Column>
          <Column maxWidth="55%">
            <Formulary />
          </Column>
        </ContactSW>
      </ContactSC>
    </Layout>
  );
}
