import Link from 'next/link'
import Head from 'next/head'
import Router from 'next/router'

import "./layout.css";

const Layout = ({ children, title, description, backButton }) => (
  <div>
    <Head>
      <title>
        {title}
      </title>
      <meta name="description" content={description} />
    </Head>
    <div className="container">
      <nav>
        {backButton && <span onClick={() => { Router.back() }} className="back-button">&#x2b05;</span>}
        <Link href="/">
          <a>
            <span className="main-title">Hacker Next</span>
          </a>
        </Link>
      </nav>
      {children}
    </div>
    <style global jsx>
      {
        `
        body {
          background: white;
          font-family: Verdana, Geneva, sans-serif;
        }
        `
      }
    </style>
  </div>
)
export default Layout;
