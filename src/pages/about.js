import React, { Component } from "react"
import Helmet from "react-helmet"
import Layout from "../components/layout"
import { graphql } from 'gatsby'
import aboutImg from "../images/Lachi-original.jpeg"

export class About extends Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
    return (
      <div>
      <Helmet title={siteTitle} />
      <Layout>
        <section className="about-us pad-70">
          <div className="container">
            
                <div className="row">
                    <div className="col-lg-4">
                        <div className="image-container">
                                <img src={aboutImg} alt="about" />
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <h4>About Me</h4>
                        <p>
                          I'm Laxmi Narayana Kotari, an Engineer and an Artist. I transform digital images into artistic views. 
                        </p>
                        <p>
                          If you like to have a hand drawn pictures of your family, pets or any image that you want to get drawn into art. Please don't hesitate to contact me.
                        </p>
                    </div>
             
            </div>
          </div>
        </section>
      </Layout>
      </div>
    )
  }
}

export default About

export const pageQuery = graphql`
  query AboutQuery {
   
        site {
          siteMetadata {
            title
            description
          }
        }    
  }
`


