Qtumcore Library
=======

A pure and powerful JavaScript QTUM library.


## Get Started

```
npm install bitcore-lib-qtum
```

```
bower install bitcore-lib-qtum
```

## Security

We're using bitcore-lib-qtum in production, but please use common sense when doing anything related to finances! We take no responsibility for your implementation decisions.



## Contributing

Please send pull requests for bug fixes, code optimization, and ideas for improvement. 

## Building the Browser Bundle

To build a bitcore-lib-qtum full bundle for the browser:

```sh
gulp browser
```

This will generate files named `bitcore-lib-qtum.js` and `bitcore-lib-qtum.min.js`.

## Development & Tests

```sh
git clone https://github.com/qtumproject/bitcore-lib-qtum
cd bitcore-lib-qtum
npm install
```

Run all the tests:

```sh
gulp test
```

You can also run just the Node.js tests with `gulp test:node`, just the browser tests with `gulp test:browser`
or create a test coverage report (you can open `coverage/lcov-report/index.html` to visualize it) with `gulp coverage`.

## License

