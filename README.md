# laravel-elixir-env

Use .env variables in your Javascript with Laravel Elixir. 
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

Don't forget to recompile on all your environments. 

## License

Laravel-elixir-env is licensed under [The MIT License (MIT)](LICENSE.md). 
