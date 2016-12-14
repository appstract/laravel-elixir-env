
const gulpUtil = require('gulp-util');
const InlineEnviromentVariablesPlugin = require('inline-environment-variables-webpack-plugin');

const envFile = './.env';

let envEntries = require('dotenv').config({ silent: true, path: envFile });


if(Elixir) {

	try {
		const webpack = require('laravel-elixir-webpack-official');


		Elixir.webpack.mergeConfig({
		    plugins: [
			new InlineEnviromentVariablesPlugin(envEntries)
		    ]
		});

	} 
	catch (e) {

	    gulpUtil.PluginError({
			plugin: 'laravel-elixir-env',
			message: 'Currently only webpack is supported.'
	    });

	}

} 
else {

    gulpUtil.PluginError({
		plugin: 'laravel-elixir-env',
		message: 'Please include laravel-elixir-env after Elixir.'
    });

}
