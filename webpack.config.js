'use strict';

module.exports = [
    {
        mode: 'production',
        entry: './src/main.ts',
        target: 'electron-main',
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    include: /src/,
                    exclude: /node_modules/,
                },
            ],
        },
        output: {
            path: __dirname + '/app',
            filename: 'main.js'
        }
    }
]
