# Laravel Elixir Env

[![NPM version][npm-image]][npm-url]

Use .env variables in your Javascript files with Webpack in Laravel Elixir.

### [Read the story on Medium](https://medium.com/appstract/environment-variables-in-javascript-with-laravel-elixir-593df994d765)

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

Now you can access your variables in all the scripts that are packed with Webpack like so:

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

## Contributing

Contributions are welcome, [thanks to y'all](https://github.com/appstract/laravel-elixir-env/graphs/contributors) :)

## About Appstract

Appstract is a small team from The Netherlands. We create (open source) tools for webdevelopment and write about related subjects on [Medium](https://medium.com/appstract). You can [follow us on Twitter](https://twitter.com/teamappstract), [buy us a beer](https://www.paypal.me/teamappstract/10) or [support us on Patreon](https://www.patreon.com/appstract).

## License

Laravel-elixir-env is licensed under [The MIT License (MIT)](LICENSE.md). 

[npm-url]: https://www.npmjs.com/package/laravel-elixir-env
[npm-image]: https://badge.fury.io/js/laravel-elixir-env.svg
