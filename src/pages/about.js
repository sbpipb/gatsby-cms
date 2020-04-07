import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import Button from "../components/button"

class About extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = "About Me"

    const accounts = [
      { name: "GitHub", link: "https://github.com/sbpipb", icon: "icon" },
      {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/julianmacmang/",
        icon: "icon",
      },
    ]

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Julian Macmang | About Page" />

        <div style={{ margin: "20px 0 40px" }}>
          <p>
            I'm Julian Macmang, a <strong>web-developer</strong> in Manila.
          </p>
          <p>
            I'm currently working with <span>Mashup Garage</span> as a Software
            Developer.
          </p>
          I'm fond of coding in Ruby.
        </div>

        <div style={{ marginBottom: "16px" }}>
          As a Senior Software Developer, I've built a lot of web-applications
          for a lot of companies across different industries in E-commerce,
          fintech, advertising and technology. I mostly specialize on
          backend-development, but can also handle front-end development.
        </div>

        <div style={{ marginBottom: "16px" }}>
          I enjoy learning new things. Lately, I have been specializing on{" "}
          <strong>DEV-OPS</strong> and <strong>system architecture</strong>. I
          built this website primarily to improve my skills on ReactJS.
        </div>

        <div style={{ marginBottom: "16px" }}>
          I'm a home brewer, and I love specialty coffee.
        </div>

        <h3 style={{}}>Let's get connected!</h3>

        <div style={{ margin: "20px 0 40px" }}>
          {accounts.map(node => {
            const title = node.name

            return (
              <div key={node.name.slug}>
                <h4
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <a href={node.link} target="_new">
                    {title}
                  </a>
                </h4>
              </div>
            )
          })}
        </div>
        <Link to="/">
          <Button marginTop="85px">Go Home</Button>
        </Link>
      </Layout>
    )
  }
}

export default About
