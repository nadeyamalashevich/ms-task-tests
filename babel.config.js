module.exports = {
    plugins: ["transform-es2015-modules-commonjs"],
    presets: [
        ['@babel/preset-env', {
            targets: {
                node: 12
            }
        }]
    ]
}