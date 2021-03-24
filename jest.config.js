module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  transform: {
    '^.+\\.vue$': 'vue-jest',
    ".+\\.(css|styl|less|sass|scss|png|jpg|jpeg|ttf|woff|woff2)$": "jest-transform-stub",
  },

}
