'use strict';

const gulpUtil = require('gulp-util');
const fs = require('fs');
const InlineEnviromentVariablesPlugin = require('inline-environment-variables-webpack-plugin');

let config = {
    silent: false,
    path: './.env'
};

module.exports = {

    config: function (options = {}) {
        config = Object.assign(config, options);
        this.execute();
    },

    execute: function () {
        if(Elixir) {
            try {
                if (fs.existsSync(config.path)) {
                    console.log('found ' + config.path);

                    const webpack = require('laravel-elixir-webpack-official');
                    let envEntries = require('dotenv').config(config);

                    Elixir.webpack.mergeConfig({
                        plugins: [
                            new InlineEnviromentVariablesPlugin(envEntries)
                        ]
                    });
                }
                else{
                    console.log(config.path + ' not found');
                }
            }
            catch (e) {
                new gulpUtil.PluginError({
                    plugin: 'laravel-elixir-env',
                    message: 'Currently only webpack is supported.'
                });
            }
        }
        else {
            new gulpUtil.PluginError({
                plugin: 'laravel-elixir-env',
                message: 'Please include laravel-elixir-env after Laravel Elixir.'
            });
        }

    }

};

module.exports.load = module.exports.execute();
