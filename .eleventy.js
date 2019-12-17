const CleanCSS = require('clean-css')

module.exports = config => {
  config.addPassthroughCopy('src/img')

  config.addFilter('cssmin', css => {
    return new CleanCSS({}).minify(css).styles
  })

  return {
    dir: { input: 'src' }
  }
}
