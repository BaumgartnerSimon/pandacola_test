// WEBPACK CONFIG

var path = require('path');
var webpack = require('webpack');

module.exports =  {
    "mode": "development",
    "entry": "./frontend/index.js",
    "output": {
        "path": path.join(__dirname, '/frontend'),
        "filename": "bundle.js"
    },

    "module": {
        "rules": [
            {
                "test": /\.(js|jsx)$/,
                "exclude": /node_modules/,
                "use": {
                    "loader": "babel-loader",
                    "options": {
                        "presets": [
                            "@babel/preset-env",
                            "@babel/react",
                        ]
                    }
                }
            },
            {
                "test": /\.css$/,
                "use": [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg|otf)$/i,
                loaders: [
                    'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            }

        ]
    }
}
