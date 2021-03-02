import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout/layout'
import SEO from '../components/seo'
import Cover from '../components/Cover'
import Services from '../components/ServicesInHomePage'

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <Cover />
    <Services/>
  </Layout>
)

export default IndexPage
