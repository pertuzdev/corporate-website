import React from 'react'

import Layout from 'components/Layout/layout'
import SEO from 'components/seo'
import Cover from 'components/Homepage/Cover'
import Services from 'components/Homepage/ServicesSection'
import PhraseSection from 'components/Homepage/PhraseSection'
import ProjectsSection from 'components/Homepage/ProjectsSection'
import ClientsSection from 'components/Homepage/ClientsSection'

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <Cover />
    <Services />
    <PhraseSection />
    <ProjectsSection />
    <ClientsSection />
  </Layout>
)

export default IndexPage
