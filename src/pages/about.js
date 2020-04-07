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
            I&apos;m Julian Macmang, a <strong>web-developer</strong> in Manila.
          </p>
          <p>
            I&apos;m currently working with{' '}
            <a href='https://www.mashupgarage.com/'>Mashup Garage</a> as a{' '}
            <strong>Software Developer</strong>.
          </p>
          I&apos;m fond of coding in <strong>Ruby</strong>.
        </div>

        <div style={{ marginBottom: '16px' }}>
          As a Senior Software Engineer, I&apos;ve built and designed
          web-applications for a wide range of companies across different
          industries in E-commerce, fintech, advertising, and technology since
          2011. I specialize mostly on backend development, but also dabbles in
          frontend work.
        </div>

        <div style={{ marginBottom: '16px' }}>
          I enjoy learning new things. Lately, I have been exploring{' '}
          <strong>DevOps</strong>. I built this website primarily to improve my
          <strong>ReactJS</strong> skills.
        </div>

        <div style={{ marginBottom: '16px' }}>
          Outside of work, I&apos;m also a self-taught home brewer, and I love
          specialty coffee.
        </div>

        <h3 style={{}}>Let&apos;s get connected!</h3>
        <div style={{ margin: '20px 0 40px' }}>
          <p>
            Check out my profile on{' '}
            <a
              href='https://www.linkedin.com/in/julianmacmang/?referrer=https://blog.jvlivn.com'
              target='_new'
            >
              LinkedIn
            </a>{' '}
            and some of my projects on{' '}
            <a href='https://github.com/sbpipb' target='_new'>
              Github
            </a>
          </p>
        </div>
        <Link to='/'>
          <Button marginTop='86px'>Go Home</Button>
        </Link>
      </Layout>
    )
  }
}

export default About
