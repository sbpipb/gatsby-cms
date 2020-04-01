import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Fired UP! Ready to GO!"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `developer`, `rails`, `ruby`, `web`]}
        />
        <img
          style={{ margin: 0 }}
          src="./assets/splash.jpg"
          alt="celine ad"
        />
        <h1>
          Hi, I'm Julian {" "}
          <span role="img" aria-label="heart emoji">
            👋
          </span>
        </h1>
        <p>I started this blog to learn and practice new technologies.</p>
        <Link to="/blog/">
          <Button marginTop="35px">See latest post</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
