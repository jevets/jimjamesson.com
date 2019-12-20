const fs = require('fs')
const path = require('path')
const postcss = require('postcss')

module.exports = class {
  data() {
    const rawPath = path.join(__dirname, '_includes/css/main.css')
    const raw = fs.readFileSync(rawPath)

    return { raw, rawPath, permalink: '/styles.css' }
  }

  async render(data) {
    return (
      await postcss(this.plugins).process(
        data.raw,
        { from: data.rawPath }
      )
    ).css
  }

  get plugins() {
    return [
      require('postcss-import'),
      require('tailwindcss'),
      require('postcss-nested'),
      require('autoprefixer'),
    ]
  }
}
