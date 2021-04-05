import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
// import { rhythm } from '../utils/typography'
import Button from '../components/button'

class About extends React.Component {
  render() {
    // const { data } = this.props
    const siteTitle = 'About Me'

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title='Julian Macmang | About Page' />

        <div style={{ margin: '20px 0 40px' }}>
          <p>
            <i>Kamusta?</i> I&apos;m Julian Macmang, a{' '}
            <strong>software engineer</strong> based in{' '}
            <strong>Manila, Philippines</strong>.
          </p>

          <p>
            I consider myself as tech agnostic, but I love coding in{' '}
            <strong>Ruby</strong>.
          </p>
        </div>

        {/*
        <div style={{ marginBottom: '16px' }}>
          As a Senior Software Engineer, I&apos;ve built and designed
          web-applications for a wide range of companies across different
          industries in E-commerce, fintech, advertising, and technology since
          2011.
        </div>
        */}

        {/*
        <div style={{ marginBottom: '16px' }}>
          <p>
          I take a pragmatic approach to learning new tech. Recently, I have
            been specializing in <strong>DevOps</strong>.
          </p>
        </div>
        */}

        <div style={{ marginBottom: '16px' }}>
          <p>AFK, I spend a lot of time casually cycling.</p>
        </div>

        <h3 style={{}}>Let&apos;s get connected!</h3>
        <div style={{ margin: '20px 0 40px' }}>
          <p>
            Send me an invite on{' '}
            <a
              href='https://www.linkedin.com/in/julianmacmang/?referrer=https://blog.jvlivn.com'
              target='_new'
            >
              LinkedIn.
            </a>{' '}
          </p>
          <p>
            You can also find me on{' '}
            <a href='https://github.com/sbpipb' target='_new'>
              Github
            </a>
          </p>
        </div>
        <Link to='/'>
          <Button marginTop='86px'>Home</Button>
        </Link>
      </Layout>
    )
  }
}

export default About
