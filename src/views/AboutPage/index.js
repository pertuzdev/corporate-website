import React from "react";
import SEO from "components/seo";

import Layout from "components/Layout/layout";
import ProfileSection from "views/AboutPage/ProfileSection";
import GoalsSection from "views/AboutPage/GoalsSection";
import WhyUs from "views/AboutPage/WhyUs";

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
