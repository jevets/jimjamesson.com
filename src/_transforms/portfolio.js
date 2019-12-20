const { JSDOM } = require('@tbranyen/jsdom')
const PortfolioCategory = require('../_includes/components/PortfolioCategory.svelte').default

module.exports = code => {
  const DOM = new JSDOM(code, { resources: 'usable' })

  const document = DOM.window.document
  const portfolio = document.querySelector('section#portfolio')

  if (!portfolio) return code

  const headings = [...document.querySelectorAll('.category-title')]
  const imageAnchors = [...document.querySelectorAll('.category .images a')]

  const comp = PortfolioCategory.render({
    title: 'Test one',
    products: ['one', 'two', 'three'],
  })

  const div = document.createElement('div')
  portfolio.replaceWith(div)
  div.innerHTML = comp.html
  const styles = document.createElement('style')
  styles.innerHTML = comp.css.code
  document.querySelector('head').appendChild(styles)

  headings.forEach(heading => {
    heading.classList.add('font-black', 'text-blue-800')
  })
  imageAnchors.forEach(anchor => {
    const src = anchor.getAttribute('href')
    const img = document.createElement('img')
    img.setAttribute('src', src)
    img.classList.add('max-w-full', 'shadow-lg')
    anchor.appendChild(img)
  })

  return `<!doctype html>\r\n${document.documentElement.outerHTML}`
}
