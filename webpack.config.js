'use strict';

const PRD_MODE = 'production';
const OUTPUT_DIR = '/app';

module.exports = [
    {
        mode: PRD_MODE,
        entry: './src/main.js',
        target: 'electron-main',
        module: {
            rules: [
                getJsLoaderRule()
            ]
        },
        output: {
            path: __dirname + OUTPUT_DIR,
            filename: 'main.js'
        }
    },
    {
        mode: PRD_MODE,
        entry: './src/renderer.jsx',
        target: 'electron-renderer',
        module: {
            rules: [
                getJsLoaderRule()
            ]
        },
        output: {
            path: __dirname + OUTPUT_DIR,
            filename: 'renderer.js'
        },
        resolve: {
            extensions: ['.js', '.jsx']
        }
    }
]

function getJsLoaderRule() {
    return {
        test: /\.jsx?$/,
        use: 'babel-loader',
        include: /src/,
        exclude: /node_modules/,
    };
}
