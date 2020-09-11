const path = require('path');
const { dirname } = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /.css$/,
                use: path.resolve(__dirname, './css-loader.js')
            }
        ]
    }
}