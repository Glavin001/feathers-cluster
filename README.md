# feathers-cluster [![Build Status](https://travis-ci.org/Glavin001/feathers-cluster.png?branch=master)](https://travis-ci.org/Glavin001/feathers-cluster)

> Easily take advantage of multi-core systems for Featherjs.

## Getting Started

To install feathers-cluster from [npm](https://www.npmjs.org/), run:

```bash
$ npm install feathers-cluster --save
```

Finally, to use the plugin in your Feathers app:

```javascript
// Require
var feathers = require('feathers');
var plugin = require('feathers-cluster');
// Setup
var app = feathers();
// Use Plugin
app.configure(plugin({ /* configuration */ }));
```

## Documentation

See the [docs](docs/).

## Author

- [Glavin Wiechert](https://github.com/Glavin001)

## License

Copyright (c) 2014 Glavin Wiechert

Licensed under the [MIT license](LICENSE).