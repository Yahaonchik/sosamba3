const isAnalyze = process.env.ANALYZE === 'true'

const baseConfig = {}

if (isAnalyze) {
  const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: true })
  module.exports = withBundleAnalyzer(baseConfig)
} else {
  module.exports = baseConfig
}
