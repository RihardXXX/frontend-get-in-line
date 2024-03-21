module.exports = {
    extends: [
      "stylelint-config-standard",
      "stylelint-config-css-modules",
      "stylelint-config-standard-scss",
      "stylelint-config-recommended-vue/scss"
    ],
    plugins: [
      "stylelint-scss",
      "stylelint-order"
    ],
    rules: {
      "property-no-vendor-prefix": [
        true,
        {
          "severity": "warning"
        }
      ],
      "at-rule-no-unknown": null,
      "scss/at-rule-no-unknown": true,
      "order/order": [
        "custom-properties",
        "declarations"
      ],
      "order/properties-order": [
        "width",
        "height"
      ]
    }
}
