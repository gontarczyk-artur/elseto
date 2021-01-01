'use strict';

module.exports = [
    {
        mode: 'production',
        entry: './src/main.ts',
        target: 'electron-main',
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    include: /src/,
                    use: [
                        {
                            loader: 'ts-loader'
                        }
                    ]
                }
            ]
        },
        output: {
            path: __dirname + '/app',
            filename: 'main.js'
        }
    }
]