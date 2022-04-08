module.exports = {
    presets: [
        [
            "@babel/preset-env",
            {
                modules: "commonjs"
            }
        ],
        "@babel/preset-react"
    ],
    plugins: [
        "@babel/plugin-transform-runtime",
        "@babel/plugin-syntax-dynamic-import",
        "@babel/plugin-proposal-class-properties"
    ],
    env: {
        production: {
            only: ["src"],
            plugins: [
                [
                    "transform-react-remove-prop-types",
                    {
                        removeImport: true
                    }
                ],
            ]
        }
    }
}