module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  plugins: ['stylelint-scss'],
  rules: {
    'scss/at-rule-no-unknown': true,
    'at-rule-no-unknown': null,
    'selector-pseudo-element-no-unknown': null, // Config needed for using deep selectors within scoped scss
    'no-descending-specificity': null, // Config needed for using nested selectors within scss
    'custom-property-empty-line-before': null, // Dealing with unknown at rules
    'declaration-empty-line-before': null // Dealing with unknown at rules
  }
}
