module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier'
  ],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          "import",
          "extends",
          "tailwind",
          "apply",
          "screen",
        ]
      }
    ],
    // no-invalid-position-at-import-rule
    'no-invalid-position-at-import-rule': false,
  }
}
