module.exports = config => {
  config.addPassthroughCopy('src/img')

  config.addTransform('cssmin', require('./src/_transforms/cssmin'))

  config.addPairedShortcode('Container', (content) => `
    <div class="container max-w-5xl mx-auto px-4">${content}</div>
  `)
  config.addPairedShortcode('H2', (content, classes = '') => `
    <h2 class="font-black text-3xl ${classes}">${content}</h2>
  `)
  config.addPairedShortcode('H3', (content, classes = '') => `
    <h3 class="font-black text-xl ${classes}">${content}</h3>
  `)

  return {
    dir: { input: 'src' }
  }
}
