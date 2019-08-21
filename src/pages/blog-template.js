import React from "react"
import Layout from "../components/layout"
import "katex/dist/katex.min.css"

const MathJaxConfig = `
window.MathJax = {
  tex2jax: {
    inlineMath: [['$', '$'] ],
    displayMath: [['$$', '$$'] ],
    processEscapes: true,
    processEnvironments: true,
    skipTags: ['script', 'noscript', 'style', 'textarea', 'pre'],
    TeX: {
      equationNumbers: {autoNumber: 'AMS'},
      extensions: ['AMSmath.js', 'AMSsymbols.js', 'color.js'],
    },
  }
};
`

export default ({ pageContext: { html, title } }) => {
  return (
    <Layout>
      <div>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
      <script dangerouslySetInnerHTML={{ __html: MathJaxConfig }} />
      <script
        defer
        src="https://cdn.bootcss.com/mathjax/2.7.4/latest.js?config=TeX-AMS_SVG"
      />
    </Layout>
  )
}
