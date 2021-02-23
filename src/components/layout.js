/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import NavBar from './NavBar'
import './layout.css'
import '../styles/globalStyles'


const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>
          {children}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio est hic magnam numquam officiis? Alias debitis dolor doloremque dolores facere iste necessitatibus neque perspiciatis quaerat, quisquam quos velit! Fuga, mollitia.
        </main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
