module.exports = {
  env: {
    node: true,
    es6: true
  },
  extends: [
    "eslint:recommended"
  ],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": ["error"]
  }
}