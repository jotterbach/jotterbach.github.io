// Customize the gatsby-browser.js to make MathJax work
// see https://zhoumingjun.github.io/2018/09/04/enable-mathjax-in-gatsby/


exports.onRouteUpdate = ({ location }) => {
  console.log("new pathname", location.pathname)
  if (window.MathJax !== undefined) {
    MathJax.Hub.Queue(["Typeset", MathJax.Hub])
  }
}
