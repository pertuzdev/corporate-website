import React from "react"
import SEO from '../components/seo'

import Layout from '../components/Layout/layout'
import ProfileSection from '../components/AboutPage/ProfileSection'
export default function About() {
  return (
    <Layout>
      <SEO title='Home' />
      <ProfileSection />
    </Layout>
  )
}