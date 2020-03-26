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
          keywords={[`blog`, `developer`, `rails`, `ruby`]}
        />
        <img style={{ margin: 0 }} src="./GatsbyScene.svg" alt="Gatsby Scene" />
        <h1>
          Hi, I'm Julian {" "}
          <span role="img" aria-label="heart emoji">
            👋
          </span>
        </h1>
        <p>This is my new blog. I started this to learn new stuff.</p>
        <Link to="/blog/">
          <Button marginTop="35px">See blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
