import React from "react"
import Layout from "../components/layout"
import "katex/dist/katex.min.css"

const Template_FN = ({ pageContext: { html, title } }) => {
  return (
    <Layout>
      <div>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  )
}

export default Template_FN
