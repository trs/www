const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    './src/**/*.html'
  ],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
});

module.exports = {
  module: false,
  plugins: [
    require('autoprefixer'),
    ...process.env.NODE_ENV === 'production'
      ? [purgecss]
      : []
  ]
};
