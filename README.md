# webpack-bug

This projects reproduces the issue https://github.com/webpack/webpack/issues/7930

After pulling, run `yarn` to install dependencies.

The application will either crash with an exception or log to the console.
The page is always white so make sure to open the console to see if the bug
is present or not.

To see the crash, run `yarn build && serve -s build` and open `http://localhost:5000`

To see workaround 1 change `providedExports` to `false` at https://github.com/Pajn/webpack-bug/blob/master/config/webpack.config.prod.js#L141

To see workaround 2 change `webpack: 4.17.0` to `4.16.5` at https://github.com/Pajn/webpack-bug/blob/master/package.json#L68 and rerun yarn

To see it working in development, run `yarn start`
