import React from 'react'

import Layout from 'components/Layout/layout'
import SEO from 'components/seo'
import Cover from 'components/homepage/Cover'
import Services from 'components/homepage/ServicesSection'
import PhraseSection from 'components/homepage/PhraseSection'
import ProjectsSection from 'components/homepage/ProjectsSection'
import ClientsSection from 'components/homepage/ClientsSection'

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
