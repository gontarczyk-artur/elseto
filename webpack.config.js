'use strict';

const PRD_MODE = 'production';
const OUTPUT_DIR = '/app';

module.exports = [
    {
        mode: PRD_MODE,
        entry: './src/main.ts',
        target: 'electron-main',
        module: {
            rules: [
                getTsLoaderRule()
            ]
        },
        output: {
            path: __dirname + OUTPUT_DIR,
            filename: 'main.js'
        }
    },
    {
        mode: PRD_MODE,
        entry: './src/renderer.tsx',
        target: 'electron-renderer',
        module: {
            rules: [
                getTsLoaderRule()
            ]
        },
        output: {
            path: __dirname + OUTPUT_DIR,
            filename: 'renderer.js'
        }
    }
]

function getTsLoaderRule() {
    return {
        test: /\.tsx?$/,
        use: 'ts-loader',
        include: /src/,
        exclude: /node_modules/,
    };
}
