const rewireStyledComponents = require('react-app-rewire-styled-components');
const CompressionPlugin = require('compression-webpack-plugin');

/* config-overrides.js */
module.exports = function override(config, env) {

    config = rewireStyledComponents(config, env, {
        ssr: false,
    });

    if (!config.plugins) {
        config.plugins = [];
    }

    config.plugins.push(
        new CompressionPlugin({
            test: /\.js$|\.css$|\.html|\.svg$/
        })
    );

    return config;
};