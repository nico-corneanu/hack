import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Hero"
import Museums from "../components/Museums"
import Testimonials from "../components/Testimonials"
import Email from "../components/Email"
import "bootstrap/dist/css/bootstrap.min.css"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Museums Heading="Our Favourite Museums"/>
    <Testimonials />
    <Email />
  </Layout>
)

export default IndexPage
