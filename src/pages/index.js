import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout/layout'
import SEO from '../components/seo'
import Cover from '../components/Cover'

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <Cover />
  </Layout>
)

export default IndexPage
