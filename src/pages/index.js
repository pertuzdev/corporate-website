import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout/layout'
import SEO from '../components/seo'
import Cover from '../components/Cover'
import Services from '../components/ServicesInHomePage'
import PhraseSection from '../components/PhraseSection'
import OurWork from '../components/OurWork'
import Clients from '../components/Clients'

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <Cover />
    <Services />
    <PhraseSection />
    <OurWork />
    <Clients />
  </Layout>
)

export default IndexPage
