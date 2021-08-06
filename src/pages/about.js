import React from 'react'
import SEO from 'components/seo'

import Layout from 'components/Layout/layout'
import ProfileSection from 'components/AboutPage/ProfileSection'
import InfoSection from 'components/AboutPage/InfoSection'
import WhyUs from 'components/AboutPage/WhyUs'

export default function About () {
  return (
    <Layout>
      <SEO title='Home' />
      <ProfileSection />
      <InfoSection />
      <WhyUs />
    </Layout>
  )
}