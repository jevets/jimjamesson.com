const CleanCSS = require('clean-css')

module.exports = (code, outputPath) => {
  if (outputPath.endsWith('.css')) {
    return new CleanCSS({}).minify(code).styles
  }

  return code
}
