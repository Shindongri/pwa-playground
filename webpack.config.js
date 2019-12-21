const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin') // /src => /dist
const WebpackPwaManifest = require('webpack-pwa-manifest')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/public'),
        filename: 'index.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new WebpackPwaManifest({
            name: 'pwa-playground',
            short_name: 'pwa',
            description: 'PWA Playground By @shindongri',
            background_color: '#ffffff',
            crossorigin: 'use-credentials',
            theme_color: '#eeeeee',
            icons: [
                {
                    src: path.resolve('src/assets/Icon.png'),
                    sizes: [96, 128, 192, 256, 384, 512]
                },
            ]
        })
    ]
}
