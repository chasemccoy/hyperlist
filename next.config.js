const withSass = require('@zeit/next-sass')

const withMDX = require('@zeit/next-mdx')({
  extension: /\.mdx?$/
})

module.exports = withSass(withMDX({
  pageExtensions: ['js', 'jsx', 'mdx']
}))
