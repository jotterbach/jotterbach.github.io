import React from "react"
import Layout from "../components/layout"


export default ( { pageContext: { html, title } } ) => {
  return (
  <Layout>
    <div>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  </Layout>
  )
}
