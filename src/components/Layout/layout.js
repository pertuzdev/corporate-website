/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'

import NavBar from '../NavBar'
import Footer from '../Footer'
import './layout.css'

const Layout = ({ children }) => {
  return (
    <>
      <NavBar/>
      <main>
        {children}
        <ul>
          <li>1</li>
          <li>2</li>
        </ul>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio est hic magnam numquam officiis? Alias
        debitis dolor doloremque dolores facere iste necessitatibus neque perspiciatis quaerat, quisquam quos velit!
        Fuga, mollitia.
      </main>
      <Footer/>

    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
