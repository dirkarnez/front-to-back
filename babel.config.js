module.exports = {
    plugins: [
        "babel-plugin-transform-typescript-metadata",
        "@babel/plugin-proposal-decorators",
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-transform-runtime",
        "@babel/plugin-transform-typescript"
    ],
    presets: [
        '@babel/preset-typescript'
    ]
};
