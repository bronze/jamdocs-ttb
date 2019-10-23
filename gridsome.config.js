// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config
const purgecss = require('@fullhuman/postcss-purgecss')
const tailwind = require('tailwindcss')

const postcssPlugins = [
  tailwind('./tailwind.js'),
]
// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const path = require('path')

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/scss/globals.scss')
      ],
    })
}
if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss())

module.exports = {
  siteName: 'Jamdocs',
  siteUrl: 'https://jamdocs.netlify.com',
  templates: {
    Doc: '/:slug',
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      },
    },
  },
  plugins: [
    {
      use: 'gridsome-plugin-tailwindcss',
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'docs/**/*.md',
        typeName: 'Doc',
        remark: {
          plugins: [
            '@gridsome/remark-prismjs'
          ]
        }
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: (process.env.GA_ID ? process.env.GA_ID : 'XX-999999999-9')
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000
      }
    }
  ],
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)))
  }
}

