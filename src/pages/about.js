import React from "react";

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
