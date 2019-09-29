import React from "react"
import Layout from "../components/layout"
import "katex/dist/katex.min.css"

export default ({ pageContext: { html, title } }) => {
  console.log(html);
  return (
    <Layout>
      <div>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  )
}
