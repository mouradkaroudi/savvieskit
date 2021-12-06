module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/components/**/*-story.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@storybook/preset-scss'
  ],
  "framework": "@storybook/react"
}