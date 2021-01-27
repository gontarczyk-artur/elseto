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
                getJsLoaderRule(),
                getSassLoaderRule(),
                getFileLoaderRule()
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
        exclude: /node_modules/,
        include: /src/
    };
}

function getSassLoaderRule() {
    return {
        test: /\.scss$/,
        use: [
            'style-loader',
            'css-loader',
            'sass-loader'
        ]
    };
}

function getFileLoaderRule() {
    return {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
            {
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'fonts/'
                }
            }
        ]
    };
}
