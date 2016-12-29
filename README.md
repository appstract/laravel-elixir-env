# laravel-elixir-env

[![NPM version][npm-image]][npm-url]

Use .env variables in your Javascript files with Laravel Elixir. 
Currently supports Webpack.


## Installation

`
npm install laravel-elixir-env --save
`

or

`
yarn add laravel-elixir-env
`

## Requirements

- Laravel Elixir
- Laravel-elixir-webpack-official


## Usage

Require the package in your gulpfile, after Elixir:

```javascript
const elixir = require('laravel-elixir');
//...
require('laravel-elixir-env');
//...
```

Now you can access your variables in all the scripts that are packaged with Webpack like so:

```javascript
process.env.VAR_NAME
```

Optionally, you can set the path of the default .env file or set any [dotenv](https://www.npmjs.com/package/dotenv#options) configuration option like so:

```javascript 
require('laravel-elixir-env').config({ path: 'my-folder/.env' });
```

Be careful with sensitive variables that can hold private information. Don't forget to recompile on all your environments. 

If you like this, please star on [GitHub](https://github.com/appstract/laravel-elixir-env)!

Issues and Pull Requests welcome.

## License

Laravel-elixir-env is licensed under [The MIT License (MIT)](LICENSE.md). 


[npm-url]: https://www.npmjs.com/package/laravel-elixir-env
[npm-image]: https://badge.fury.io/js/laravel-elixir-env.svg
