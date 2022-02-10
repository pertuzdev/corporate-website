import React from "react";

import SEO from "components/seo";
import Layout from "components/Layout/layout";
import ProfileSection from "./ProfileSection";
import GoalsSection from "./GoalsSection";
import WhyUs from "./WhyUs";

export default function About() {
  return (
    <Layout>
      <SEO title="Home" />
      <ProfileSection />
      <GoalsSection />
      <WhyUs />
    </Layout>
  );
}
