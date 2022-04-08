module.exports = {
    presets: [
        "@babel/preset-react"
    ],
    plugins: [
        [
            "@babel/plugin-transform-runtime",
            {
                regenerator: true,
                corejs: 3,
            }
        ],
        [
            "@babel/plugin-proposal-class-properties",
            {
                loose: true
            }
        ],
        [
            "transform-react-remove-prop-types",
            {
                removeImport: true
            }
        ]
    ],
}